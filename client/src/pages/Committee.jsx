import React from "react";
import "../css/Committee.css";

const Committee = () => {
  // ================= DATA =================
  const committeeData = {
    chief: [
      {
        id: "devanshu",
        name: "Dr. Devanshu Patel",
        role: "President, Parul University",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        type: "Chief Patron",
      },
      {
        id: "devanshu",
        name: "Dr. Devanshu Patel",
        role: "President, Parul University",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        type: "Chief Patron",
      },
      {
        id: "devanshu",
        name: "Dr. Devanshu Patel",
        role: "President, Parul University",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        type: "Chief Patron",
      },
    ],

    patrons: [
      {
        id: "geetika",
        name: "Dr. Geetika Madan Patel",
        role: "Vice President, Parul University",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        type: "Patron",
      },
      {
        id: "parul",
        name: "Dr. Parul Patel",
        role: "Vice President, Parul University",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        type: "Patron",
      },
      {
        id: "amit",
        name: "Dr. Amit Shah",
        role: "Director, Academic Affairs",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        type: "Patron",
      },
      {
        id: "geetika",
        name: "Dr. Geetika Madan Patel",
        role: "Vice President, Parul University",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        type: "Patron",
      },
      {
        id: "parul",
        name: "Dr. Parul Patel",
        role: "Vice President, Parul University",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        type: "Patron",
      },
      {
        id: "amit",
        name: "Dr. Amit Shah",
        role: "Director, Academic Affairs",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        type: "Patron",
      },
    ],

    convenors: [
      {
        id: "madhusoodanan",
        name: "Prof. K. N. Madhusoodanan",
        role: "Provost, Parul University",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        type: "Convenor",
      },
      {
        id: "kunjal",
        name: "Dr. Kunjal Sinha",
        role: "Pro Vice Chancellor",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        type: "Convenor",
      },
      {
        id: "rakesh",
        name: "Dr. Rakesh Kumar",
        role: "Head, Research Cell",
        image: "https://randomuser.me/api/portraits/men/21.jpg",
        type: "Convenor",
      },
    ],

    technical: [
      {
        id: "vipul",
        name: "Dr. Vipul Vekariya",
        role: "Dean, Engineering & Technology",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        type: "Technical",
      },
      {
        id: "vishal",
        name: "Dr. Vishal Sorathiya",
        role: "Professor, Parul University",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        type: "Technical",
      },
      {
        id: "neha",
        name: "Dr. Neha Sharma",
        role: "Associate Professor, CSE",
        image: "https://randomuser.me/api/portraits/women/52.jpg",
        type: "Technical",
      },
      {
        id: "rahul",
        name: "Dr. Rahul Mehta",
        role: "Assistant Professor, IT",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
        type: "Technical",
      },
    ],

    advisory: [
      {
        id: "andrey",
        name: "Dr. Andrey Kuzmin",
        role: "Penza State University, Russia",
        image: "https://randomuser.me/api/portraits/men/60.jpg",
        type: "Intl. Advisory",
      },
      {
        id: "john",
        name: "Dr. John Smith",
        role: "University of Oxford, UK",
        image: "https://randomuser.me/api/portraits/men/61.jpg",
        type: "Intl. Advisory",
      },
      {
        id: "li",
        name: "Dr. Li Wei",
        role: "Tsinghua University, China",
        image: "https://randomuser.me/api/portraits/men/62.jpg",
        type: "Intl. Advisory",
      },
    ],

    executive: [
      {
        id: "mehul",
        name: "Dr. Mehul Gor",
        role: "Vice Principal",
        image: "https://randomuser.me/api/portraits/men/24.jpg",
        type: "Executive",
      },
      {
        id: "priya",
        name: "Dr. Priya Desai",
        role: "Coordinator, Events",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        type: "Executive",
      },
      {
        id: "sachin",
        name: "Mr. Sachin Patel",
        role: "Technical Support Lead",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        type: "Executive",
      },
    ],
  };

  // ================= FUNCTION =================
  const renderCards = (list, badgeClass = "") => {
    return list.map((member) => (
      <div
        key={member.id}
        className={`apc-card ${
          member.type === "Chief Patron" ? "apc-large" : ""
        }`}
      >
        <span className={`apc-badge ${badgeClass}`}>{member.type}</span>
        <img src={member.image} alt={member.name} />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    ));
  };

  return (
    <>
      <main>
        {/* ================= HERO ================= */}
        <section className="apc-hero">
          <div className="container">
            <span className="apc-tag">Committee</span>
            <h1>Organizing Committee</h1>
            <p>Meet the leadership and academic experts guiding I²MSET 2026.</p>
          </div>
        </section>

        {/* ================= CHIEF ================= */}
        <section className="apc-section">
          <div className="container">
            <h2 className="apc-title">Chief Patron</h2>

            {/* ✅ ADD THIS */}
            <div className="apc-grid">
              {renderCards(committeeData.chief, "apc-chief")}
            </div>
          </div>
        </section>

        {/* ================= PATRONS ================= */}
        <section className="apc-section apc-light">
          <div className="container">
            <h2 className="apc-title">Patrons</h2>
            <div className="apc-grid">{renderCards(committeeData.patrons)}</div>
          </div>
        </section>

        {/* ================= CONVENORS ================= */}
        <section className="apc-section">
          <div className="container">
            <h2 className="apc-title">Convenors</h2>
            <div className="apc-grid">
              {renderCards(committeeData.convenors, "apc-blue")}
            </div>
          </div>
        </section>

        {/* ================= TECHNICAL ================= */}
        <section className="apc-section apc-light">
          <div className="container">
            <h2 className="apc-title">Technical Committee</h2>
            <div className="apc-grid">
              {renderCards(committeeData.technical, "apc-blue")}
            </div>
          </div>
        </section>

        {/* ================= ADVISORY ================= */}
        <section className="apc-section">
          <div className="container">
            <h2 className="apc-title">International Advisory Committee</h2>
            <div className="apc-grid">
              {renderCards(committeeData.advisory, "apc-purple")}
            </div>
          </div>
        </section>

        {/* ================= EXECUTIVE ================= */}
        <section className="apc-section apc-light">
          <div className="container">
            <h2 className="apc-title">Executive Committee</h2>
            <div className="apc-grid">
              {renderCards(committeeData.executive, "apc-green")}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Committee;
