import React from 'react';
import './styles.css';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="aboutSection">
    <div className="about">
      <h1>About</h1>
      <p>
        Hello, I'm Ahmed. As a passionate Computer Science enthusiast, my journey has been anchored in the realms of machine learning, coupled with a formidable foundation in IT support. Over the years, my penchant for resolving complex problems, analyzing intricate data sets, and handling technical glitches has only grown.
      </p>
      <p>
        Currently, on the lookout for exciting software engineering avenues, my professional chronicle is decorated with experiences in IT operations and customer-centric services. I've championed the cause of enhancing operational efficiencies, managing a vast spectrum of hardware and software resources, and most importantly, uplifting the end-user experience. Being an integral part of dynamic teams, I've played pivotal roles in orchestrating seamless IT infrastructures on a grand scale.
      </p>
      <p>
        My ambition is clear: to leverage my machine learning prowess in tangible applications, particularly as a machine learning engineer. My toolkit is well-equipped with software expertise ranging from TeamDynamix and Active Directory to MATLAB and Git. On the programming front, I'm adept in an array of languages and technologies, including but not limited to Java, Python, C++, JavaScript, Node.js, and MySQL.
      </p>
      <div className="social-buttons">
        <a href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">
          LinkedIn
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="btn btn-github">
          GitHub
        </a>
      </div>
    </div>
    </Element>
  );
};

export default About;
