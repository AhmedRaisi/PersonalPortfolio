import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul className="navbar">
          <li>
            <ScrollLink
              to="homeSection"
              smooth={true}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="aboutSection"
              smooth={true}
              duration={500}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projectsSection"
              smooth={true}
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contactSection"
              smooth={true}
              duration={500}
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
