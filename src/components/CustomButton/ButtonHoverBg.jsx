import React from 'react'
import styles from './ButtonHoverBg.module.css'

export default function ButtonHoverBg({buttonStyles, label, onClick}) {
    return (
        <button className={`${buttonStyles} ${styles.buttonHoverBg}`} onClick={onClick}><p>{label}</p></button>
    )
}