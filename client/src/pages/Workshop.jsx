import React, { useState } from "react";
import "../css/Workshop.css";
import { Link } from "react-router-dom";

/* ================= WORKSHOP DATA (JSON) ================= */
const workshops = [
  {
    category: "AI",
    title: "Advanced Artificial Intelligence & Machine Learning",
    desc: "Explore advanced AI models, deep learning, and real-world intelligent systems.",
    details:
      "This workshop covers neural networks, deep learning frameworks, and real-world AI implementations.",
  },
  {
    category: "Security",
    title: "Cybersecurity & Data Protection",
    desc: "Learn modern security practices, ethical hacking, and data protection strategies.",
    details:
      "Hands-on cybersecurity practices including penetration testing and data encryption techniques.",
  },
  {
    category: "Blockchain",
    title: "Blockchain & Web 3.0 Technologies",
    desc: "Understand decentralized systems, smart contracts, and Web 3.0 applications.",
    details:
      "Explore Ethereum, smart contracts, and decentralized applications (DApps).",
  },
  {
    category: "Data",
    title: "Data Science & Big Data Analytics",
    desc: "Analyze large datasets using modern tools and data-driven techniques.",
    details:
      "Work with Python, Pandas, and real-world data analysis pipelines.",
  },
  {
    category: "Cloud",
    title: "Cloud Computing & DevOps",
    desc: "Master cloud platforms, CI/CD pipelines, and scalable infrastructure.",
    details: "Learn AWS, Docker, Kubernetes and DevOps workflows.",
  },
  {
    category: "IoT",
    title: "Internet of Things (IoT) & Smart Systems",
    desc: "Build smart devices and interconnected systems using IoT technologies.",
    details: "Hands-on IoT devices, sensors, and automation systems.",
  },
];

const Workshop = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = [
    "All",
    "AI",
    "Security",
    "Blockchain",
    "Data",
    "Cloud",
    "IoT",
  ];

  const filteredData =
    filter === "All"
      ? workshops
      : workshops.filter((item) => item.category === filter);

  return (
    <>
      <main>
        {/* ================= HERO ================= */}
        <section className="apws-hero">
          <div className="container apws-hero-content">
            <span className="apws-tag">PICET 2026</span>
            <h1>Pre-Conference Workshops</h1>
            <p>
              Enhance your skills and knowledge by participating in specialized
              workshops led by industry experts and academic leaders.
            </p>
          </div>
        </section>

        {/* ================= FILTER ================= */}
        <section style={{ padding: "20px 0", textAlign: "center" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                margin: "5px",
                padding: "8px 16px",
                borderRadius: "20px",
                border: "none",
                background: filter === cat ? "#0d3b7a" : "#ddd",
                color: filter === cat ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* ================= WORKSHOP LIST ================= */}
        <section className="apws-list-section">
          <div className="container apws-list-grid">
            {filteredData.map((item, index) => (
              <div className="apws-card" key={index}>
                <div className="apws-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                <button className="apws-btn" onClick={() => setSelected(item)}>
                  Read More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MODAL ================= */}
        {selected && (
          <div className="apws-modal" onClick={() => setSelected(null)}>
            <div
              className="apws-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="apws-close" onClick={() => setSelected(null)}>
                ✕
              </span>

              <h2>{selected.title}</h2>
              <p>{selected.details}</p>
            </div>
          </div>
        )}

        {/* ================= EXPERTS ================= */}
        <section className="apws-experts-section">
          <div className="container">
            <h2 className="apws-section-title">Meet The Experts</h2>

            <div className="apws-experts-grid">
              <div className="apws-expert-card">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                  alt=""
                />
                <h4>Dr. Anil Patel</h4>
                <span>AI & ML Specialist</span>
              </div>

              <div className="apws-expert-card">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                  alt=""
                />
                <h4>Dr. Priya Sharma</h4>
                <span>Cybersecurity Expert</span>
              </div>

              <div className="apws-expert-card">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  alt=""
                />
                <h4>Dr. Raj Malhotra</h4>
                <span>Renewable Energy Scientist</span>
              </div>

              <div className="apws-expert-card">
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                  alt=""
                />
                <h4>Dr. Anil Patel</h4>
                <span>AI & ML Specialist</span>
              </div>

              <div className="apws-expert-card">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                  alt=""
                />
                <h4>Dr. Priya Sharma</h4>
                <span>Cybersecurity Expert</span>
              </div>

              <div className="apws-expert-card">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  alt=""
                />
                <h4>Dr. Raj Malhotra</h4>
                <span>Renewable Energy Scientist</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="apws-cta">
          <div className="container apws-cta-box">
            <h2>Join Our Pre-Conference Workshops</h2>
            <p>
              Register now and gain valuable insights from our expert-led
              sessions.
            </p>

            <Link to="/workshop" className="apws-register-btn">
              Register for Workshops
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Workshop;
