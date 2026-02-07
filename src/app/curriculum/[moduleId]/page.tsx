'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import styles from './page.module.css';

interface Lesson {
    id: string;
    title: string;
    moduleId: string;
    content: string;
    quiz?: {
        questions: Array<{
            question: string;
            options: string[];
            correctIndex: number;
            explanation: string;
        }>;
    };
}

interface Module {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    estimatedTime: string;
}

export default function ModulePage() {
    const params = useParams();
    const router = useRouter();
    const { user } = useAuth();
    const [module, setModule] = useState<Module | null>(null);
    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchModuleAndLessons = async () => {
            try {
                const moduleId = params.moduleId as string;

                // Fetch module
                const moduleDoc = await getDoc(doc(db, 'modules', moduleId));
                if (moduleDoc.exists()) {
                    setModule({ id: moduleDoc.id, ...moduleDoc.data() } as Module);
                }

                // Fetch lessons for this module
                const lessonsQuery = query(
                    collection(db, 'lessons'),
                    where('moduleId', '==', moduleId)
                );
                const lessonsSnapshot = await getDocs(lessonsQuery);
                const lessonsData = lessonsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Lesson[];

                setLessons(lessonsData);
            } catch (error) {
                console.error('Error fetching module:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchModuleAndLessons();
    }, [params.moduleId]);

    if (loading) {
        return (
            <div className={styles.page}>
                <div className="container">
                    <div className={styles.loading}>Loading module...</div>
                </div>
            </div>
        );
    }

    if (!module) {
        return (
            <div className={styles.page}>
                <div className="container">
                    <div className={styles.error}>
                        <h1>Module Not Found</h1>
                        <Link href="/curriculum" className="btn btn-primary">
                            ← Back to Curriculum
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className="container">
                <Link href="/curriculum" className={styles.backLink}>
                    ← Back to Curriculum
                </Link>

                <div className={styles.moduleHeader}>
                    <div className={styles.moduleIcon} style={{ backgroundColor: module.color }}>
                        {module.icon}
                    </div>
                    <div className={styles.moduleInfo}>
                        <h1 className={styles.moduleTitle}>{module.title}</h1>
                        <p className={styles.moduleDescription}>{module.description}</p>
                        <div className={styles.moduleMeta}>
                            <span>⏱️ {module.estimatedTime}</span>
                            <span>📖 {lessons.length} lessons</span>
                        </div>
                    </div>
                </div>

                <div className={styles.lessonsSection}>
                    <h2>Lessons</h2>
                    {lessons.length > 0 ? (
                        <div className={styles.lessonsList}>
                            {lessons.map((lesson, index) => (
                                <Link
                                    key={lesson.id}
                                    href={`/curriculum/${module.id}/lesson/${lesson.id}`}
                                    className={styles.lessonCard}
                                >
                                    <div className={styles.lessonNumber}>{index + 1}</div>
                                    <div className={styles.lessonInfo}>
                                        <h3 className={styles.lessonTitle}>{lesson.title}</h3>
                                        {lesson.quiz && (
                                            <span className={styles.quizBadge}>
                                                ❓ Quiz included
                                            </span>
                                        )}
                                    </div>
                                    <div className={styles.lessonArrow}>→</div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <p>No lessons available yet in this module.</p>
                        </div>
                    )}
                </div>

                {user && lessons.length > 0 && (
                    <div className={styles.actions}>
                        <Link
                            href={`/curriculum/${module.id}/lesson/${lessons[0].id}`}
                            className="btn btn-primary"
                        >
                            Start First Lesson →
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
