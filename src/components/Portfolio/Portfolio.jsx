import React from 'react'
import Project from './Project'
import {portfolio,portfolio__wrapper} from './Portfolio.module.scss'
import SectionTitle from '../Section-Title/Section-Title'
import Img1 from '../../images/pro-1.jpg'
import Img2 from '../../images/pro-2.png'
import Img3 from '../../images/pro-3.png'

const Portfolio = () => {
    const all_projects = [
        {
            id:1,
            image:Img1,
            title:'GardenLand',
            text:`My creative ability is very difficult to measure because it can 
            manifest in so many surprising and.`
        },
        {
            id:2,
            image:Img2,
            title:'Natours',
            text:`My creative ability is very difficult to measure because it can 
            manifest in so many surprising and.`
        },
        {
            id:3,
            image:Img3,
            title:'Weather API',
            text:`My creative ability is very difficult to measure because it can 
            manifest in so many surprising and.`
        }
    ]
    return (
        <div class={portfolio}>
            <SectionTitle title='Portfolio' subtitle={`If you do it right, it will last forever.`}/>
            <div className="container">
                <div className={portfolio__wrapper}>
                    {all_projects.map(pro => (
                        <Project pro={pro} key={pro.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
