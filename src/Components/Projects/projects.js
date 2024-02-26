import React, {useState} from 'react';
import './projects.scss';

function Projects() {
  return (
    <div className="App">
        <div className='projects-container'>
            <div className='projects-otsikko-container'>
                <h1 className='projects-otsikko'>Projects</h1>
            </div>
            <div className='projects-grid'>
                <div className='projects-wrapper'>
                  <img src='logo192.png' className='project-image'></img>
                </div>
                <div className='projects-wrapper'>
                  <img src='logo192.png' className='project-image'></img>
                </div>
                <div className='projects-wrapper'>
                  <img src='logo192.png' className='project-image'></img>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Projects;
