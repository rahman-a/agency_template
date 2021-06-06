import React from 'react'
import SectionTitle from '../Section-Title/Section-Title'
import {
    contact,
    contact__header, 
    contact__email,
    contact__social,
    contact__social_par,
    contact__list,
    contact__item,
    contact__link
} from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={contact}>
            <SectionTitle title='Contact' subtitle={`We are born to create`} id='contact'/>
            <div className="container">
                <h1 className={contact__header} data-aos='fade-down'>Feel free to drop us a line at:</h1>
                <h2 className={contact__email} data-aos='fade-up'> <a href='mailto:leonagency@mail.com'>leonagency@mail.com</a></h2>
                <div className={contact__social}>
                    <p className={contact__social_par} data-aos='fade-right'>Find us on social networks:</p>
                    <ul className={contact__list}  data-aos='fade-left'>
                        <li className={contact__item}>
                            <a href="/" className={contact__link}><i className="fas fa-globe-europe fa-2x"></i></a>
                        </li>
                        <li className={contact__item}>
                            <a href="/" className={contact__link}><i className="fab fa-facebook fa-2x"></i></a>
                        </li>
                        <li className={contact__item}>
                            <a href="/" className={contact__link}><i className="fab fa-twitter fa-2x"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact
