'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '@/contexts/AuthContext';
import { updateUserStats, getLevelInfo } from '@/lib/gamification';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import styles from './page.module.css';

interface CaseOption {
    text: string;
    isCorrect: boolean;
}

interface CaseData {
    id: string;
    title: string;
    category: string;
    difficulty: string;
    prompt: string;
    options: CaseOption[];
    correctIndex: number;
    verdict: string;
    explanation: string;
    safeAlternative: string;
    ruleReferences: string[];
}

export default function CasePage({ params }: { params: { id: string } }) {
    const { user } = useAuth();
    const [caseData, setCaseData] = useState<CaseData | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResults, setShowResults] = useState(false);
    const [xpGained, setXpGained] = useState(0);
    const [levelUp, setLevelUp] = useState(false);
    const [newBadges, setNewBadges] = useState<string[]>([]);

    useEffect(() => {
        const fetchCase = async () => {
            try {
                const caseDoc = await getDoc(doc(db, 'cases', params.id));
                if (caseDoc.exists()) {
                    setCaseData({ id: caseDoc.id, ...caseDoc.data() } as CaseData);
                }
            } catch (error) {
                console.error('Error fetching case:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCase();
    }, [params.id]);

    const triggerConfetti = () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    };

    const handleSubmit = async () => {
        if (selectedAnswer === null || !caseData || !user) return;

        const isCorrect = selectedAnswer === caseData.correctIndex;
        setShowResults(true);

        try {
            const result = await updateUserStats(user.uid, caseData.category, isCorrect);
            setXpGained(result.xpGained);
            setLevelUp(result.levelUp);
            setNewBadges(result.newBadges);

            if (isCorrect) {
                triggerConfetti();
            }
        } catch (error) {
            console.error('Error updating stats:', error);
        }
    };

    const handleReset = () => {
        setSelectedAnswer(null);
        setShowResults(false);
        setXpGained(0);
        setLevelUp(false);
        setNewBadges([]);
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <p>Loading case...</p>
                </div>
            </div>
        );
    }

    if (!caseData) {
        return (
            <div className={styles.container}>
                <div className={styles.error}>
                    <h1>Case Not Found</h1>
                    <p>The requested case scenario could not be found.</p>
                    <Link href="/cases" className={styles.backButton}>
                        ← Back to All Cases
                    </Link>
                </div>
            </div>
        );
    }

    const difficultyColor = {
        easy: '#10B981',
        medium: '#F59E0B',
        hard: '#EF4444'
    }[caseData.difficulty.toLowerCase()] || '#6B7280';

    const isCorrect = selectedAnswer === caseData.correctIndex;

    return (
        <div className={styles.container}>
            <Link href="/cases" className={styles.backLink}>
                ← Back to All Cases
            </Link>

            {/* XP and Level Up Notifications */}
            {showResults && xpGained > 0 && (
                <div className={styles.xpNotification}>
                    <span className={styles.xpGained}>+{xpGained} XP</span>
                    {levelUp && <span className={styles.levelUpBadge}>🎉 Level Up!</span>}
                    {newBadges.map((badge, idx) => (
                        <span key={idx} className={styles.newBadge}>
                            🏆 New Badge!
                        </span>
                    ))}
                </div>
            )}

            <div className={styles.caseHeader}>
                <div className={styles.metadata}>
                    <span className={styles.category}>{caseData.category}</span>
                    <span
                        className={styles.difficulty}
                        style={{ backgroundColor: difficultyColor }}
                    >
                        {caseData.difficulty}
                    </span>
                </div>
                <h1 className={styles.title}>{caseData.title}</h1>
            </div>

            <div className={styles.promptSection}>
                <h2>Situation</h2>
                <p className={styles.prompt}>{caseData.prompt}</p>
            </div>

            <div className={styles.optionsSection}>
                <h2>What should you do?</h2>
                <div className={styles.options}>
                    {caseData.options.map((option, index) => (
                        <div
                            key={index}
                            className={`${styles.option} ${selectedAnswer === index ? styles.selected : ''
                                } ${showResults
                                    ? index === caseData.correctIndex
                                        ? styles.correct
                                        : selectedAnswer === index
                                            ? styles.incorrect
                                            : ''
                                    : ''
                                }`}
                            onClick={() => !showResults && setSelectedAnswer(index)}
                        >
                            <div className={styles.optionHeader}>
                                <span className={styles.optionLabel}>
                                    {String.fromCharCode(65 + index)}
                                </span>
                                {showResults && index === caseData.correctIndex && (
                                    <span className={styles.correctBadge}>✓ Best Answer</span>
                                )}
                                {showResults && selectedAnswer === index && index !== caseData.correctIndex && (
                                    <span className={styles.incorrectBadge}>✗ Your Choice</span>
                                )}
                            </div>
                            <p className={styles.optionText}>{option.text}</p>
                        </div>
                    ))}
                </div>

                {!showResults && (
                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        disabled={selectedAnswer === null}
                        style={{ marginTop: '1.5rem' }}
                    >
                        Check Answer
                    </button>
                )}
            </div>

            {showResults && (
                <>
                    <div className={`${styles.resultSection} ${isCorrect ? styles.resultCorrect : styles.resultIncorrect}`}>
                        <h2>{isCorrect ? '🎉 Correct!' : '❌ Not Quite'}</h2>
                        <p>
                            {isCorrect
                                ? 'Great job! You understand ethical mentorship boundaries.'
                                : 'This choice could violate FTC rules or harm student learning.'}
                        </p>
                    </div>

                    <div className={styles.verdictSection}>
                        <h2>Verdict</h2>
                        <p className={styles.verdict}>{caseData.verdict}</p>
                    </div>

                    <div className={styles.explanationSection}>
                        <h2>Why?</h2>
                        <p className={styles.explanation}>{caseData.explanation}</p>
                    </div>

                    <div className={styles.alternativeSection}>
                        <h2>✅ Safe Alternative</h2>
                        <p className={styles.alternative}>{caseData.safeAlternative}</p>
                    </div>

                    {caseData.ruleReferences && caseData.ruleReferences.length > 0 && (
                        <div className={styles.rulesSection}>
                            <h2>Related FTC Rules</h2>
                            <ul className={styles.rulesList}>
                                {caseData.ruleReferences.map((rule, index) => (
                                    <li key={index}>{rule}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className={styles.actions}>
                        <button className="btn btn-primary" onClick={handleReset}>
                            Try Again
                        </button>
                        <Link href="/cases" className="btn btn-secondary">
                            More Cases
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
