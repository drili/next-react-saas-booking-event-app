"use client"

import { Inter } from 'next/font/google'

import './globals.css'
import "./assets/css/reset.css"
import "./assets/css/flowbite-overrides.css"

import NavbarMenu from './components/NavbarMenu'
import { AuthProvider } from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex justify-center`}>
                <div className='container'>

                    <AuthProvider>
                        <NavbarMenu menuItems={[]}/>
                        {children}
                    </AuthProvider>
                </div>
            </body>
        </html>
    )
}
