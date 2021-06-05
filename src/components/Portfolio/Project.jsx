import React from 'react'
import {project, project__image, project__intro, project__title, project__para} from './Portfolio.module.scss'

const Project = ({pro}) => {
    return (
        <div className={project}>
           <img src={pro.image} alt={`project-${pro.id}`}  className={project__image}/>
           <div className={project__intro}>
            <h2 className={project__title}>{pro.title}</h2>
            <p className={project__para}>{pro.text}</p>
           </div>
        </div>
    )
}

export default Project
