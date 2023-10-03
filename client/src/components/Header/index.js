import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './styles.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
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
              offset={-60}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="aboutSection"
              smooth={true}
              duration={500}
              offset={-60}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skillsSection"
              smooth={true}
              duration={500}
              offset={-60}
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projectsSection"
              smooth={true}
              duration={500}
              offset={-40}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contactSection"
              smooth={true}
              duration={500}
              offset={-60}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
