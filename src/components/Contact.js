import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-form-area">
          <h2>Formulir Kontak</h2>
          <form
            action="https://formsubmit.co/salsabilanurulhikmah27@gmail.com"
            method="POST"
            className="contact-form"
          >
            <label>Nama Lengkap</label>
            <input type="text" name="name" placeholder="Nama Anda" required />
            <label>Email</label>
            <input type="email" name="email" placeholder="Email Anda" required />
            <label>Subjek</label>
            <input type="text" name="subject" placeholder="Subjek" />
            <label>Pesan</label>
            <textarea name="message" rows="5" placeholder="Pesan Anda" required></textarea>
            <button type="submit">Kirim Pesan</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Detail Kontak</h2>
          <p className="contact-subtext">Mari terhubung dan berkolaborasi! Anda dapat menghubungi saya di:</p>

          <div className="contact-item">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Ds.Tridaya Sakti Kec.Tambun Selatan Kab.Bekasi</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>salsabilanurulhikmah27@gmail.com</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>+62 896-1758-9419</span>
          </div>

          <div className="social-section">
            <p className="social-heading">Temukan saya di:</p>
            <div className="social-icons">
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/salsabila-nurul-hikmah-74035b369/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/sa.lsabila9874?igsh=MXRpYWEyZ3ZnYXFyZw==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
