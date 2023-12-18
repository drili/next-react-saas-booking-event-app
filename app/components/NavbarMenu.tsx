"use client"

import React, { useState } from 'react'

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';

interface MenuObject {
    menuLink: string;
    menuText: string;
}

interface NavbarMenuProps {
    menuItems: MenuObject[]
}


const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuItems }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div id='component_NavbarMenu'>
            <div className='navbarmenu-wrapper'>
                <Navbar fluid rounded >
                    <Navbar.Brand href="https://flowbite-react.com">
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Eventify</span>
                    </Navbar.Brand>

                    <div className="flex md:order-2">
                        {isLoggedIn ? (
                            <>
                                <Dropdown
                                    arrowIcon={false}
                                    inline
                                    label={
                                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                                    }
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm">Bonnie Green</span>
                                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                    <Dropdown.Item>Settings</Dropdown.Item>
                                    <Dropdown.Item>Earnings</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>Sign out</Dropdown.Item>
                                </Dropdown>
                                <Navbar.Toggle />
                            </>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <Link href="/login">Login</Link>
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