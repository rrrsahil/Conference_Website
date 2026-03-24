import React, { useMemo } from "react";
import "../css/KeyDates.css";

const KeyDates = () => {
  // ================= CURRENT DATE =================
  const today = new Date();

  // ================= DATE DATA (FUTURE READY STRUCTURE) =================
  const keyDates = [
    {
      title: "Commencement of Full-Length Paper Submission",
      dates: ["2025-10-15"],
    },
    {
      title: "Deadline for Full-Length Paper Submission",
      dates: ["2026-01-31", "2026-02-25"], // multiple = extended
    },
    {
      title: "Notification of Acceptance",
      dates: ["2026-02-28"],
    },
    {
      title: "Camera-Ready Paper Submission",
      dates: ["2026-03-16"],
    },
    {
      title: "Early Bird Registration Closes",
      dates: ["2026-03-25"],
    },
    {
      title: "Regular Registration Closes",
      dates: ["2026-04-11"],
    },
    {
      title: "Late Registration Closes",
      dates: ["2026-04-20"],
    },
    {
      title: "Conference Dates",
      startDate: "2026-05-01",
      endDate: "2026-05-02",
      isConference: true,
    },
  ];

  // ================= FORMAT DATE =================
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB");
  };

  // ================= FIND NEXT DEADLINE =================
  const nextDeadlineIndex = useMemo(() => {
    return keyDates.findIndex((item) => {
      if (item.dates) {
        const latest = new Date(item.dates[item.dates.length - 1]);
        return latest >= today;
      }
      return false;
    });
  }, [today]);

  return (
    <>
      <main>
        {/* ================= HERO ================= */}
        <section className="apk-hero">
          <div className="container">
            <span className="apk-tag">Authors</span>
            <h1>Important Dates</h1>
            <p>Key deadlines and milestones for I²MSET 2026 participants.</p>
          </div>
        </section>

        {/* ================= KEY DATES TABLE ================= */}
        <section className="apk-section">
          <div className="container">
            <div className="apk-table-wrapper">
              <table className="apk-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Date (DD/MM/YYYY)</th>
                  </tr>
                </thead>

                <tbody>
                  {keyDates.map((item, index) => {
                    const isNext = index === nextDeadlineIndex;

                    // ================= EXTENSION LOGIC =================
                    let latestDate = null;
                    let oldDates = [];
                    let isExtended = false;

                    if (item.dates) {
                      latestDate = item.dates[item.dates.length - 1];
                      oldDates = item.dates.slice(0, -1);
                      isExtended = item.dates.length > 1;
                    }

                    return (
                      <tr
                        key={index}
                        className={`
                          ${isExtended ? "apk-highlight" : ""}
                          ${item.isConference ? "apk-conference" : ""}
                          ${isNext ? "apk-active-deadline" : ""}
                        `}
                      >
                        <td data-label="Subject">
                          {item.title}

                          {/* EXTENDED BADGE (AUTO) */}
                          {isExtended && (
                            <span className="apk-badge">Extended</span>
                          )}

                          {/* NEXT DEADLINE TAG */}
                          {isNext && (
                            <span className="apk-live">Next Deadline</span>
                          )}
                        </td>

                        <td data-label="Date">
                          {/* OLD DATES (AUTO STRIKE) */}
                          {oldDates.map((d, i) => (
                            <span key={i} className="apk-strike">
                              {formatDate(d)}
                            </span>
                          ))}

                          {/* LATEST DATE */}
                          {latestDate && <span>{formatDate(latestDate)}</span>}

                          {/* CONFERENCE RANGE */}
                          {item.isConference && (
                            <strong>
                              {formatDate(item.startDate)} –{" "}
                              {formatDate(item.endDate)}
                            </strong>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default KeyDates;
