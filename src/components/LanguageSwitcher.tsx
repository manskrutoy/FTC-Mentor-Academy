'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.switcher}>
            <button
                className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
                onClick={() => setLanguage('en')}
                title="English"
            >
                EN
            </button>
            <div className={styles.divider} />
            <button
                className={`${styles.langButton} ${language === 'ru' ? styles.active : ''}`}
                onClick={() => setLanguage('ru')}
                title="Русский"
            >
                RU
            </button>
        </div>
    );
}
