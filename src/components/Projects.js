import React from "react";
import '../styles/portfolio.css';

export default function Portfolio(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <div className="" key={project.id}>
          <img
            src={project.projectImg}
            className=""
            alt="..."
          />
          <div className="">
            <h5 className="">{project.title}</h5>
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
