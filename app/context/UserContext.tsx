"use client"

import { createContext, ReactNode, useContext, useState } from 'react';

interface UserContextProps {
    children: ReactNode;
}

interface User {
    _id: string;
    email: string;
    domain: string;
    plan: string;
}

interface UserContextValue {
    user: User | null;
    setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined)

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const contextValue: UserContextValue = {
        user,
        setUser,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

