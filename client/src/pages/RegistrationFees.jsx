import React, { useState } from "react";
import "../css/RegistrationFees.css";

const RegistrationFees = () => {
 const currentYear = new Date().getFullYear();
  const [currency, setCurrency] = useState("INR");

  const feeData = [
    {
      category: "Research Scholar (M.Tech / Ph.D.)",
      INR: { early: 2500, regular: 6000, late: 8000 },
      USD: { early: 30, regular: 75, late: 95 },
    },
    {
      category: "Academicians",
      INR: { early: 3500, regular: 9000, late: 10000 },
      USD: { early: 45, regular: 110, late: 125 },
    },
    {
      category: "Industry",
      INR: { early: 15500, regular: 19000, late: 22000 },
      USD: { early: 185, regular: 230, late: 270 },
    },
    {
      category: "Foreign Student",
      INR: null,
      USD: { early: 150, regular: 200, late: 225 },
    },
    {
      category: "Foreign Delegates",
      INR: null,
      USD: { early: 200, regular: 250, late: 300 },
    },
  ];

  const toggleCurrency = () => {
    setCurrency(currency === "INR" ? "USD" : "INR");
  };

  const formatPrice = (value) => {
    if (value === null || value === undefined) return "-";
    return currency === "INR" ? `₹${value}` : `$${value}`;
  };

  return (
    <>
      <main>

        {/* HERO */}
        <section className="aprf-hero">
          <div className="container">
            <span className="aprf-tag">Authors & Delegates</span>
            <h1>Registration & Fees</h1>
            <p>
              Secure your participation at I²MSET {currentYear} by completing your
              registration.
            </p>
          </div>
        </section>

        {/* NOTE */}
        <section className="aprf-note-section">
          <div className="container">
            <div className="aprf-note-card">
              <h3>Conference Registration Note</h3>
              <ul>
                <li>Only registered authors/delegates can attend without a paper ID.</li>
                <li>Paper ID is mandatory for author registration.</li>
                <li>At least one author must register per accepted paper.</li>
                <li>Registration fees are non-refundable.</li>
              </ul>
              <p className="aprf-contact">
                For queries: i2mset@paruluniversity.ac.in
              </p>
            </div>
          </div>
        </section>

        {/* FEE STRUCTURE */}
        <section className="aprf-section">
          <div className="container">

            <div className="aprf-header">
              <h2 className="aprf-title">Fee Structure</h2>

              {/* 🔥 TOGGLE MOVED HERE */}
              <button className="aprf-toggle-btn" onClick={toggleCurrency}>
                {currency === "INR" ? "Switch to USD $" : "Switch to INR ₹"}
              </button>
            </div>

            <div className="aprf-table-wrapper">
              <table className="aprf-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th className="aprf-highlight">Early Bird</th>
                    <th>Regular</th>
                    <th>Late</th>
                  </tr>
                </thead>

                <tbody>
                  {feeData.map((item, index) => {
                    const data = item[currency];

                    return (
                      <tr key={index}>
                        <td>{item.category}</td>
                        <td className="aprf-highlight">{formatPrice(data?.early)}</td>
                        <td>{formatPrice(data?.regular)}</td>
                        <td>{formatPrice(data?.late)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* PAYMENT */}
        <section className="aprf-section aprf-light">
          <div className="container aprf-grid">
            <div className="aprf-card">
              <h3>Payment Instructions</h3>
              <ul>
                <li>Make payment via bank transfer.</li>
                <li>Download invoice after payment.</li>
                <li>Upload payment proof in registration form.</li>
              </ul>
            </div>

            <div className="aprf-card">
              <h3>Bank Details</h3>
              <p><strong>Bank:</strong> State Bank of India</p>
              <p><strong>Account Name:</strong> I²MSET Conference</p>
              <p><strong>Account No:</strong> 1234567890</p>
              <p><strong>IFSC:</strong> SBIN0001234</p>
              <p><strong>SWIFT:</strong> SBININBBXXX</p>
            </div>
          </div>
        </section>

        {/* REFUND */}
        <section className="aprf-section">
          <div className="container">
            <div className="aprf-card">
              <h3>Refund Policy</h3>
              <ul>
                <li>No refund after final submission deadline.</li>
                <li>50% refund before early bird deadline.</li>
                <li>Processing charges may apply.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default RegistrationFees;