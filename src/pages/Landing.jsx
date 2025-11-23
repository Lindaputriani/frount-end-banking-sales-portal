import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toggleTheme } from "../theme";

const Landing = () => {
  // Baca tema awal langsung saat inisialisasi state
  const [isLight, setIsLight] = useState(() =>
    document.documentElement.classList.contains("light")
  );

  const handleToggle = () => {
    toggleTheme();
    setIsLight((prev) => !prev);
  };

  return (
    <>
      {/* TOGGLE TEMA DI LANDING */}
      <button
        className="landing-theme-toggle"
        onClick={handleToggle}
        aria-label="Toggle Theme"
      >
        <i className={isLight ? "fas fa-sun" : "fas fa-moon"} />
      </button>

      <div className="landing-page-simple">
        {/* HERO */}
        <section className="landing-hero">
          <div className="landing-icon">
            <i className="fas fa-chart-line" />
          </div>

          <h1 className="landing-title">Banking Sales Portal</h1>
          <h2 className="landing-subtitle-main">
            Predictive Lead Scoring System
          </h2>

          <p className="landing-description">
            Portal berbasis web yang menggunakan Machine Learning untuk
            memprediksi probabilitas nasabah berlangganan deposito berjangka.
            Tingkatkan efisiensi sales dan konversi hingga 3x lipat dengan
            prioritisasi lead yang cerdas.
          </p>

          <div className="landing-buttons">
            {/* Register sudah dihapus, hanya tombol Login */}
            <Link to="/login" className="btn btn-primary hero-btn">
              <i className="fas fa-sign-in-alt" />
              <span>Masuk</span>
            </Link>
          </div>
        </section>

        {/* FITUR */}
        <section className="landing-features-row">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-brain" />
            </div>
            <h3>AI-Based Scoring</h3>
            <p>
              Model Machine Learning untuk menghitung probabilitas nasabah
              membuka deposito berjangka.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-list-check" />
            </div>
            <h3>Prioritas Otomatis</h3>
            <p>
              Leads diurutkan berdasarkan skor sehingga tim sales fokus ke
              nasabah paling potensial.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-users" />
            </div>
            <h3>Dashboard Interaktif</h3>
            <p>
              Monitoring performa, konversi, dan aktivitas follow-up dalam satu
              tampilan yang intuitif.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
