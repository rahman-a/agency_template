import React from 'react'
import {project, project__image, project__intro, project__title, project__para} from './Portfolio.module.scss'

const Project = ({animate, image, id, title, text}) => {
    return (
        <div className={project} data-aos={animate}>
           <img src={image} alt={`project-${id}`}  className={project__image}/>
           <div className={project__intro}>
            <h2 className={project__title}>{title}</h2>
            <p className={project__para}>{text}</p>
           </div>
        </div>
    )
}

export default Project
