import React from 'react';
import { services } from './data';

export default function Services() {
  return (
    <section id="services" className="py-5 px-4 bg-dark">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center text-danger">આપણી સેવાઓ</h2>
        <div className="row g-4">
          {services.map((service, i) => (
            <div key={i} className="col-md-4">
              <div className="bg-secondary p-4 rounded h-100 service-card">
                <div className="display-1 mb-3">{service.icon}</div>
                <h3 className="h4 fw-bold mb-2">{service.title}</h3>
                <p className="text-light">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

