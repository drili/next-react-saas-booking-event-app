// AuthProvider.tsx

import React, { createContext, useContext, useEffect, useState, ReactNode, SetStateAction, Dispatch } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthToken, removeAuthToken } from '../utility/auth';

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    name: string;
}

interface AuthContextProps {
    user: User | null;
    isAuthenticated: () => boolean;
    logout: () => void;
    updateUser: (newUser: User | null) => void;
    setUser: Dispatch<SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(() => {
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem('user');
            return storedUser ? JSON.parse(storedUser) : null;
        }
        return null;
    });

    const isAuthenticated = () => {
        const token = getAuthToken();
        return !!token;
    };

    const logout = () => {
        removeAuthToken();
        setUser(null);
        localStorage.removeItem('user');
        router.push('/');
    };

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/');
        }
    }, [router]);

    const updateUser = (newUser: User | null) => {
        setUser(newUser);
        localStorage.setItem('user', newUser ? JSON.stringify(newUser) : '');
    };

    const contextValue: AuthContextProps = {
        user,
        isAuthenticated,
        logout,
        setUser,
        updateUser,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};