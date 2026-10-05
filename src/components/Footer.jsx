import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { contactInfo, socialLinks } from './data';

export default function Footer() {
  return (
    <footer className="bg-black py-4 px-4">
      <div className="container text-center text-secondary">
        <p className="mb-2 fw-bold text-white">© 2025 Mastermind Sounds - Professional DJ Services</p>
        <p className="small mb-2">{contactInfo.location} | Phone: {contactInfo.phone} | WhatsApp: {contactInfo.phone}</p>
        
        {/* Social Media Links */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-danger text-decoration-none"
            aria-label="Instagram"
          >
            <Instagram size={24} />
            <span className="fw-bold"> Jaguar_sound_official</span>
          </a>
          <a 
            href={socialLinks.youtube} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-danger text-decoration-none"
            aria-label="YouTube"
          >
            <Youtube size={24} />
            <span className="fw-bold"> Jaguar Sound Youtube</span>
          </a>
        </div>
        
        <p className="small mb-0">Making every event unforgettable with powerful music and entertainment 🎵</p>
      </div>
    </footer>
  );
}
