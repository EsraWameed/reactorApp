import React from 'react';
import resume from "../../images/esraResume.png";
import '../../styles/resume.css';
export default function Resume() {
  return (

    <div >
<a href="resume.pdf"
  download="resume.pdf">
   <button className="resumeButton">Download</button>
   </a>
      <img className="esraResume"
        src={resume}
        alt="biography"
      ></img>
    </div>

  );
}