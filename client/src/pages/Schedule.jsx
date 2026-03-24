import React from "react";
import { Link } from "react-router-dom";
import "../css/Schedule.css";

/* ================= JSON DATA ================= */
const scheduleData = {
  hero: {
    tag: "I²MSET 2026",
    title: "Conference Schedule",
  },

  overview: [
    { title: "Conference Dates", value: "15–18 March 2026" },
    { title: "Venue", value: "Parul University, Vadodara" },
    { title: "Theme", value: "Smart & Sustainable Emerging Technologies" },
    { title: "Registration Desk", value: "Opens at 8:30 AM Daily" },
  ],

  days: [
    {
      title: "Day 1 – 15 March 2026",
      light: false,
      events: [
        {
          time: "09:00 AM",
          title: "Registration & Welcome Kit Distribution",
          desc: "Main Lobby",
        },
        {
          time: "10:00 AM",
          title: "Inauguration Ceremony",
          desc: "Chief Patron & University Leadership",
        },
        {
          time: "11:30 AM",
          title: "Keynote Address – AI in Sustainable Systems",
          desc: "Dr. Robert Smith",
        },
        {
          time: "01:00 PM",
          title: "Lunch Break",
        },
        {
          time: "02:00 PM",
          title: "Technical Sessions – Track A & B",
        },
      ],
    },
    {
      title: "Day 2 – 16 March 2026",
      light: true,
      events: [
        {
          time: "09:30 AM",
          title: "Keynote – Cybersecurity & Data Science",
        },
        {
          time: "11:00 AM",
          title: "Parallel Technical Tracks",
        },
        {
          time: "02:00 PM",
          title: "Industry Expert Talk",
        },
        {
          time: "04:00 PM",
          title: "Workshop: Emerging Technologies",
        },
      ],
    },
    {
      title: "Day 3 – 17 March 2026",
      light: false,
      events: [
        {
          time: "09:30 AM",
          title: "Poster Presentation Session",
        },
        {
          time: "12:00 PM",
          title: "Awards & Recognition Ceremony",
        },
        {
          time: "02:00 PM",
          title: "Valedictory Function & Closing Remarks",
        },
      ],
    },
  ],
};

/* ================= COMPONENT ================= */
const Schedule = () => {
  // 🔥 Dynamic fetch for Date & Venue from overview
  const conferenceDate = scheduleData.overview.find(
    (item) => item.title === "Conference Dates"
  )?.value;

  const conferenceVenue = scheduleData.overview.find(
    (item) => item.title === "Venue"
  )?.value;

  return (
    <>
      <main>
        {/* ================= HERO ================= */}
        <section className="apsch-hero">
          <div className="container">
            <span className="apsch-tag">{scheduleData.hero.tag}</span>
            <h1>{scheduleData.hero.title}</h1>
            <p>
              {conferenceDate} | {conferenceVenue}
            </p>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="apsch-overview">
          <div className="container apsch-overview-grid">
            {scheduleData.overview.map((item, index) => (
              <div className="apsch-info-box" key={index}>
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= DAYS ================= */}
        {scheduleData.days.map((day, index) => (
          <section
            key={index}
            className={`apsch-day-section ${day.light ? "apsch-light" : ""}`}
          >
            <div className="container">
              <h2 className="apsch-day-title">{day.title}</h2>

              <div className="apsch-timeline">
                {day.events.map((event, i) => (
                  <div className="apsch-event" key={i}>
                    <span className="apsch-time">{event.time}</span>

                    <div>
                      <h4>{event.title}</h4>
                      {event.desc && <p>{event.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ================= DOWNLOAD ================= */}
        <section className="apsch-download">
          <div className="container">
            <h2>Download Full Schedule</h2>
            <p>Get the complete detailed timetable in PDF format.</p>

            <Link to="#" className="apsch-btn">
              Download PDF
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Schedule;