import React from 'react'
import { NextSeo, ProfilePageJsonLd } from 'next-seo'
import { motion } from 'framer-motion'
import Menu from '../Menu/Menu'
import TypedHeader from '../TypedHeader/TypedHeader'

const variants = {
    hidden: { opacity: 0, y: 0 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 1, y: '100vh' },
}

const Layout = ({ children, title, description, canonical, route }) => (
    <div>
        <NextSeo title={title} description={description} canonical={canonical} openGraph={{ title, description }} />
        <TypedHeader route={route} />
        <Menu />
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear', duration: 2 }}
        >
            {children}
        </motion.main>
    </div>
)

export default Layout