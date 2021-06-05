import React from 'react'
import {feature, feature__header, feature__para} from './Features.module.scss'

const Feature = ({icon, text, para}) => {
    return (
        <div className={feature}>
            <i className={icon}></i>
            <h1 className={feature__header}>{text}</h1>
            <p className={feature__para}>{para}</p>
        </div>
    )
}

export default Feature
