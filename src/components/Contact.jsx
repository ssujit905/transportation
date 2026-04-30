import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main className="contact-page section-padding">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <h2>Contact Us</h2>
            <p className="section-subtitle">Get in touch for quotations, shipment tracking, or business inquiries.</p>
          </div>

          <div className="contact-page-layout">
            <div className="contact-info-panel">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="offices-list">
                  <div className="office-entry">
                    <h3>Head Office</h3>
                    <p>Manbhawan-5, Lalitpur (Nepal)</p>
                  </div>
                  <div className="office-entry">
                    <h3>Corporate Office</h3>
                    <p>Sirisya Dryport, Birgunj, Nepal</p>
                  </div>
                  <div className="office-entry">
                    <h3>Branch Offices</h3>
                    <p><strong>Bhairahawa:</strong> Custom Office, Nepal</p>
                    <p><strong>Butwal:</strong> Horizon Chowk, Nepal</p>
                    <p><strong>Biratnagar:</strong> Biratnagar Custom Office</p>
                  </div>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>+977 98514 18471</p>
                  <p>+977 98211 00074</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>office.sunglow@gmail.com</p>
                </div>
              </div>
            </div>

            <form className="contact-form-main" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="6" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="button button-primary">Send Message</button>
              {submitted && <p className="success-msg">Message sent! We'll get back to you shortly.</p>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
