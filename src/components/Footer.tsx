import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    {/* Brand Section */}
                    <div className={styles.brandSection}>
                        <h3 className={styles.brandName}>FTC Mentor Academy</h3>
                        <p className={styles.brandTagline}>
                            Mastering ethical mentorship boundaries in FIRST Tech Challenge
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksSection}>
                        <h4 className={styles.linksTitle}>Learn</h4>
                        <ul className={styles.linksList}>
                            <li><Link href="/curriculum">Curriculum</Link></li>
                            <li><Link href="/cases">Practice Cases</Link></li>
                            <li><Link href="/generate-case">AI Generator</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className={styles.linksSection}>
                        <h4 className={styles.linksTitle}>Tools</h4>
                        <ul className={styles.linksList}>
                            <li><Link href="/copilot">Mentor Copilot</Link></li>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div className={styles.linksSection}>
                        <h4 className={styles.linksTitle}>Community</h4>
                        <ul className={styles.linksList}>
                            <li><Link href="/auth">Sign Up</Link></li>
                            <li><a href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noopener noreferrer">Official FTC</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} FTC Mentor Academy. All rights reserved.
                    </p>
                    <p className={styles.disclaimer}>
                        Not officially affiliated with <em>FIRST</em>®️. Built to support the FTC mentor community.
                    </p>
                </div>
            </div>
        </footer>
    );
}
