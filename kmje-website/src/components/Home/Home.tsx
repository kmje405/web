import React from 'react';
import './Home.scss';
import hey from './hey.png'

const Home: React.FC = () => {
  return (
    <div className="home">
      <img src={hey} alt="Kevin's memoji says hey!" />
      <h1 className="home__title">Hey I'm Kev!</h1>
      <p className="home__intro">ASL Interpreter | Developer | Problem Solver</p>
      <div className="button-group">
        <a href="https://github.com/kmje405" target="_blank" rel="noopener noreferrer">
          <button className="button">
            <i className="fa fa-github" aria-hidden="true"></i> Github
          </button>
        </a>
        <a href="https://www.linkedin.com/in/okckevin1/" target="_blank" rel="noopener noreferrer">
          <button className="button">
            <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
