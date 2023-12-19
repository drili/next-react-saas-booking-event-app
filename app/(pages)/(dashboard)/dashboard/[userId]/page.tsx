"use client"

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import { useAuth } from '@/app/context/AuthProvider'

interface DashboardPageUniqueProps {
    user: object
    email: string
}

const DashboardPageUnique: React.FC<DashboardPageUniqueProps> = () => {
    const [hydrated, setHydrated] = useState(false);
    const { user, isAuthenticated, logout } = useAuth() || { user: null, isAuthenticated: () => false, logout: () => { } };
    const params = useParams<{ tag: string; item: string, userId: string }>()
    const router = useRouter()
    const userLoggedIn = (user as any)?.user

    useEffect(() => {
        setHydrated(true);

        if (params.userId !== userLoggedIn._id) {
            router.push(`/dashboard/${userLoggedIn._id}`);
        }
    }, [isAuthenticated, router, user, params])

    if (!hydrated) {
        return null;
    }

    if (!isAuthenticated()) {
        router.push(`/`);
    }

    console.log({ userLoggedIn });
    console.log({ isAuthenticated });
    console.log(`params userId: ${params.userId}`);

    return (
        <div>
            <h1>DashboardPageUnique</h1>

            <p>User logged in: {userLoggedIn?.email}</p>
        </div>
    )
}

export default DashboardPageUnique