'use client';

import { useEffect, useState } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useParams, useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import styles from './page.module.css';
import Link from 'next/link';

interface Lesson {
    id: string;
    title: string;
    order: number;
    completed?: boolean;
}

interface Module {
    title: string;
    description: string;
}

export default function ModulePage() {
    const params = useParams();
    const router = useRouter();
    const moduleId = params?.id as string;

    const [module, setModule] = useState<Module | null>(null);
    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchModuleAndLessons = async () => {
            try {
                // Fetch lessons for this module
                const q = query(
                    collection(db, 'lessons'),
                    where('moduleId', '==', moduleId),
                    orderBy('order')
                );
                const snapshot = await getDocs(q);
                const lessonsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Lesson[];

                setLessons(lessonsData);

                // Mock module data - in production, fetch from modules collection
                setModule({
                    title: 'Understanding Mentorship Boundaries',
                    description: 'Learn what mentors should and should not do to protect student ownership.'
                });
            } catch (error) {
                console.error('Error fetching module:', error);
            } finally {
                setLoading(false);
            }
        };

        if (moduleId) {
            fetchModuleAndLessons();
        }
    }, [moduleId]);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <ProtectedRoute requireAuth={true}>
            <div className={styles.page}>
                <div className="container content">
                    <button onClick={() => router.back()} className="btn btn-ghost mb-6">
                        ← Back to Curriculum
                    </button>

                    <header className={styles.header}>
                        <h1>{module?.title}</h1>
                        <p className={styles.description}>{module?.description}</p>
                    </header>

                    <div className={styles.lessonsList}>
                        {lessons.map((lesson, index) => {
                            const isLocked = index > 0 && !lessons[index - 1]?.completed;

                            return (
                                <Link
                                    key={lesson.id}
                                    href={isLocked ? '#' : `/lesson/${lesson.id}`}
                                    className={`card ${styles.lessonCard} ${isLocked ? styles.locked : ''}`}
                                >
                                    <div className={styles.lessonNumber}>{lesson.order}</div>
                                    <div className={styles.lessonContent}>
                                        <h3>{lesson.title}</h3>
                                        {isLocked && <span className={styles.lockText}>Complete previous lesson to unlock</span>}
                                        {lesson.completed && <span className="badge badge-success">✓ Completed</span>}
                                    </div>
                                    {isLocked && <div className={styles.lockIcon}>🔒</div>}
                                </Link>
                            );
                        })}
                    </div>

                    {lessons.length === 0 && (
                        <div className={styles.empty}>
                            <p>No lessons available in this module yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </ProtectedRoute>
    );
}
