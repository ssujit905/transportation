import { Link } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const services = [
  {
    title: "Ocean Freight",
    text: "FCL and LCL freight planning with port coordination, container tracking, and routing support across all major global shipping lanes.",
    icon: "🚢"
  },
  {
    title: "Rail Freight",
    text: "Reliable and cost-effective overland cargo movement for bulk goods, combining high capacity with steady transit times.",
    icon: "🚆"
  },
  {
    title: "Road Freight",
    text: "Domestic and cross-border transport solutions for industrial, retail, and project cargo movement with real-time tracking.",
    icon: "🚛"
  },
  {
    title: "Air Freight",
    text: "Fast movement for urgent cargo, coordinated documentation, and airport handling support. We offer competitive rates and space agreements with major carriers.",
    icon: "✈️"
  },
  {
    title: "Custom Clearance",
    text: "Expert documentation review, import-export assistance, and smoother customs processing for complex regulatory environments.",
    icon: "📋"
  },
  {
    title: "Warehousing",
    text: "Secure storage, pallet handling, stock visibility, and dispatch-ready cargo staging in strategic locations.",
    icon: "🏠"
  },
  {
    title: "Door Delivery",
    text: "Seamless end-to-end pickup and final-mile delivery backed by coordinated scheduling and professional handling.",
    icon: "📦"
  }
];

export default function Services() {
  return (
    <>
      <Header />
      <main className="services-page section-padding">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <h2>Our Services</h2>
            <p className="section-subtitle">Comprehensive logistics and transportation solutions tailored to your business needs.</p>
          </div>

          <div className="services-grid services-grid-polished">
            {services.map((service) => (
              <article key={service.title} className="service-card service-card-polished">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
