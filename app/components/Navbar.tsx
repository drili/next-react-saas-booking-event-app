import React from 'react'
import Link from 'next/link';

interface MenuObject {
    menuLink: string;
    menuText: string;
}

interface NavbarMenuProps {
    menuItems: MenuObject[]
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuItems }) => {
  return (
    <div id='component_NavbarMenu'>
        <nav>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.menuLink}>
                            {item.menuText}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default NavbarMenu