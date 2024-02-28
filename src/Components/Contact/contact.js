import React, {useState} from 'react';
import './contact.scss';

function Contact() {
  return (
    <div className="App">
        <div className='contact-container'>
        <div className='contact-otsikko-container'><h1 className='contact-otsikko'>Work Experience</h1></div>
        <div className='div-50-container'>
            <div className='div-50'>
                <div className='contact-text-container'><p className='contact-text'>You can contact me through my socials or through the contact form on this site.</p></div>
                <div className='contact-text-container'><p className='contact-text'>+358442358825</p></div>
                <div className='contact-text-container'><p className='contact-text'>leskelaviljami@gmail.com</p></div>
            </div>
            <div className='div-50'>
                <p>Sigma</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Contact;