'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import ReactMarkdown from 'react-markdown';
import QuizComponent from '@/components/QuizComponent';
import styles from './page.module.css';

interface Lesson {
    title: string;
    content: string;
    moduleId: string;
    hasQuiz?: boolean;
}

export default function LessonPage() {
    const params = useParams();
    const router = useRouter();
    const lessonId = params?.id as string;
    const { user } = useAuth();

    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [showQuiz, setShowQuiz] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const lessonDoc = await getDoc(doc(db, 'lessons', lessonId));
                if (lessonDoc.exists()) {
                    setLesson(lessonDoc.data() as Lesson);
                }
            } catch (error) {
                console.error('Error fetching lesson:', error);
            } finally {
                setLoading(false);
            }
        };

        if (lessonId) {
            fetchLesson();
        }
    }, [lessonId]);

    const handleComplete = async () => {
        if (lesson?.hasQuiz) {
            setShowQuiz(true);
        } else {
            await markComplete();
        }
    };

    const markComplete = async () => {
        if (user && lessonId) {
            try {
                await setDoc(doc(db, 'user_progress', `${user.uid}_${lessonId}`), {
                    userId: user.uid,
                    lessonId,
                    completed: true,
                    completedAt: new Date(),
                });
                setCompleted(true);
            } catch (error) {
                console.error('Error marking lesson complete:', error);
            }
        }
    };

    const handleQuizComplete = async (passed: boolean) => {
        if (passed) {
            await markComplete();
        }
    };

    if (loading) {
        return <div className={styles.loading}>Loading lesson...</div>;
    }

    if (!lesson) {
        return <div className={styles.error}>Lesson not found</div>;
    }

    return (
        <ProtectedRoute requireAuth={true}>
            <div className={styles.page}>
                <div className="container content">
                    <button onClick={() => router.push(`/module/${lesson.moduleId}`)} className="btn btn-ghost mb-6">
                        ← Back to Module
                    </button>

                    <article className={`card ${styles.lessonCard}`}>
                        <h1>{lesson.title}</h1>

                        <div className={styles.content}>
                            <ReactMarkdown>{lesson.content}</ReactMarkdown>
                        </div>

                        {!showQuiz && !completed && (
                            <div className={styles.actions}>
                                <button onClick={handleComplete} className="btn btn-success">
                                    {lesson.hasQuiz ? 'Take Quiz' : 'Mark as Complete'}
                                </button>
                            </div>
                        )}

                        {completed && (
                            <div className={styles.completedBanner}>
                                ✓ Lesson completed! You may continue to the next lesson.
                            </div>
                        )}
                    </article>

                    {showQuiz && (
                        <div className="mt-8">
                            <QuizComponent lessonId={lessonId} onComplete={handleQuizComplete} />
                        </div>
                    )}
                </div>
            </div>
        </ProtectedRoute>
    );
}
