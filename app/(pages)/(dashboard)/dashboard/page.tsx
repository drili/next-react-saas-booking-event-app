"use client"

import React from 'react'
import { useAuth } from '@/app/context/AuthProvider'

interface DashboardPageProps {
    user: object
    email: string
}

const DashboardPage: React.FC<DashboardPageProps> = () => {
    const { user, isAuthenticated, logout } = useAuth() || { user: null, isAuthenticated: () => false, logout: () => {} };
    
    if (!isAuthenticated()) {
        return <div>You are not authenticated. Redirecting...</div>;
    }

    const userLoggedIn = (user as any)?.user

    console.log({userLoggedIn});
    console.log({isAuthenticated});
    

    return (
        <div>
            <h1>DashboardPage</h1>

            <p>User logged in: {userLoggedIn?.email}</p>
        </div>
    )
}

export default DashboardPage
