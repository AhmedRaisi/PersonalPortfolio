import React, { useState } from 'react';
import './styles.css';
import githubLogo from './../../../assets/github.png';

const Project = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
      setModalOpen(!modalOpen);
  };

  return (
      <div className="projectCard">
          <h3>{data.title}</h3>
          <p className="projectDescription">{data.description}</p>

          <div className="projectButtons">
              <button onClick={toggleModal} className="aboutBtn">About</button>
              <div className="right">
                  <a href={data.githubLink} className="githubBtn">
                      <img src={githubLogo} alt="GitHub" />
                  </a>
                  <a href={data.demoLink} className="demoBtn">Live Demo</a>
              </div>
          </div>

          {modalOpen && (
              <div className="modal">
                  <div className="modalContent">
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>

                      <h4>Tech Stack:</h4>
                      <ul>
                          {data.techStack.map((tech, index) => (
                              <li key={index}>• {tech}</li>
                          ))}
                      </ul>

                      <h4>Key Features:</h4>
                      <ul>
                          {data.features.map((feature, index) => (
                              <li key={index}>• {feature}</li>
                          ))}
                      </ul>

                      <a href={data.demoLink} className="demoBtn">Live Demo</a>
                      <button onClick={toggleModal} className="closeModal">Close</button>
                  </div>
              </div>
          )}
      </div>
  );
};

export default Project;
