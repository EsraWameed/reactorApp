import React from 'react';
import '../styles/header.css';
import Me from '../images/me.png';
function Header() {
    return (
      <header className="header">
        <h1>Esra Al-Abduljabar</h1>
        <img src={Me} alt="me smiling."></img>
      </header>
    );
  }
  
  export default Header;
  