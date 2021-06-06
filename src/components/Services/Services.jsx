import React from 'react'
import {services,services__container, services__wrapper, services__image} from './Services.module.scss'
import Service from './Service'
import serviceImage from '../../images/service.png'
import SectionTitle from '../Section-Title/Section-Title'

const Services = () => {
    const all_services = [
        {
            id:1,
            icon:'fas fa-palette fa-2x',
            text:'Graphic Design',
            para:`Graphic design is the process of visual 
            communication and problem-solving 
            using one or more of typography, 
            photography and illustration.`,
            animate:'fade-right'
        },
        {
            id:2,
            icon:'fab fa-sketch fa-2x',
            text:'Web Design',
            para:`Web design encompasses many different 
            skills and disciplines in the production 
            and maintenance of websites.`,
            animate:'fade-right'
        },
        {
            id:3,
            icon:'fas fa-vector-square fa-2x',
            text:'UI & UX',
            para:`Process of enhancing user satisfaction 
            with a product by improving the 
            usability, accessibility, and pleasure 
            provided in the interaction.`,
            animate:'fade-right'
        },
        {
            id:4,
            icon:'fas fa-pencil-ruler fa-2x',
            text:'Web Development',
            para:`Web development is a broad term for 
            the work involved in developing a web site 
            for the Internet or an intranet.`,
            animate:'fade-right'
        }
    ]
    return (
        <div className={services}>
            <SectionTitle title='services' subtitle={`Don't be busy, be productive`} id='services'/>
            <div className="container">
                <div className={services__container}>
                    <div className={services__wrapper}>
                        {all_services.map(srv => (
                            <Service 
                            key={srv.id} 
                            icon={srv.icon} 
                            text={srv.text} 
                            para={srv.para}
                            animate={srv.animate}/>
                        ))}
                    </div>
                    <div className={services__image} data-aos='fade-left'>
                        <img src={serviceImage} alt="service" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
