import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../components/ProjectList";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((item) => {
          const { id, name, image } = item;
          return (
            <ProjectItem
              key={id}
              name={name}
              image={image}
              projectLink={item.projectLink}
              gitHubLink={item.gitHubLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
