import React, { useState } from "react";
import "../css/Speaker.css";

const Speaker = () => {
  const currentYear = new Date().getFullYear();

  const keynoteSpeakers = [
    {
      name: "Dr. Robert Smith",
      role: "Professor of Artificial Intelligence",
      org: "MIT, USA",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "Expert in AI, Machine Learning and Deep Learning.",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Dr. Ayesha Khan",
      role: "Data Science Expert",
      org: "Oxford University, UK",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Specialist in Big Data Analytics and AI systems.",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Dr. Michael Chang",
      role: "Cybersecurity Specialist",
      org: "Stanford University, USA",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
      bio: "Works on network security and ethical hacking.",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Dr. Elena Petrova",
      role: "Robotics & Automation",
      org: "Germany",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Focus on robotics and industrial automation.",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Dr. Rahul Verma",
      role: "AI Research Scientist",
      org: "IIT Delhi, India",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
      bio: "Research in NLP and real-time AI systems.",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Dr. Sophia Martinez",
      role: "Cloud Computing Specialist",
      org: "Google Cloud, USA",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      bio: "Focus on scalable cloud architectures.",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Dr. Ahmed Hassan",
      role: "Blockchain Expert",
      org: "Dubai Tech Institute",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
      bio: "Works on decentralized applications and Web3.",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
    {
      name: "Dr. Priya Nair",
      role: "IoT & Embedded Systems",
      org: "IISc Bangalore, India",
      img: "https://randomuser.me/api/portraits/women/19.jpg",
      bio: "Specialist in IoT-based smart systems.",
      linkedin: "#",
      twitter: "#",
      email: "#",
    },
  ];

  const invitedSpeakers = [
    {
      name: "Dr. Anil Mehta",
      org: "UC Berkeley, USA",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      name: "Dr. Lisa Wong",
      org: "National University of Singapore",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Dr. John O’Reilly",
      org: "London, UK",
      img: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      name: "Dr. Sophie Muller",
      org: "Germany",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "Dr. Karan Patel",
      org: "IIT Bombay, India",
      img: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      name: "Dr. Neha Sharma",
      org: "Delhi University, India",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Dr. David Lee",
      org: "KAIST, South Korea",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      name: "Dr. Maria Garcia",
      org: "University of Barcelona, Spain",
      img: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Dr. Arjun Reddy",
      org: "Microsoft Research, India",
      img: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      name: "Dr. Emily Watson",
      org: "Cambridge University, UK",
      img: "https://randomuser.me/api/portraits/women/36.jpg",
    },
  ];

  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <main>
      {/* HERO */}
      <section className="apss-hero">
        <div className="container apss-hero-container">
          <span className="apss-tag">Speakers</span>
          <h1>Meet Our Esteemed Speakers</h1>
          <p>
            Discover the thought leaders and innovators who will inspire and
            lead discussions at I²MSET {currentYear}.
          </p>
          <a href="#" className="apss-btn-primary">
            Join Us at I²MSET {currentYear}
          </a>
        </div>
      </section>

      {/* KEYNOTE */}
      <section className="apss-keynote-section">
        <div className="container">
          <div className="apss-section-header">
            <h2>Keynote Speakers</h2>
          </div>

          <div className="apss-scroll-container">
            {keynoteSpeakers.map((sp, index) => (
              <div className="apss-keynote-card" key={index}>
                <img src={sp.img} alt={sp.name} />
                <h3>{sp.name}</h3>
                <p>
                  {sp.role}
                  <br />
                  {sp.org}
                </p>

                <div className="apss-social-icons">
                  <a href={sp.linkedin}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={sp.twitter}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={sp.email}>
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>

                <button
                  className="apss-btn-secondary"
                  onClick={() => setSelectedSpeaker(sp)}
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVITED */}
      <section className="apss-invited-section">
        <div className="container">
          <div className="apss-section-header">
            <h2>Invited Speakers</h2>
          </div>

          <div className="apss-scroll-container">
            {invitedSpeakers.map((sp, index) => (
              <div className="apss-invited-card" key={index}>
                <img src={sp.img} alt={sp.name} />
                <div>
                  <h4>{sp.name}</h4>
                  <p>{sp.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedSpeaker && (
        <div
          className="apss-modal-overlay"
          onClick={() => setSelectedSpeaker(null)}
        >
          <div className="apss-modal" onClick={(e) => e.stopPropagation()}>
            {/* ❌ CROSS BUTTON */}
            <span
              className="apss-close-icon"
              onClick={() => setSelectedSpeaker(null)}
            >
              &times;
            </span>

            <img src={selectedSpeaker.img} alt="" />
            <h3>{selectedSpeaker.name}</h3>
            <p>{selectedSpeaker.role}</p>
            <p>{selectedSpeaker.org}</p>
            <p className="apss-bio">{selectedSpeaker.bio}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Speaker;
