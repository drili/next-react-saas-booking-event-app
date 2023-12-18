import React from 'react';
import RegistrationForm from '@/app/components/registration/RegistrationForm';
import Heading from '@/app/components/Heading';

import { Toaster } from 'react-hot-toast';

const RegisterPage: React.FC = () => {
    return (
        <div>
            <Heading
                headingText='Eventify Registration'
                align="center"
            />

            <RegistrationForm align="center" />

            <Toaster />
        </div>
    );
};

export default RegisterPage;