import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import Video from "../assets/about.mp4";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Background Map */}
      <div className="footer-map" />

      <div className="footer-container">
        {/* COLUMN 1 */}
        <div className="footer-col">
          <h3 className="footer-logo">I²MSET</h3>
          <p className="footer-text">
            International Conference on Innovations & Integration in
            Mathematics, Science, Engineering, and Technology
          </p>

          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/conference-tracks">Tracks</Link>
            </li>
            <li>
              <Link to="/committee">Committee</Link>
            </li>
            <li>
              <Link to="/registration-fees">Registration</Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <p>I²MSET Secretariat</p>
          <p>Parul University, Waghodia Road</p>
          <p>Vadodara – 391760, Gujarat, India</p>
          <p>
            Email:{" "}
            <Link to="mailto:info@i2mset2026.org">info@i2mset2026.org</Link>
          </p>
          <p>
            Phone: <Link to="tel:+919876543210">+91 98765 43210</Link>
          </p>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col footer-video">
          <h3>Conference Preview</h3>
          <div className="video-box">
            <video controls>
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="footer-bottom">
        © {currentYear} I²MSET. All Rights Reserved. Developed by{" "}
        <a
          href="https://www.linkedin.com/in/alok-pandit-21012024ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alok Pandit
        </a>
      </div>
    </footer>
  );
};

export default Footer;
