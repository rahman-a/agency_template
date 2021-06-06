import icon from '../../images/logo.png'
import {logo} from './Logo.module.scss'
import {HashLink as Link} from 'react-router-hash-link'

import React from 'react'

const Logo = () => <Link smooth to="#home"><img className={logo} src={icon} alt='logo'/></Link> 

export default Logo
