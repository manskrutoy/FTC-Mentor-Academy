'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import FloatingParticles from '@/components/FloatingParticles';
import StatsSection from '@/components/StatsSection';
import styles from './page.module.css';

export default function HomePage() {
    const { t } = useLanguage();

    return (
        <div className={styles.page}>
            <FloatingParticles />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>
                        {t('landing.hero.title')}<br />
                        <span className={styles.guidingText}>Guiding</span> and <span className={styles.doingText}>Doing</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t('landing.hero.subtitle')}
                    </p>
                    <div className={styles.cta}>
                        <Link href="/curriculum" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                            {t('landing.hero.viewCurriculum')}
                        </Link>
                        <Link href="/auth" className="btn btn-secondary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                            {t('landing.hero.getStarted')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <StatsSection />

            {/* Problem Statement */}
            <section className="section">
                <div className="container content">
                    <h2 className="text-center">{t('landing.problem.title')}</h2>
                    <div className={styles.problemGrid}>
                        <div className="card">
                            <h3>❌ {t('landing.problem.unfairAdvantages.title')}</h3>
                            <p>{t('landing.problem.unfairAdvantages.description')}</p>
                        </div>
                        <div className="card">
                            <h3>⚠️ {t('landing.problem.disqualifications.title')}</h3>
                            <p>{t('landing.problem.disqualifications.description')}</p>
                        </div>
                        <div className="card">
                            <h3>🎓 {t('landing.problem.lostLearning.title')}</h3>
                            <p>{t('landing.problem.lostLearning.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Teach */}
            <section className={`section ${styles.bgSecondary}`}>
                <div className="container content">
                    <h2 className="text-center">{t('landing.teach.title')}</h2>
                    <div className={styles.comparisonGrid}>
                        <div className={`card-glass ${styles.teachCard}`}>
                            <h3 className="text-success">✓ {t('landing.teach.weTeach')}</h3>
                            <ul className={styles.list}>
                                <li>What mentors ARE responsible for</li>
                                <li>What mentors MUST NOT do</li>
                                <li>How to help without replacing students</li>
                                <li>Ethical decision-making under pressure</li>
                                <li>Preparing teams for judging and competition</li>
                                <li>Gracious Professionalism in mentorship</li>
                            </ul>
                        </div>
                        <div className={`card-glass ${styles.teachCard}`}>
                            <h3 className="text-error">✗ {t('landing.teach.weDoNotTeach')}</h3>
                            <ul className={styles.list}>
                                <li>Soldering, CAD, or programming tutorials</li>
                                <li>How to build specific mechanisms</li>
                                <li>Engineering or coaching techniques</li>
                                <li>Live instruction or personal coaching</li>
                            </ul>
                            <p className="text-secondary mt-6">
                                <strong>{t('landing.teach.notRoboticsNote')}</strong> {t('landing.teach.notRoboticsDescription')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section">
                <div className="container content">
                    <h2 className="text-center">{t('landing.howItWorks.title')}</h2>
                    <div className={styles.stepsGrid}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <h3>{t('landing.howItWorks.step1.title')}</h3>
                            <p>{t('landing.howItWorks.step1.description')}</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <h3>{t('landing.howItWorks.step2.title')}</h3>
                            <p>{t('landing.howItWorks.step2.description')}</p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <h3>{t('landing.howItWorks.step3.title')}</h3>
                            <p>{t('landing.howItWorks.step3.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className={`section ${styles.finalCta}`}>
                <div className="container content text-center">
                    <h2>{t('landing.cta.title')}</h2>
                    <p className={styles.finalText}>
                        {t('landing.cta.description')} <strong>{t('landing.cta.theRightWay')}</strong>.
                    </p>
                    <Link href="/auth" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                        {t('landing.cta.startLearning')}
                    </Link>
                </div>
            </section>
        </div>
    );
}
