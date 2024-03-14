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
    <div id='projects' className="App">
      <div className='projects-container'>
        <div className='projects-otsikko-container'>
          <h1 className='projects-otsikko'>Projects</h1>
        </div>
        <div className='projects-grid'>
        <a href='https://geronimo.okol.org/~lesvil/maalaus/'>
        <div
            className={`projects-wrapper ${isHovered ? 'hovered' : ''}`}
            onMouseOver={changeTransformValue}
            onMouseOut={resetTransformValue}>
            <img src='maalaus.png' className='project-image' alt='Project Image'></img>
              <div className='project-description'>
                <h1 className='projects-otsikko1'>Kotkantien Maalaus Ja Tapetointi</h1>
                <p className='projects-text'>Dummy painting and wallpapering website.</p>
              </div>
          </div>
          </a>
          <a href='https://weather-app-wine-eight-71.vercel.app/'>
          <div
            className={`projects-wrapper ${isHovered ? 'hovered' : ''}`}
            onMouseOver={changeTransformValue}
            onMouseOut={resetTransformValue}>
            <img src='weather.png' className='project-image' alt='Project Image'></img>
              <div className='project-description'>
                <h1 className='projects-otsikko1'>Simple Weather App</h1>
                <p className='projects-text'>Simple weather application made in react with an api from openweathermap.org.</p>
              </div>
          </div>
          </a>
          <a href='https://autoheaven-nettisivu.vercel.app/'>
          <div
            className={`projects-wrapper ${isHovered ? 'hovered' : ''}`}
            onMouseOver={changeTransformValue}
            onMouseOut={resetTransformValue}>
            <img src='autoheaven.png' className='project-image' alt='Project Image'></img>
              <div className='project-description'>
                <h1 className='projects-otsikko1'>AutoHeaven</h1>
                <p className='projects-text'>Dummy car wash website made in react.</p>
              </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
