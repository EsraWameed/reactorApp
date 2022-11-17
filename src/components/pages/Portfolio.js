import {useState, useEffect} from 'react';
import React from 'react';
import tea from '../../images/teaaa.png'
import motivation from '../../images/deployed2.png'
import weather from '../../images/weather.png'
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
    </div>

  );
}
