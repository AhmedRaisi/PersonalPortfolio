import React, { useRef, useEffect } from 'react';
import './styles.css';
import { Element } from 'react-scroll';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.classList.add('fadeIn');
    }
  }, []);

  return (
    <Element name="aboutSection">
      <div className="about" ref={aboutRef}>
        <div className="aboutCard">
          <h1>About Me</h1>
          <p>
            Hi, I'm Ahmed. I'm a Computer Science enthusiast with a deep passion for machine learning. My professional journey is rooted in robust IT support, where I've tackled complex problems, managed diverse technical resources, and elevated user experiences.
          </p>
          <p>
            While I take pride in my past endeavors, I'm currently eager to venture into software engineering roles. I've always thrived in dynamic teams, delivering seamless IT solutions at scale.
          </p>
          <p>
            As I transition, my goal is clear: to apply my machine learning expertise in practical, impactful scenarios. My technical proficiency spans tools like TeamDynamix, Active Directory, MATLAB, and Git, complemented by coding skills in languages such as Java, Python, C++, and JavaScript.
          </p>
          <p>
            I'm actively seeking a full-time opportunity where I can bring my skills to the forefront and further my professional growth.
          </p>
          <div className="social-buttons">
            <a href="https://www.linkedin.com/in/ahmedalraisi7/" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">LinkedIn</a>
            <a href="https://github.com/AhmedRaisi" target="_blank" rel="noopener noreferrer" className="btn btn-github">GitHub</a>
            <a href="./../assets/Ahmed_Al _Raisi_Resume.pdf" download className="btn btn-resume">Resume</a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
