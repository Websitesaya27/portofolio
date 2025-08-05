import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="image-wrapper">
            <img src="/assets/profile.png" alt="Salsabila" />
          </div>
        </div>

        <div className="about-text fade-in">
          <h2>Tentang Saya</h2>
          <p>
            Saya <strong>Salsabila Nurul Hikmah</strong>, mahasiswa semester 5 jurusan <strong>Manajemen Informatika</strong> di Politeknik LP3I.
            Saya memiliki ketertarikan yang besar terhadap <strong>pengembangan web</strong> dan <strong>desain UI/UX</strong>.
          </p>
          <p>
            Saya terbiasa menggunakan teknologi front-end & back-end, serta tools desain seperti <strong>Figma</strong> untuk merancang antarmuka yang fungsional dan estetis.
            Saat ini saya sedang mempersiapkan diri untuk mengikuti program <strong>magang</strong>, sambil terus mengembangkan keterampilan melalui proyek pribadi, pembelajaran mandiri, dan kerja tim.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
