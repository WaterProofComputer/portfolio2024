import React, {useState} from 'react';
import './header.scss';
import './navbar.scss';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Header() { 

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="App">
            <body>
            <div className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className='rightnavbar'>
            <h1 className='nimi'>Viljami</h1>
            <div className='gap'></div>
            <li><a className="navbartext" href="#">About</a></li>
            <li><a className="navbartext" href="#">Skills</a></li>
            <li><a className="navbartext" href="#">Work</a></li>
            <li><a className="navbartext" href="#">Projects</a></li>
            <li><a className="navbartext" href="#">Contact</a></li>
            </div>
            </ul>
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
            </div>
            <div className='header-container'>
                <div className='div-50'>
                <div className='header-otsikko-box'>
                    <h1 className='header-otsikko'>
                    HI I'M VILJAMI LESKELÄ</h1>
                    <h1 className='header-otsikko'>
                    SOFTWARE DEVELOPER</h1>
                </div>
                <div className='header-text-box'>
                    <p className='header-text'>Hello there! I'm Viljami Leskelä, a dedicated
                    software developer with a passion for crafting innovative solutions.
                    Welcome to my portfolio!</p>
                </div>
                <div className='icon-container'>
                    <FaLinkedin className='icons'/>
                    <FaGithubSquare className='icons'/>
                </div>
                <div className='button-container'>
                    <button className='contact-button'>Contact Me!</button>
                </div>
                </div>
                <div className='div-50'>
                    <img src='omakuva.jpg' className='omakuva'></img>
                </div>
            </div>
            </body>
        </div>
    );
}
export default Header;