import React from "react";

const styles = {
  img: {
    maxWidth: "750px",
  },
};

export default function Portfolio(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <div className="card" key={project.id}>
          <img
            src={project.projectImg}
            className="card-img-top"
            alt="..."
            style={styles.projectImg}
          />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text desc">{project.projectSummary}</p>
            <a href={project.repo} className="btn btn-primary">
              View Github
            </a>
            {project.deployDemo ? (
              <a href={project.deployDemo} className="btn btn-primary">
                View Site
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
