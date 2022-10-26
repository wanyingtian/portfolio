import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Ws.png'
import LogoSubtitle from '../../assets/images/TIAN.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = "nav-bar">
        <Link className = "logo" to= "/">
            <img src = {LogoS} alt = "logo"/>
            <img className = "sub-logo"  src = {LogoSubtitle} alt = "sublogo"/>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to ="/">
                <FontAwesomeIcon icon = {faHome} color = '#787774' />
            </NavLink>
            <NavLink 
                exact = "true" 
                activeclassname ="active"
                className= "about-link" 
                to ="/about"
            >
                <FontAwesomeIcon icon = {faUser} color = '#787774' />
            </NavLink>
            <NavLink 
                exact = "true" 
                activeclassname = "active"
                className = "contact-link" 
                to ="/contact"
            >
                <FontAwesomeIcon icon = {faEnvelope} color = '#787774' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel= "noreferrer"
                    href="https://www.linkedin.com/in/wanying-tian-96ab3218b/"
                >
                    <FontAwesomeIcon icon ={faLinkedin} color = '#787774' />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel= "noreferrer"
                    href="https://github.com/wanyingtian"
                >
                    <FontAwesomeIcon icon ={faGithub} color = '#787774' />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar