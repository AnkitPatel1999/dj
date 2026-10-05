import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Youtube } from 'lucide-react';
import { contactInfo, socialLinks } from './data';

export default function Contact() {
  return (
    <section id="contact" className="py-5 px-4 bg-secondary">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center text-danger">Book Your Event</h2>
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="bg-dark p-4 rounded text-center contact-card">
              <Phone className="mx-auto mb-3 text-danger" size={40} />
              <h3 className="fw-bold mb-3 h5">Call Now</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-danger text-decoration-none fw-bold fs-5">+91 {contactInfo.phone}</a>
            </div>
          </div>
          <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-success text-decoration-none fw-bold fs-5 col-md-4">
          <div className="">
            <div className="bg-dark p-4 rounded text-center contact-card">
              <MessageCircle className="mx-auto mb-3 text-success" size={40} />
              <h3 className="fw-bold mb-3 h5 text-white">WhatsApp</h3>
              Chat Now
            </div>
          </div>
          </a>
          <div className="col-md-4">
            <div className="bg-dark p-4 rounded text-center contact-card">
              <MapPin className="mx-auto mb-3 text-info" size={40} />
              <h3 className="fw-bold mb-3 h5">Location</h3>
              <p className="text-light fw-semibold mb-0">{contactInfo.location}</p>
            </div>
          </div>
        </div>
        <div className="bg-danger bg-gradient p-5 rounded text-center">
          <h3 className="display-5 fw-bold mb-3">Ready for the Complete DJ Experience?</h3>
          <p className="mb-4 fs-5">Contact us today for unforgettable event entertainment</p>
          <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg text-danger fw-bold mb-3">
            🎵 Book Your DJ Now
          </a>
          
          {/* Social Media Links */}
          <div className="mt-4 d-flex justify-content-center gap-4">
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-decoration-none d-flex align-items-center gap-2"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={28} />
              <span className="fw-bold">Jaguar_sound_official</span>
            </a>
            <a 
              href={socialLinks.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white text-decoration-none d-flex align-items-center gap-2"
              aria-label="Subscribe to our YouTube channel"
            >
              <Youtube size={28} />
              <span className="fw-bold">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
