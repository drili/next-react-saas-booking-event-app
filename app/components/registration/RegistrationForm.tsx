"use client"

import React, { useState } from 'react'
import axios from 'axios'

const RegistrationForm: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [domain, setDomain] = useState("")

    const handleRegister = async () => {
        try {
            console.log(`handleRegister()`);
            const response = await axios.post(`/api/auth`, {
                email,
                password,
                domain
            })

            if (response.status = 201) {
                console.log(`Registration was successful:`, response.data.message);
            } else {
                console.error('Registration failed:', response.data.error || 'Unexpected error');

            }
        } catch (error) {
            console.error("Registration failed.", error);
        }
    }

    return (
        <div id='component_RegistrationForm'>
            <h2>Admin User Registration</h2>

            <form>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Password:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label>Domain:</label>
                <input 
                    type='text'
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    required
                />

                <button type='button' onClick={handleRegister}>
                    Register Domain
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm