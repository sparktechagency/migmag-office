'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserDashboard from '@/pages/user-dashboard/UserDashboard';

const UserDashboardPage: React.FC = () => {
    const router = useRouter();
    const [tokenChecked, setTokenChecked] = useState(false);
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
            setHasToken(false);
        } else {
            setHasToken(true);
        }
        setTokenChecked(true);
    }, [router]);

    if (!tokenChecked) return null; // loading spinner optionally

    return <>{hasToken && <UserDashboard />}</>;
};

export default UserDashboardPage;
