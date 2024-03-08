import React, { useState } from 'react';
import './projects.scss';

function Projects() {

  const [isHovered, setIsHovered] = useState(false);

  function changeTransformValue() {
    setIsHovered(true);
  }

  function resetTransformValue() {
    setIsHovered(false);
  }

  return (
    <div className="App">
      <div className='projects-container'>
        <div className='projects-otsikko-container'>
          <h1 className='projects-otsikko'>Projects</h1>
        </div>
        <div className='projects-grid'>
        <div
            className={`projects-wrapper ${isHovered ? 'hovered' : ''}`}
            onMouseOver={changeTransformValue}
            onMouseOut={resetTransformValue}>
            <img src='maalaus.png' className='project-image' alt='Project Image'></img>
              <div className='project-description'>
                <h1>Kotkantien Maalaus Ja Tapetointi</h1>
                <p>Your project description goes here.</p>
              </div>
          </div>
          <div
            className={`projects-wrapper ${isHovered ? 'hovered' : ''}`}
            onMouseOver={changeTransformValue}
            onMouseOut={resetTransformValue}>
            <img src='weather.png' className='project-image' alt='Project Image'></img>
              <div className='project-description'>
                <h1>Simple Weather App</h1>
                <p>Your project description goes here.</p>
              </div>
          </div>
          <div
            className={`projects-wrapper ${isHovered ? 'hovered' : ''}`}
            onMouseOver={changeTransformValue}
            onMouseOut={resetTransformValue}>
            <img src='autoheaven.png' className='project-image' alt='Project Image'></img>
              <div className='project-description'>
                <h1>AutoHeaven</h1>
                <p>Your project description goes here.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
