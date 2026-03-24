import React, { useState, useEffect } from "react";
import "../css/News.css";

const newsData = [
  {
    id: 1,
    category: "deadline",
    date: "2026-12-15",
    title: "Full Paper Submission Deadline Extended",
    desc: "The submission deadline has been extended to allow more international researchers to participate in I²MSET.",
  },
  {
    id: 2,
    category: "speaker",
    date: "2026-01-05",
    title: "International Keynote Speaker Announced",
    desc: "We are proud to welcome a globally recognized researcher as keynote speaker.",
  },
  {
    id: 3,
    category: "registration",
    date: "2026-01-20",
    title: "Early Bird Registration Now Open",
    desc: "Take advantage of discounted registration fees during early bird phase.",
  },
  {
    id: 4,
    category: "award",
    date: "2026-02-10",
    title: "Best Paper Award Categories Released",
    desc: "Award categories recognizing excellence in research contributions.",
  },
  {
    id: 5,
    category: "deadline",
    date: "2026-11-10",
    title: "Abstract Submission Deadline",
    desc: "Submit your abstracts before the final submission deadline.",
  },
  {
    id: 6,
    category: "speaker",
    date: "2026-03-15",
    title: "New AI Expert Speaker Added",
    desc: "Renowned AI expert joins the conference speaker list.",
  },
  {
    id: 7,
    category: "registration",
    date: "2026-04-01",
    title: "Late Registration Open",
    desc: "Final chance to register before conference begins.",
  },
  {
    id: 8,
    category: "award",
    date: "2026-05-05",
    title: "Young Researcher Award Introduced",
    desc: "Special award category introduced for young researchers.",
  },
  {
    id: 9,
    category: "speaker",
    date: "2026-06-10",
    title: "Industry Expert Panel Confirmed",
    desc: "Top industry leaders from Microsoft, Google, and IBM will join the panel discussion.",
  },
  {
    id: 10,
    category: "deadline",
    date: "2026-10-01",
    title: "Final Paper Submission Deadline Reminder",
    desc: "Authors are requested to complete submissions before the final deadline.",
  },
  {
    id: 11,
    category: "registration",
    date: "2026-06-20",
    title: "Group Registration Discount Announced",
    desc: "Special discounts available for group registrations from institutions.",
  },
  {
    id: 12,
    category: "award",
    date: "2026-07-05",
    title: "Best Innovation Award Introduced",
    desc: "New award category recognizing innovative solutions in engineering.",
  },
  {
    id: 13,
    category: "speaker",
    date: "2026-07-18",
    title: "International Robotics Expert Confirmed",
    desc: "A leading robotics scientist will deliver a keynote session.",
  },
  {
    id: 14,
    category: "deadline",
    date: "2026-09-15",
    title: "Camera Ready Submission Deadline",
    desc: "Final version of accepted papers must be submitted before this date.",
  },
  {
    id: 15,
    category: "registration",
    date: "2026-08-01",
    title: "Student Registration Discount",
    desc: "Special reduced fees available for student participants.",
  },
  {
    id: 16,
    category: "award",
    date: "2026-08-20",
    title: "Best Poster Presentation Award",
    desc: "Award for outstanding poster presentations during the conference.",
  },
  {
    id: 17,
    category: "speaker",
    date: "2026-09-05",
    title: "Cybersecurity Expert Speaker Added",
    desc: "Global cybersecurity specialist joins the keynote lineup.",
  },
  {
    id: 18,
    category: "deadline",
    date: "2026-08-30",
    title: "Workshop Proposal Submission Deadline",
    desc: "Submit proposals for workshops and tutorials before deadline.",
  },
  {
    id: 19,
    category: "registration",
    date: "2026-09-20",
    title: "Final Registration Deadline",
    desc: "Last date to complete registration before conference schedule is locked.",
  },
  {
    id: 20,
    category: "award",
    date: "2026-10-10",
    title: "Lifetime Achievement Award Announcement",
    desc: "Prestigious award to honor a distinguished contributor in engineering.",
  },
];

const News = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);

  const itemsPerPage = 6;

  // SORT
  const sortedNews = [...newsData].sort((a, b) =>
    sortOrder === "latest"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date),
  );

  // FILTER
  const filteredNews =
    filter === "all"
      ? sortedNews
      : sortedNews.filter((item) => item.category === filter);

  // SEARCH
  const finalNews = filteredNews.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  // PAGINATION
  const totalPages = Math.max(1, Math.ceil(finalNews.length / itemsPerPage));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = finalNews.slice(startIndex, startIndex + itemsPerPage);

  // 🔥 FIX: Prevent empty page bug
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages]);

  // SCROLL TOP
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const isNew = (date) => {
    const diff = (new Date() - new Date(date)) / (1000 * 60 * 60 * 24);
    return diff <= 7;
  };

  return (
    <main>
      {/* HERO */}
      <section className="apn-hero">
        <div className="container apn-hero-container">
          <span className="apn-tag">News & Updates</span>
          <h1>Latest Announcements</h1>
          <p>
            Stay informed about important deadlines, keynote speakers,
            registration updates and major conference announcements.
          </p>
        </div>
      </section>

      {/* FILTER + SEARCH */}
      <section className="apn-filter-section">
        <div className="container">
          <div className="apn-filter-tabs">
            {["all", "deadline", "speaker", "registration", "award"].map(
              (type) => (
                <button
                  key={type}
                  className={`apn-filter-btn ${
                    filter === type ? "active" : ""
                  }`}
                  onClick={() => {
                    setFilter(type);
                    setCurrentPage(1);
                  }}
                >
                  {type === "all"
                    ? "All"
                    : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ),
            )}
          </div>

          <div className="apn-search-sort">
            <input
              type="text"
              placeholder="🔍 Search news..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />

            <select
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="apn-news-section">
        <div className="container apn-news-grid">
          {currentItems.length === 0 && (
            <p className="no-data">No news found 😢</p>
          )}

          {currentItems.map((item) => (
            <div className="apn-card" key={item.id}>
              <div className="apn-date">{formatDate(item.date)}</div>

              <span className={`apn-category ${item.category}`}>
                {item.category}
              </span>

              {isNew(item.date) && <span className="new-badge">NEW</span>}

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <button
                className="apn-read-more"
                onClick={() => setSelectedNews(item)}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PAGINATION */}
      <section className="apn-pagination-section">
        <div className="container">
          <div className="apn-pagination">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedNews && (
        <div className="apn-modal" onClick={() => setSelectedNews(null)}>
          <div
            className="apn-modal-content animate"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="apn-close" onClick={() => setSelectedNews(null)}>
              ×
            </span>

            <h2>{selectedNews.title}</h2>
            <p className="modal-date">{formatDate(selectedNews.date)}</p>
            <p>{selectedNews.desc}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default News;
