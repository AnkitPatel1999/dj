import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { galleryImages, contactInfo } from './data';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % galleryImages.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + galleryImages.length) %
        galleryImages.length
    );
  };

  return (
    <section
      id="hero"
      className="position-relative vh-100 bg-black overflow-hidden"
    >
      <div className="position-relative h-100">

        {/* Hero Image */}
        <img
          src={galleryImages[currentSlide]}
          alt={`Jaguar Sounds event ${currentSlide + 1}`}
          className="w-100 h-100"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Dark Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50"
          style={{ zIndex: 1 }}
        />

        {/* Content */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center px-3"
          style={{ zIndex: 10 }}
        >
          <h1
            className="display-1 fw-bold mb-4 text-white"
            style={{
              textShadow: '0 4px 6px rgba(0,0,0,0.8)',
            }}
          >
            JAGUAR SOUNDS
          </h1>

          <p
            className="fs-3 mb-4 text-white"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            Powerful DJ for Every Event
          </p>

          <p
            className="fs-5 mb-5 text-white"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.8)',
              maxWidth: '42rem',
            }}
          >
            Weddings • Dandiya • Baraat • Birthdays • Receptions & More
          </p>

          {/* Buttons */}
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger btn-lg d-flex align-items-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="btn btn-light btn-lg d-flex align-items-center gap-2 text-danger"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>

        {/* Previous */}
        <button
          onClick={prevSlide}
          aria-label="Previous image"
          className="position-absolute start-0 top-50 translate-middle-y btn btn-danger rounded-circle p-3"
          style={{
            left: '1rem',
            zIndex: 10,
          }}
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          aria-label="Next image"
          className="position-absolute end-0 top-50 translate-middle-y btn btn-danger rounded-circle p-3"
          style={{
            right: '1rem',
            zIndex: 10,
          }}
        >
          <ChevronRight size={28} />
        </button>

        {/* Indicators */}
        <div
          className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-4"
          style={{ zIndex: 10 }}
        >
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`border-0 rounded-pill ${
                index === currentSlide
                  ? 'bg-danger'
                  : 'bg-secondary'
              }`}
              style={{
                height: '10px',
                width: index === currentSlide ? '30px' : '10px',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}