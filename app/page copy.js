import { Phone, MessageCircle, MapPin, Play, Check, Star, ArrowRight, Volume2, Calendar, Users, Music, Instagram, Youtube, Facebook, Award } from "lucide-react";
import Nav from "@/components/Nav";
import Icon from "@/components/Icon";
import Gallery from "@/app/gallery/page";
import { PHONE, TEL, WA, INSTAGRAM, YOUTUBE, FACEBOOK, nav, services, setup, gallery, team, teamStats, partners, reviews } from "@/lib/data";
import About from "@/app/about/page";
import Services from "@/components/services";
import Setup from "@/components/setup";
import Team from "@/components/Team";
import Partners from "@/app/partners/page";
import Reviews from "@/components/Reviews";
import Bookmostpowerfulsoundofgujarat from "@/app/book-most-powerful-sound-of-gujarat/page";
import { H } from "../lib/functions"




export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-copy">
            <p className="tag">The power of music</p>
            <h1><span className="w1">Jaguar</span><span className="w2">Sound</span></h1>
            <p className="tagline">Powerful DJ for Every Event</p>
            <p className="types">Wedding &bull; Party &bull; Timli &bull; Garba &bull; Birthday &bull; Reception &bull; All Events</p>
            <div className="cta-row">
              <a className="btn" href={WA()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Book Now</a>
              <a className="btn btn-glass" href={YOUTUBE} target="_blank" rel="noreferrer"><Play size={16} /> Watch Video</a>
            </div>
            <ul className="hero-stats">
              <li><Calendar /><div><b>100+</b><span>Events Completed</span></div></li>
              <li><Volume2 /><div><b>High Bass</b><span>Premium Sound</span></div></li>
              <li><MapPin /><div><b>Dahod, Gujarat</b><span>Our Location</span></div></li>
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <About></About>


        {/* SERVICES */}
        <Services></Services>


        {/* SETUP */}
        <Setup></Setup>

        {/* GALLERY */}
        <section className="section" id="gallery"><Gallery items={gallery} /></section>

        {/* TEAM */}
        <Team></Team>


        {/* PARTNERS */}
        <Partners></Partners>


        {/* REVIEWS */}
        <Reviews></Reviews>


        {/* BOOK */}
        <Bookmostpowerfulsoundofgujarat></Bookmostpowerfulsoundofgujarat>
  
      </main>

      <footer className="footer">
        <div className="foot-grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="flogo" src="/img/logo.png" alt="Jaguar Sound" />
            <p>Powerful DJ for Every Event<br />Piplod, Devgadh Bariya, Dahod - Gujarat</p>
            <div className="soc big">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            </div>
          </div>
          <div><h4>Quick Links</h4>{nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</div>
          <div><h4>Our Services</h4>{services.map((s) => <a key={s.title} href="#services">{s.title}</a>)}</div>
          <div>
            <h4>Contact Info</h4>
            <a href={TEL}><Phone size={14} /> {PHONE}</a>
            <a href={WA()} target="_blank" rel="noreferrer"><MessageCircle size={14} /> Chat on WhatsApp</a>
            <span><MapPin size={14} /> Piplod, Devgadh Bariya, Dahod</span>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={14} /> Jaguar Sound Official Instagram</a>
            <a href={YOUTUBE} target="_blank" rel="noreferrer"><Youtube size={14} /> Jaguar Sound Official Youtube Channel</a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer"><Facebook size={14} /> Jaguar Sound Official Facebook Page</a>
          </div>
        </div>
        <div className="copy"><span>© {new Date().getFullYear()} Jaguar Sound. All Rights Reserved.</span><span>Designed with <i>♥</i> for Music &amp; Events</span></div>
      </footer>
      <a className="fab" href={WA()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a>
    </>
  );
}
