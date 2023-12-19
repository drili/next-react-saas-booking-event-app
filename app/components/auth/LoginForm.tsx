"use client"

import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/app/context/AuthProvider';
import { setAuthToken } from '@/app/utility/auth';

interface LoginFormProps {
    align: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ align }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { user, isAuthenticated, logout, setUser, updateUser } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await axios.post("/api/login", { email, password });

            if (response.status === 200) {
                const userData = response.data;

                // Update the authentication context with the user data
                updateUser(userData);

                // Set the authentication token in localStorage
                setAuthToken(userData.token);

                // Redirect the user to the dashboard or any other authenticated page
                router.push('/dashboard');
            } else {
                console.error('Login failed:', response.data.error || 'Unexpected error');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div id='component_LoginForm' className={`flex justify-${align}`}>
            <form className='flex max-w-[600px] w-full flex-col gap-4'>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        placeholder={email}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        placeholder={password}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Button type="button" color='dark' onClick={handleLogin}>Login To Domain</Button>
            </form>
        </div>
    )
}

export default LoginForm