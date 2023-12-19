import React from 'react';
import Link from 'next/link';

import RegistrationForm from '@/app/components/auth/RegistrationForm';
import Heading from '@/app/components/Heading';

const RegisterPage: React.FC = () => {
    return (
        <div>
            <Heading
                headingText='Eventify Registration'
                align="center"
            />

            <RegistrationForm align="center" />

            <div className='flex justify-center mt-10 gap-2'>
                <p>Already got an account?</p>
                <Link href="/login">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;