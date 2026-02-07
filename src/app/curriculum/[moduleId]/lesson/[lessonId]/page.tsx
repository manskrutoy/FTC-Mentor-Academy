'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import styles from './page.module.css';

interface Question {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

interface Lesson {
    id: string;
    title: string;
    content: string;
    moduleId: string;
    quiz?: {
        questions: Question[];
    };
}

export default function LessonPage() {
    const params = useParams();
    const router = useRouter();
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [loading, setLoading] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const lessonId = params.lessonId as string;
                const lessonDoc = await getDoc(doc(db, 'lessons', lessonId));

                if (lessonDoc.exists()) {
                    setLesson({ id: lessonDoc.id, ...lessonDoc.data() } as Lesson);
                }
            } catch (error) {
                console.error('Error fetching lesson:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLesson();
    }, [params.lessonId]);

    const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
        if (showResults) return;

        const newAnswers = [...selectedAnswers];
        newAnswers[questionIndex] = answerIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleSubmitQuiz = () => {
        setShowResults(true);
    };

    const handleNextLesson = () => {
        // TODO: Navigate to next lesson
        router.push(`/curriculum/${params.moduleId}`);
    };

    if (loading) {
        return (
            <div className={styles.page}>
                <div className="container">
                    <div className={styles.loading}>Loading lesson...</div>
                </div>
            </div>
        );
    }

    if (!lesson) {
        return (
            <div className={styles.page}>
                <div className="container">
                    <div className={styles.error}>
                        <h1>Lesson Not Found</h1>
                        <Link href={`/curriculum/${params.moduleId}`} className="btn btn-primary">
                            ← Back to Module
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const score = lesson.quiz ? selectedAnswers.filter((answer, idx) =>
        answer === lesson.quiz!.questions[idx].correctIndex
    ).length : 0;

    const totalQuestions = lesson.quiz?.questions.length || 0;

    return (
        <div className={styles.page}>
            <div className="container">
                <Link href={`/curriculum/${params.moduleId}`} className={styles.backLink}>
                    ← Back to Module
                </Link>

                <article className={styles.lessonContent}>
                    <h1 className={styles.lessonTitle}>{lesson.title}</h1>

                    <div className={styles.markdown}>
                        <ReactMarkdown>{lesson.content}</ReactMarkdown>
                    </div>

                    {lesson.quiz && !showQuiz && (
                        <div className={styles.quizPrompt}>
                            <p>📝 Test your understanding with a quick quiz</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowQuiz(true)}
                            >
                                Take Quiz
                            </button>
                        </div>
                    )}

                    {lesson.quiz && showQuiz && (
                        <div className={styles.quizSection}>
                            <h2>Quiz</h2>

                            {lesson.quiz.questions.map((q, qIdx) => (
                                <div key={qIdx} className={styles.question}>
                                    <h3>Question {qIdx + 1}</h3>
                                    <p className={styles.questionText}>{q.question}</p>

                                    <div className={styles.options}>
                                        {q.options.map((option, optIdx) => (
                                            <div
                                                key={optIdx}
                                                className={`${styles.option} ${selectedAnswers[qIdx] === optIdx ? styles.selected : ''
                                                    } ${showResults
                                                        ? optIdx === q.correctIndex
                                                            ? styles.correct
                                                            : selectedAnswers[qIdx] === optIdx
                                                                ? styles.incorrect
                                                                : ''
                                                        : ''
                                                    }`}
                                                onClick={() => handleAnswerSelect(qIdx, optIdx)}
                                            >
                                                <div className={styles.optionLabel}>
                                                    {String.fromCharCode(65 + optIdx)}
                                                </div>
                                                <div className={styles.optionText}>{option}</div>
                                                {showResults && optIdx === q.correctIndex && (
                                                    <div className={styles.checkmark}>✓</div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {showResults && (
                                        <div className={styles.explanation}>
                                            <strong>Explanation:</strong> {q.explanation}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {!showResults && (
                                <button
                                    className="btn btn-primary"
                                    onClick={handleSubmitQuiz}
                                    disabled={selectedAnswers.length < totalQuestions}
                                >
                                    Submit Quiz
                                </button>
                            )}

                            {showResults && (
                                <div className={styles.quizResults}>
                                    <h3>Results</h3>
                                    <p className={styles.score}>
                                        You scored {score} out of {totalQuestions}
                                    </p>
                                    <div className={styles.resultActions}>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => {
                                                setShowResults(false);
                                                setSelectedAnswers([]);
                                            }}
                                        >
                                            Retry Quiz
                                        </button>
                                        <button
                                            className="btn btn-primary"
                                            onClick={handleNextLesson}
                                        >
                                            Continue to Next Lesson →
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {!lesson.quiz && (
                        <div className={styles.lessonFooter}>
                            <button
                                className="btn btn-primary"
                                onClick={handleNextLesson}
                            >
                                Continue to Next Lesson →
                            </button>
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
}
