import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Link as ScrollLink } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Header />

      <nav>
        <ul>
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
          {/* ... More links for Projects, Contact, etc. */}
        </ul>
      </nav>

      <Home />
      <About />
      <Projects />
      <Contact />
      {/* ... More sections as needed */}

      <Footer />
    </div>
  );
}

export default App;
