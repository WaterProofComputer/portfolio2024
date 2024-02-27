import React, { useState } from 'react';
import './projects.scss';

function Projects() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className="App">
      <div className='projects-container'>
        <div className='projects-otsikko-container'>
          <h1 className='projects-otsikko'>Projects</h1>
        </div>
        <div className='projects-grid'>
          <div
            className='projects-wrapper'
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <img src='maalaus.png' className='project-image' alt='Project Image'></img>
            {isHovered1 && (
              <div className='project-description'>
                <p>Your project description goes here.</p>
              </div>
            )}
          </div>
          <div
            className='projects-wrapper'
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <img src='maalaus.png' className='project-image' alt='Project Image'></img>
            {isHovered2 && (
              <div className='project-description'>
                <p>Your project description goes here.</p>
              </div>
            )}
          </div>
          <div
            className='projects-wrapper'
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <img src='maalaus.png' className='project-image' alt='Project Image'></img>
            {isHovered3 && (
              <div className='project-description'>
                <p>Your project description goes here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
