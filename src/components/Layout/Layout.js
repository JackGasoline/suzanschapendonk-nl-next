import React from 'react'
import { NextSeo, ProfilePageJsonLd } from 'next-seo'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Menu from '../Menu/Menu'
import TypedHeader from '../TypedHeader/TypedHeader'
import divider from "../../assets/divider.png";
import styles from './Layout.module.scss'
import Backbutton from '../Backbutton/Backbutton'

const variants = {
    hidden: { opacity: 0, y: 0 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 1, y: '100vh' },
}

const gradientVariants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}

const Layout = ({ children, title, description, canonical, route }) => (
    <div className={styles.siteContainer}>
        <NextSeo title={title} description={description} canonical={canonical} openGraph={{ title, description }} />
        <TypedHeader route={route} />
        <div className={styles.topGradient + (route === '/' ? ' ' + styles.invisible : '')}>
            <div className={styles.lineContainer}>
                <Image
                src={divider}
                alt="Divider"
                layout="fill"
                objectFit="contain"
                sizes="100vw"
                />
            </div>
            <Backbutton />
        </div>
        <Menu />
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear', duration: 2 }}
            className={styles.mainBlock}
        >
            {children}
        </motion.main>
        <div className={styles.bottomGradient + (route === '/' ? ' ' + styles.invisible : '')}>
            <div className={styles.lineContainer}>
                <Image
                src={divider}
                alt="Divider"
                layout="fill"
                objectFit="contain"
                sizes="100vw"
                />
            </div>
        </div>
    </div>
)

export default Layout