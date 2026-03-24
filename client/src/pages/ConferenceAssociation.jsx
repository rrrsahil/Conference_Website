import React from "react";
import "../css/ConferenceAssociation.css";

// ================= DATA (JSON FORMAT) =================
const conferenceData = [
  {
    title: "Academic Partners",
    items: [
      {
        name: "Parul University",
        location: "Vadodara, Gujarat, India",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/Parul_University_Logo.png",
      },
      {
        name: "Oxford Research Group",
        location: "United Kingdom",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Oxford_University_Circlet.svg",
      },
      {
        name: "Stanford Research Center",
        location: "USA",
        logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
      },
      {
        name: "MIT Research Lab",
        location: "Massachusetts, USA",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
      },
      {
        name: "IIT Bombay",
        location: "Mumbai, India",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/IIT_Bombay_Logo.svg",
      },
      {
        name: "NIT Trichy",
        location: "Tamil Nadu, India",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5b/NIT_Trichy_Logo.png",
      },
    ],
  },

  {
    title: "Technical Collaborators",
    light: true,
    items: [
      {
        name: "IEEE Technical Chapter",
        location: "International Technical Partner",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg",
      },
      {
        name: "ACM Professional Group",
        location: "Research & Technical Collaboration",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/ACM_logo.svg",
      },
      {
        name: "CSI India",
        location: "Computer Society of India",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/CSI_Logo.png",
      },
      {
        name: "ISTE",
        location: "Indian Society for Technical Education",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/ISTE_logo.png",
      },
    ],
  },

  {
    title: "Industry Partners",
    items: [
      {
        name: "Tata Technologies",
        location: "Innovation Partner",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
      },
      {
        name: "Infosys Ltd.",
        location: "Technology Partner",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      },
      {
        name: "Microsoft Research",
        location: "AI & Cloud Collaboration",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      },
      {
        name: "Google Research",
        location: "AI Innovation Partner",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      },
      {
        name: "Amazon AWS",
        location: "Cloud Infrastructure Partner",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        name: "IBM Research",
        location: "AI & Quantum Computing",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      },
    ],
  },

  {
    title: "Media & Publication Partners",
    light: true,
    items: [
      {
        name: "Springer",
        location: "Proceedings Publication Partner",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Springer_logo.svg",
      },
      {
        name: "Elsevier",
        location: "Indexed Journal Support",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Elsevier_logo.svg",
      },
      {
        name: "IEEE Xplore",
        location: "Digital Library Indexing",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg",
      },
      {
        name: "Scopus",
        location: "Abstract & Citation Database",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Scopus_logo.svg",
      },
    ],
  },

  {
    title: "International Collaborators",
    items: [
      {
        name: "Harvard University",
        location: "USA",
        logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
      },
      {
        name: "University of Cambridge",
        location: "United Kingdom",
        logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/University_of_Cambridge_coat_of_arms.svg",
      },
      {
        name: "ETH Zurich",
        location: "Switzerland",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/ETH_Zurich_Logo.svg",
      },
      {
        name: "University of Tokyo",
        location: "Japan",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Tokyo_logo.svg",
      },
    ],
  },

  {
    title: "Startup & Innovation Partners",
    light: true,
    items: [
      {
        name: "OpenAI",
        location: "AI Research Organization",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      },
      {
        name: "DeepMind",
        location: "AI Innovation Lab",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/DeepMind_logo.svg",
      },
      {
        name: "NVIDIA AI",
        location: "GPU & AI Computing",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      },
      {
        name: "Intel Labs",
        location: "Semiconductor Research",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
      },
    ],
  },
];
// ================= COMPONENT =================
const ConferenceAssociation = () => {

  // CTA Button Function
  const handlePartnerClick = () => {
    // Option 1: Redirect
    window.location.href = "/contact";

    // Option 2 (if form modal use karna ho future me)
    // alert("Redirecting to partnership form...");
  };

  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="apa-hero">
        <div className="container">
          <span className="apa-tag">Conference Associates</span>
          <h1>Our Esteemed Conference Associations</h1>
          <p>
            I²MSET 2026 proudly collaborates with leading academic
            institutions, industry partners and global research organizations.
          </p>
        </div>
      </section>

      {/* ================= DYNAMIC SECTIONS ================= */}
      {conferenceData.map((section, index) => (
        <section
          key={index}
          className={`apa-section ${section.light ? "apa-light" : ""}`}
        >
          <div className="container">
            <h2 className="apa-title">{section.title}</h2>

            <div className="apa-grid">
              {section.items.map((item, idx) => (
                <div className="apa-card" key={idx}>
                  <img src={item.logo} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ================= CTA ================= */}
      <section className="apa-cta">
        <div className="container">
          <h2>Become a Conference Partner</h2>
          <p>
            Collaborate with I²MSET 2026 and join a global research network.
          </p>

          <button className="apa-btn" onClick={handlePartnerClick}>
            Partner With Us
          </button>
        </div>
      </section>
    </main>
  );
};

export default ConferenceAssociation;