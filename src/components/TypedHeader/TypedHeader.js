import React from 'react'
import { motion } from 'framer-motion'
import { TypeIt } from 'typeit-react'
import styles from './TypedHeader.module.scss'

const TypedHeader = ({ route }) => {
    return (
        <motion.h1 className={route === '/' ? styles.SiteHeaderMain : styles.SiteHeaderSub} layoutId="title">
        studio suzan schapendonk
        </motion.h1>
    )
}

export default TypedHeader