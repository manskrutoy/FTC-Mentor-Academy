'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState<'mentor' | 'guest'>('mentor');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup, login, loginWithGoogle } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLogin) {
                await login(email, password);
                router.push('/dashboard');
            } else {
                await signup(email, password, name, role);
                router.push('/dashboard');
            }
        } catch (err: any) {
            setError(err.message || 'Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setLoading(true);

        try {
            await loginWithGoogle();
            router.push('/dashboard');
        } catch (err: any) {
            setError(err.message || 'Google sign-in failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.authContainer}>
                {/* Main Auth Card */}
                <div className={styles.authCard}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>
                            {isLogin ? 'Welcome Back' : 'Join FTC Mentor Academy'}
                        </h1>
                        <p className={styles.subtitle}>
                            {isLogin
                                ? 'Sign in to continue your learning journey'
                                : 'Master ethical mentorship boundaries'}
                        </p>
                    </div>

                    {/* Google Sign-In Button */}
                    <button
                        onClick={handleGoogleSignIn}
                        className={styles.googleButton}
                        disabled={loading}
                    >
                        <svg className={styles.googleIcon} viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>

                    {/* Divider */}
                    <div className={styles.divider}>
                        <span>or</span>
                    </div>

                    {/* Email/Password Form */}
                    <form onSubmit={handleSubmit} className={styles.form}>
                        {!isLogin && (
                            <>
                                <div className={styles.field}>
                                    <label className={styles.label}>Full Name</label>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className={styles.field}>
                                    <label className={styles.label}>I am a:</label>
                                    <div className={styles.roleButtons}>
                                        <button
                                            type="button"
                                            className={role === 'mentor' ? styles.roleActive : styles.roleInactive}
                                            onClick={() => setRole('mentor')}
                                        >
                                            <span className={styles.roleIcon}>👨‍🏫</span>
                                            Mentor
                                        </button>
                                        <button
                                            type="button"
                                            className={role === 'guest' ? styles.roleActive : styles.roleInactive}
                                            onClick={() => setRole('guest')}
                                        >
                                            <span className={styles.roleIcon}>👁️</span>
                                            Guest
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className={styles.field}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Password</label>
                            <input
                                type="password"
                                className={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                                minLength={6}
                            />
                        </div>

                        {error && (
                            <div className={styles.error}>{error}</div>
                        )}

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                        </button>
                    </form>

                    {/* Toggle Login/Signup */}
                    <div className={styles.toggle}>
                        {isLogin ? "Don't have an account? " : 'Already have an account? '}
                        <button onClick={() => setIsLogin(!isLogin)} className={styles.toggleButton}>
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </div>
                </div>

                {/* Benefits Card */}
                <div className={styles.benefitsCard}>
                    <h3 className={styles.benefitsTitle}>Why Join Us?</h3>
                    <div className={styles.benefitsList}>
                        <div className={styles.benefit}>
                            <div className={styles.benefitIcon}>📚</div>
                            <div>
                                <h4>Expert Curriculum</h4>
                                <p>Learn from real FTC scenarios</p>
                            </div>
                        </div>
                        <div className={styles.benefit}>
                            <div className={styles.benefitIcon}>🎯</div>
                            <div>
                                <h4>Practice Cases</h4>
                                <p>Test your decisions in realistic situations</p>
                            </div>
                        </div>
                        <div className={styles.benefit}>
                            <div className={styles.benefitIcon}>🤖</div>
                            <div>
                                <h4>AI Copilot</h4>
                                <p>Get instant feedback on your choices</p>
                            </div>
                        </div>
                        <div className={styles.benefit}>
                            <div className={styles.benefitIcon}>🏆</div>
                            <div>
                                <h4>Certification</h4>
                                <p>Earn recognition for your knowledge</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.guestNote}>
                        <strong>Note:</strong> Guest accounts can preview content but cannot earn certification.
                    </div>
                </div>
            </div>
        </div>
    );
}
