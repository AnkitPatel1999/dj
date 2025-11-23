import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import './home.css';

export default function DJWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'લગ્નના DJ મેજિક' },
    { video: 'https://www.youtube.com/embed/9bZkp7q19f0', title: 'ડાંડિયાની એનર્જી' },
    { video: 'https://www.youtube.com/embed/kJQP7kiw9Fk', title: 'વરઘોડોના વાઇબ્સ' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const services = [
    { icon: '🎧', title: 'લગ્નનો DJ', desc: 'લગ્ન માટે સંપૂર્ણ DJ સેટআપ અને પ્રોફેશનલ સાઉન્ડ' },
    { icon: '💃', title: 'ગરબા / ડાંડિયા', desc: 'ગરબા અને ડાંડિયા રાસ માટે ઉચ્ચ ઉર્જાવાળો મ્યુઝિક' },
    { icon: '🚩', title: 'વરઘોડો / બારાત', desc: 'વરઘોડો અને બારાત સમારોહ માટે ડાયનેમિક DJ સેટઆપ' },
    { icon: '🎉', title: 'જન્મદિવસ DJ', desc: 'જન્મદિવસ સમારોહ માટે મજેદાર અને ઉર્જાવાળી DJ સેવા' },
    { icon: '🥂', title: 'રિસેપશન DJ', desc: 'રિસેપશન અને ગ્રાન્ડ એન્ટ્રી માટે પ્રોફેશનલ DJ' },
    { icon: '🔥', title: 'વિશેષ ઈવેન્ટ', desc: 'કોઈપણ ઈવેન્ટ માટે સાઉન્ડ સિસ્ટમ ભાડા' },
  ];

  const demoVideos = [
    { title: 'લગ્નનું હાઇલાઇટ', link: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { title: 'ડાંડિયા રાસની એનર્જી', link: 'https://www.youtube.com/embed/9bZkp7q19f0' },
    { title: 'વરઘોડો સેટાપ', link: 'https://www.youtube.com/embed/kJQP7kiw9Fk' },
    { title: 'જન્મદિવસનો પર્ટી', link: 'https://www.youtube.com/embed/jNQXAC9IVRw' },
  ];

  const team = [
    { 
      name: 'મેસ્ટરમાઇન્ડ પ્રવીણ', 
      role: 'લીડ DJ અને સ્થાપક',
      phone: '9712448793',
      specialty: '15+ વર્ષનો અનુભવ',
      icon: '🎤'
    },
    { 
      name: 'કુલદીપ', 
      role: 'સાઉન્ડ માસ્ટર',
      phone: '9712448793',
      specialty: 'ઓડિયો એન્જિનીયરિંગ એક્સપર્ટ',
      icon: '🔊'
    },
    { 
      name: 'અંકિત (ડ્રીમચેસર)', 
      role: 'ઓપરેશન્સ મેનેજર',
      phone: '9712448793',
      specialty: 'ઈવેન્ટ કોઓર્ડિનેશન',
      icon: '📋'
    },
  ];

  const supports = [
    { name: 'તોડફોડ DJ', desc: 'મોટી ઈવેન્ટ માટે સહયોગ', icon: '🎵' },
    { name: 'દિલીપ વસાવા', desc: 'મ્યુઝિક પ્રોડક્શન અને ગોઠવણી', icon: '🎹' },
    { name: 'RA કેબિનેટ', desc: 'એડવાન્સ ઓડિયો મિક્સિંગ અને માસ્ટરિંગ', icon: '🎚️' },
  ];

  return (
    <div className="min-vh-100 bg-dark text-white">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-90 sticky-top shadow-lg" style={{ zIndex: 1050 }}>
        <div className="container-fluid">
          <div className="navbar-brand fs-3 fw-bold text-danger">🎵 MASTERMIND SOUNDS</div>
          
          {/* Mobile Menu Button */}
          <button 
            className="navbar-toggler d-lg-none" 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item"><a href="#hero" className="nav-link text-white">હોમ</a></li>
              <li className="nav-item"><a href="#about" className="nav-link text-white">વિશે</a></li>
              <li className="nav-item"><a href="#services" className="nav-link text-white">સેવાઓ</a></li>
              <li className="nav-item"><a href="#demo" className="nav-link text-white">ડેમો</a></li>
              <li className="nav-item"><a href="#team" className="nav-link text-white">ટીમ</a></li>
              <li className="nav-item"><a href="#support" className="nav-link text-white">સમર્થન</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link text-white">સંપર્ક</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="d-lg-none bg-dark p-3">
            <ul className="navbar-nav">
              <li className="nav-item"><a href="#hero" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>હોમ</a></li>
              <li className="nav-item"><a href="#about" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>વિશે</a></li>
              <li className="nav-item"><a href="#services" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>સેવાઓ</a></li>
              <li className="nav-item"><a href="#demo" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>ડેમો</a></li>
              <li className="nav-item"><a href="#team" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>ટીમ</a></li>
              <li className="nav-item"><a href="#support" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>સમર્થન</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>સંપર્ક</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section with Video Carousel */}
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
              <a href="https://wa.me/919712448793" target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-lg d-flex align-items-center gap-2">
                <MessageCircle size={20} /> હવે વોટ્સાપ કરો
              </a>
              <a href="tel:9712448793" className="btn btn-light btn-lg d-flex align-items-center gap-2 text-danger">
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

      {/* About Section */}
      <section id="about" className="py-5 px-4 bg-secondary">
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center text-danger">મેસ્ટરમાઇન્ડ સાઉન્ડ્સ વિશે</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="bg-dark p-4 rounded">
                <h3 className="h2 fw-bold mb-3">🎤 આપણી કહાણી</h3>
                <p className="text-light mb-3">
                  મ્યુઝિક અને ઈવેન્ટ એન્ટરટેઇનમેન્ટના શોખ સાથે શરૂ થયેલું, મેસ્ટરમાઇન્ડ સાઉન્ડ્સ ડાહોદ અને આસપાસના વિસ્તારમાં સૌથી વિશ્વસ્ત DJ સેવાઓમાંથી એક બની ગયું છે।
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
                  <li className="d-flex align-items-start gap-3 mb-3">
                    <span className="text-danger mt-1">✓</span>
                    <span className="text-light">સસ્તી કિંમતવાળી પેકેજો</span>
                  </li>
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

      {/* Services Section */}
      <section id="services" className="py-5 px-4 bg-dark">
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center text-danger">આપણી સેવાઓ</h2>
          <div className="row g-4">
            {services.map((service, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-secondary p-4 rounded h-100 service-card">
                  <div className="display-1 mb-3">{service.icon}</div>
                  <h3 className="h4 fw-bold mb-2">{service.title}</h3>
                  <p className="text-light">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-5 px-4 bg-secondary">
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center text-danger">ડેમો વીડિયો</h2>
          <p className="text-center text-light mb-5">આપણું તાજેતરનું DJ પરફોર્મન્સ અને ઈવેન્ટ હાઇલાઇટ્સ જુઓ</p>
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

      {/* Equipment Section */}
      <section className="py-5 px-4 bg-dark">
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center text-danger">આપણું પ્રોફેશનલ સેટાપ</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="bg-secondary p-4 rounded border-start border-danger border-4">
                <h3 className="h4 fw-bold mb-3">⚡ સાઉન્ડ સિસ્ટમ</h3>
                <ul className="list-unstyled text-light">
                  <li className="mb-2">• હાય-પાવર સ્પીકર્સ (2000W+)</li>
                  <li className="mb-2">• પ્રોફેશનલ મિક્સર કન્સોલ</li>
                  <li className="mb-2">• માઇક્રોફોન સેટાપ</li>
                  <li className="mb-2">• ડીપ બાસ માટે સબવુફર્સ</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-secondary p-4 rounded border-start border-purple border-4">
                <h3 className="h4 fw-bold mb-3">✨ લાઇટિંગ અને ઈફેક્ટ્સ</h3>
                <ul className="list-unstyled text-light">
                  <li className="mb-2">• મુવિંગ હેડ લાઇટ્સ</li>
                  <li className="mb-2">• પાર કેન લાઇટ્સ</li>
                  <li className="mb-2">• ફોગ/સ્મોક મશીન</li>
                  <li className="mb-2">• જનરેટર સપોર્ટ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-5 px-4 bg-secondary">
        <div className="container">
          <h2 className="display-4 fw-bold mb-3 text-center text-danger">આપણી સર્જનશીલ ટીમ સાથે મળો</h2>
          <p className="text-center text-light mb-5">પ્રતિ ઈવેન્ટમાં ઉર્જા લાવતા આવેગી પ્રોફેશનલ્સ</p>
          <div className="row g-4">
            {team.map((member, i) => (
              <div key={i} className="col-md-4">
                <div className="team-member-card">
                  <div className="bg-danger bg-gradient p-4 rounded-top text-center">
                    <div className="w-25 h-25 bg-white bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center display-4 team-icon">
                      {member.icon}
                    </div>
                    <h3 className="h3 fw-bold">{member.name}</h3>
                  </div>
                  <div className="bg-dark p-4 rounded-bottom text-center">
                    <p className="text-danger fw-bold mb-2">{member.role}</p>
                    <p className="text-light mb-3 small">{member.specialty}</p>
                    <a href={`https://wa.me/${member.phone}`} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                      હવે ચેટ કરો
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-5 px-4 bg-secondary">
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center text-danger">તમારી ઈવેન્ટ બુક કરો</h2>
          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="bg-dark p-4 rounded text-center contact-card">
                <Phone className="mx-auto mb-3 text-danger" size={40} />
                <h3 className="fw-bold mb-3 h5">હવે કૉલ કરો</h3>
                <a href="tel:9712448793" className="text-danger text-decoration-none fw-bold fs-5">+91 9712448793</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-dark p-4 rounded text-center contact-card">
                <MessageCircle className="mx-auto mb-3 text-success" size={40} />
                <h3 className="fw-bold mb-3 h5">વોટ્સાપ</h3>
                <a href="https://wa.me/919712448793" target="_blank" rel="noopener noreferrer" className="text-success text-decoration-none fw-bold fs-5">હવે ચેટ કરો</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-dark p-4 rounded text-center contact-card">
                <MapPin className="mx-auto mb-3 text-info" size={40} />
                <h3 className="fw-bold mb-3 h5">સ્થાન</h3>
                <p className="text-light fw-semibold mb-0">દેવગઢ બારિયા, ડાહોદ</p>
              </div>
            </div>
          </div>
          <div className="bg-danger bg-gradient p-5 rounded text-center">
            <h3 className="display-5 fw-bold mb-3">સંપૂર્ણ DJ અનુભવ માટે તૈયાર છો?</h3>
            <p className="mb-4 fs-5">અજવાળી ઈવેન્ટ એન્ટરટેઇનમેન્ટ માટે આજ જ આપણેને સંપર્ક કરો</p>
            <a href="https://wa.me/919712448793" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg text-danger fw-bold">
              🎵 હવે તમારો DJ બુક કરો
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-4 px-4">
        <div className="container text-center text-secondary">
          <p className="mb-2 fw-bold text-white">© 2025 મેસ્ટરમાઇન્ડ સાઉન્ડ્સ - પ્રોફેશનલ DJ સેવાઓ</p>
          <p className="small mb-2">દેવગઢ બારિયા, ડાહોદ | ફોન: 9712448793 | વોટ્સાપ: 9712448793</p>
          <p className="small mb-0">પ્રતિ ઈવેન્ટને અવિસ્મરણીય બનાવીએ છીએ શક્તિશાળી મ્યુઝિક અને એન્ટરટેઇનમેન્ટ સાથે 🎵</p>
        </div>
      </footer>
    </div>
  );
}
