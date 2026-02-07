import type { Metadata } from 'next';
import { AuthProvider } from '@/contexts/AuthContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'FTC Mentor Academy - Learn Ethical Mentorship Boundaries',
    description: 'Master the boundary between guiding and doing. Protect student ownership in FIRST Tech Challenge.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <LanguageProvider>
                    <AuthProvider>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </AuthProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}
