import React from 'react';

export default function Equipment() {
  return (
    <section className="py-5 px-4 bg-dark">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center text-danger">Our Professional Setup</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="bg-secondary p-4 rounded border-start border-danger border-4">
              <h3 className="h4 fw-bold mb-3">⚡ Sound System</h3>
              <ul className="list-unstyled text-light">
                <li className="mb-2">• High-power speakers (3000W+)</li>
                <li className="mb-2">• Professional mixer console</li>
                <li className="mb-2">• Microphone setup</li>
                <li className="mb-2">• Subwoofers for deep bass</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-secondary p-4 rounded border-start border-purple border-4">
              <h3 className="h4 fw-bold mb-3">✨ Lighting & Effects</h3>
              <ul className="list-unstyled text-light">
                <li className="mb-2">• Moving head lights</li>
                <li className="mb-2">• Par can lights</li>
                <li className="mb-2">• Fog/smoke machine</li>
                <li className="mb-2">• Generator support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
