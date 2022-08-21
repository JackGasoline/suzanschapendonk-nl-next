import React from 'react'
import Link from 'next/link'
import { slide as Menubar } from 'react-burger-menu'

const Menu = () => {
    return (
        <Menubar>
            <Link href='/' passHref>Home</Link>
            <Link href='/mijnwerk' passHref>Mijn werk</Link>
            <Link href='/contact' passHref>Contact</Link>
            <Link href='/prints' passHref>Prints</Link>
            <Link href='/overmij' passHref>Over mij</Link>
        </Menubar>
    )
}

export default Menu