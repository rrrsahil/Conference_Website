import React, { useEffect, useState } from "react";
import "../css/Sponsorship.css";
import { Link } from "react-router-dom";
import icon from "../assets/icon.jpg";

/* ================= DATA ================= */

const packages = [
  {
    name: "Diamond",
    price: "3 LAC+",
    features: [
      "Website Logo",
      "Event Signage",
      "Premium Booth",
      "3 Complimentary Passes",
    ],
  },
  {
    name: "Gold",
    price: "2 LAC",
    features: [
      "Website Logo",
      "Event Signage",
      "Display Table",
      "2 Complimentary Passes",
    ],
  },
  {
    name: "Silver",
    price: "1 LAC",
    features: ["Website Logo", "Event Signage", "2 Complimentary Passes"],
  },
];

const stats = [
  { value: 1200, label: "Participants" },
  { value: 30, label: "Countries" },
  { value: 80, label: "Papers" },
  { value: 20, label: "Speakers" },
];

const Sponsorship = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  /* ================= COUNTER ================= */
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const animate = (el, target) => {
      let count = 0;
      const step = target / 100;

      const update = () => {
        if (count < target) {
          count += step;
          el.innerText = Math.ceil(count) + "+";
          requestAnimationFrame(update);
        } else {
          el.innerText = target + "+";
        }
      };

      update();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.getAttribute("data-target");
            animate(el, target);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 },
    );

    counters.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

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

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main>
        {/* ================= HERO ================= */}
        <section className="aps-hero fade-up">
          <div className="container aps-hero-container">
            <span className="aps-tag">Sponsorship</span>
            <h1>Partner with I²MSET 2026</h1>
            <p>
              Elevate your brand visibility and connect with global researchers,
              academicians and industry professionals.
            </p>
            <Link to="#" className="aps-btn-primary">
              Download Brochure
            </Link>
          </div>
        </section>

        {/* ================= WHY ================= */}
        <section className="aps-why fade-up">
          <div className="container">
            <h2>Why Sponsor I²MSET?</h2>

            <div className="aps-why-grid">
              {[
                "Brand Exposure to 1000+ Participants",
                "Networking with Industry Leaders",
                "Exhibition & Booth Opportunities",
                "Direct Access to Young Innovators",
              ].map((item, i) => (
                <div className="aps-why-card" key={i}>
                  ✔ {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="aps-stats">
          <div className="container aps-stats-grid">
            {stats.map((item, i) => (
              <div key={i}>
                <h3 className="counter" data-target={item.value}>
                  0
                </h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PACKAGES ================= */}
        <section className="aps-packages fade-up">
          <div className="container">
            <h2>Sponsorship Packages</h2>

            <div className="aps-package-grid">
              {packages.map((pkg, i) => (
                <div className="aps-package-card" key={i}>
                  <h3>{pkg.name}</h3>
                  <p className="aps-price">{pkg.price}</p>

                  <ul>
                    {pkg.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>

                  <button
                    className="aps-btn-secondary"
                    onClick={() => setSelectedPlan(pkg)}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MODAL ================= */}
        {selectedPlan && (
          <div className="aps-modal" onClick={() => setSelectedPlan(null)}>
            <div
              className="aps-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ❌ CLOSE ICON */}
              <button
                className="aps-close-icon"
                onClick={() => setSelectedPlan(null)}
              >
                ×
              </button>

              <h2>{selectedPlan.name} Plan</h2>
              <p>
                <strong>Price:</strong> {selectedPlan.price}
              </p>

              <ul>
                {selectedPlan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ================= LOGOS ================= */}
        <section className="aps-logos fade-up">
          <div className="container">
            <h2>Our Previous Sponsors</h2>

            <div className="aps-logo-grid">
              {[1, 2, 3, 4, 5, 6, 7 ,8 ,9].map((_, i) => (
                <div className="aps-logo-box" key={i}>
                  <img src={icon} alt="logo" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="aps-contact fade-up">
          <div className="container">
            <h2>Contact for Sponsorship</h2>
            <p>Email: sponsorship@i2mset2026.org</p>
            <p>Phone: +91 98765 43210</p>

            <Link to="#" className="aps-btn-primary">
              Become a Sponsor
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sponsorship;
