import React, { useState } from "react";
import "../css/CallForPaper.css";

const CallForPaper = () => {
  const [activeTab, setActiveTab] = useState("author");

  // download handler
  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <main className="cfp-main">
        {/* HERO */}
        <section className="cfp-hero">
          <div className="container">
            <h1>Call for Papers</h1>
            <p>
              Contribute your original and unpublished research in science,
              engineering, management and emerging technologies.
            </p>
            <button
              className="cfp-outline-btn cfp-hero-btn"
              style={{ color: "white" }}
              onClick={() =>
                document
                  .querySelector(".cfp-tabs-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Submit Your Paper
            </button>
          </div>
        </section>

        {/* TABS */}
        <section className="cfp-tabs-section">
          <div className="container">
            <div className="cfp-tabs">
              <button
                className={`cfp-tab ${activeTab === "author" ? "active" : ""}`}
                onClick={() => setActiveTab("author")}
              >
                Author Guidelines
              </button>

              <button
                className={`cfp-tab ${
                  activeTab === "submission" ? "active" : ""
                }`}
                onClick={() => setActiveTab("submission")}
              >
                Submission Guidelines
              </button>

              <button
                className={`cfp-tab ${activeTab === "paper" ? "active" : ""}`}
                onClick={() => setActiveTab("paper")}
              >
                Paper Submission
              </button>

              <button
                className={`cfp-tab ${
                  activeTab === "publication" ? "active" : ""
                }`}
                onClick={() => setActiveTab("publication")}
              >
                Publication Details
              </button>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="cfp-content">
          <div className="container">
            {activeTab === "author" && (
              <div className="cfp-panel active">
                <div className="cfp-card">
                  <h2>Author Guidelines</h2>
                  <p>
                    Authors are invited to submit original, unpublished
                    manuscripts. Maximum length: 8 pages including references.
                  </p>
                  <ul>
                    <li>Use official conference template</li>
                    <li>PDF format only</li>
                    <li>Plagiarism below 10%</li>
                    <li>Blind review process followed</li>
                  </ul>

                  <div className="cfp-btn-group">
                    <button
                      className="cfp-outline-btn"
                      onClick={() => handleDownload("/template.pdf")}        //public folder mein add the pdf and docx
                    >
                      Download Template
                    </button>

                    <button
                      className="cfp-outline-btn"
                      onClick={() => handleDownload("/copyright.pdf")}
                    >
                      Copyright Form (PDF)
                    </button>

                    <button
                      className="cfp-outline-btn"
                      onClick={() => handleDownload("/copyright.docx")}
                    >
                      Copyright Form (DOC)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "submission" && (
              <div className="cfp-panel active">
                <div className="cfp-card">
                  <h2>Submission Guidelines</h2>
                  <p>
                    Papers must be submitted through the official submission
                    portal. All submissions undergo double-blind peer review.
                  </p>
                  <ul>
                    <li>Upload via conference portal</li>
                    <li>No email submissions accepted</li>
                    <li>Reviewed by at least 2 experts</li>
                    <li>Acceptance based on originality & quality</li>
                  </ul>

                  <div className="cfp-btn-group">
                    <button
                      className="cfp-outline-btn"
                      onClick={() => handleDownload("/guidelines.pdf")}
                    >
                      Download Guidelines
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "paper" && (
              <div className="cfp-panel active">
                <div className="cfp-card">
                  <h2>Paper Submission</h2>
                  <p>
                    Ensure your manuscript strictly follows the formatting
                    template. Deviations may result in rejection due to
                    formatting issues.
                  </p>

                  <div className="cfp-btn-group">
                    <button
                      className="cfp-outline-btn"
                      onClick={() => alert("Upload system coming soon")}
                    >
                      Upload Your Paper
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "publication" && (
              <div className="cfp-panel active">
                <div className="cfp-card">
                  <h2>Publication Details</h2>
                  <p>
                    Accepted and presented papers will be published in I²MSET
                    Conference Proceedings (ISSN: 2732-4494).
                  </p>

                  <div className="cfp-badges">
                    <span>IEEE</span>
                    <span>Springer</span>
                    <span>Scopus Indexed</span>
                  </div>

                  <div className="cfp-btn-group">
                    <button
                      className="cfp-outline-btn"
                      onClick={() => handleDownload("/policy.pdf")}   
                    >
                      View Publication Policy
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default CallForPaper;
