import React from "react";
import { Link } from "react-router-dom";
import "../css/TouristAttractions.css";

/* ================= STAR RATING FUNCTION ================= */
const renderStars = (rating) => {
  const stars = [];

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={"full-" + i} className="fa-solid fa-star"></i>);
  }

  if (hasHalf) {
    stars.push(<i key="half" className="fa-solid fa-star-half-stroke"></i>);
  }

  const emptyStars = 5 - Math.ceil(rating);

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={"empty-" + i} className="fa-regular fa-star"></i>);
  }

  return stars;
};

/* ================= DATA ================= */

const attractions = [
  {
    name: "Laxmi Vilas Palace",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    desc: "Grand royal palace of Gaekwad dynasty.",
    distance: "18 km",
    map: "https://www.google.com/maps?q=Laxmi+Vilas+Palace+Vadodara",
    phone: "+919876543210",
    rating: 4.7,
  },
  {
    name: "Sayaji Garden",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
    desc: "Huge garden with zoo & museum.",
    distance: "17 km",
    map: "https://www.google.com/maps?q=Sayaji+Garden+Vadodara",
    phone: "+919876543210",
    rating: 4.5,
  },
  {
    name: "Ajwa Water Park",
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07",
    desc: "Best water park for fun.",
    distance: "25 km",
    map: "https://www.google.com/maps?q=Ajwa+Water+Park+Vadodara",
    phone: "+919876543210",
    rating: 4.3,
  },
  {
    name: "EME Temple",
    img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
    desc: "Unique aluminum temple.",
    distance: "20 km",
    map: "https://www.google.com/maps?q=EME+Temple+Vadodara",
    phone: "+919876543210",
    rating: 4.6,
  },

  // 🔥 NEW DATA START

  {
    name: "Kirti Mandir",
    img: "https://images.unsplash.com/photo-1582719478170-3c3d7b6b8c94",
    desc: "Memorial dedicated to Gaekwad rulers.",
    distance: "18 km",
    map: "https://www.google.com/maps?q=Kirti+Mandir+Vadodara",
    phone: "+919876543210",
    rating: 4.4,
  },
  {
    name: "Sursagar Lake",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    desc: "Beautiful lake with giant Shiva statue.",
    distance: "17 km",
    map: "https://www.google.com/maps?q=Sursagar+Lake+Vadodara",
    phone: "+919876543210",
    rating: 4.5,
  },
  {
    name: "Hathni Mata Waterfall",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    desc: "Scenic waterfall surrounded by nature.",
    distance: "80 km",
    map: "https://www.google.com/maps?q=Hathni+Mata+Waterfall",
    phone: "+919876543210",
    rating: 4.6,
  },
  {
    name: "Champaner-Pavagadh",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "UNESCO World Heritage historical site.",
    distance: "50 km",
    map: "https://www.google.com/maps?q=Champaner+Pavagadh",
    phone: "+919876543210",
    rating: 4.8,
  },
  {
    name: "Ajwa Nimeta Garden",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    desc: "Famous musical fountain garden.",
    distance: "25 km",
    map: "https://www.google.com/maps?q=Ajwa+Nimeta+Garden",
    phone: "+919876543210",
    rating: 4.4,
  },
  {
    name: "ISKCON Temple Vadodara",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada",
    desc: "Peaceful spiritual temple.",
    distance: "19 km",
    map: "https://www.google.com/maps?q=ISKCON+Temple+Vadodara",
    phone: "+919876543210",
    rating: 4.7,
  },
  {
    name: "Maharaja Fateh Singh Museum",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    desc: "Art gallery inside palace complex.",
    distance: "18 km",
    map: "https://www.google.com/maps?q=Fateh+Singh+Museum",
    phone: "+919876543210",
    rating: 4.5,
  },
  {
    name: "Narmada Canal Walkway",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "Peaceful walking & cycling track.",
    distance: "22 km",
    map: "https://www.google.com/maps?q=Narmada+Canal+Vadodara",
    phone: "+919876543210",
    rating: 4.3,
  }
];

const hotels = [
  {
    name: "Welcomhotel Vadodara",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    dist: "15 km",
    map: "https://www.google.com/maps?q=Welcomhotel+Vadodara",
    phone: "+919876543210",
    rating: 4.5,
  },
  {
    name: "Lords Inn",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    dist: "17 km",
    map: "https://www.google.com/maps?q=Lords+Inn+Vadodara",
    phone: "+919876543210",
    rating: 4.2,
  },
  {
    name: "Hotel Express Residency",
    img: "https://images.unsplash.com/photo-1582719478170-3c3d7b6b8c94",
    dist: "16 km",
    map: "https://www.google.com/maps?q=Express+Residency+Vadodara",
    phone: "+919876543210",
    rating: 4.4,
  },

  // 🔥 NEW DATA START

  {
    name: "Grand Mercure Vadodara Surya Palace",
    img: "https://images.unsplash.com/photo-1551776235-dde6d482980b",
    dist: "18 km",
    map: "https://www.google.com/maps?q=Grand+Mercure+Vadodara",
    phone: "+919876543210",
    rating: 4.6,
  },
  {
    name: "Vivanta Vadodara",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    dist: "14 km",
    map: "https://www.google.com/maps?q=Vivanta+Vadodara",
    phone: "+919876543210",
    rating: 4.7,
  },
  {
    name: "Hotel Royal Orchid Central",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    dist: "16 km",
    map: "https://www.google.com/maps?q=Royal+Orchid+Vadodara",
    phone: "+919876543210",
    rating: 4.3,
  },
  {
    name: "Hotel Midtown",
    img: "https://images.unsplash.com/photo-1582719478170-3c3d7b6b8c94",
    dist: "17 km",
    map: "https://www.google.com/maps?q=Hotel+Midtown+Vadodara",
    phone: "+919876543210",
    rating: 4.1,
  },
  {
    name: "Hotel Casa",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    dist: "13 km",
    map: "https://www.google.com/maps?q=Hotel+Casa+Vadodara",
    phone: "+919876543210",
    rating: 4.2,
  },
  {
    name: "Hotel Suba Elite",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    dist: "15 km",
    map: "https://www.google.com/maps?q=Suba+Elite+Vadodara",
    phone: "+919876543210",
    rating: 4.4,
  },
  {
    name: "Sayaji Hotel Vadodara",
    img: "https://images.unsplash.com/photo-1551776235-dde6d482980b",
    dist: "19 km",
    map: "https://www.google.com/maps?q=Sayaji+Hotel+Vadodara",
    phone: "+919876543210",
    rating: 4.6,
  },
  {
    name: "Hotel Express Towers",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    dist: "16 km",
    map: "https://www.google.com/maps?q=Express+Towers+Vadodara",
    phone: "+919876543210",
    rating: 4.3,
  }
];

const foods = [
  {
    name: "Mandap Restaurant",
    img: "https://images.unsplash.com/photo-1555992336-03a23c6c1c72",
    map: "https://www.google.com/maps?q=Mandap+Restaurant+Vadodara",
    phone: "+919876543210",
    rating: 4.6,
  },
  {
    name: "22nd Parallel",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    map: "https://www.google.com/maps?q=22nd+Parallel+Vadodara",
    phone: "+919876543210",
    rating: 4.4,
  },
  {
    name: "Barbeque Nation",
    img: "https://images.unsplash.com/photo-1555993539-1732b0258235",
    map: "https://www.google.com/maps?q=Barbeque+Nation+Vadodara",
    phone: "+919876543210",
    rating: 4.3,
  },
  {
    name: "Raju Omlet",
    img: "https://images.unsplash.com/photo-1604908176997-4316d1c1e4e3",
    map: "https://www.google.com/maps?q=Raju+Omlet+Vadodara",
    phone: "+919876543210",
    rating: 4.7,
  },

  // 🔥 NEW DATA START

  {
    name: "The Chocolate Room",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    map: "https://www.google.com/maps?q=The+Chocolate+Room+Vadodara",
    phone: "+919876543210",
    rating: 4.5,
  },
  {
    name: "Cafe Fitoor",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    map: "https://www.google.com/maps?q=Cafe+Fitoor+Vadodara",
    phone: "+919876543210",
    rating: 4.6,
  },
  {
    name: "That Place",
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    map: "https://www.google.com/maps?q=That+Place+Vadodara",
    phone: "+919876543210",
    rating: 4.4,
  },
  {
    name: "Kai Asia",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    map: "https://www.google.com/maps?q=Kai+Asia+Vadodara",
    phone: "+919876543210",
    rating: 4.6,
  },
  {
    name: "Sankalp Restaurant",
    img: "https://images.unsplash.com/photo-1604908176997-4316d1c1e4e3",
    map: "https://www.google.com/maps?q=Sankalp+Vadodara",
    phone: "+919876543210",
    rating: 4.3,
  },
  {
    name: "Jassi De Parathe",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    map: "https://www.google.com/maps?q=Jassi+De+Parathe+Vadodara",
    phone: "+919876543210",
    rating: 4.5,
  },
  {
    name: "Temptations",
    img: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
    map: "https://www.google.com/maps?q=Temptations+Vadodara",
    phone: "+919876543210",
    rating: 4.2,
  },
  {
    name: "La Quello",
    img: "https://images.unsplash.com/photo-1555993539-1732b0258235",
    map: "https://www.google.com/maps?q=La+Quello+Vadodara",
    phone: "+919876543210",
    rating: 4.4,
  },
  {
    name: "Blue Lagoon Cafe",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    map: "https://www.google.com/maps?q=Blue+Lagoon+Cafe+Vadodara",
    phone: "+919876543210",
    rating: 4.3,
  },
];

/* ================= COMPONENT ================= */

const TouristAttractions = () => {
  return (
    <main>
      {/* HERO */}
      <section className="apt-hero">
        <div className="container">
          <span className="apt-tag">Explore Vadodara</span>
          <h1>Tourist Attractions</h1>
          <p>Discover culture, food & stay options during I²MSET 2026.</p>
        </div>
      </section>

      {/* POSTER */}
      <section className="apt-poster">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
          alt="Vadodara Poster"
        />
      </section>

      {/* ATTRACTIONS */}
      <section className="apt-section apt-light">
        <div className="container">
          <h2 className="apt-title">Popular Attractions</h2>

          <div className="apt-slider">
            {attractions.map((item, i) => (
              <div className="apt-card" key={i}>
                <img src={item.img} alt="" />

                <div className="apt-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <span>{item.distance}</span>

                  <div className="apt-rating">
                    {renderStars(item.rating)}
                    <span>{item.rating}</span>
                  </div>
                </div>

                <div className="apt-card-actions">
                  <a href={item.map} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-location-dot"></i>
                  </a>
                  <a href={`tel:${item.phone}`}>
                    <i className="fa-solid fa-phone"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOTELS */}
      <section className="apt-section">
        <div className="container">
          <h2 className="apt-title">Nearby Hotels</h2>

          <div className="apt-slider">
            {hotels.map((h, i) => (
              <div className="apt-card" key={i}>
                <img src={h.img} alt="" />

                <div className="apt-card-body">
                  <h3>{h.name}</h3>
                  <span>{h.dist}</span>

                  <div className="apt-rating">
                    {renderStars(h.rating)}
                    <span>{h.rating}</span>
                  </div>
                </div>

                <div className="apt-card-actions">
                  <a href={h.map} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-location-dot"></i>
                  </a>
                  <a href={`tel:${h.phone}`}>
                    <i className="fa-solid fa-phone"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="apt-section apt-light">
        <div className="container">
          <h2 className="apt-title">Food & Restaurants</h2>

          <div className="apt-slider">
            {foods.map((f, i) => (
              <div className="apt-card" key={i}>
                <img src={f.img} alt="" />

                <div className="apt-card-body">
                  <h3>{f.name}</h3>

                  <div className="apt-rating">
                    {renderStars(f.rating)}
                    <span>{f.rating}</span>
                  </div>
                </div>

                <div className="apt-card-actions">
                  <a href={f.map} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-location-dot"></i>
                  </a>
                  <a href={`tel:${f.phone}`}>
                    <i className="fa-solid fa-phone"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="apt-cta">
        <div className="container">
          <h2>Plan Your Visit</h2>

          <Link to="/schedule" className="apt-btn">
            View Conference Schedule
          </Link>

          <Link to="/registration" className="apt-btn secondary">
            Register Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TouristAttractions;
