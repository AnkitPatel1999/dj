import { PHONE, TEL, WA, GOGGLEMAPLOCATION, INSTAGRAM, YOUTUBE, FACEBOOK, nav, services } from "@/lib/data";
import { Phone, MessageCircle, MapPin, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {

    return (
        <>
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
          <div><h4>Quick Links</h4>{nav.map((link, i) => <a key={link.href} href={link.href}>{link.title}</a>)}</div>
          <div><h4>Our Services</h4>{services.map((s) => <a key={s.title} href="#services">{s.title}</a>)}</div>
          <div>
            <h4>Contact Info</h4>
            <a href={TEL}><Phone size={14} /> {PHONE}</a>
            <a href={WA()} target="_blank" rel="noreferrer"><MessageCircle size={14} /> Chat on WhatsApp</a>
            
            <a href={GOGGLEMAPLOCATION} target="_blank" rel="noreferrer">< MapPin size={14} /> Piplod, Devgadh Bariya, Dahod</a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={14} /> Jaguar Sound Official Instagram</a>
            <a href={YOUTUBE} target="_blank" rel="noreferrer"><Youtube size={14} /> Jaguar Sound Official Youtube Channel</a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer"><Facebook size={14} /> Jaguar Sound Official Facebook Page</a>
            <a href="/links" ><MessageCircle size={14} /> Jaguar Sound Official Links</a>
          </div>
        </div>
        <div className="copy"><span>© {new Date().getFullYear()} Jaguar Sound. All Rights Reserved.</span><span>Designed with <i>♥</i> for Music &amp; Events</span></div>
    </footer>
    <a className="fab" href={WA()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a>

    </>
    )

}