import React, {useRef} from 'react'
import {navbar, nav_btn, list, list_wrapper, item, link,top_arrow} from './Navbar.module.scss'
import { useDetectClickOutside } from 'react-detect-click-outside';

const Navbar = () => {   
    const list_ref = useRef(null)  
    const nav_ref = useRef(null) 
    const topArrow = useRef(null) 
    const list_wrapper_ref = useDetectClickOutside({ onTriggered: (e) => {
       const listWrapperHeight = list_wrapper_ref.current.getBoundingClientRect().height
       const listHeight = list_ref.current.getBoundingClientRect().height
       if(listWrapperHeight < 10 && (e.target.parentNode === nav_ref.current || e.target.parentNode === nav_ref.current.parentNode)) {
           list_wrapper_ref.current.style.height = `${listHeight}px`
           topArrow.current.style.display = `block`
       }else {
        list_wrapper_ref.current.style.height = 0
        topArrow.current.style.display = `none`
       }
    } });

    return (
        <div className={navbar} >
            <span className={nav_btn} ref={nav_ref}>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <span className={top_arrow} ref={topArrow}></span>
            <div 
            className={list_wrapper} 
            ref={list_wrapper_ref} 
            >
                <ul className={list} ref={list_ref}>
                    <li className={item}><a href="#services" className={link}>Services</a></li>
                    <li className={item}><a href="#portfolio" className={link}>Portfolio</a></li>
                    <li className={item}><a href="#about" className={link}>About</a></li>
                    <li className={item}><a href="#contact" className={link}>Contact</a></li>
                </ul>
            </div>
           
        </div>
    )
}


export default Navbar
