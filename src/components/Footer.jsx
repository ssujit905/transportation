import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-shell">
          <div className="container">
            <div className="footer-top">
              <div className="footer-brand">
                <div className="footer-brand-row">
                  <img src="/logo.png" alt="Sunglow Freight and Cargo Pvt. Ltd. logo" className="footer-logo" />
                  <div>
                    <h2>Sunglow Freight and Cargo Pvt. Ltd.</h2>
                    <p>Freight & Logistics Solutions</p>
                  </div>
                </div>
                <p className="footer-copy">
                  Reliable cargo movement, warehousing support, and transport coordination designed to help
                  businesses move goods with confidence.
                </p>
              </div>

              <div className="footer-column">
                <h3>Quick Links</h3>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/network">Network</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/contact">Contact Us</Link>
              </div>

              <div className="footer-column">
                <h3>Our Services</h3>
                <p>Ocean Freight</p>
                <p>Rail Freight</p>
                <p>Road Freight</p>
                <p>Air Freight</p>
                <p>Custom Clearance</p>
                <p>Warehousing</p>
                <p>Door Delivery</p>
              </div>

              <div className="footer-column">
                <h3>Contact Info</h3>
                <a href="tel:+9779851418471">+977 98514 18471</a>
                <a href="tel:+9779821100074">+977 98211 00074</a>
                <a href="mailto:info@sunglowfreight.com">info@sunglowfreight.com</a>
                <p style={{ whiteSpace: 'nowrap' }}><strong>Head Office:</strong> Manbhawan-5, Lalitpur</p>
                <p style={{ whiteSpace: 'nowrap' }}>Sun - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2026 Sunglow Freight and Cargo Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/9779851418471?text=Hello%2C%20I%27m%20interested%20in%20your%20transportation%20services" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <div className="whatsapp-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.05 4.94A9.86 9.86 0 0 0 12.02 2C6.52 2 2.04 6.47 2.04 11.98c0 1.76.46 3.48 1.33 5L2 22l5.16-1.35a9.94 9.94 0 0 0 4.85 1.24h.01c5.5 0 9.98-4.47 9.98-9.98 0-2.67-1.04-5.18-2.95-6.97ZM12.02 20.2h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.06.8.82-2.98-.2-.3a8.2 8.2 0 0 1-1.27-4.4c0-4.54 3.69-8.24 8.24-8.24 2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.55-3.69 8.24-8.23 8.24Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.82-.23-.08-.4-.12-.57.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.25a7.43 7.43 0 0 1-1.38-1.72c-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.12.17 1.77 2.7 4.28 3.78.6.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.17-.48-.29Z" />
          </svg>
        </div>
      </a>
    </>
  );
}
