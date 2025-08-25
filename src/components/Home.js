import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import DarkVeil from './DarkVeil';

const Home = () => {
  return (
    <section id="home" className="home-section">
      
      <DarkVeil />
      <div className="home-text fade-in">
        <h1>Halo, saya Salsabila Nurul Hikmah</h1>
        <h2 className="subtitle">Pengembang Web & UI/UX Enthusiast</h2>
        <p className="desc">
          Mahasiswa Manajemen Informatika yang antusias di bidang pengembangan web dan desain antarmuka pengguna.
        </p>
        <a href="/assets/CV_Salsabila Nurul Hikmah.pdf" download>
          <button className="btn-download">
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: '8px' }} />
            Download CV
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;
