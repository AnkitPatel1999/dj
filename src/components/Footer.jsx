import React from 'react';
import { contactInfo } from './data';

export default function Footer() {
  return (
    <footer className="bg-black py-4 px-4">
      <div className="container text-center text-secondary">
        <p className="mb-2 fw-bold text-white">© 2025 મેસ્ટરમાઇન્ડ સાઉન્ડ્સ - પ્રોફેશનલ DJ સેવાઓ</p>
        <p className="small mb-2">{contactInfo.location} | ફોન: {contactInfo.phone} | વોટ્સાપ: {contactInfo.phone}</p>
        <p className="small mb-0">પ્રતિ ઈવેન્ટને અવિસ્મરણીય બનાવીએ છીએ શક્તિશાળી મ્યુઝિક અને એન્ટરટેઇનમેન્ટ સાથે 🎵</p>
      </div>
    </footer>
  );
}

