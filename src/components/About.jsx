import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-5 px-4 bg-secondary">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center text-danger">જેગ સાઉન્ડ્સ વિશે</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="bg-dark p-4 rounded">
              <h3 className="h2 fw-bold mb-3">🎤 આપણી કહાણી</h3>
              <p className="text-light mb-3">
                મ્યુઝિક અને ઈવેન્ટ એન્ટરટેઇનમેન્ટના શોખ સાથે શરૂ થયેલું, જેગવાર સાઉન્ડ્સ ડાહોદ અને આસપાસના વિસ્તારમાં સૌથી વિશ્વસ્ત DJ સેવાઓમાંથી એક બની ગયું છે।
              </p>
              <p className="text-light">
                15 વર્ષથી વધુનાં અનુભવ અને અત્યાધુનિક સાધન સાથે, આપણે લગ્ન, ઉદયાપન અને કોર્પોરેટ ઈવેન્ટો માટે અવિસ્મરણીય પરફોર્મન્સ આપીએ છીએ।
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-dark p-4 rounded">
              <h3 className="h2 fw-bold mb-3">⭐ આપણને કેમ પસંદ કરો?</h3>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="text-danger mt-1">✓</span>
                  <span className="text-light">પ્રોફેશનલ સાઉન્ડ અને લાઇટિંગ સેટાપ</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="text-danger mt-1">✓</span>
                  <span className="text-light">અનુભવી અને તાલીમ પ્રાપ્ત ટીમ</span>
                </li>
                {/* <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="text-danger mt-1">✓</span>
                  <span className="text-light">સસ્તી કિંમતવાળી પેકેજો</span>
                </li> */}
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="text-danger mt-1">✓</span>
                  <span className="text-light">સમયસર અને વિશ્વસ્ત સેવા</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <span className="text-danger mt-1">✓</span>
                  <span className="text-light">કસ્ટમાઇજ્ડ મ્યુઝિક સિલેક્શન</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

