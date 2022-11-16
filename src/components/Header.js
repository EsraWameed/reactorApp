import React from 'react';
import '../styles/header.css';
import Me from '../images/me.png';
function Header() {
    return (
      <header className="header">
        <div className='mepicDiv'>
       
        <h1 class="homez" data-text="Esra.TechPortfolio">Esra.TechPortfolio</h1>
        <img className="mePic" src={Me} alt="me smiling."></img>
        </div>
      </header>
    );
  }
  
  export default Header;
  