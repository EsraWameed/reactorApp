import React from 'react';
import '../../styles/About.css';
import Me from '../../images/me.png'
import '../../styles/portfolio.css';
export default function About() {
  return (
    
      <header className="header">
        <h1 className="homez" data-text="Esra.TechPortfolio">Esra.TechPortfolio</h1>
        <div className='mepicDiv'>
        <img className="mePic" src={Me} alt="me smiling."></img>
        </div>

  <section className="centering">
  <h2 id="aboutesra">Hello Everyone</h2>
<p>Full stack Web Developer with a background in Biology and Secondary Mathematics/Science Education. Effective team collaborator through the use of task organization and prioritization and GitHub project boards. Known among team for trouble shooting errors, resolving deployement errors, and creating a smooth user experience.</p>
<p>My hobbies include learning languages, drawing, singing, and going for walks</p>
</section>


      </header>
    
  );
}