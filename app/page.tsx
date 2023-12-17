import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
    const menuItems = [
        { menuLink: '/link1', menuText: 'Link 1' },
        { menuLink: '/link2', menuText: 'Link 2' },
    ]

    return (
        <div id='component_Home'>
            <Navbar menuItems={menuItems} />

            <div>
                <h1>Home</h1>
            </div>
        </div>
    )
}
