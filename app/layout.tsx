"use client"

import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

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
    const menuItems = [
        { menuLink: '/link1', menuText: 'Link 1' },
        { menuLink: '/link2', menuText: 'Link 2' },
    ]

    return (
        <html lang="en">
            <body className={`${inter.className} flex justify-center`}>
                <main className='container'>

                    <AuthProvider>
                        <NavbarMenu menuItems={menuItems} />
                        {children}
                    </AuthProvider>
                </main>
            </body>
        </html>
    )
}
