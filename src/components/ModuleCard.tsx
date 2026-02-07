'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import styles from './ModuleCard.module.css';

interface ModuleCardProps {
    module: {
        id: string;
        title: string;
        description: string;
        order: number;
        lessonCount: number;
        requiredFor?: 'certification';
    };
    moduleIndex: number;
}

export default function ModuleCard({ module, moduleIndex }: ModuleCardProps) {
    const [progress, setProgress] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const { user, userProfile } = useAuth();

    useEffect(() => {
        const checkProgress = async () => {
            if (user) {
                // For now, all modules are unlocked - remove artificial locking
                setIsLocked(false);

                // Mock progress - in production, calculate from user_progress collection
                setProgress(0);
            }
        };

        checkProgress();
    }, [user, module.id, moduleIndex]);

    const isGuest = !user || userProfile?.role === 'guest';

    return (
        <Link
            href={isGuest ? '/auth' : `/curriculum/${module.id}`}
            className={`card ${styles.moduleCard} ${isLocked ? styles.locked : ''}`}
        >
            <div className={styles.header}>
                <div className={styles.badge}>
                    Module {module.order}
                    {module.requiredFor && (
                        <span className={styles.required}>★ Required</span>
                    )}
                </div>
                {isLocked && <div className={styles.lockIcon}>🔒</div>}
            </div>

            <h3 className={styles.title}>{module.title}</h3>
            <p className={styles.description}>{module.description}</p>

            <div className={styles.meta}>
                <span>{module.lessonCount} lessons</span>
                {user && !isGuest && (
                    <span className={styles.progress}>{progress}% complete</span>
                )}
            </div>

            {user && !isGuest && progress > 0 && (
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
            )}
        </Link>
    );
}
