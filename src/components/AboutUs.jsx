import React from 'react';
import Header from './Header';
import Footer from './Footer';

const companyName = "Sunglow Freight and Cargo Pvt. Ltd.";

export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about-profile-section" aria-label="About Sunglow profile">
          <div className="container">
            <div className="section-heading section-heading-centered">
              <h2>Profile</h2>
            </div>

            <div className="about-text-content">
              <p>
                To keep it plain and simple, {companyName} is one of the fastest growing and much sought after company that offers complete solutions in Worldwide International Freight Forwarding & Multimodal Transportation, Worldwide Door Pick Up & Door Delivery, Custom Broker’s along with powerful resources in all types of Sea Freight and Air Freight services. In addition, we work round the clock and engage in transpiration services of rail and road which adds a lot of value to our entire service offering.
              </p>
              
              <p>
                Over the years, {companyName} has evolved into an efficient logistics partner to many companies across the globe by improving their operational efficiencies which further results into cutting cost and delivery time.
              </p>

              <p>
                We have our offices in Kathmandu and Lalitpur where each staff and representative of {companyName} is committed to enhance your experience each time you choose us.
              </p>

              <div className="milestones-grid">
                <div className="milestone-card">
                  <h3>Objective</h3>
                  <p>Safety is our priority. Time Management is our principle. We intend to cater to all our esteemed clients and provide unmatched services in the area of International Freight Forwarding and Consolidation.</p>
                </div>
                <div className="milestone-card active">
                  <h3>Vision</h3>
                  <p>To become a catalyst for growth of our clients old and new and take the service experience of logistics business to greater heights.</p>
                </div>
                <div className="milestone-card">
                  <h3>Mission</h3>
                  <p>To continue to remain as customer friendly as ever, dominate the industry with world-class services both in terms of speedy delivery and low cost fares.</p>
                </div>
              </div>

              <div className="eco-commitment">
                <h3>Taking care of service rates along with environmental friendly approach</h3>
                <p>
                  We generally do not brag about our rates but every customer of ours experience the best possible price points compared to other domestic and international counterparts.
                </p>
                <p>
                  Moreover, our sheer focus remains on delivering services and providing solutions that build the environment and the ecosystem around us. With this, we not only ensure success at business and but also give back to the society that we live in.
                </p>
              </div>

              <div className="unmatched-services">
                <h3 className="section-subheading-centered">Unmatched Services</h3>
                <p>Some of our broader services that define the brand {companyName} are:</p>
                <ul className="services-list-about">
                  <li>Global Supply Chain Management</li>
                  <li>Freight Forwarding</li>
                  <li>Custom Clearance</li>
                  <li>Warehouse</li>
                  <li>Transportation</li>
                  <li>International Courier Services</li>
                  <li>Foreign Trade EXIM consultancy</li>
                  <li>Quality Check and Inspection</li>
                  <li>Baggage Clearance</li>
                </ul>
              </div>

              <div className="footer-about-block">
                <p>
                  In other words, we join hands with companies to ensure they meet all deadlines by offering Complete Freight Solution.
                </p>
                <p>
                  As an Air Freighter, we prefer going all out for strategizing deliveries and thus contracted with multiple carriers allowing us to not only handle large cargo volumes but also be ready for any unique requirement.
                </p>
                <p>
                  Right from pre-allot to sailing advice, planning to execution, {companyName} has developed handling and reporting systems that measure upto the stringent standards of overseas buyers. We are therefore your preferred choice at every step of forwarding.
                </p>
              </div>

              <div className="team-section-p">
                <h3 className="section-subheading-centered">Our Team</h3>
                <p>A dedicated team of professionals committed to delivering excellence in every shipment.</p>
                <div className="team-grid-placeholder">
                  {[1, 2, 3].map((id) => (
                    <div key={id} className="team-member-card">
                      <div className="team-photo-frame">
                        <div className="photo-placeholder"></div>
                      </div>
                      <h4>Team Member</h4>
                      <span>Position Placeholder</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-cta-simple">
                <h3>Let’s get started</h3>
                <p>
                  If you think {companyName} can work wonders for you and your company, feel free to contact us, know more about us and explore our services as well.
                </p>
                <a href="/contact" className="button button-primary">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
