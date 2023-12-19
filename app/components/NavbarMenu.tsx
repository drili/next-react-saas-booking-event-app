"use client"

import { useAuth } from '@/app/context/AuthProvider';

import { Avatar, Button, Dropdown, Navbar, Badge } from 'flowbite-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface MenuObject {
    menuLink: string;
    menuText: string;
}

interface NavbarMenuProps {
    menuItems: MenuObject[];
}

const NavbarMenu: React.FC<NavbarMenuProps> = () => {
    const [hydrated, setHydrated] = useState(false);
    const [menuItemsState, setMenuItemsState] = useState<MenuObject[]>([]);
    const { user, isAuthenticated, logout } = useAuth();
    const userLoggedIn = (user as any)?.user

    useEffect(() => {
        setHydrated(true);

        const defaultMenuItems: MenuObject[] = isAuthenticated() && userLoggedIn
            ? [
                { menuLink: `/dashboard/${userLoggedIn?._id}`, menuText: 'Dashboard' },
                { menuLink: '/events', menuText: 'Events' },
                { menuLink: '/something-else', menuText: 'Something Else' },
            ]
            : [
                { menuLink: '/link1', menuText: 'Link 1' },
                { menuLink: '/link2', menuText: 'Link 2' },
                { menuLink: '/link3', menuText: 'Link 3' },
            ];
        setMenuItemsState(defaultMenuItems);
    }, [isAuthenticated, userLoggedIn, logout])

    if (!hydrated) {
        return null;
    }

    let userMenuItems: MenuObject[] = [];
    
    return (
        <div id='component_NavbarMenu' className='mb-10'>
            <div className='navbarmenu-wrapper'>
                <Navbar fluid rounded >
                    <Link href="/" className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
                        Eventify
                    </Link>

                    <div className="flex md:order-2">
                        <span className='flex items-center gap-4'>
                            {isAuthenticated() && userLoggedIn ? (
                                <>
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
                                        <Dropdown.Item href={`/dashboard/${userLoggedIn?._id}`}>Dashboard</Dropdown.Item>
                                        <Dropdown.Item>User Settings</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                                    </Dropdown>
                                </>
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
                                </div>
                            )}
                            <Navbar.Toggle />
                        </span>

                    </div>

                    <Navbar.Collapse>
                        {menuItemsState.map((item, index) => (
                            <Link href={item.menuLink} key={index}>
                                {item.menuText}
                            </Link>
                        ))}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavbarMenu