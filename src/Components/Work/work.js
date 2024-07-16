import React, {useState} from 'react';
import './work.scss';

function Work() {
  return (
    <div id='work' className="App">
      <div className='work-container'>
        <div className='work-otsikko-container'><h1 className='work-otsikko'>Work</h1><div className='workgap'></div><h1 className='work-otsikko3'>Experience</h1></div>
          <div className='work-box'>
          <div className='work-50'>
            <div className='work-80'>
            <h1 className='work-otsikko2'>Oulun Rakennusteho Oy</h1>
            <h1 className='work-otsikko2'>2021, 2022, 2023, 2024</h1>
            <p className='work-text'>I worked as a construction assistant at
            Oulun Rakennusteho during the summers.
            My responsibilities included sorting 
            construction materials and performing 
            various tasks typical to construction sites.
            </p> 
            </div>
          </div>
          <div className='work-50'>
            <div className='work-80'>
            <h1 className='work-otsikko2'>Telatek Oy</h1>
            <h1 className='work-otsikko2'>2020</h1>
            <p className='work-text'>I worked at Telatek during summer. My
            responsibilities were cleaning, sorting stuff,
            fixing submersible pumps, painting and using
            metal saw.
            </p>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Work;
