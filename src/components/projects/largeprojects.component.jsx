import React from "react";
import data from "../../assets/data/data";

import ProjectsCard from "./projects_card.component";

const LargeProjects = () => {
  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        {/* IN PROGRESS */}
        <h2 className="custom-font pb-3 text-center">Large Projects: </h2>
        {data.LargeProjects.map((project) => {
          return (
            <div
              className="col-12 d-flex justify-content-center"
              key={project.id}
            >
              <ProjectsCard
                id={project.id}
                image={project.img}
                name={project.name}
                stack={project.stack}
                live={project.live}
                source={project.source}
                desc={project.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LargeProjects;
