import React from 'react'
import TypeIt from 'typeit-react'
import styles from './TypedHeader.module.scss'

const TypedHeaderBasic = ({ title }) => {
    return (
        <h1 className={styles.PageHeader}>
             <TypeIt options={{ cursor: false, lifeLike: true }}>
                {title}
            </TypeIt>
        </h1>
    )
}

export default TypedHeaderBasic