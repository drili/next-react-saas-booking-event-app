"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

interface RegistrationFormProps {
    align: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ align }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [domain, setDomain] = useState("")

    const handleRegister = async () => {
        try {
            console.log(`handleRegister()`);
            const response = await axios.post(`/api/register`, {
                email,
                password,
                domain
            })

            if (response.status = 201) {
                console.log(`Registration was successful:`, response.data.message);

                toast.success("Registration was successful.")
                clearForm()
            } else {
                console.error('Registration failed:', response.data.error || 'Unexpected error');

                toast.error("Registration failed.")
            }
        } catch (error) {
            console.error("Registration failed.", error);

            toast.error("Registration failed.")
        }
    }

    const clearForm = async () => {
        setEmail("")
        setPassword("")
        setDomain("")
    }

    return (
        <div id='component_RegistrationForm' className={`flex justify-${align}`}>
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

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="domain" value="Your domain" />
                    </div>
                    <TextInput
                        id="domain"
                        type="domain"
                        placeholder={domain}
                        required
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                    />
                </div>

                <Button type="button" color='dark' onClick={handleRegister}>Register Domain</Button>
            </form>

            <Toaster />
        </div>
    )
}

export default RegistrationForm