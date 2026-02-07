import { db } from './firebase';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';

export interface UserStats {
    xp: number;
    level: number;
    streak: number;
    lastVisit: string;
    totalCases: number;
    correctAnswers: number;
    categoryStats: {
        [key: string]: {
            attempted: number;
            correct: number;
        };
    };
    badges: string[];
    achievements: string[];
}

const XP_PER_LEVEL = 100;
const BADGES = {
    FIRST_CASE: 'first_case',
    PERFECT_STREAK_3: 'streak_3',
    PERFECT_STREAK_7: 'streak_7',
    PERFECT_STREAK_30: 'streak_30',
    SAFETY_EXPERT: 'safety_expert',
    TECH_EXPERT: 'tech_expert',
    SPEED_DEMON: 'speed_demon',
    PERFECT_SCORE: 'perfect_score',
    CENTURY_CLUB: 'century_club', // 100 cases
};

export async function getUserStats(userId: string): Promise<UserStats> {
    const statsDoc = await getDoc(doc(db, 'userStats', userId));

    if (!statsDoc.exists()) {
        // Initialize stats for new user
        const defaultStats: UserStats = {
            xp: 0,
            level: 1,
            streak: 0,
            lastVisit: new Date().toISOString().split('T')[0],
            totalCases: 0,
            correctAnswers: 0,
            categoryStats: {},
            badges: [],
            achievements: []
        };
        await setDoc(doc(db, 'userStats', userId), defaultStats);
        return defaultStats;
    }

    return statsDoc.data() as UserStats;
}

export async function updateUserStats(
    userId: string,
    category: string,
    isCorrect: boolean
): Promise<{ xpGained: number; levelUp: boolean; newBadges: string[] }> {
    const stats = await getUserStats(userId);
    const today = new Date().toISOString().split('T')[0];

    // Calculate XP
    let xpGained = isCorrect ? 20 : 5; // Base XP

    // Streak bonus
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    let newStreak = stats.streak;
    if (stats.lastVisit === yesterdayStr) {
        newStreak += 1;
        xpGained += newStreak * 2; // Streak bonus
    } else if (stats.lastVisit !== today) {
        newStreak = 1;
    }

    // Update category stats
    const categoryStats = stats.categoryStats || {};
    if (!categoryStats[category]) {
        categoryStats[category] = { attempted: 0, correct: 0 };
    }
    categoryStats[category].attempted += 1;
    if (isCorrect) {
        categoryStats[category].correct += 1;
    }

    // Calculate new level
    const newXP = stats.xp + xpGained;
    const newLevel = Math.floor(newXP / XP_PER_LEVEL) + 1;
    const levelUp = newLevel > stats.level;

    // Check for new badges
    const newBadges: string[] = [];
    const totalCases = stats.totalCases + 1;
    const correctAnswers = stats.correctAnswers + (isCorrect ? 1 : 0);

    if (totalCases === 1 && !stats.badges.includes(BADGES.FIRST_CASE)) {
        newBadges.push(BADGES.FIRST_CASE);
    }
    if (newStreak === 3 && !stats.badges.includes(BADGES.PERFECT_STREAK_3)) {
        newBadges.push(BADGES.PERFECT_STREAK_3);
    }
    if (newStreak === 7 && !stats.badges.includes(BADGES.PERFECT_STREAK_7)) {
        newBadges.push(BADGES.PERFECT_STREAK_7);
    }
    if (newStreak === 30 && !stats.badges.includes(BADGES.PERFECT_STREAK_30)) {
        newBadges.push(BADGES.PERFECT_STREAK_30);
    }
    if (totalCases === 100 && !stats.badges.includes(BADGES.CENTURY_CLUB)) {
        newBadges.push(BADGES.CENTURY_CLUB);
    }

    // Category expert badges (10 correct in category)
    if (categoryStats[category]?.correct === 10) {
        if (category === 'safety' && !stats.badges.includes(BADGES.SAFETY_EXPERT)) {
            newBadges.push(BADGES.SAFETY_EXPERT);
        } else if (category === 'technical-help' && !stats.badges.includes(BADGES.TECH_EXPERT)) {
            newBadges.push(BADGES.TECH_EXPERT);
        }
    }

    // Update Firestore
    await updateDoc(doc(db, 'userStats', userId), {
        xp: newXP,
        level: newLevel,
        streak: newStreak,
        lastVisit: today,
        totalCases: totalCases,
        correctAnswers: correctAnswers,
        categoryStats: categoryStats,
        badges: [...stats.badges, ...newBadges]
    });

    return { xpGained, levelUp, newBadges };
}

export function getLevelInfo(xp: number): { currentLevel: number; xpInLevel: number; xpToNextLevel: number; progress: number } {
    const currentLevel = Math.floor(xp / XP_PER_LEVEL) + 1;
    const xpInLevel = xp % XP_PER_LEVEL;
    const xpToNextLevel = XP_PER_LEVEL - xpInLevel;
    const progress = (xpInLevel / XP_PER_LEVEL) * 100;

    return { currentLevel, xpInLevel, xpToNextLevel, progress };
}

export function getBadgeInfo(badgeId: string): { name: string; description: string; icon: string } {
    const badgeMap: { [key: string]: { name: string; description: string; icon: string } } = {
        [BADGES.FIRST_CASE]: {
            name: 'First Steps',
            description: 'Completed your first case',
            icon: '🎯'
        },
        [BADGES.PERFECT_STREAK_3]: {
            name: '3-Day Streak',
            description: '3 days in a row!',
            icon: '🔥'
        },
        [BADGES.PERFECT_STREAK_7]: {
            name: 'Week Warrior',
            description: '7 days streak!',
            icon: '⚡'
        },
        [BADGES.PERFECT_STREAK_30]: {
            name: 'Month Master',
            description: '30 days streak!',
            icon: '👑'
        },
        [BADGES.SAFETY_EXPERT]: {
            name: 'Safety Expert',
            description: '10 correct safety cases',
            icon: '⚠️'
        },
        [BADGES.TECH_EXPERT]: {
            name: 'Tech Guru',
            description: '10 correct technical cases',
            icon: '💻'
        },
        [BADGES.CENTURY_CLUB]: {
            name: 'Century Club',
            description: 'Completed 100 cases!',
            icon: '💯'
        },
        [BADGES.SPEED_DEMON]: {
            name: 'Speed Demon',
            description: 'Answer in under 10 seconds',
            icon: '⚡'
        },
        [BADGES.PERFECT_SCORE]: {
            name: 'Perfect Score',
            description: '10 correct in a row',
            icon: '🌟'
        }
    };

    return badgeMap[badgeId] || { name: 'Unknown', description: '', icon: '❓' };
}
