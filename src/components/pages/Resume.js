import React from 'react';
import resume from "../../images/esraResume.png";

export default function Resume() {
  return (

    <div >
<a href="resume.pdf"
  download="resume.pdf">
   <button >Download</button>
   </a>
      <img
        src={resume}
        alt="biography"
      ></img>
    </div>

  );
}