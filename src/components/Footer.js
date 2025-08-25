import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-grid">
        {/* My Role */}
        <div className="footer-col">
          <h3>My Role</h3>
          <ul className="tag-list">
            <li><i className="fas fa-code"></i> Pengembang Front-End</li>
            <li><i className="fas fa-pencil-ruler"></i> Desainer UI/UX</li>
            <li><i className="fas fa-bolt"></i> Penggemar React</li>
            <li><i className="fas fa-mobile-alt"></i> Desain Responsif</li>
          </ul>
        </div>

        {/* Pages */}
        <div className="footer-col">
          <h3>Pages</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="footer-col">
          <h3>Tech Stack</h3>
          <ul className="tag-list">
            <li><i className="fab fa-react"></i> React</li>
            <li><i className="fab fa-js-square"></i> JavaScript</li>
            <li><i className="fas fa-wind"></i> Tailwind CSS</li>
            <li><i className="fab fa-git-alt"></i> Git</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://portofolio-salsabilanurul.vercel.app/" target="_blank" rel="noopener noreferrer" title="My Portfolio">
              <i className="fas fa-link"></i>
            </a>
            <a href="https://github.com/Websitesaya27" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/sa.lsabila9874?igsh=MXRpYWEyZ3ZnYXFyZw==" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/salsabila-nurul-hikmah-74035b369/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:salsabilanurulhikmah27@gmail.com" title="Kirim Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <p className="footer-note">
        © 2025 <strong>Salsabila Nurul Hikmah</strong> — Built with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
