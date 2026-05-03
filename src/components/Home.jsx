import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const services = [
  {
    title: "Ocean Freight",
    text: "FCL and LCL freight planning with port coordination, container tracking, and routing support.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Rail Freight",
    text: "Cost-effective, reliable transportation for heavy and bulk shipments across extended continental routes.",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Road Freight",
    text: "Domestic transport solutions for industrial, retail, and project cargo movement.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Air Freight",
    text: "Fast movement for urgent cargo, coordinated documentation, and airport handling support.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Custom Clearance",
    text: "Documentation review, import-export assistance, and smoother customs processing.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Warehousing",
    text: "Storage, pallet handling, stock visibility, and dispatch-ready cargo staging.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Door Delivery",
    text: "End-to-end pickup and final-mile delivery backed by coordinated scheduling.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
  },
];

const heroSlides = [
  {
    title: "Freight movement backed by dependable transport operations.",
    label: "Road Logistics",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Warehouse handling and dispatch coordination for time-sensitive cargo.",
    label: "Warehouse Support",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Port, container, and route coverage that keeps shipments moving.",
    label: "Cargo Network",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
  },
];

const whyChooseUsItems = [
  {
    title: "Responsive Operations",
    text: "Fast coordination for booking updates, shipment queries, and cargo planning across every stage.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Multi-Mode Capability",
    text: "Road, warehousing, and freight support designed to adapt around different cargo sizes and timelines.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Clear Shipment Visibility",
    text: "Professional service presentation and route communication help customers trust how their cargo moves.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Client-First Support",
    text: "A conversion-focused structure with quote prompts and direct contact options built for transport buyers.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
];

const bestAtItems = [
  {
    title: "Freight Coordination",
    text: "Smooth shipment planning across pickup, routing, handling, and final delivery support.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Warehousing Support",
    text: "Organized storage, cargo handling, dispatch preparation, and operational flow for business shipments.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Project Management",
    text: "End-to-end planning, resource allocation, and timeline tracking for complex supply chain logistics projects.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Certified Process",
    text: "Structured service quality backed by certification to strengthen trust and business credibility.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Header />

      <main>
        <section className="hero-banner" id="home" aria-label="Transport showcase images">
          <div className="container">
            <div className="hero-slider" style={{ height: 'var(--hero-height, 430px)', minHeight: 'var(--hero-height, 430px)' }}>
              {heroSlides.map((slide, index) => (
                <article
                  key={slide.title}
                  className={`hero-slide${index === activeSlide ? " active" : ""}`}
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 24, 36, 0.12), rgba(10, 24, 36, 0.72)), url(${slide.image})` }}
                >
                  <div className="banner-overlay">
                    <p className="eyebrow">{slide.label}</p>
                    <h2>{slide.title}</h2>
                  </div>
                </article>
              ))}
              <div className="hero-dots" aria-label="Hero slide controls">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.label}
                    type="button"
                    className={`hero-dot${index === activeSlide ? " active" : ""}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section why-us" id="why-us">
          <div className="container">
            <div className="section-heading section-heading-centered">
              <h2>Why Choose Us</h2>
              <p className="section-subtitle">
                Professional logistics support designed to build confidence from the first glance.
              </p>
            </div>

            <div className="why-grid">
              {whyChooseUsItems.map((item) => (
                <article key={item.title} className="why-card">
                  <img src={item.image} alt={item.title} className="why-card-image" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading section-heading-centered">
              <h2>Our Services</h2>
              <p className="section-subtitle">
                Core freight and transportation solutions presented in the same clean, professional style.
              </p>
            </div>

            <div className="services-grid services-grid-polished">
              {services.map((service) => (
                <article key={service.title} className="service-card service-card-polished">
                  <img src={service.image} alt={service.title} className="service-card-image" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section best-at" id="best-at">
          <div className="container">
            <div className="section-heading section-heading-centered">
              <h2>We Are Best At</h2>
              <p className="section-subtitle">
                Focused logistics strengths delivered with dependable service standards and certified trust.
              </p>
            </div>

            <div className="best-at-grid">
              {bestAtItems.map((item) => (
                <article key={item.title} className="best-at-card">
                  <img src={item.image} alt={item.title} className="best-at-image" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-us" id="contact">
          <div className="container">
            <div className="section-heading section-heading-centered">
              <h2>Contact Us</h2>
              <p className="section-subtitle">
                Clear communication channels for quotes, shipment questions, and transport support.
              </p>
            </div>

            <div className="contact-section-grid">
              <div className="contact-details-panel-simple">
                <p className="contact-side-copy">
                  Reach out for shipment planning, freight quotes, cargo coordination, and day-to-day transport support.
                </p>

                <div className="contact-list-vertical">
                  <article className="contact-line-item">
                    <div className="contact-line-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" focusable="false">
                        <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.28.54 3.5.54a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.16 21 3 13.84 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.22.18 2.4.54 3.5a1 1 0 0 1-.24 1z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Phone Support</h3>
                      <p>Immediate support for freight assistance and shipment queries.</p>
                      <a href="tel:+9779851418471">+977 98514 18471</a><br/>
                      <a href="tel:+9779821100074">+977 98211 00074</a>
                    </div>
                  </article>

                  <article className="contact-line-item">
                    <div className="contact-line-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" focusable="false">
                        <path d="M19.05 4.94A9.86 9.86 0 0 0 12.02 2C6.52 2 2.04 6.47 2.04 11.98c0 1.76.46 3.48 1.33 5L2 22l5.16-1.35a9.94 9.94 0 0 0 4.85 1.24h.01c5.5 0 9.98-4.47 9.98-9.98 0-2.67-1.04-5.18-2.95-6.97ZM12.02 20.2h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.06.8.82-2.98-.2-.3a8.2 8.2 0 0 1-1.27-4.4c0-4.54 3.69-8.24 8.24-8.24 2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.55-3.69 8.24-8.23 8.24Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.82-.23-.08-.4-.12-.57.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.25a7.43 7.43 0 0 1-1.38-1.72c-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.12.17 1.77 2.7 4.28 3.78.6.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.17-.48-.29Z" />
                      </svg>
                    </div>
                    <div>
                      <h3>WhatsApp Support</h3>
                      <p>Quick updates, document sharing, and fast communication.</p>
                      <a href="https://wa.me/9779851418471">+9779851418471</a>
                    </div>
                  </article>

                  <article className="contact-line-item">
                    <div className="contact-line-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" focusable="false">
                        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.03-7.47 4.67a1 1 0 0 1-1.06 0L4 8.03V6l8 5 8-5v2.03Z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Email Communication</h3>
                      <p>Quotation requests, cargo details, and business communication.</p>
                      <a href="mailto:office.sunglow@gmail.com">office.sunglow@gmail.com</a>
                    </div>
                  </article>

                  <article className="contact-line-item">
                    <div className="contact-line-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" focusable="false">
                        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z" />
                      </svg>
                    </div>
                    <div>
                      <h3>Office Location</h3>
                      <p>Visit or coordinate directly from our operations base.</p>
                      <span>Manbhawan-5, Lalitpur (Nepal)</span>
                    </div>
                  </article>
                </div>
              </div>

              <form className="quote-form quote-form-polished" onSubmit={handleSubmit}>
                <label>
                  Full Name
                  <input type="text" placeholder="Your name" />
                </label>
                <label>
                  Business Email
                  <input type="email" placeholder="you@company.com" />
                </label>
                <label>
                  Mobile Number
                  <input type="tel" placeholder="+977 9XXXXXXXXX" />
                </label>
                <label>
                  Cargo Type
                  <input type="text" placeholder="Machinery, retail goods, raw materials" />
                </label>
                <label>
                  Shipment Details
                  <textarea rows="5" placeholder="Tell us origin, destination, and transport mode."></textarea>
                </label>
                <button type="submit" className="button button-primary">
                  Send Inquiry
                </button>
                {submitted && <p className="success-msg">Inquiry sent! We'll get back to you shortly.</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
