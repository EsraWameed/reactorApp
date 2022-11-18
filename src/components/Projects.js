import React from "react";
import '../styles/portfolio.css';

export default function Portfolio(props) {
  return (
    <div className="parent">
      
      {props.projects.map((project) => (
        
        <div className="" key={project.id}>
             <h3 className="">{project.title}</h3>
          <img
            src={project.projectImg}
            className="projectPic"
            alt="..."
          />
          <div className="">

            <p className="">{project.projectSummary}</p>
            <a href={project.repo} className="">
              View Github
            </a>
            {project.deployDemo ? (
              <a href={project.deployDemo} className="">
                View Site
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
