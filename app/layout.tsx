import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import "./assets/css/reset.css"
import "./assets/css/flowbite-overrides.css"

import NavbarMenu from './components/NavbarMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

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

                    <NavbarMenu menuItems={menuItems} />
                    {children}

                </main>
            </body>
        </html>
    )
}
