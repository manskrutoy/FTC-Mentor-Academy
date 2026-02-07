'use client';

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './QuizComponent.module.css';

interface Question {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

interface QuizComponentProps {
    lessonId: string;
    onComplete: (passed: boolean) => void;
}

export default function QuizComponent({ lessonId, onComplete }: QuizComponentProps) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);

    useEffect(() => {
        const fetchQuiz = async () => {
            // Mock quiz data - in production, fetch from quizzes collection
            setQuestions([
                {
                    question: "What is a mentor's primary responsibility in FTC?",
                    options: [
                        "Building the robot for students",
                        "Guiding students to solve problems themselves",
                        "Winning competitions at any cost",
                        "Teaching step-by-step tutorials"
                    ],
                    correctAnswer: 1,
                    explanation: "Mentors should guide students to find solutions, not provide them directly. This preserves student ownership."
                },
                {
                    question: "When is it acceptable for a mentor to solder components?",
                    options: [
                        "When the team is behind schedule",
                        "When students are struggling",
                        "Only for safety demonstrations, students must do actual work",
                        "Whenever it's more efficient"
                    ],
                    correctAnswer: 2,
                    explanation: "Mentors can demonstrate for safety, but students must do the actual work to maintain ownership."
                }
            ]);
        };

        fetchQuiz();
    }, [lessonId]);

    const handleAnswer = () => {
        if (selectedAnswer === null) return;

        const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
        if (isCorrect) {
            setScore(score + 1);
        }
        setShowExplanation(true);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            const finalScore = ((score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0)) / questions.length) * 100;
            setQuizComplete(true);
            onComplete(finalScore >= 80);
        }
    };

    if (questions.length === 0) {
        return <div>Loading quiz...</div>;
    }

    if (quizComplete) {
        const finalScore = (score / questions.length) * 100;
        const passed = finalScore >= 80;

        return (
            <div className={`card ${styles.quizCard}`}>
                <h2>{passed ? '✓ Quiz Passed!' : '✗ Quiz Failed'}</h2>
                <p className={styles.scoreText}>
                    Your score: {Math.round(finalScore)}%
                </p>
                <p className={styles.feedbackText}>
                    {passed
                        ? 'Great job! You can continue to the next lesson.'
                        : 'You need 80% to pass. Review the lesson and try again.'}
                </p>
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div className={`card ${styles.quizCard}`}>
            <div className={styles.header}>
                <h2>Quiz</h2>
                <span className={styles.progress}>
                    Question {currentQuestion + 1} of {questions.length}
                </span>
            </div>

            <div className={styles.question}>
                <h3>{question.question}</h3>
                <div className={styles.options}>
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className={`${styles.option} ${selectedAnswer === index ? styles.selected : ''
                                } ${showExplanation
                                    ? index === question.correctAnswer
                                        ? styles.correct
                                        : selectedAnswer === index
                                            ? styles.incorrect
                                            : ''
                                    : ''
                                }`}
                            onClick={() => !showExplanation && setSelectedAnswer(index)}
                            disabled={showExplanation}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {showExplanation && (
                <div className={styles.explanation}>
                    <strong>Explanation:</strong> {question.explanation}
                </div>
            )}

            <div className={styles.actions}>
                {!showExplanation ? (
                    <button
                        onClick={handleAnswer}
                        className="btn btn-primary"
                        disabled={selectedAnswer === null}
                    >
                        Submit Answer
                    </button>
                ) : (
                    <button onClick={handleNext} className="btn btn-primary">
                        {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </button>
                )}
            </div>
        </div>
    );
}
