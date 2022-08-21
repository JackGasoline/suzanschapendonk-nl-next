import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TypeIt from 'typeit-react'
import styles from './TypedHeader.module.scss'

const TypedHeader = ({ route }) => {
    return (
        <motion.h1 className={route === '/' ? styles.SiteHeaderMain : styles.SiteHeaderSub} layoutId="title">
             {route === '/' ? (<TypeIt options={{ cursor: false, lifeLike: true }}>
                <Link href='/' passHref>studio suzan schapendonk</Link>
            </TypeIt>) : <Link href='/' passHref>studio suzan schapendonk</Link>}
        </motion.h1>
    )
}

export default TypedHeader