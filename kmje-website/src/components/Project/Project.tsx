import React from 'react';
import './Project.scss';
import MP from './Marketing Page.png'
import portfolio from './portfolio.png'

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-container__title">Projects</div>
      
      <div className="project-card">
        <div className="project-card__title">Rainbow Devs Frontend</div>
        <img src={MP} alt="Rainbow Devs Marketing Page" className="project-card__image" />
        <div className="project-card__description">Here is an example of some simple front end work.</div>
        <a href="https://github.com/Rainbow-Devs/marketing-page" className="project-card__link">View on Github</a>
      </div>

      <div className="project-card">
        <div className="project-card__title">Portfolio</div>
        <img src={portfolio} alt="Portfolio Thumbnail" className="project-card__image" />
        <div className="project-card__description">View the code to this portfolio site.</div>
        <a href="#" className="project-card__link">View on Github</a>
      </div>

      {/* Add more project cards as needed */}
    </div>
  );
};

export default Projects;
