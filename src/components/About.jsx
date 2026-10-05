import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-5 px-4 bg-secondary">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center text-danger">About Jaguar Sounds</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="bg-dark p-4 rounded">
              <h3 className="h2 fw-bold mb-3">🎤 Our Story</h3>
              <p className="text-light mb-3">
                Started with a passion for music and event entertainment, Jaguar Sounds has become one of the most trusted DJ services in Dahod and surrounding areas.
              </p>
              <p className="text-light">
                With over 15 years of experience and state-of-the-art equipment, we deliver unforgettable performances for weddings, celebrations, and corporate events.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-dark p-4 rounded">
              <h3 className="h2 fw-bold mb-3">⭐ Why Choose Us?</h3>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="text-danger mt-1">✓</span>
                  <span className="text-light">Professional sound and lighting setup</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="text-danger mt-1">✓</span>
                  <span className="text-light">Experienced and trained team</span>
                </li>
                {/* <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="text-danger mt-1">✓</span>
                  <span className="text-light">Affordable packages</span>
                </li> */}
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="text-danger mt-1">✓</span>
                  <span className="text-light">On-time and reliable service</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="text-danger mt-1">✓</span>
                  <span className="text-light">Customized music selection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
