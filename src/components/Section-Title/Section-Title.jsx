import React from 'react'
import {section, section__title, section__subtitle} from './Section-Title.module.scss'

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className={section}>
            <h1 className={section__title}>{title}</h1>
            <p className={section__subtitle}>{subtitle}</p>
        </div>
    )
}

export default SectionTitle
