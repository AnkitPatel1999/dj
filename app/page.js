import { Phone, MessageCircle, MapPin, Play, Check, Star, ArrowRight, Volume2, Calendar, Users, Music, Instagram, Youtube, Facebook, Award } from "lucide-react";
import Gallery from "@/app/gallery/page";
import { PHONE, TEL, WA, GOGGLEMAPLOCATION, INSTAGRAM, YOUTUBE, FACEBOOK, nav, services, setup, gallery, team, teamStats, partners, reviews } from "@/lib/data";
import About from "@/app/about/page";
import Services from "@/app/services/page";
import Setup from "@/app/setup/page";
import Team from "@/app/team/page";
import Partners from "@/app/partners/page";
import Reviews from "@/app/reviews/page";
import Bookmostpowerfulsoundofgujarat from "@/app/book-most-powerful-sound-of-gujarat/page";



export default function Home() {
  return (
    <>
      
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
        <section className="section" id="gallery"><Gallery /></section>

        {/* TEAM */}
        <Team></Team>


        {/* PARTNERS */}
        <Partners></Partners>


        {/* REVIEWS */}
        <Reviews></Reviews>


        {/* BOOK */}
        <Bookmostpowerfulsoundofgujarat></Bookmostpowerfulsoundofgujarat>
  
      </main>

      
    </>
  );
}
