import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides, contactInfo } from './data';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section id="hero" className="position-relative vh-100 bg-black overflow-hidden">
      <div className="position-relative h-100">
        <iframe
          width="100%"
          height="100%"
          src={heroSlides[currentSlide].video}
          title="હીરો વીડિયો"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        ></iframe>
        
        {/* Dark Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-40"></div>

        {/* Content Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center" style={{ zIndex: 10 }}>
          <h1 className="display-1 fw-bold mb-4 text-white" style={{ textShadow: '0 4px 6px rgba(0,0,0,0.8)' }}>MASTERMIND SOUNDS</h1>
          <p className="fs-3 mb-4 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>તમામ ઈવેન્ટ માટે શક્તિશાળી DJ</p>
          <p className="fs-5 mb-5 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)', maxWidth: '42rem' }}>લગ્ન • ડાંડિયા • વરઘોડો • જન્મદિવસ • રિસેપશન અને વધુ</p>
          
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-lg d-flex align-items-center gap-2">
              <MessageCircle size={20} /> હવે વોટ્સાપ કરો
            </a>
            <a href={`tel:${contactInfo.phone}`} className="btn btn-light btn-lg d-flex align-items-center gap-2 text-danger">
              <Phone size={20} /> હવે કૉલ કરો
            </a>
          </div>
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide} 
          className="position-absolute start-0 top-50 translate-middle-y btn btn-danger rounded-circle p-3"
          style={{ left: '1rem', zIndex: 10 }}
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={nextSlide} 
          className="position-absolute end-0 top-50 translate-middle-y btn btn-danger rounded-circle p-3"
          style={{ right: '1rem', zIndex: 10 }}
        >
          <ChevronRight size={28} />
        </button>

        {/* Slide Indicators */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-3 mb-4" style={{ zIndex: 10 }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-pill border-0 ${i === currentSlide ? 'bg-danger' : 'bg-secondary'}`}
              style={{ 
                height: '12px', 
                width: i === currentSlide ? '32px' : '12px',
                transition: 'all 0.3s ease'
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

