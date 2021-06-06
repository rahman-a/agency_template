import React from 'react'
import {
    about, about__wrapper, 
    about__image, 
    about__text, 
    about__header, 
    about__para
} from './About.module.scss'
import SectionTitle from '../Section-Title/Section-Title'
import Image from '../../images/service.png'

const About = () => {
    return (
        <div className={about}>
            <SectionTitle title='About' subtitle={`Less is more work`} id='about'/>
            <div className="container">
                <div className={about__wrapper}>
                    <div className={about__image} data-aos='flip-left'>
                        <img src={Image} alt="About me" />
                    </div>
                    <div className={about__text} data-aos='zoom-in-up'>
                        <h3 className={about__header}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore.
                        </h3>
                        <p className={about__para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliqu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
