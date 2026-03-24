import { useEffect, useState } from "react";
import "../css/FloatingWidgets.css";

const FloatingWidgets = () => {
  const [showDates, setShowDates] = useState(false);
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // EVENTS
  const events = [
    { title: "Paper Submission", date: new Date("2026-01-10") },
    { title: "Review Process", date: new Date("2026-02-05") },
    { title: "Acceptance Notification", date: new Date("2026-02-20") },
    { title: "Camera Ready Submission", date: new Date("2026-03-10") },
    { title: "Registration Deadline", date: new Date("2026-03-25") },
    {
      title: "Conference",
      start: new Date("2026-04-05"),
      end: new Date("2026-04-07"),
    },
  ];

  // STATUS
  const getStatus = (event) => {
    if (event.start && event.end) {
      if (today >= event.start && today <= event.end) return "ongoing";
      if (today > event.end) return "completed";
      return "upcoming";
    }

    if (today.toDateString() === event.date.toDateString()) return "today";
    if (today > event.date) return "completed";

    return "upcoming";
  };

  // FIXED NEXT EVENT LOGIC
  const nextEvent = events.find((e) => {
    if (e.date) return e.date > today;
    return e.start > today;
  });

  return (
    <>
      {/* LEFT */}
      <div
        className="leftTab"
        onClick={() => (window.location.href = "/call-for-paper")}
      >
        Submit Your Paper
      </div>

      {/* RIGHT */}
      <div
        className="rightTab"
        onClick={() => (window.location.href = "/workshop")}
      >
        Workshop
      </div>

      {/* CONTACT */}
      <div
        className="contactBtn"
        onClick={() => (window.location.href = "/contact")}
      >
        📩 Contact
      </div>

      {/* DATES BUTTON */}
      <div className="datesBtn" onClick={() => setShowDates(true)}>
        📅 Dates
      </div>

      {/* BACKDROP */}
      {showDates && (
        <div className="backdrop" onClick={() => setShowDates(false)} />
      )}

      {/* PANEL */}
      <div className={`datesPanel ${showDates ? "open" : ""}`}>
        <div className="panelHeader">
          <h3>Important Dates</h3>
          <span onClick={() => setShowDates(false)}>✖</span>
        </div>

        <div className="simpleList">
          {events.map((event, index) => {
            const status = getStatus(event);
            const isNext = nextEvent?.title === event.title;

            return (
              <div className={`listItem ${status}`} key={index}>
                <div className="eventTitle">
                  {event.title}

                  {status === "completed" && <span className="done">✔</span>}
                  {status === "today" && <span className="today">Today</span>}
                  {status === "ongoing" && <span className="live">Live</span>}
                  {isNext && <span className="next">Next</span>}
                </div>

                <div className="eventDate">
                  {event.date
                    ? event.date.toDateString()
                    : `${event.start.toDateString()} - ${event.end.toDateString()}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FloatingWidgets;