import React from 'react';
import { Heart } from 'lucide-react';
import { supports } from './data';

export default function Support() {
  return (
    <section id="support" className="py-5 px-4 bg-dark">
      <div className="container">
        <h2 className="display-4 fw-bold mb-3 text-center text-danger">આપણે સમર્થન અને સહયોગ કરીએ છીએ</h2>
        <p className="text-center text-light mb-5">સંગીત અને એન્ટરટેઇનમેન્ટ ઈન્ડસ્ટ્રીમાં ગર્વિત સાથીદાર</p>
        <div className="row g-4">
          {supports.map((support, i) => (
            <div key={i} className="col-md-4">
              <div className="bg-secondary p-4 rounded border border-secondary support-card text-center">
                <div className="display-1 mb-3 support-icon">{support.icon}</div>
                <h3 className="h3 fw-bold mb-3 text-danger">{support.name}</h3>
                <p className="text-light">{support.desc}</p>
                <div className="mt-3 d-flex justify-content-center">
                  <Heart className="text-danger" size={24} style={{ animation: 'pulse 2s infinite' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

