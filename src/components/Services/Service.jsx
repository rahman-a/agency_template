import React from 'react'
import {service, service__content, service__header, service__para} from './Services.module.scss'

const Service = ({icon, text, para}) => {
    return (
        <div className={service}>
            <i className={icon}></i>
            <div className={service__content}>
                <h1 className={service__header}>{text}</h1>
                <p className={service__para}>{para}</p>
            </div>
        </div>
    )
}

export default Service
