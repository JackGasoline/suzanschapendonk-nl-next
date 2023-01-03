import React, {Fragment} from 'react'
import Link from 'next/link'
import { slide as Menubar } from 'react-burger-menu'
import styles from './Menu.module.scss'


const Menu = () => {

    return (
        <Menubar>
            <ul>
                <li><Link href='/' passHref>Home</Link></li>
                <li><Link href='/overmij' passHref>Over mij</Link></li>
                <li><Link href='/mijnwerk' passHref>Mijn werk</Link></li>
                <li><Link href='/inspiratieblogs' passHref>Inspiratieblogs</Link></li> 
                <li><Link href='/prints' passHref>Prints</Link></li>
                <li><Link href='/contact' passHref>Contact</Link></li>
            </ul>
            <div className={styles.sitecredits}>
                <span>Site designed and built by Roel Jorna</span>
                <span>Portraits by Saskia Lelieveld Photography</span>
            </div>
        </Menubar>
    )
}

export default Menu