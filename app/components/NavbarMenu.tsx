"use client"

import React, { useState } from 'react'

import { Avatar, Button, Dropdown, Navbar, Badge } from 'flowbite-react';
import Link from 'next/link';

import { useAuth } from '@/app/context/AuthProvider';

interface MenuObject {
    menuLink: string;
    menuText: string;
}

interface NavbarMenuProps {
    menuItems: MenuObject[]
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuItems }) => {
    const { user, isAuthenticated, logout } = useAuth();

    const userLoggedIn = (user as any)?.user

    return (
        <div id='component_NavbarMenu' className='mb-10'>
            <div className='navbarmenu-wrapper'>
                <Navbar fluid rounded >
                    <Navbar.Brand href="https://flowbite-react.com">
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Eventify</span>
                    </Navbar.Brand>

                    <div className="flex md:order-2">
                        {isAuthenticated() ? (
                            <span className='flex items-center gap-4'>
                                <div>
                                    <Badge color="gray">{userLoggedIn?.plan}</Badge>
                                </div>

                                <Dropdown
                                    arrowIcon={false}
                                    inline
                                    label={
                                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                                    }
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm mb-2">{userLoggedIn?.domain}</span>
                                        <span className="block truncate text-sm font-medium">{userLoggedIn?.email}</span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                    <Dropdown.Item>User Settings</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                                </Dropdown>
                                <Navbar.Toggle />
                            </span>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <Link href="/registration">
                                    <Button color='gray'>
                                        Register
                                    </Button>
                                </Link>
                                <Link href="/login">
                                    <Button color='dark'>
                                        Login
                                    </Button>
                                </Link>
                                <Navbar.Toggle />
                            </div>
                        )}
                    </div>

                    <Navbar.Collapse>
                        {menuItems.map((item, index) => (
                            <Navbar.Link href={item.menuLink} key={index}>
                                {item.menuText}
                            </Navbar.Link>
                        ))}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavbarMenu