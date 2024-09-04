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
        <div id='skills' className="App">
            <div className='skills-container'>
                <div className='box-50'>
                    <div className='skills-header-container'>
                    <h1 className='skills-header-text'>Skills</h1>
                    </div>
                    <div className='skills-text-container'>
                    <p className='skill-text'>I am a third-year student studying
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
                            <p style={{ textAlign: 'center' }} className='services-text'>Frontend Development</p>
                        </div>
                        <div className='services-wrapper'>
                        <svg className="s-icon"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z"
    fill="currentColor"
  />
  <path d="M15 14H11V16H15V14Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z"
    fill="currentColor"
  />
</svg>
                            <p style={{ textAlign: 'center' }} className='services-text'>Backend Development</p>
                        </div>
                        <div className='services-wrapper'>
                        <svg className='s-icon'  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15h12M6 6h12m-6 12h0m-5 3h10c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H7a1 1 0 0 0-1 1v16c0 .6.4 1 1 1Z"/>
  </svg>
                            <p style={{ textAlign: 'center' }} className='services-text'>Responsive Design</p>
                        </div>
                        <div className='services-wrapper'>
                        <svg className='s-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" ><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"></path></svg>
                            <p style={{ textAlign: 'center' }} className='services-text'>Site Maintenance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;