'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { db } from '@/lib/firebase';
import { collection, getCountFromServer } from 'firebase/firestore';
import styles from './StatsSection.module.css';

export default function StatsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const [stats, setStats] = useState({
        users: 0,
        cases: 0,
        modules: 3,
        lessons: 5
    });

    useEffect(() => {
        const fetchRealStats = async () => {
            try {
                // Get real counts from Firebase
                const usersSnap = await getCountFromServer(collection(db, 'users'));
                const casesSnap = await getCountFromServer(collection(db, 'cases'));

                setStats({
                    users: usersSnap.data().count,
                    cases: casesSnap.data().count,
                    modules: 3,
                    lessons: 5
                });
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchRealStats();
    }, []);

    const statsDisplay = [
        {
            value: stats.users,
            label: 'Active Users',
            icon: '👥'
        },
        {
            value: stats.cases,
            label: 'Practice Cases',
            icon: '📝'
        },
        {
            value: stats.modules,
            label: 'Learning Modules',
            icon: '🎓'
        },
        {
            value: stats.lessons,
            label: 'Expert Lessons',
            icon: '📚'
        }
    ];

    return (
        <section className={styles.statsSection} ref={ref}>
            <div className="container">
                <div className={styles.statsGrid}>
                    {statsDisplay.map((stat, index) => (
                        <div
                            key={index}
                            className={styles.statCard}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.statIcon}>{stat.icon}</div>
                            <div className={styles.statValue}>
                                {inView && (
                                    <CountUp
                                        end={stat.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                )}
                            </div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
