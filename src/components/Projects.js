import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Website Apotek',
      description: 'Merupakan sistem manajemen data apotek berbasis web yang dikembangkan menggunakan PHP Native (tanpa framework). Aplikasi ini dibuat untuk membantu pengelolaan data obat, transaksi penjualan, dan informasi pelanggan secara lebih efisien dan terdokumentasi dengan baik.',
      link: 'https://github.com/Websitesaya27/apotek',
      image: '/assets/apotek.png'
    },
    {
      title: 'Website Manajemen Data Akademik',
      description: 'Merupakan sistem berbasis web yang dirancang untuk membantu proses pengelolaan data akademik di lingkungan kampus. Website ini dibangun menggunakan bahasa pemrograman PHP dengan MySQL sebagai basis data untuk menyimpan seluruh informasi penting secara terstruktur.',
      link: 'https://github.com/Websitesaya27/Manajemen-Data-Akademik',
      image: '/assets/MDA.png'
    },
    {
      title: 'Sistem Manajemen Event',
      description: 'Website ini merupakan aplikasi manajemen event berbasis web yang dikembangkan menggunakan CodeIgniter 3. Sistem ini dirancang untuk membantu admin dalam mengelola berbagai jenis acara melalui platform ini.',
      link: 'https://github.com/Websitesaya27/Sistem-Manajemen-Event',
      image: '/assets/event.png'
    },
    {
      title: 'Aplikasi Wattpad Mini',
      description: 'Aplikasi mobile berbasis Flutter yang dirancang sebagai platform membaca sederhana dengan konsep serupa Wattpad. Aplikasi ini memungkinkan pengguna untuk menginput data pribadi seperti nama, email, dan genre bacaan favorit, kemudian menampilkan halaman utama berisi tips membaca serta daftar artikel yang dapat digulir secara dinamis.',
      link: 'https://github.com/Websitesaya27/wattpad-mini',
      image: '/assets/wattpad mini.png'
    },
    {
      title: 'Aplikasi Beatfest',
      description: 'Aplikasi event musik berbasis Flutter yang dirancang untuk memberikan informasi lengkap seputar konser, jadwal event, berita terbaru, dan sistem registrasi event. Aplikasi ini menampilkan UI modern dengan tampilan grid bergaya masonry serta fitur interaktif seperti simpan event favorit dan unggah gambar.',
      link: 'https://github.com/Websitesaya27/beatfest',
      image: '/assets/beatfest.png'
    },
    {
      title: 'Desain UI Website Penyewaan Kontrakan',
      description: 'Proyek ini merupakan desain user interface (UI) untuk sebuah website penyewaan kontrakan yang dirancang menggunakan Figma. Proyek ini bertujuan untuk memberikan tampilan antarmuka yang informatif, bersih, dan mudah digunakan oleh pengguna yang ingin mencari kontrakan secara online.',
      link: 'https://www.figma.com/design/MANQjXjJqubgYQUzgw7PmT/Untitled?node-id=0-1&t=iXn9MwRV7uBhgK66-1',
      image: '/assets/desain.png'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projek Saya</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Lihat di GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
