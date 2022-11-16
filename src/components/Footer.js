import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
      <footer className="footer">
        <ul className="footerUl">
        <i className="fa-brands fa-linkedin footerBands"></i>
        <i className="fa-brands fa-github-alt footerBands"></i>
        <i className="fa-brands fa-stack-overflow footerBands"></i>
        <li className='footerClass'>Made with lots of <i class="fa-solid fa-heart-pulse"></i> by Esra</li>
        </ul>
      </footer>
    );
  }
  
  export default Footer;
  