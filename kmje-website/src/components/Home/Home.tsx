import React from 'react';
import './Home.scss';
import hey from './hey.png'

const Home: React.FC = () => {
  return (
    <div className="home">
        <img src={hey} alt="Kevin's memoji says hey!" />
      <h1 className="home__title">Hey I'm Kev!</h1>
      <p className="home__intro">ASL Interpreter | Web Developer | Problem Solver</p>
      <button className="button">Learn More</button>
    </div>
  );
};

export default Home;
