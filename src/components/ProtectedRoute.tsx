'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
    requireAuth?: boolean;
    requiredRole?: 'mentor' | 'admin';
}

export default function ProtectedRoute({
    children,
    requireAuth = true,
    requiredRole
}: ProtectedRouteProps) {
    const { user, userProfile, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (requireAuth && !user) {
                router.push('/auth');
            } else if (requiredRole && userProfile?.role !== requiredRole && userProfile?.role !== 'admin') {
                router.push('/dashboard');
            }
        }
    }, [user, userProfile, loading, requireAuth, requiredRole, router]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="animate-pulse">Loading...</div>
            </div>
        );
    }

    if (requireAuth && !user) {
        return null;
    }

    if (requiredRole && userProfile?.role !== requiredRole && userProfile?.role !== 'admin') {
        return null;
    }

    return <>{children}</>;
}
