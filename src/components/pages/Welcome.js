import React from 'react';
import '../../styles/Welcome.css';
import Me from '../../images/me.png'
export default function About() {
  return (
    
      <header className="header">
        <div className='mepicDiv'>
       
        <h1 className="homez" data-text="Esra.TechPortfolio">Esra.TechPortfolio</h1>
        <img className="mePic" src={Me} alt="me smiling."></img>
        </div>
      </header>
    
  );
}