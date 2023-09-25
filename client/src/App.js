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
    <div className="main-content">
      <Home />
      <About />
      <Projects />
      <Contact />
      {/* ... More sections as needed */}
    </div>
      <Footer />
    </div>
  );
}

export default App;
