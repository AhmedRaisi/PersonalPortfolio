import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      {/* Wrapped the logo with ScrollLink */}
      <ScrollLink
        to="homeSection"
        smooth={true}
        duration={500}
        offset={-60}
      >
        <h1 className="logo">A<span className="highlight">A</span>R</h1>
      </ScrollLink>
      <nav>
        <ul className="navbar">
          <li>
            <ScrollLink
              to="homeSection"
              smooth={true}
              duration={500}
              offset={-60}  // Added offset
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="aboutSection"
              smooth={true}
              duration={500}
              offset={-60}  // Added offset
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skillsSection"
              smooth={true}
              duration={500}
              offset={-60}  // Adjust offset as needed
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projectsSection"
              smooth={true}
              duration={500}
              offset={-80}  // Added offset
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contactSection"
              smooth={true}
              duration={500}
              offset={-60}  // Added offset
            >
              Contact
            </ScrollLink>
          </li>
          {/* ... Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
}


export default Header;
