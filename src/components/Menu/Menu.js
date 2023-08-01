import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { slide as Menubar } from 'react-burger-menu'
import styles from './Menu.module.scss'


const Menu = (props) => {

    return (
        <Menubar>
            <ul>
                <li>{props.route !== '/' ? <Link href='/' passHref>Home</Link> : 'Home'}</li>
                <li>{props.route !== '/overmij' ? <Link href='/overmij' passHref>Over mij</Link> : 'Over mij'}</li>
                <li>{props.route !== '/mijnwerk' ? <Link href='/mijnwerk' passHref>Mijn werk</Link> : 'Mijn werk'}</li>
                <li>{props.route !== '/inspiratieblogs' ? <Link href='/inspiratieblogs' passHref>Inspiratieblogs</Link> : 'Inspiratieblogs'}</li> 
                <li>{props.route !== '/prints' ? <Link href='/prints' passHref>Prints bestellen</Link> : 'Prints bestellen'}</li>
                <li>{props.route !== '/contact' ? <Link href='/contact' passHref>Contact</Link> : 'Contact'}</li>
            </ul>
            <div className={styles.sitecredits}>
                <span>Site designed and built by Roel Jorna</span>
                <span>Portraits by Saskia Lelieveld Photography</span>
            </div>
        </Menubar>
    )
}

export default Menu