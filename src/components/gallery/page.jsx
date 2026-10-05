import React from 'react';
import { galleryImages } from '../data';
import './gallery.css';

export default function GalleryPage() {
  return (
    <section id="gallery" className="py-5 px-4 bg-dark">
      <div className="container">
        <h2 className="display-4 fw-bold mb-3 text-center text-danger">Gallery</h2>
        <p className="text-center text-light mb-5">Moments from our live events</p>
        <div className="gallery">
          {galleryImages.map((url, index) => (
            <div className="gallery-item" key={url}>
              <img src={url} alt={`Jaguar Sounds event ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
