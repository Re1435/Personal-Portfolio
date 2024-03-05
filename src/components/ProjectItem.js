import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Projects.css";

const ProjectItem = ({ id, image, name, projectLink, gitHubLink }) => {
  return (
    <div className='projectItem'>
      <img src={image} className='bgImage' alt='project-img' />
      <h4>{name}</h4>
      <div className='link-btns'>
        <a href={projectLink}>
          <button>
            <LinkIcon />
            Project Link
          </button>
        </a>
        <a href={gitHubLink}>
          <button>
            <GitHubIcon />
            Github Link
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
