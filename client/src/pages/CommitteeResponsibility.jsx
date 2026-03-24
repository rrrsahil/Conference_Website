import React from "react";
import "../css/CommitteeResponsibility.css";

const CommitteeResponsibility = () => {
  return (
    <>
      <main>
        {/* ================= HERO ================= */}
        <section className="apr-hero">
          <div className="container">
            <span className="apr-tag">Committee</span>
            <h1>Responsibilities</h1>
            <p>
              Empowering innovations where precision meets rigor in conference
              excellence.
            </p>
          </div>
        </section>
        {/* ================= RESPONSIBILITIES SECTION ================= */}
        <section className="apr-section">
          <div className="container apr-grid">
            {/* Program Chair */}
            <div className="apr-card">
              <h3>Program Chair Responsibilities</h3>
              <ul>
                <li>
                  Supervise review process ensuring scrutiny by at least two
                  qualified reviewers.
                </li>
                <li>Implement plagiarism checks for all submitted papers.</li>
                <li>Oversee collection of copyright forms.</li>
                <li>Ensure accepted papers are presented at the conference.</li>
              </ul>
            </div>
            {/* Technical Chair */}
            <div className="apr-card">
              <h3>Technical Committee Chair Responsibilities</h3>
              <ul>
                <li>Coordinate review proceedings with committee members.</li>
                <li>Reject papers not meeting outlined requirements.</li>
                <li>Organize technical sessions during the conference.</li>
                <li>Allocate tracks to designated experts.</li>
              </ul>
            </div>
            {/* Reviewer */}
            <div className="apr-card">
              <h3>Reviewer Responsibilities</h3>
              <ul>
                <li>Maintain confidentiality of reviewed papers.</li>
                <li>Conduct criteria-based evaluations.</li>
                <li>Disclose conflicts of interest.</li>
              </ul>
            </div>
            {/* Organizing Committee */}
            <div className="apr-card">
              <h3>Organizing Committee Responsibilities</h3>
              <ul>
                <li>Promote conference across institutions.</li>
                <li>Identify sponsors and partners.</li>
                <li>Manage venue and presentation logistics.</li>
                <li>Recommend keynote speakers.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="apr-section apr-center-title">
          <div className="container">
            <h2>Acceptance Criteria &amp; Reasons for Rejection</h2>
          </div>
        </section>
        {/* ================= ACCEPTANCE CRITERIA ================= */}
        <section className="apr-section apr-light">
          <div className="container apr-grid">
            <div className="apr-card">
              <h3>Acceptance Criteria</h3>
              <ul>
                <li>Adherence to conference format &amp; page limits.</li>
                <li>Originality and research contribution.</li>
                <li>Clarity in English language.</li>
                <li>Technical quality and framework.</li>
              </ul>
            </div>
            <div className="apr-card">
              <h3>Reasons for Rejection</h3>
              <ul>
                <li>Plagiarism or recycled content.</li>
                <li>Repetition from previous publications.</li>
                <li>Significant formatting errors.</li>
                <li>Commercial focus without technical merit.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CommitteeResponsibility;
