import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../css/Contact.css";

const Contact = () => {
    const currentYear = new Date().getFullYear();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Message Sent Successfully!");
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <main>
        {/* ================= HERO ================= */}
        <section className="apc-hero">
          <div className="container">
            <span className="apc-tag">Contact Us</span>
            <h1>We’re Here to Help</h1>
            <p>
              Reach out to the I²MSET {currentYear} team for inquiries related to papers,
              registration, sponsorship, or general assistance.
            </p>
          </div>
        </section>

        {/* ================= CONTACT INFO ================= */}
        <section className="apc-section">
          <div className="container apc-info-grid">
            <div className="apc-info-card">
              <i className="fa-solid fa-location-dot" />
              <h3>Venue Address</h3>
              <a
                href="https://www.google.com/maps?q=Parul+University+Vadodara"
                target="_blank"
                rel="noreferrer"
              >
                Parul University <br />
                Limda, Waghodia Rd, Vadodara
              </a>
            </div>

            <div className="apc-info-card">
              <i className="fa-solid fa-envelope" />
              <h3>Email</h3>
              <a href="mailto:i2mset@paruluniversity.ac.in">
                i2mset@paruluniversity.ac.in
              </a>
            </div>

            <div className="apc-info-card">
              <i className="fa-solid fa-phone" />
              <h3>Phone</h3>
              <a href="tel:+919090208418">+91 9090208418</a>
            </div>
          </div>
        </section>

        {/* ================= TEAM SECTION ================= */}
        <section className="apc-section apc-light">
          <div className="container">
            <h2 className="apc-title">Contact Persons</h2>

            <div className="apc-team-grid">
              <div className="apc-team-card">
                <h3>Dr. Conference Coordinator</h3>
                <p>Coordinator</p>
                <p>Email: coordinator@i2mset2026.org</p>
                <p>Phone: +91 9090208418</p>
              </div>

              <div className="apc-team-card">
                <h3>Technical Head</h3>
                <p>Technical Support</p>
                <p>Email: tech@i2mset2026.org</p>
                <p>Phone: +91 9000000000</p>
              </div>

              <div className="apc-team-card">
                <h3>Support Team</h3>
                <p>General Help</p>
                <p>Email: support@i2mset2026.org</p>
                <p>Phone: +91 9111111111</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SUPPORT EMAILS ================= */}
        <section className="apc-section">
          <div className="container">
            <h2 className="apc-title">Support Contacts</h2>

            <div className="apc-support-grid">
              <div className="apc-support-card">📄 papers@i2mset2026.org</div>
              <div className="apc-support-card">
                💳 registration@i2mset2026.org
              </div>
              <div className="apc-support-card">🤝 sponsor@i2mset2026.org</div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT FORM ================= */}
        <section className="apc-section">
          <div className="container apc-form-grid">
            <div className="apc-form-box">
              <h2>Get In Touch</h2>

              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input
                  type="text"
                  placeholder="Affiliation (University / Company)"
                />

                <select required>
                  <option value="">Select Inquiry Type</option>
                  <option>General Inquiry</option>
                  <option>Paper Submission</option>
                  <option>Registration Issue</option>
                  <option>Sponsorship</option>
                  <option>Technical Support</option>
                </select>

                <textarea rows={5} placeholder="Your Message" required />

                <button type="submit" className="apc-btn">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="apc-side-box">
              <img src={logo} alt="logo" />

              <h3 style={{ margin: "10px 0", color: "var(--primary)" }}>
                Office Hours
              </h3>
              <p>Monday – Friday: 9:00 AM – 5:00 PM (IST)</p>
              <p>Saturday: 9:00 AM – 1:00 PM</p>

              <h3 style={{ margin: "10px 0", color: "var(--primary)" }}>
                Quick Links
              </h3>
              <ul>
                <li>
                  <a href="/about">About Conference</a>
                </li>
                <li>
                  <a href="/authors">For Authors</a>
                </li>
                <li>
                  <a href="/registration">Registration</a>
                </li>
                <li>
                  <a href="/schedule">Schedule</a>
                </li>
              </ul>

              <h3 style={{ marginTop: 20 }}>Follow Us</h3>
              <div className="apc-social">
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="apc-section apc-light">
          <div className="container">
            <h2 className="apc-title">Frequently Asked Questions</h2>

            <div className="apc-faq">
              <details>
                <summary>How long does response take?</summary>
                <p>We typically respond within 24–48 working hours.</p>
              </details>

              <details>
                <summary>How to submit a paper?</summary>
                <p>
                  Submit your paper via the official submission portal under
                  “For Authors”.
                </p>
              </details>

              <details>
                <summary>Where to pay registration fee?</summary>
                <p>
                  Registration details and payment gateway are available on the
                  Registration page.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ================= MAP ================= */}
        <section className="apc-section">
          <div className="container">
            <iframe
              src="https://www.google.com/maps?q=Parul+University+Vadodara&output=embed"
              width="100%"
              height={350}
              style={{ border: 0, borderRadius: 15 }}
              loading="lazy"
            ></iframe>

            <div style={{ textAlign: "center", marginTop: 15 }}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Parul+University+Vadodara"
                target="_blank"
                rel="noreferrer"
                className="apc-btn"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* ================= BROCHURE ================= */}
        <section className="apc-cta">
          <div className="container">
            <h2>Download Conference Brochure</h2>
            <p>
              Get complete details about conference tracks, dates, and
              submission guidelines.
            </p>

            <a href="../assets/brochure.pdf" className="apc-btn" download>
              Download Brochure
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
