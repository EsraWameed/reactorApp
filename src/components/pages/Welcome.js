import React from 'react';
import '../../styles/Welcome.css';
import Me from '../../images/me.png'
export default function Welcome() {
  return (
    
      <header className="header">
        
       
        <h1 className="homez" data-text="Esra.TechPortfolio">Esra.TechPortfolio</h1>
        <div className='mepicDiv'>
        <img className="mePic" src={Me} alt="me smiling."></img>
        </div>
      </header>
    
  );
}