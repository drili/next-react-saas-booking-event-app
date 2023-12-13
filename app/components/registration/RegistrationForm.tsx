"use client"

import React, { useState } from 'react'

const RegistrationForm: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [domain, setDomain] = useState("")

    const handleRegister = async () => {
        try {
            // TODO: Handle registration logic
            console.log(`handleRegister()`);
            
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