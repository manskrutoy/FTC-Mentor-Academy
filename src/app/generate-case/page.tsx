'use client';

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import Link from 'next/link';
import styles from './page.module.css';

interface GeneratedCase {
    title: string;
    category: string;
    difficulty: string;
    prompt: string;
    options: Array<{ text: string; isCorrect: boolean }>;
    verdict: string;
    explanation: string;
    safeAlternative: string;
    ruleReferences: string[];
}

const CATEGORIES = [
    {
        id: 'technical-help',
        name: 'Technical Help',
        icon: '🔧',
        description: 'Coding, CAD, building assistance',
        gradient: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)'
    },
    {
        id: 'competition-pressure',
        name: 'Competition Day',
        icon: '🏆',
        description: 'Pressure situations at events',
        gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)'
    },
    {
        id: 'time-management',
        name: 'Deadlines',
        icon: '⏰',
        description: 'Time pressure & urgency',
        gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)'
    },
    {
        id: 'team-dynamics',
        name: 'Team Decisions',
        icon: '👥',
        description: 'Leadership & collaboration',
        gradient: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)'
    },
    {
        id: 'judging',
        name: 'Judging',
        icon: '📋',
        description: 'Presentations & interviews',
        gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)'
    },
    {
        id: 'safety',
        name: 'Safety',
        icon: '⚠️',
        description: 'Lab & equipment safety',
        gradient: 'linear-gradient(135deg, #30CFD0 0%, #330867 100%)'
    }
];

export default function GenerateCasePage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [generatedCase, setGeneratedCase] = useState<GeneratedCase | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async (categoryId: string) => {
        setSelectedCategory(categoryId);
        setLoading(true);
        setError(null);
        setGeneratedCase(null);

        try {
            const response = await fetch('/api/generate-case', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ category: categoryId })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate case');
            }

            setGeneratedCase(data.case);
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const difficultyColor = {
        easy: '#10B981',
        medium: '#F59E0B',
        hard: '#EF4444'
    };

    return (
        <ProtectedRoute requireAuth={true}>
            <div className={styles.page}>
                <div className="container">
                    <header className={styles.header}>
                        <Link href="/cases" className={styles.backLink}>
                            ← Back to Cases
                        </Link>
                        <h1 className={styles.title}>🎲 AI Scenario Generator</h1>
                        <p className={styles.subtitle}>
                            Choose a topic and let AI create a unique ethical dilemma for you to solve
                        </p>
                    </header>

                    {!generatedCase && (
                        <div className={styles.categoriesGrid}>
                            {CATEGORIES.map((category) => (
                                <div
                                    key={category.id}
                                    className={`${styles.categoryCard} ${selectedCategory === category.id && loading ? styles.generating : ''}`}
                                    onClick={() => !loading && handleGenerate(category.id)}
                                    style={{ background: category.gradient }}
                                >
                                    <div className={styles.categoryIcon}>{category.icon}</div>
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                    {selectedCategory === category.id && loading && (
                                        <div className={styles.loadingOverlay}>
                                            <div className={styles.spinner}></div>
                                            <span>Generating...</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {error && (
                        <div className={styles.error}>
                            <h3>⚠️ Error</h3>
                            <p>{error}</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => setError(null)}
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {generatedCase && (
                        <div className={styles.generatedCase}>
                            <div className={styles.caseHeader}>
                                <div className={styles.metadata}>
                                    <span className={styles.category}>
                                        {CATEGORIES.find(c => c.id === generatedCase.category)?.icon} {CATEGORIES.find(c => c.id === generatedCase.category)?.name}
                                    </span>
                                    <span
                                        className={styles.difficulty}
                                        style={{
                                            backgroundColor: difficultyColor[generatedCase.difficulty.toLowerCase() as keyof typeof difficultyColor] || '#6B7280'
                                        }}
                                    >
                                        {generatedCase.difficulty}
                                    </span>
                                </div>
                                <h2>{generatedCase.title}</h2>
                            </div>

                            <div className={styles.caseContent}>
                                <div className={styles.section}>
                                    <h3>📖 Situation</h3>
                                    <p>{generatedCase.prompt}</p>
                                </div>

                                <div className={styles.section}>
                                    <h3>🤔 What should you do?</h3>
                                    <div className={styles.options}>
                                        {generatedCase.options.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`${styles.option} ${option.isCorrect ? styles.correct : styles.incorrect}`}
                                            >
                                                <div className={styles.optionHeader}>
                                                    <span className={styles.optionLabel}>
                                                        {String.fromCharCode(65 + index)}
                                                    </span>
                                                    {option.isCorrect && (
                                                        <span className={styles.correctBadge}>✓ Best Answer</span>
                                                    )}
                                                </div>
                                                <p>{option.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.section}>
                                    <h3>⚖️ Verdict</h3>
                                    <p className={styles.verdict}>{generatedCase.verdict}</p>
                                </div>

                                <div className={styles.section}>
                                    <h3>💡 Why?</h3>
                                    <p>{generatedCase.explanation}</p>
                                </div>

                                <div className={`${styles.section} ${styles.alternative}`}>
                                    <h3>✅ Safe Alternative</h3>
                                    <p>{generatedCase.safeAlternative}</p>
                                </div>

                                {generatedCase.ruleReferences && generatedCase.ruleReferences.length > 0 && (
                                    <div className={styles.section}>
                                        <h3>📚 Related Rules</h3>
                                        <ul>
                                            {generatedCase.ruleReferences.map((rule, index) => (
                                                <li key={index}>{rule}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className={styles.actions}>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setGeneratedCase(null);
                                        setSelectedCategory(null);
                                    }}
                                >
                                    🎲 Generate Another
                                </button>
                                <Link href="/cases" className="btn btn-secondary">
                                    View All Cases
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </ProtectedRoute>
    );
}
