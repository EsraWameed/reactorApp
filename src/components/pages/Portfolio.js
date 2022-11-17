import {useState, useEffect} from 'react';
import React from 'react';
import tea from '../../images/teaaa.png'
import motivation from '../../images/deployed2.png'
import weather from '../../images/weather.png'
import quiz from '../../images/quiz.png'
import '../../styles/portfolio.css';
const Slideshow = ({imgs}) => {
  const [index, setIndex]= useState(0)
  useEffect(()=>{
    setIndex(0)
  }, [])



  
//tests if we are at the end of the list
  const next =() => {
    if (index ===imgs.length -1){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
  }
  const prev =() => {
    if (index ===0){
      setIndex(imgs.length -1)
    }else{
      setIndex(index-1)
    }
  }

  return <div className="slideshow">
    <img className='mainImg' alt=""src={imgs[index]}/>
    <div className='actions'>
<button onClick={prev}><i class="fa-solid fa-backward"></i></button>
<button onClick={next}><i class="fa-sharp fa-solid fa-forward"></i></button>
    </div>
  </div>
}
export default function Portfolio() {
  //create an array of slides as json objects
  
   
  return (
    <div>
      <h1>Portfolio</h1>
        <Slideshow imgs={[
          tea, motivation, weather
        ]}
        />

        <div  className='projectsContainer'>
        <article class="card">
          <div id="bluebackground"class="title-card">
          <h2>TEAGRAM</h2>
        </div>
        <a href="https://tea-gram.herokuapp.com/">
          <img alt="Collage of App Pages" src={tea}className="mainImg"></img>
        </a>
        <div>
          <p>Project Summary: A RESTful API social media application allowing users to create profiles and interact with other users posts through liking, commenting, and downloading images.</p>
          <a class="linkRepo" href="https://github.com/EsraWameed/teagram/">Link to repo</a>
        </div>
      </article>

      <article class="card">
        <div class="title-card">
          <h2>Motivation Locale</h2>
        </div>
        <a href="https://esrawameed.github.io/Motivation-Locale/">
          <img alt="page"src={motivation} className="mainImg"></img>
        </a>
        <div>
          <p>Project Summary: An application utilizing two server-side APIs to randomly generate motivational quotes, positive images, and store user feelings to lift user spirit.</p>
          <a class="linkRepo" href="https://github.com/EsraWameed/Motivation-Locale/">Link to repo</a>
        </div>
      </article>

      <article class="card">
          <div class="title-card">
            <h2>WeatherBoard</h2>
          </div>
          <a href="https://esrawameed.github.io/WeatherBoard/">
            <img alt="Collage of App Pages" src={weather}className="mainImg"></img>
          </a>
          <div>
            <p>Project Summary: An application utilizing third-party APIs to retrieve daily weather data. Upon a user searching for a city, weather data, and a 5-day forecast are saved into localStorage.
</p>
            <a class="linkRepo" href="https://github.com/EsraWameed/WeatherBoard">Link to repo</a>
          </div>
        </article>

        <article class="card">
          <div class="title-card">
            <h2>Coding Quiz</h2>
          </div>
          <a href="https://esrawameed.github.io/Coding-Knowledge-Quiz-Game/">
          <img alt="Quiz"src={quiz} className="mainImg"></img>
        </a>
        <div>
          <p>Project Summary: An application utilizing Web APIs, DOM methods to present users with a timed coding quiz that keeps track of their scores and reduces time on the timer when questions are answered incorrectly.</p>
          <a class="linkRepo" href="https://github.com/EsraWameed/Coding-Knowledge-Quiz-Game/">Link to repo</a>
        </div>
      </article>
        </div>
    </div>

  );
}
