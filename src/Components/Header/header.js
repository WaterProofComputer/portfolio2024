import React, {useState} from 'react';
import './header.scss';
import './navbar.scss';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

function Header() { 

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div id='about' className="App">
            <div className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className='rightnavbar'>
            <div className='nimi-container'>
            <h1 className='nimi'>Viljami</h1>
            </div>
            <div className='gap'></div>
            <div className='header-links-container'>
            <li><a className="navbartext" href="#about">About</a></li>
            <li><a className="navbartext" href="#skills">Skills</a></li>
            <li><a className="navbartext" href="#work">Work</a></li>
            <li><a className="navbartext" href="#projects">Projects</a></li>
            <li><a className="navbartext" href="#contact">Contact</a></li>
            </div>
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
                    <h1 className='header-otsikko2'>
                    SOFTWARE DEVELOPER</h1>
                </div>
                <div className='header-text-box'>
                    <p className='header-text'>Hello there! I'm Viljami Leskelä, a dedicated
                    software developer with a passion for crafting innovative solutions.
                    Welcome to my portfolio!</p>
                </div>
                <div className='icon-container'>
                <a href='https://www.linkedin.com/in/viljami-leskel%C3%A4-23432b292/'><FaLinkedin className='icons'/></a>
                <a href='https://github.com/WaterProofComputer/'><FaGithubSquare className='icons'/></a>
                <a href='ViljamiLeskeläCV.pdf ' download='ViljamiLeskeläCV.pdf'><FaAddressBook className='icons' /></a>
                </div>
                <div className='button-container'>
                    <a href='#contact' className='contact-button'>Contact Me!</a>
                    <a href='ViljamiLeskeläCV.pdf ' download='ViljamiLeskeläCV.pdf' className='CV-button'>Download CV</a>
                </div>
                </div>
                <div className='div-50'>
                    <img src='omakuva.jpg' className='omakuva'></img>
                </div>
            </div>
        </div>
    );
}
export default Header;