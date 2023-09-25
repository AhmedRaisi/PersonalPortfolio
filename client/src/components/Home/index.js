import React from 'react';
import { Element } from 'react-scroll';
import './styles.css';

const Home = () => {
  return (
    <Element name="homeSection">
      <div className="home">
        <h1>Hello, I am Ahmed Al Raisi</h1>
        <p>I am a Full Stack Developer</p>
        <p>Welcome to my portfolio</p>
      </div>
    </Element>
  );
};

export default Home;
