import React from 'react'
import Feature from './Feature'
import {features, features__wrapper} from './Features.module.scss'

const Features = () => {
    const all_features = [
        {
            id:1,
            icon:'fas fa-magic fa-3x',
            text:'Tell Us Your Idea',
            para:`Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut lab`
        },
        {
            id:2,
            icon:'far fa-gem fa-3x',
            text:'We Will Do All The WOrk',
            para:`Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut lab`
        },
        {
            id:3,
            icon:'fas fa-globe-asia fa-3x',
            text:'Your Product is Worldwide',
            para:`Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut lab`
        }
    ]
    return (
        <div className={features}>
            <div className="container">
                <div className={features__wrapper}>
                    {all_features.map(feat => (
                    <Feature icon={feat.icon} text={feat.text} para={feat.para} key={feat.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features
