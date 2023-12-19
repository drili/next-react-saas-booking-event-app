"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthProvider';

interface HomeProps {
    user: object;
}

const Home: React.FC<HomeProps> = () => {
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();
    const userLoggedIn = (user as any)?.user;

    useEffect(() => {
        if (isAuthenticated() && userLoggedIn) {
            router.push(`/dashboard/${userLoggedIn._id}`);
        }
    }, [isAuthenticated, userLoggedIn, router]);

    return <div>Home Page</div>;
};

export default Home;
