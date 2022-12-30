import React from 'react'
import { useRouter } from "next/router"
import styles from './Backbutton.module.scss'

const Backbutton = () => {
    const router = useRouter()

    return (
        <button className={styles.Backbutton} onClick={() => router.back()}>Back</button>
    )
}

export default Backbutton