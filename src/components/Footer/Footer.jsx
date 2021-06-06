import React from 'react'
import {footer, footer__par} from './Footer.module.scss'


const Footer = () => {
    const date = new Date()
    return (
        <div className={footer}>
            <p className={footer__par}>
                All Copyright &copy; reserved - {date.getFullYear()}
            </p>
        </div>
    )
}

export default Footer
