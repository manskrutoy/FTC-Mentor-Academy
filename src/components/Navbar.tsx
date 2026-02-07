'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';

export default function Navbar() {
    const { user, userProfile, logout } = useAuth();
    const { t } = useLanguage();

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    FTC Mentor Academy
                </Link>

                <div className={styles.links}>
                    <Link href="/curriculum" className={styles.link}>
                        {t('nav.curriculum')}
                    </Link>
                    <Link href="/cases" className={styles.link}>
                        {t('nav.cases')}
                    </Link>
                    <Link href="/generate-case" className={styles.link}>
                        🎲 {t('nav.generate')}
                    </Link>
                    <Link href="/copilot" className={styles.link}>
                        {t('nav.copilot')}
                    </Link>

                    <LanguageSwitcher />

                    {user ? (
                        <>
                            <Link href="/dashboard" className={styles.link}>
                                Dashboard
                            </Link>
                            {userProfile?.role === 'admin' && (
                                <Link href="/admin" className={styles.link}>
                                    Admin
                                </Link>
                            )}
                            <button onClick={logout} className="btn btn-ghost">
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/auth" className="btn btn-primary">
                            {t('nav.signIn')}
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
