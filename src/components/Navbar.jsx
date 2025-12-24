import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#hero', label: 'હોમ' },
    { href: '#about', label: 'વિશે' },
    { href: '#services', label: 'સેવાઓ' },
    { href: '#demo', label: 'ડેમો' },
    { href: '#team', label: 'ટીમ' },
    { href: '#support', label: 'સમર્થન' },
    { href: '#contact', label: 'સંપર્ક' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-90 sticky-top shadow-lg" style={{ zIndex: 1050 }}>
      <div className="container-fluid">
        <div className="navbar-brand fs-3 fw-bold text-danger">🎵 JAGUAR SOUNDS</div>
        
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
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href} className="nav-link text-white">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="d-lg-none bg-dark p-3">
          <ul className="navbar-nav">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href} className="nav-link text-white" onClick={handleLinkClick}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

