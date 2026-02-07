'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { getUserStats, getLevelInfo, getBadgeInfo } from '@/lib/gamification';
import type { UserStats } from '@/lib/gamification';
import ProtectedRoute from '@/components/ProtectedRoute';
import Link from 'next/link';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import styles from './page.module.css';

export default function DashboardPage() {
    const { user } = useAuth();
    const [stats, setStats] = useState<UserStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            if (user) {
                const userStats = await getUserStats(user.uid);
                setStats(userStats);
                setLoading(false);
            }
        };

        fetchStats();
    }, [user]);

    if (loading) {
        return (
            <ProtectedRoute requireAuth={true}>
                <div className={styles.page}>
                    <div className="container">
                        <div className={styles.loading}>Loading your progress...</div>
                    </div>
                </div>
            </ProtectedRoute>
        );
    }

    if (!stats) return null;

    const levelInfo = getLevelInfo(stats.xp);
    const accuracy = stats.totalCases > 0 ? Math.round((stats.correctAnswers / stats.totalCases) * 100) : 0;

    // Prepare chart data
    const categoryData = Object.keys(stats.categoryStats || {}).map(category => ({
        category: category.replace(/-/g, ' '),
        accuracy: stats.categoryStats[category].attempted > 0
            ? (stats.categoryStats[category].correct / stats.categoryStats[category].attempted) * 100
            : 0,
        attempted: stats.categoryStats[category].attempted
    }));

    return (
        <ProtectedRoute requireAuth={true}>
            <div className={styles.page}>
                <div className="container">
                    <h1 className={styles.title}>📊 Your Progress</h1>

                    {/* Stats Overview */}
                    <div className={styles.statsGrid}>
                        {/* Level Card */}
                        <div className={`${styles.statCard} ${styles.levelCard}`}>
                            <div className={styles.statIcon}>⭐</div>
                            <div className={styles.statInfo}>
                                <div className={styles.statLabel}>Level</div>
                                <div className={styles.statValue}>{levelInfo.currentLevel}</div>
                                <div className={styles.progressBar}>
                                    <div
                                        className={styles.progressFill}
                                        style={{ width: `${levelInfo.progress}%` }}
                                    ></div>
                                </div>
                                <div className={styles.progressText}>
                                    {levelInfo.xpInLevel} / 100 XP
                                </div>
                            </div>
                        </div>

                        {/* Streak Card */}
                        <div className={`${styles.statCard} ${styles.streakCard}`}>
                            <div className={styles.statIcon}>🔥</div>
                            <div className={styles.statInfo}>
                                <div className={styles.statLabel}>Streak</div>
                                <div className={styles.statValue}>{stats.streak}</div>
                                <div className={styles.statSubtext}>
                                    {stats.streak > 0 ? 'Keep it going!' : 'Start your streak today!'}
                                </div>
                            </div>
                        </div>

                        {/* Total Cases */}
                        <div className={`${styles.statCard} ${styles.casesCard}`}>
                            <div className={styles.statIcon}>🎯</div>
                            <div className={styles.statInfo}>
                                <div className={styles.statLabel}>Cases Solved</div>
                                <div className={styles.statValue}>{stats.totalCases}</div>
                                <div className={styles.statSubtext}>
                                    {stats.correctAnswers} correct
                                </div>
                            </div>
                        </div>

                        {/* Accuracy */}
                        <div className={`${styles.statCard} ${styles.accuracyCard}`}>
                            <div className={styles.statIcon}>🎓</div>
                            <div className={styles.statInfo}>
                                <div className={styles.statLabel}>Accuracy</div>
                                <div className={styles.statValue}>{accuracy}%</div>
                                <div className={styles.statSubtext}>
                                    Overall performance
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category Performance */}
                    {categoryData.length > 0 && (
                        <div className={styles.chartSection}>
                            <h2>📈 Category Performance</h2>
                            <div className={styles.chartContainer}>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={categoryData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                        <XAxis dataKey="category" stroke="#94A3B8" />
                                        <YAxis stroke="#94A3B8" />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                borderRadius: '8px'
                                            }}
                                        />
                                        <Bar dataKey="accuracy" fill="#667EEA" radius={[8, 8, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    )}

                    {/* Badges */}
                    <div className={styles.badgesSection}>
                        <h2>🏆 Badges ({stats.badges?.length || 0})</h2>
                        {stats.badges && stats.badges.length > 0 ? (
                            <div className={styles.badgesGrid}>
                                {stats.badges.map((badgeId, index) => {
                                    const badge = getBadgeInfo(badgeId);
                                    return (
                                        <div key={index} className={styles.badge}>
                                            <div className={styles.badgeIcon}>{badge.icon}</div>
                                            <div className={styles.badgeName}>{badge.name}</div>
                                            <div className={styles.badgeDesc}>{badge.description}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className={styles.emptyState}>
                                <p>No badges yet. Complete cases to earn your first badge! 🎯</p>
                            </div>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className={styles.actionsSection}>
                        <Link href="/cases" className="btn btn-primary">
                            Practice More Cases
                        </Link>
                        <Link href="/generate-case" className="btn btn-secondary">
                            🎲 Generate AI Case
                        </Link>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
