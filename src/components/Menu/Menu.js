import React from 'react'
import Link from 'next/link'
import { slide as Menubar } from 'react-burger-menu'

const Menu = () => {
    return (
        <Menubar>
            <ul>
            <li><Link href='/' passHref>Home</Link></li>
            <li><Link href='/mijnwerk' passHref>Mijn werk</Link></li>
            <li><Link href='/contact' passHref>Contact</Link></li>
            <li><Link href='/prints' passHref>Prints</Link></li>
            <li><Link href='/overmij' passHref>Over mij</Link></li>
            </ul>
        </Menubar>
    )
}

export default Menu