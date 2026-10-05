import React from 'react';
import { demoVideos } from './data';

export default function DemoVideos() {
  return (
    <section id="demo" className="py-5 px-4 bg-secondary">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center text-danger">Demo Videos</h2>
        <p className="text-center text-light mb-5">Watch our recent DJ performances and event highlights</p>
        <div className="row g-4">
          {demoVideos.map((video, i) => (
            <div key={i} className="col-md-6">
              <div className="rounded overflow-hidden shadow-lg">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={video.link}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="bg-dark p-3">
                  <h3 className="fw-bold h5 mb-0">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

