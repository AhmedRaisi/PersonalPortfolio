import React from 'react';
import './styles.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Ahmed Al Raisi's Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
