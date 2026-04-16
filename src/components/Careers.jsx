import React from 'react';
import Header from './Header';
import Footer from './Footer';

const openings = [
  { role: "Logistics Coordinator", location: "Lalitpur", type: "Full Time" },
  { role: "Customs Specialist", location: "Kathmandu", type: "Full Time" },
  { role: "Fleet Supervisor", location: "Lalitpur", type: "Full Time" }
];

export default function Careers() {
  return (
    <>
      <Header />
      <main className="careers-page section-padding">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <h2>Careers</h2>
            <p className="section-subtitle">Join our growing team of logistics professionals and build your future with us.</p>
          </div>

          <div className="careers-content">
            <div className="career-intro">
              <h3>Why Work With Us?</h3>
              <p>We provide a dynamic work environment with opportunities for professional growth, competitive benefits, and a culture of excellence in service delivery.</p>
            </div>

            <div className="openings-list">
              <h3>Current Openings</h3>
              {openings.map((job) => (
                <div key={job.role} className="job-card">
                  <div className="job-meta">
                    <h4>{job.role}</h4>
                    <p>{job.location} • {job.type}</p>
                  </div>
                  <button className="button button-secondary">Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
