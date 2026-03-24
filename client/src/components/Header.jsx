import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  const currentYear = new Date().getFullYear();

  // 👉 REF for checkbox
  const menuRef = useRef();

  // 👉 Close menu function
  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.checked = false;
    }
  };

  return (
    <>
      <header className="navbar">
        {/* TOP HEADER */}
        <section className="conference-top">
          <div className="conference-container">
            <div className="conference-logo">
              <img src={Logo} alt="IC4M Logo" />
            </div>

            <div className="conference-text">
              <h1>I²MSET {currentYear}</h1>
              <p>
                INTERNATIONAL CONFERENCE ON INNOVATION AND INTEGRATION IN
                MATHEMATICS, SCIENCE, ENGINEERING, AND TECHNOLOGY
              </p>
              <p style={{ fontSize: 10 }}>Innovate. Integrate. Inspire.</p>
            </div>
          </div>
        </section>

        {/* NAVBAR */}
        <div className="container nav-wrapper">
          {/* LOGO */}
          <div className="logo">
            <h2>I²MSET</h2>
          </div>

          {/* HAMBURGER */}
          <input type="checkbox" id="menu-toggle" ref={menuRef} />

          <label htmlFor="menu-toggle" className="hamburger">
            <span />
            <span />
            <span />
          </label>

          {/* MENU */}
          <nav className="nav-center">
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              {/* ABOUT */}
              <li className="dropdown">
                <input type="checkbox" id="about-toggle" />

                <label htmlFor="about-toggle">
                  About <i className="fa-solid fa-angle-down" />
                </label>

                <div className="mega-menu">
                  <Link to="/about" onClick={closeMenu}>
                    About I²MSET
                  </Link>
                  <Link to="/gallery" onClick={closeMenu}>
                    Gallery
                  </Link>
                  <Link to="/news" onClick={closeMenu}>
                    News & Updates
                  </Link>
                  <Link to="/workshop" onClick={closeMenu}>
                    Workshop
                  </Link>
                  <Link to="/previous-conferences" onClick={closeMenu}>
                    Previous Conferences
                  </Link>
                  <Link to="/sponsorship" onClick={closeMenu}>
                    Sponsorship
                  </Link>
                </div>
              </li>

              {/* TRACKS */}
              <li>
                <Link to="/conference-tracks" onClick={closeMenu}>
                  Conference Tracks
                </Link>
              </li>

              {/* SPEAKERS */}
              <li>
                <Link to="/speaker" onClick={closeMenu}>
                  Keynotes Speakers
                </Link>
              </li>

              {/* COMMITTEE */}
              <li className="dropdown">
                <input type="checkbox" id="comm-toggle" />

                <label htmlFor="comm-toggle">
                  Committee <i className="fa-solid fa-angle-down" />
                </label>

                <div className="mega-menu small">
                  <Link to="/committee" onClick={closeMenu}>
                    Steering Committee
                  </Link>
                  <Link to="/committee-responsibility" onClick={closeMenu}>
                    Committee Responsibility
                  </Link>
                </div>
              </li>

              {/* CONFERENCE ASSOCIATES */}
              <li>
                <Link to="/conference-association" onClick={closeMenu}>
                  Conference Associates
                </Link>
              </li>

              {/* AUTHORS */}
              <li className="dropdown">
                <input type="checkbox" id="author-toggle" />

                <label htmlFor="author-toggle">
                  For Authors <i className="fa-solid fa-angle-down" />
                </label>

                <div className="mega-menu">
                  <Link to="/schedule" onClick={closeMenu}>
                    I²MSET {currentYear} Schedule
                  </Link>
                  <Link to="/key-dates" onClick={closeMenu}>
                    Key Dates
                  </Link>
                  <Link to="/registration-fees" onClick={closeMenu}>
                    Registration Fees
                  </Link>
                  <Link to="/tourist-attractions" onClick={closeMenu}>
                    Tourist Attractions
                  </Link>
                </div>

                {/* MOBILE BUTTONS */}
                <div className="mobile-buttons">
                  <Link
                    to="/call-for-paper"
                    className="btn primary"
                    onClick={closeMenu}
                  >
                    Call for Papers
                  </Link>

                  <Link
                    to="/register"
                    className="btn secondary"
                    onClick={closeMenu}
                  >
                    Register
                  </Link>
                </div>
              </li>
            </ul>
          </nav>

          {/* BUTTONS */}
          <div className="nav-buttons">
            <Link
              to="/call-for-paper"
              className="btn primary"
              onClick={closeMenu}
            >
              Call for Papers
            </Link>

            <Link to="/register" className="btn secondary" onClick={closeMenu}>
              Register
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
