import React from 'react';

import Heading from '@/app/components/Heading';
import LoginForm from '@/app/components/auth/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <div>
            <Heading
                headingText='Eventify Login'
                align="center"
            />

            <LoginForm align="center" />

        </div>
    );
};

export default LoginPage;