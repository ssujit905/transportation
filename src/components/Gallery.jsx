import React from 'react';
import Header from './Header';
import Footer from './Footer';

const galleryImages = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
];

export default function Gallery() {
  return (
    <>
      <Header />
      <main className="gallery-page section-padding">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <h2>Gallery</h2>
            <p className="section-subtitle">A visual showcase of our operations, fleet, and warehousing facilities.</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, i) => (
              <div key={i} className="gallery-item">
                <img src={image} alt={`Logistics operation ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
