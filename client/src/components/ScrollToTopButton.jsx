import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "5px",
          padding: "10px 15px",
          fontSize: "18px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
