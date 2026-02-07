'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import ModuleCard from '@/components/ModuleCard';
import styles from './page.module.css';

interface Module {
    id: string;
    title: string;
    description: string;
    order: number;
    lessonCount: number;
    requiredFor?: 'certification';
}

export default function CurriculumPage() {
    const [modules, setModules] = useState<Module[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const q = query(collection(db, 'modules'), orderBy('order'));
                const snapshot = await getDocs(q);
                const modulesData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Module[];
                setModules(modulesData);
            } catch (error) {
                console.error('Error fetching modules:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchModules();
    }, []);

    if (loading) {
        return (
            <div className={styles.loading}>
                <p>Loading curriculum...</p>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className="container">
                <header className={styles.header}>
                    <h1>Mentorship Curriculum</h1>
                    <p className={styles.subtitle}>
                        Learn the boundaries between guiding and doing. Progress sequentially through structured lessons.
                    </p>
                    {!user && (
                        <div className={styles.guestNotice}>
                            <p>📖 Preview Mode - <a href="/auth">Sign in</a> to track progress and earn certification</p>
                        </div>
                    )}
                </header>

                <div className={styles.modulesGrid}>
                    {modules.map((module, index) => (
                        <ModuleCard key={module.id} module={module} moduleIndex={index} />
                    ))}
                </div>

                {modules.length === 0 && (
                    <div className={styles.empty}>
                        <p>No modules available yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
