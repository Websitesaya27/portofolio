import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.body.classList.add('dark');
    } if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('dark'); // <--- penting!
    }
  }, []);


  const toggleMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Portofolio<span>.</span></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-buttons">
        <button className="btn-hireme" onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
          Hire Me
        </button>
        <button className="toggle-mode" onClick={toggleMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
