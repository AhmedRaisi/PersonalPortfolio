import React from 'react';
import './styles.css';

const Project = ({ data }) => {
  return (
    <div className="projectCard">
      <h3>{data.title}</h3>
      <p className="projectDescription">{data.description}</p> {/* Adding the description here */}
      <div className="projectButtons">
        <a href={data.aboutLink} className="aboutBtn">About</a>
        <a href={data.demoLink} className="demoBtn">Live Demo</a>
      </div>
    </div>
  );
};

export default Project;
