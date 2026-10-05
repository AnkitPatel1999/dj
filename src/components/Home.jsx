import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Equipment from './Equipment';
import Team from './Team';
import Support from './Support';
import Contact from './Contact';
import Footer from './Footer';
import GalleryPage from './gallery/page';
import './home.css';

export default function Home() {
  return (
    <div className="min-vh-100 bg-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <DemoVideos /> */}
      <Equipment />
      <GalleryPage />
      <Team />
      <Support />
      <Contact />
      <Footer />
    </div>
  );
}
