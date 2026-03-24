import React from "react";
import { Link } from "react-router-dom";
import "../css/AboutI2mset.css";

const AboutI2mset = () => {
   const currentYear = new Date().getFullYear();
  return (
    <>
      <main>
        {/* hero section */}
        <section className="apv-hero">
          {/* PARTICLES */}
          <div className="apv-particles" />
          {/* WAVES */}
          <div className="apv-wave apv-wave1" />
          <div className="apv-wave apv-wave2" />
          <div className="apv-hero-pattern" />
          <div className="container apv-hero-container">
            <div className="apv-hero-content">
              <span className="apv-tag">ABOUT I²MSET</span>
              <h1 className="apv-title">
                International Conference on Innovation &amp; Integration
              </h1>
              <p className="apv-description">
                I²MSET {currentYear} brings together global researchers, academicians,
                scientists and industry professionals to explore smart,
                sustainable and emerging technologies shaping the future.
              </p>
              <div className="apv-hero-buttons">
                <Link to="/registration-fees" className="apv-btn-primary">
                  Register Now
                </Link>
                <Link to="/conference-tracks" className="apv-btn-outline">
                  Explore Tracks
                </Link>
              </div>
            </div>
            <div className="apv-hero-media">
              <div className="apv-media-card">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865"
                  alt="Conference Image"
                />
              </div>
            </div>
          </div>
        </section>
        {/* vision mision section */}
        <section className="apvm-section">
          <div className="container apvm-container">
            <div className="apvm-heading">
              <span className="apvm-tag">OUR FOUNDATION</span>
              <h2>Vision &amp; Mission</h2>
              <p>
                Driving innovation, collaboration and sustainable technological
                advancement through global academic excellence.
              </p>
            </div>
            <div className="apvm-grid">
              {/* Vision Card */}
              <div className="apvm-card">
                <div className="apvm-icon">
                  <i className="fa-solid fa-eye" />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To establish I²MSET as a globally recognized academic platform
                  fostering interdisciplinary research and innovation in smart,
                  sustainable and emerging technologies.
                </p>
              </div>
              {/* Mission Card */}
              <div className="apvm-card">
                <div className="apvm-icon">
                  <i className="fa-solid fa-bullseye" />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To create an interactive forum connecting researchers,
                  academicians and industry professionals, encouraging impactful
                  research, collaboration and knowledge exchange.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* WHY ATTEND */}
        <section className="apw-section">
          {/* PARTICLES */}
          <div className="apw-particles" />
          {/* WAVES */}
          <div className="apw-wave apw-wave1" />
          <div className="apw-wave apw-wave2" />
          <div className="container apw-container">
            <div className="apw-header">
              <h2>Why Attend I²MSET?</h2>
              <p>
                I²MSET is organized by Parul University,
                creating a global platform for innovation and research
                excellence.
              </p>
            </div>
            <div className="apw-grid">
              <div className="apw-card">
                <div className="apw-icon">
                  <i className="fa-solid fa-globe" />
                </div>
                <h4>Global Networking</h4>
                <p>Connect with researchers and innovators worldwide.</p>
              </div>
              <div className="apw-card">
                <div className="apw-icon">
                  <i className="fa-solid fa-book" />
                </div>
                <h4>Publication Opportunities</h4>
                <p>Publish research in indexed journals and proceedings.</p>
              </div>
              <div className="apw-card">
                <div className="apw-icon">
                  <i className="fa-solid fa-microphone" />
                </div>
                <h4>Expert Speakers</h4>
                <p>Gain insights from renowned global experts.</p>
              </div>
              <div className="apw-card">
                <div className="apw-icon">
                  <i className="fa-solid fa-handshake" />
                </div>
                <h4>Industry Collaboration</h4>
                <p>Engage with professionals and collaborators.</p>
              </div>
            </div>
          </div>
        </section>
        {/* ORGANIZED BY */}
        <section className="apob-section">
          <div className="container apob-container">
            <div className="apob-card">
              <span className="apob-tag">ORGANIZED BY</span>
              <h2 className="apob-title">I²MSET {currentYear}</h2>
              <p className="apob-text">
                I²MSET is organized by PiCET and proudly hosted by
                <strong>Parul University</strong>, fostering
                innovation,collaboration and global academic excellence.
              </p>
              <div className="apob-buttons">
                <Link to="#" className="apob-btn-primary">
                  Register Now
                </Link>
                <Link to="#" className="apob-btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* OBJECTIVES */}
        <section className="apobj-section">
          <div className="apobj-particles" />
          {/* WAVES */}
          <div className="apobj-wave apobj-wave1" />
          <div className="apobj-wave apobj-wave2" />
          <div className="container apobj-container">
            <div className="apobj-header">
              <h2>Conference Objectives</h2>
              <p>
                Our conference aims to foster innovation, collaboration, and
                sustainable advancement across interdisciplinary domains.
              </p>
            </div>
            <div className="apobj-grid">
              <div className="apobj-card">
                <span className="apobj-check">✓</span>
                <p>Present breakthrough research in emerging technologies.</p>
              </div>
              <div className="apobj-card">
                <span className="apobj-check">✓</span>
                <p>Promote interdisciplinary collaboration.</p>
              </div>
              <div className="apobj-card">
                <span className="apobj-check">✓</span>
                <p>Address global challenges with innovative solutions.</p>
              </div>
              <div className="apobj-card">
                <span className="apobj-check">✓</span>
                <p>Encourage young researchers and students.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutI2mset;
