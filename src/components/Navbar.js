import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    document.body.classList.toggle('dark', isDark);
  }, []);

  const toggleMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Portofolio<span>.</span></div>

      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <li>
          <button className="btn-hireme" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            toggleMenu();
          }}>
            Hire Me
          </button>
        </li>
        <li>
          <button className="toggle-mode" onClick={toggleMode}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
