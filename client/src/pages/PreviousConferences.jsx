import React, { useState } from "react";
import "../css/PreviousConferences.css";

/* ================= JSON DATA ================= */
const conferences = [
  {
    year: 2026,
    title: "PiCET 2026",
    location: "Vadodara, India",
    date: "May 1–2, 2026",
    papers: "TBA",
    attendees: "TBA",
    keynotes: "TBA",
    index: "Will be announced",
    theme: "Smart, Sustainable & Emerging Techn.",
    awards: "To be announced",
    comingSoon: true,
    proceedings: "",
  },
  {
    year: 2025,
    title: "PiCET 2025",
    location: "Vadodara, India",
    date: "March 12–14, 2025",
    papers: "356",
    attendees: "450+",
    keynotes: "12",
    index: "IEEE Xplore, Scopus",
    theme: "Smart & Sustainable Techn.",
    awards: "Best Paper, Young Res. Award",
    comingSoon: false,
    proceedings: "https://youtube.com",
  },
  {
    year: 2024,
    title: "PiCET 2024",
    location: "Vadodara, India",
    date: "April 10–12, 2024",
    papers: "340",
    attendees: "415+",
    keynotes: "10",
    index: "IEEE Xplore, Scopus",
    theme: "AI & Emerging Engineering Sol.",
    awards: "Innovation Excellence Award",
    comingSoon: false,
    proceedings: "https://example.com/picet-2024",
  },
  {
    year: 2023,
    title: "PiCET 2023",
    location: "Vadodara, India",
    date: "May 15–17, 2023",
    papers: "312",
    attendees: "400+",
    keynotes: "8",
    index: "AIP Conference Proceedings",
    theme: "Innovation & Integration",
    awards: "Best Student Paper Award",
    comingSoon: false,
    proceedings: "https://example.com/picet-2023",
  },
];

/* ================= SORT ================= */
const sortedConferences = [...conferences].sort((a, b) => b.year - a.year);

const PreviousConferences = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <main>
        {/* HERO */}
        <section className="apc-hero">
          <div className="container">
            <span className="apc-tag">Previous Conferences</span>
            <h1>I²MSET Conference Legacy</h1>
            <p>
              Explore the milestones, research contributions and global
              participation from previous editions of I²MSET hosted at Parul
              University.
            </p>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="apc-timeline-section">
          <div className="container apc-timeline">
            {sortedConferences.map((conf, index) => (
              <div
                className={`apc-item ${conf.comingSoon ? "coming-soon" : ""}`}
                key={index}
              >
                <div className="apc-dot" />

                <div className="apc-year">
                  {conf.year} {conf.comingSoon && "(Upcoming)"}
                </div>

                <div className="apc-card">
                  <h3>{conf.title}</h3>

                  <p className="apc-meta-line">
                    📍 {conf.location} | 📅 {conf.date}
                  </p>

                  <div className="apc-stats">
                    <div>
                      <strong>{conf.papers}</strong>
                      <span>Papers</span>
                    </div>
                    <div>
                      <strong>{conf.attendees}</strong>
                      <span>Attendees</span>
                    </div>
                    <div>
                      <strong>{conf.keynotes}</strong>
                      <span>Keynotes</span>
                    </div>
                  </div>

                  <div className="apc-details">
                    <p>
                      <strong>Indexed In:</strong> {conf.index}
                    </p>
                    <p>
                      <strong>Theme:</strong> {conf.theme}
                    </p>
                    <p>
                      <strong>Awards:</strong> {conf.awards}
                    </p>

                    {/* BUTTON LOGIC */}
                    {!conf.comingSoon && conf.proceedings ? (
                      <button
                        className="apc-btn"
                        onClick={() => setSelected(conf)}
                      >
                        View Proceedings
                      </button>
                    ) : (
                      <span className="apc-coming-label">Coming Soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MODAL ================= */}
{/* ================= MODAL ================= */}
{selected && (
  <div className="apc-modal" onClick={() => setSelected(null)}>
    
    <div
      className="apc-modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      {/* ❌ CROSS BUTTON */}
      <button
        className="apc-cross"
        onClick={() => setSelected(null)}
      >
        ×
      </button>

      <h2>{selected.title}</h2>

      <p>
        <strong>Date:</strong> {selected.date}
      </p>
      <p>
        <strong>Location:</strong> {selected.location}
      </p>
      <p>
        <strong>Theme:</strong> {selected.theme}
      </p>

      <a
        href={selected.proceedings}
        target="_blank"
        rel="noreferrer"
        className="apc-btn"
      >
        Open Full Proceedings
      </a>

    </div>
  </div>
)}
      </main>
    </>
  );
};

export default PreviousConferences;
