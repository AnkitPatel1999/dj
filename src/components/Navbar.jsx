import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  console.log("Current path:", location.pathname);

  const menuItems = [
    { href: '#hero', navlink: '/', label: 'Home' },
    { href: '#about', navlink: '/about', label: 'About' },
    { href: '#services', navlink: '/services', label: 'Services' },
    { href: '#gallery', navlink: '/gallery', label: 'Gallery' },
    { href: '#team', navlink: '/team', label: 'Team' },
    { href: '#support', navlink: '/support', label: 'Support' },
    { href: '#contact', navlink: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-90 sticky-top shadow-lg" style={{ zIndex: 1050 }}>
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fs-3 fw-bold text-danger">🎵 JAGUAR SOUNDS</NavLink>
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
            {location.pathname !== "/" && (
               <>
               {menuItems.map((item, index) => (
                 <li key={index} className="nav-item">
                   <NavLink to={item.navlink} className="nav-link text-white">{item.label}</NavLink>
                 </li>
               ))}
             </>
            )}
            {location.pathname === "/" && (
              <>
                {menuItems.map((item, index) => (
                  <li key={index} className="nav-item">
                    <a href={item.href} className="nav-link text-white">{item.label}</a>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="d-lg-none bg-dark p-3">
          <ul className="navbar-nav">
            {location.pathname !== "/" && (
              <>
                {menuItems.map((item, index) => (
                  <li key={index} className="nav-item">
                    <NavLink to={item.navlink} className="nav-link text-white">{item.label}</NavLink>
                  </li>
                ))}
              </>
            )}
            {location.pathname === "/" && (
              <>
                {menuItems.map((item, index) => (
                  <li key={index} className="nav-item">
                    <a href={item.href} className="nav-link text-white">{item.label}</a>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

