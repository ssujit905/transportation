import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Careers() {
  return (
    <>
      <Header />
      <main className="careers-page section-padding">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <h2>Careers at Sunglow</h2>
            <p className="section-subtitle">Explore opportunities to grow with our global logistics network.</p>
          </div>
          
          <div className="careers-empty-state">
            <div className="empty-icon-wrap">
              <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3>Currently No Open Positions</h3>
            <p>Thank you for your interest in joining Sunglow Freight and Cargo. While we don't have any active vacancies at this time, we are always on the lookout for motivated professionals.</p>
            <div className="careers-cta">
              <p>You can send your resume to our HR department for future openings:</p>
              <a href="mailto:office.sunglow@gmail.com" className="email-link">office.sunglow@gmail.com</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
