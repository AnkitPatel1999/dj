import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { contactInfo, socialLinks } from './data';

export default function Footer() {
  return (
    <footer className="bg-black py-4 px-4">
      <div className="container text-center text-secondary">
        <p className="mb-2 fw-bold text-white">© 2025 મેસ્ટરમાઇન્ડ સાઉન્ડ્સ - પ્રોફેશનલ DJ સેવાઓ</p>
        <p className="small mb-2">{contactInfo.location} | ફોન: {contactInfo.phone} | વોટ્સાપ: {contactInfo.phone}</p>
        
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
          </a>
        </div>
        
        <p className="small mb-0">પ્રતિ ઈવેન્ટને અવિસ્મરણીય બનાવીએ છીએ શક્તિશાળી મ્યુઝિક અને એન્ટરટેઇનમેન્ટ સાથે 🎵</p>
      </div>
    </footer>
  );
}

