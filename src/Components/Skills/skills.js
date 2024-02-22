import React, {useState} from 'react';
import './skills.scss';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";


function Skills() { 


    return (
        <div className="App">
            <div className='skills-container'>
                <div className='box-50'>
                    <div className='skills-header-container'>
                    <h1 className='skills-header-text'>Skills</h1>
                    </div>
                    <div className='skills-text-container'>
                    <p className='skill-text'>I am a second-year student studying
                    Information and Communication Technology
                    at OSAO. I am an enthusiastic and motivated
                    software developer, with a solid foundation in 
                    programming languages such as HTML, CSS, 
                    JavaScript, PHP, MySQL, Python, and C#. I have
                    experience in making websites with React.</p>
                    </div>
                    <div className='skills-text-container'>
                    <p className='skill-text'>Technologies I've Worked With:</p>
                    <div className='tech-grid'>
                        <div className='tech-icon-background'>
                        <IoLogoJavascript style={{ color: '#FFD600' }} className='tech-icon'/>
                        </div>
                        <div className='tech-icon-background'>
                        <FaReact style={{ color: '#61DBFB' }} className='tech-icon'/>
                        </div>
                        <div className='tech-icon-background'>
                        <FaCss3Alt style={{ color: '#2965f1' }} className='tech-icon'/>
                        </div>
                        <div className='tech-icon-background'>
                        <FaSass style={{ color: '#cc6699' }} className='tech-icon'/>
                        </div>
                        <div  className='tech-icon-background'>
                        <SiTypescript style={{ color: '#3178c6' }} className='tech-icon'/>
                        </div>
                        <div style={{ color: '#3178c6' }} className='tech-icon-background'>
                        <SiMysql className='tech-icon'/>
                        </div>
                        <div style={{ color: '#e34c26' }} className='tech-icon-background'>
                        <FaHtml5 className='tech-icon'/>
                        </div>
                        <div style={{ color: '#3c873a' }} className='tech-icon-background'>
                        <FaNodeJs className='tech-icon'/>
                        </div>
                        <div style={{ color: '#484C89' }} className='tech-icon-background'>
                        <FaPhp className='tech-icon'/>
                        </div>
                        <div style={{ color: '#FFDE57' }} className='tech-icon-background'>
                        <FaPython className='tech-icon'/>
                        </div>
                        <div style={{ color: '#8030a3' }} className='tech-icon-background'>
                        <FaGithub className='tech-icon'/>
                        </div>
                        <div style={{ color: '#9b4993' }} className='tech-icon-background'>
                        <SiCsharp className='tech-icon'/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='box-50'>
                    <div className='services-grid'>
                        <div className='services-wrapper'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="s-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
                            <p style={{ textAlign: 'center' }} className='skill-text'>Frontend Development</p>
                        </div>
                        <div className='services-wrapper'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="s-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
                            <p style={{ textAlign: 'center' }} className='skill-text'>Backend Development</p>
                        </div>
                        <div className='services-wrapper'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="s-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
                            <p style={{ textAlign: 'center' }} className='skill-text'>Responsive Design</p>
                        </div>
                        <div className='services-wrapper'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="s-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
                            <p style={{ textAlign: 'center' }} className='skill-text'>Site Maintenance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;