import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Mahendra Reddy</h2>
        <div className='prompt'>
          <p>A Frontend Developer with a passion for learning & developing</p>
          <a href='https://www.linkedin.com/in/mahendra-reddy-chinnananjammagari-0a047b189'>
            <LinkedInIcon />
          </a>
          <a href='https://reddymahendra1424@gmail.com'>
            <EmailIcon />
          </a>
          <a href='https://github.com/Re1435?tab=repositories'>
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJs, Redux, Javascript, CSS, HTML, Bootstrap, MaterialUI,
              Styled Components
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJs, ExpressJs, MySQL, MongoDB, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
