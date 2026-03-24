import React, { useState, useRef } from "react";
import "../css/Gallery.css";

const galleryData = [
  {
    id: 1,
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    views: 310,
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    views: 83,
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    views: 157,
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    views: 237,
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    views: 89,
  },
  {
    id: 6,
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    views: 254,
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    views: 420,
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    views: 198,
  },
  {
    id: 9,
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    views: 305,
  },
  {
    id: 10,
    type: "image",
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    views: 145,
  },
  {
    id: 11,
    type: "image",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    views: 267,
  },
  {
    id: 12,
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    views: 390,
  },
  {
    id: 13,
    type: "image",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
    views: 178,
  },
  {
    id: 14,
    type: "image",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    views: 222,
  },
  {
    id: 15,
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    views: 312,
  },
  {
    id: 16,
    type: "image",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    views: 501,
  },
  {
    id: 17,
    type: "image",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    views: 275,
  },
  {
    id: 18,
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    views: 199,
  },
  {
    id: 19,
    type: "image",
    src: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    views: 333,
  },
  {
    id: 20,
    type: "image",
    src: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
    views: 289,
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [previewIndex, setPreviewIndex] = useState(null);

  const touchStartX = useRef(0);

  const filteredData =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.type === filter);

  const openPreview = (index) => {
    setPreviewIndex(index);
  };

  const closePreview = () => {
    setPreviewIndex(null);
  };

  const nextSlide = () => {
    setPreviewIndex((prev) =>
      prev === filteredData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setPreviewIndex((prev) =>
      prev === 0 ? filteredData.length - 1 : prev - 1
    );
  };

  // Swipe gesture
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <main>
      {/* HERO */}
      <section className="apg-hero">
        <div className="container apg-hero-container">
          <span className="apg-tag">Gallery</span>
          <h1>Glimpses of I²MSET</h1>
          <p>
            Explore highlights from past I²MSET conferences featuring engaging
            sessions, distinguished speakers and memorable academic moments.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="apg-filter-section">
        <div className="container">
          <div className="apg-filter-tabs">
            {["all", "image", "video"].map((type) => (
              <button
                key={type}
                className={`apg-filter-btn ${
                  filter === type ? "active" : ""
                }`}
                onClick={() => setFilter(type)}
              >
                {type === "all"
                  ? "All"
                  : type === "image"
                  ? "Images"
                  : "Videos"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="apg-gallery-section">
        <div className="container apg-gallery-grid">
          {filteredData.map((item, index) => (
            <div className="apg-card" key={item.id}>
              <div
                className={`apg-media ${
                  item.type === "video" ? "video" : ""
                }`}
                onClick={() => openPreview(index)}
              >
                {item.type === "image" ? (
                  <img src={item.src} loading="lazy" alt="" />
                ) : (
                  <>
                    {/* AUTO VIDEO THUMBNAIL */}
                    <video
                      src={item.src}
                      muted
                      preload="metadata"
                      className="thumb-video"
                    />
                    <span className="apg-play">
                      <i className="fa-solid fa-play" />
                    </span>
                  </>
                )}
              </div>

              <div className="apg-meta">
                <span>
                  <i className="fa-regular fa-eye" /> {item.views} views
                </span>
                <i className="fa-regular fa-bookmark" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {previewIndex !== null && (
        <div className="apg-modal" onClick={closePreview}>
          <div
            className="apg-modal-content animate"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <span className="apg-close" onClick={closePreview}>
              ×
            </span>

            {/* LEFT / RIGHT */}
            <button className="nav left" onClick={prevSlide}>
              ‹
            </button>
            <button className="nav right" onClick={nextSlide}>
              ›
            </button>

            {filteredData[previewIndex].type === "image" ? (
              <img src={filteredData[previewIndex].src} alt="" />
            ) : (
              <video controls autoPlay>
                <source
                  src={filteredData[previewIndex].src}
                  type="video/mp4"
                />
              </video>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;