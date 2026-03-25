import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Video from "../assets/about.mp4";
import icon from "../assets/icon.jpg";
const Home = () => {
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    // ---------------- COUNTDOWN ----------------
    const targetDate = new Date("May 1, 2026 00:00:00").getTime();

    function animateChange(element, newValue) {
      if (!element) return;

      element.style.opacity = "0";
      element.style.transform = "translateY(-10px)";

      setTimeout(() => {
        element.innerText = newValue;
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, 200);
    }

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      animateChange(document.getElementById("days"), days);
      animateChange(document.getElementById("hours"), hours);
      animateChange(document.getElementById("minutes"), minutes);
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    // ---------------- HIGHLIGHT COUNTER ----------------
    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let count = 0;

            const update = () => {
              const increment = target / 100;

              if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(update);
              } else {
                counter.innerText = target;
              }
            };

            update();
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 },
    );

    counters.forEach((counter) => observer.observe(counter));

    // CLEANUP
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <main>
        {/* keynotes section */}
        <section className="keynote-strip">
          <div className="keynote-wrapper">
            <div className="keynote-track">
              <span>🎤 Prof. Bela Shah</span>
              <span>🎤 Dr. S.S.P.M Sharma</span>
              <span>🎤 Dr. Anil Deshmukh</span>
              <span>🎤 Sarah Mitchell (IBM)</span>
              <span>🎤 Prof. Rajeev Kumar</span>
              <span>🎤 Dr. Neha Verma</span>
              <span>🎤 Prof. Bela Shah</span>
              <span>🎤 Dr. S.S.P.M Sharma</span>
              <span>🎤 Dr. Anil Deshmukh</span>
              <span>🎤 Sarah Mitchell (IBM)</span>
              <span>🎤 Prof. Rajeev Kumar</span>
              <span>🎤 Dr. Neha Verma</span>
            </div>
          </div>
        </section>
        {/* hero section */}
        <section className="hero">
          <div className="particles" />
          <div className="wave wave1" />
          <div className="wave wave2" />
          <div className="container hero-wrapper">
            {/* LEFT SIDE */}
            <div className="hero-left">
              <p className="theme">
                Theme | Smart, Sustainable &amp; Emerging Technologies
              </p>
              <div className="glass date-badge">
                1–2 May {currentYear} | Sonarda
              </div>
              {/* Countdown */}
              <div className="countdown-clock">
                <div className="clock-box">
                  <span id="days">0</span>
                  <small>Days</small>
                </div>
                <div className="clock-box">
                  <span id="hours">0</span>
                  <small>Hrs</small>
                </div>
                <div className="clock-box">
                  <span id="minutes">0</span>
                  <small>Min</small>
                </div>
              </div>
              {/* Buttons */}
              <div className="hero-buttons">
                <Link to="/registration-fees" className="btn primary">
                  Register Now
                </Link>
                <Link to="/call-for-paper" className="btn outline">
                  Call for Papers
                </Link>
              </div>
              {/* RECTANGLE CAROUSEL */}
              <div className="hero-carousel">
                <div className="carousel-track">
                  <div className="carousel-slide">
                    <img
                      src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
                      alt=""
                    />
                  </div>
                  <div className="carousel-slide">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                      alt=""
                    />
                  </div>
                  <div className="carousel-slide">
                    <img
                      src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa"
                      alt=""
                    />
                  </div>
                  <div className="carousel-slide">
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* END HERO LEFT */}
            {/* RIGHT SIDE */}
            <div className="hero-right">
              <h3>Conference Highlights &amp; Information</h3>
              <div className="info-grid">
                <div className="info-box">
                  <h4>Highlights I²MSET {currentYear}</h4>
                  <ul>
                    <li>
                      <Link to="#">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="#">Souvenir </Link>
                    </li>
                    <li>
                      <Link to="#">Proceedings </Link>
                    </li>
                    <li>
                      <Link to="#">Best Paper Award </Link>
                    </li>
                    <li>
                      <Link to="#">Gallery</Link>
                    </li>
                  </ul>
                </div>
                <div className="info-box">
                  <h4>Important Dates</h4>
                  <p>
                    <strong>Submission:</strong> Dec 15, 2026
                  </p>
                  <p>
                    <strong>Notification:</strong> Dec 17, 2026
                  </p>
                  <p>
                    <strong>Registration:</strong> Dec 20, 2026
                  </p>
                  <p>
                    <strong>Conference:</strong> Dec 27–28, 2026
                  </p>
                </div>
                <div className="info-box">
                  <h4>Paper Submission</h4>
                  <ul>
                    <li>
                      <Link to="#">Online Submission</Link>
                    </li>
                    <li>
                      <Link to="#">Guidelines</Link>
                    </li>
                    <li>
                      <Link to="#">Template</Link>
                    </li>
                    <li>
                      <Link to="#">Copyright</Link>
                    </li>
                    <li>
                      <Link to="#">FAQ</Link>
                    </li>
                  </ul>
                </div>
                <div className="info-box">
                  <h4>For Attendees</h4>
                  <ul>
                    <li>
                      <Link to="#">Conference Program</Link>
                    </li>
                    <li>
                      <Link to="#">Keynote Speeches</Link>
                    </li>
                    <li>
                      <Link to="#">Guidelines</Link>
                    </li>
                    <li>
                      <Link to="#">Venue</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* END HERO RIGHT */}
          </div>
        </section>
        {/* about section */}
        <section className="about-section">
          <div className="container about-wrapper">
            {/* LEFT CONTENT */}
            <div className="about-content">
              <span className="section-tag">ABOUT PICET</span>
              <h2>Parul University (I²MSET)</h2>
              <p>
                I²MSET-{currentYear} is an international technical conference
                that brings together academicians, researchers, and industry
                experts to explore advancements in engineering, science, and
                emerging technologies. It promotes innovation and knowledge
                sharing through keynote talks, research presentations, and
                technical discussions.
              </p>
              <p>
                Furthermore, I²MSET-{currentYear} provides a valuable platform
                for students and early-career researchers to engage directly
                with domain experts, fostering meaningful knowledge exchange,
                collaboration, and mentorship opportunities.
              </p>
              <Link to="/gallery" className="btn primary-btn">
                {" "}
                View Gallery →{" "}
              </Link>
            </div>
            {/* RIGHT SIDE VIDEOS */}
            <div className="about-media">
              <div className="media-card">
                <video controls>
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
              <div className="media-card">
                <video controls>
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
        {/* highlight section */}
        <section className="highlights">
          <div className="dots-bg" />
          <div className="container highlights-wrapper">
            <h2 className="section-title">
              Previous I²MSET Conference Highlights
            </h2>
            {/* Image Row */}
            <div className="highlight-images">
              <div className="highlight-card">
                <img
                  src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
                  alt=""
                />
                <div className="overlay" />
              </div>
              <div className="highlight-card">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865"
                  alt=""
                />
                <div className="overlay" />
              </div>
              <div className="highlight-card">
                <img
                  src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa"
                  alt=""
                />
                <div className="overlay" />
              </div>
            </div>
            {/* Stats Strip */}
            <div className="highlight-stats">
              <div className="stat">
                <h3>
                  <span className="counter" data-target={350}>
                    0
                  </span>
                  +
                </h3>
                <p>Papers Presented</p>
              </div>
              <div className="stat">
                <h3>
                  <span className="counter" data-target={800}>
                    0
                  </span>
                  +
                </h3>
                <p>Attendees</p>
              </div>
              <div className="stat">
                <h3>
                  <span className="counter" data-target={20}>
                    0
                  </span>
                  +
                </h3>
                <p>Workshops Held</p>
              </div>
              {/* IEEE Logo */}
              <div className="ieee-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg"
                  alt="IEEE"
                />
              </div>
            </div>
          </div>
        </section>
        {/* speaker section*/}
        <section className="speakers-section">
          <div className="speakers-container">
            <div className="section-header">
              <h2>Meet Our Distinguished Speakers</h2>
            </div>
            <div className="slider">
              <div className="slide-track">
                {/* 1 */}
                <div className="speaker-card">
                  <div className="image-box">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" />
                  </div>
                  <div className="speaker-info">
                    <h4>Dr. John Bennett</h4>
                    <p>MIT</p>
                  </div>
                </div>
                {/* 2 */}
                <div className="speaker-card">
                  <div className="image-box">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" />
                  </div>
                  <div className="speaker-info">
                    <h4>Dr. Sara Williams</h4>
                    <p>IBM Research</p>
                  </div>
                </div>
                {/* 3 */}
                <div className="speaker-card">
                  <div className="image-box">
                    <img src="https://randomuser.me/api/portraits/men/46.jpg" />
                  </div>
                  <div className="speaker-info">
                    <h4>Dr. Amit Patel</h4>
                    <p>Stanford University</p>
                  </div>
                </div>
                {/* 4 */}
                <div className="speaker-card">
                  <div className="image-box">
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" />
                  </div>
                  <div className="speaker-info">
                    <h4>Dr. Emily Carter</h4>
                    <p>UCLA</p>
                  </div>
                </div>
                {/* DUPLICATE FOR INFINITE LOOP */}
                <div className="speaker-card">
                  <div className="image-box">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" />
                  </div>
                  <div className="speaker-info">
                    <h4>Dr. John Bennett</h4>
                    <p>MIT</p>
                  </div>
                </div>
                <div className="speaker-card">
                  <div className="image-box">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" />
                  </div>
                  <div className="speaker-info">
                    <h4>Dr. Sara Williams</h4>
                    <p>IBM Research</p>
                  </div>
                </div>
                <div className="speaker-card">
                  <div className="image-box">
                    <img src="https://randomuser.me/api/portraits/men/46.jpg" />
                  </div>
                  <div className="speaker-info">
                    <h4>Dr. Amit Patel</h4>
                    <p>Stanford University</p>
                  </div>
                </div>
                <div className="speaker-card">
                  <div className="image-box">
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" />
                  </div>
                  <div className="speaker-info">
                    <h4>Dr. Emily Carter</h4>
                    <p>UCLA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-btn">
              <Link to="/speaker" className="btn-primary">
                View All Speakers →
              </Link>
            </div>
          </div>
        </section>
        {/* publisher section */}
        <section className="partners-section">
          {/* Floating Dots */}
          <div className="partners-dots" />
          {/* Wave */}
          <div className="partners-wave" />
          <div className="partners-container">
            <div className="section-header">
              <h2>Our Publishing Partners</h2>
            </div>
            <div className="partners-slider">
              <div className="partners-track">
                {/* Logos */}
                <div className="partner">
                  <img src={icon} />
                </div>
                <div className="partner">
                  <img src={icon} />
                </div>
                <div className="partner">
                  <img src={icon} />
                </div>
                <div className="partner">
                  <img src={icon} />
                </div>
                <div className="partner">
                  <img src={icon} />
                </div>
                {/* Duplicate for Infinite */}
                <div className="partner">
                  <img src={icon} />
                </div>
                <div className="partner">
                  <img src={icon} />
                </div>
                <div className="partner">
                  <img src={icon} />
                </div>
                <div className="partner">
                  <img src={icon} />
                </div>
                <div className="partner">
                  <img src={icon} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial section */}
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="section-header">
              <h2>What Our Attendees Say</h2>
            </div>
            <div className="testimonial-slider">
              <div className="testimonial-track">
                {/* CARD 1 */}
                <div className="testimonial-card">
                  <div className="profile">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" />
                    <div>
                      <h4>Dr. Anil Deshmukh</h4>
                      <p>Professor, IIT Delhi</p>
                    </div>
                  </div>
                  <p className="review">
                    “The conference was exceptionally well organized and
                    provided outstanding networking opportunities in engineering
                    research.”
                  </p>
                </div>
                {/* CARD 2 */}
                <div className="testimonial-card">
                  <div className="profile">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" />
                    <div>
                      <h4>Sarah Mitchell</h4>
                      <p>Senior Researcher, IBM</p>
                    </div>
                  </div>
                  <p className="review">
                    “The depth of expertise at this conference is remarkable. I
                    met inspiring researchers from around the globe.”
                  </p>
                </div>
                {/* CARD 3 */}
                <div className="testimonial-card">
                  <div className="profile">
                    <img src="https://randomuser.me/api/portraits/men/46.jpg" />
                    <div>
                      <h4>Dr. Amit Patel</h4>
                      <p>Stanford University</p>
                    </div>
                  </div>
                  <p className="review">
                    “A fantastic academic platform for presenting innovative
                    research and gaining valuable insights.”
                  </p>
                </div>
                {/* DUPLICATE FOR INFINITE LOOP */}
                <div className="testimonial-card">
                  <div className="profile">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" />
                    <div>
                      <h4>Dr. Anil Deshmukh</h4>
                      <p>Professor, IIT Delhi</p>
                    </div>
                  </div>
                  <p className="review">
                    “The conference was exceptionally well organized and
                    provided outstanding networking opportunities in engineering
                    research.”
                  </p>
                </div>
                <div className="testimonial-card">
                  <div className="profile">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" />
                    <div>
                      <h4>Sarah Mitchell</h4>
                      <p>Senior Researcher, IBM</p>
                    </div>
                  </div>
                  <p className="review">
                    “The depth of expertise at this conference is remarkable. I
                    met inspiring researchers from around the globe.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* supporter section */}
        <section className="supporters-section">
          {/* Floating Dots */}
          <div className="supporters-dots" />
          {/* Wave */}
          <div className="supporters-wave" />
          <div className="supporters-container">
            <div className="section-header">
              <h2>Our Supporters</h2>
            </div>
            <div className="supporters-slider">
              <div className="supporters-track">
                {/* Logos */}
                <div className="supporter">
                  <img src={icon} />
                </div>
                <div className="supporter">
                  <img src={icon} />
                </div>
                <div className="supporter">
                  <img src={icon} />
                </div>
                <div className="supporter">
                  <img src={icon} />
                </div>
                <div className="supporter">
                  <img src={icon} />
                </div>
                {/* Duplicate for Infinite */}
                <div className="supporter">
                  <img src={icon} />
                </div>
                <div className="supporter">
                  <img src={icon} />
                </div>
                <div className="supporter">
                  <img src={icon} />
                </div>
                <div className="supporter">
                  <img src={icon} />
                </div>
                <div className="supporter">
                  <img src={icon} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
