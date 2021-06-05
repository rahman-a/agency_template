import React from 'react'
import {landing,landing__intro,landing__header,landing__para} from './Landing.module.scss'


const Landing = () => {
    return (
        <div className={landing}>
           <div className={landing__intro}>
               <h1 className={landing__header}>Hello There!</h1>
               <p className={landing__para}>We are Leon - Super Creative & Minimal Agency  Web Template</p>
           </div>
        </div>
    )
}

export default Landing
