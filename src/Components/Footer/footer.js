import React, { useState } from 'react';
import './footer.scss';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {



  return (
    <div className="App">
        <div className='footer-container'>
            <div className='footer-categories'>
                <div className='links'>
                    <p className='link-otsikko'>Links</p>
                    <a className='link-text' href='#about'>About</a>
                    <a className='link-text' href='#skills'>Skills</a>
                    <a className='link-text' href='#work'>Work</a>
                    <a className='link-text' href='#projects'>Projects</a>
                    <a className='link-text' href='#contact'>Contact</a>
                </div>
                <div className='links'>
                    <p className='link-otsikko'>Contact</p>
                    <a className='link-text' href=''>+358442358825</a>
                    <a className='link-text' href='mailto:leskelaviljami@gmail.com'>leskelaviljami@gmail.com</a>
                </div>
                <div className='links'>
                    <p className='link-otsikko'>Social</p>
                    <a href='https://www.linkedin.com/in/viljami-leskel%C3%A4-23432b292/'><FaLinkedin className='footer-icons'/></a>
                    <a href='https://github.com/WaterProofComputer/'><FaGithubSquare className='footer-icons'/></a>
                    <p className='footer-text'>© 2024 Viljami Leskelä</p>
                    <p className='footer-text'>All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
