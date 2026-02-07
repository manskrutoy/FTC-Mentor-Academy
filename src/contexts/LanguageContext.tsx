'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ru';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => { },
    t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>('en');
    const [translations, setTranslations] = useState<any>({});

    useEffect(() => {
        // Load saved language from localStorage
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'ru')) {
            setLanguageState(savedLang);
        }
    }, []);

    useEffect(() => {
        // Load translations for current language
        const loadTranslations = async () => {
            try {
                const module = await import(`@/translations/${language}`);
                setTranslations(module.default);
            } catch (error) {
                console.error('Failed to load translations:', error);
            }
        };
        loadTranslations();
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    // Translation function with nested key support
    const t = (key: string): string => {
        const keys = key.split('.');
        let value: any = translations;

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Fallback to key if not found
            }
        }

        return typeof value === 'string' ? value : key;
    };

    const value = {
        language,
        setLanguage,
        t,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}
