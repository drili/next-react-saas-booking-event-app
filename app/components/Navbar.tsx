import React from 'react'
import Link from 'next/link';

interface MenuObject {
    menuLink: string;
    menuText: string;
}

interface NavbarProps {
    menuItems: MenuObject[]
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  return (
    <div id='component_Navbar'>
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

export default Navbar