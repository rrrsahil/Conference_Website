import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ConferenceTracks.css";

const ConferenceTracks = () => {
  const currentYear = new Date().getFullYear();

  // Timeline Data (JSON style)
  const importantDates = [
    { status: "done", title: "Paper Submission", date: "Jan 10" },
    { status: "done", title: "Review Process", date: "Feb 05" },
    { status: "done", title: "Acceptance Notification", date: "Feb 20" },
    { status: "done", title: "Camera Ready Submission", date: "Mar 10" },
    { status: "next", title: "Registration Deadline", date: "Mar 25" },
    { status: "upcoming", title: "Conference", date: "Apr 05 - Apr 07" },
  ];

  // Scroll Animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="apt-hero fade-in">
        <div className="container apt-hero-inner">
          <div className="apt-hero-text">
            <span className="apt-tag">Conference</span>
            <h1>Conference Tracks {currentYear}</h1>
            <p>
              Explore the core research domains of I²MSET {currentYear} and
              submit your manuscript under the most relevant technical track.
            </p>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="apt-tracks fade-in">
        <div className="container apt-track-grid">
          <div className="apt-track-card">
            <h3>
              <i className="fa-solid fa-brain"></i> AI & ML
            </h3>
            <ul>
              <li>Deep Learning</li>
              <li>NLP</li>
              <li>Computer Vision</li>
              <li>Predictive Analytics</li>
            </ul>
          </div>

          <div className="apt-track-card">
            <h3>
              <i className="fa-solid fa-shield-halved"></i> Cybersecurity
            </h3>
            <ul>
              <li>Network Security</li>
              <li>Blockchain</li>
              <li>IoT Security</li>
              <li>Ethical Hacking</li>
            </ul>
          </div>

          <div className="apt-track-card">
            <h3>
              <i className="fa-solid fa-database"></i> Data Science
            </h3>
            <ul>
              <li>Big Data</li>
              <li>Cloud Computing</li>
              <li>Data Mining</li>
              <li>Automation</li>
            </ul>
          </div>

          <div className="apt-track-card">
            <h3>
              <i className="fa-solid fa-microchip"></i> Emerging Tech
            </h3>
            <ul>
              <li>Smart Cities</li>
              <li>Renewable Energy</li>
              <li>Robotics</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="apt-timeline fade-in">
        <div className="container">
          <h2>Important Dates</h2>

          <div className="timeline-horizontal">
            {importantDates.map((item, index) => (
              <div key={index} className={`timeline-card ${item.status}`}>
                <div className="timeline-dot"></div>

                <div className="timeline-card-content">
                  <h4>{item.title}</h4>
                  <p>
                    {item.date} {currentYear}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="apt-cta fade-in">
        <div className="container">
          <h2>Ready to Submit Your Research?</h2>
          <p>
            Contribute to global innovation and showcase your research at I²MSET{" "}
            {currentYear}.
          </p>

          <Link to="/call-for-paper" className="apt-submit-btn">
            Submit Paper
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ConferenceTracks;
