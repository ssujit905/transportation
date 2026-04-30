import React from 'react';
import Header from './Header';
import Footer from './Footer';

const networkRegions = [
  { name: "Asia Pacific", description: "Global presence in major hubs including Singapore, Hong Kong, and Shanghai." },
  { name: "Europe", description: "Strong network coverage across Germany, Netherlands, and UK ports." },
  { name: "Middle East", description: "Strategic operations in Dubai and GCC countries for air and sea freight." },
  { name: "Domestic Network", description: "Extensive coverage in Kathmandu, Lalitpur, and major industrial belts." }
];

export default function Network() {
  return (
    <>
      <Header />
      <main className="network-page section-padding">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <h2>Our Network</h2>
            <p className="section-subtitle">Connecting origins to destinations with a robust global and domestic partner network.</p>
          </div>

          <div className="network-viz-container">
            <div className="world-map-wrapper">
              <img 
                src="/network-map.png" 
                alt="Global Network Connectivity Map" 
                className="network-map-image"
              />
            </div>
            
            <div className="network-stats-grid">
              {networkRegions.map(region => (
                <div key={region.name} className="network-card-simple">
                  <div className="network-accent-dot"></div>
                  <h3>{region.name}</h3>
                  <p>{region.description}</p>
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
