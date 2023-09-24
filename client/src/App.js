import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home() {
  return <div>Home content goes here.</div>;
}

function About() {
  return <div>About content goes here.</div>;
}

// ... other component definitions ...

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add routes for Projects, Blog, and Contact */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
