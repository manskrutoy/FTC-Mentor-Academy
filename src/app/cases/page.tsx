'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import ProtectedRoute from '@/components/ProtectedRoute';
import styles from './page.module.css';

interface CaseData {
    id: string;
    title: string;
    category: string;
    difficulty: string;
    prompt: string;
}

export default function CasesPage() {
    const router = useRouter();
    const [cases, setCases] = useState<CaseData[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>('all');

    useEffect(() => {
        const fetchCases = async () => {
            try {
                const casesSnapshot = await getDocs(collection(db, 'cases'));
                const casesData = casesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as CaseData[];

                setCases(casesData);
            } catch (error) {
                console.error('Error fetching cases:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCases();
    }, []);

    const categories = ['all', ...Array.from(new Set(cases.map(c => c.category)))];

    const filteredCases = filter === 'all'
        ? cases
        : cases.filter(c => c.category === filter);

    const difficultyColor = (difficulty: string) => {
        const colors: { [key: string]: string } = {
            easy: '#10B981',
            medium: '#F59E0B',
            hard: '#EF4444'
        };
        return colors[difficulty.toLowerCase()] || '#6B7280';
    };

    return (
        <ProtectedRoute requireAuth={true}>
            <div className={styles.page}>
                <div className="container">
                    <div className={styles.headerSection}>
                        <div>
                            <h1 className={styles.title}>Practice Cases</h1>
                            <p className={styles.subtitle}>
                                Test your understanding of FTC mentorship boundaries through realistic scenarios
                            </p>
                        </div>
                        <a href="/generate-case" className="btn btn-primary">
                            🎲 AI Generator
                        </a>
                    </div>

                    <div className={styles.filters}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat === 'all' ? 'All Cases' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    {loading ? (
                        <div className={styles.loading}>
                            <div className={styles.spinner}></div>
                            <p>Loading cases...</p>
                        </div>
                    ) : filteredCases.length === 0 ? (
                        <div className={styles.empty}>
                            <h3>No cases found</h3>
                            <p>Try a different filter or check back later.</p>
                        </div>
                    ) : (
                        <div className={styles.casesGrid}>
                            {filteredCases.map(caseItem => (
                                <div
                                    key={caseItem.id}
                                    className={`card ${styles.caseCard}`}
                                    onClick={() => router.push(`/case/${caseItem.id}`)}
                                >
                                    <div className={styles.cardHeader}>
                                        <span className={styles.category}>{caseItem.category}</span>
                                        <span
                                            className={styles.difficulty}
                                            style={{ backgroundColor: difficultyColor(caseItem.difficulty) }}
                                        >
                                            {caseItem.difficulty}
                                        </span>
                                    </div>
                                    <h3>{caseItem.title}</h3>
                                    <p className={styles.scenario}>
                                        {caseItem.prompt.substring(0, 150)}...
                                    </p>
                                    <div className={styles.action}>
                                        Analyze this case →
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ProtectedRoute>
    );
}
