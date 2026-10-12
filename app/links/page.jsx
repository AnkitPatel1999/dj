import Link from "next/link";
import { Instagram, Globe, MapPin, Star, Youtube, Facebook, ArrowUpRight, MessageCircle, Phone, Play, SkipBack, SkipForward } from "lucide-react";
import Icon from "@/components/Icon";
import { WA, TEL, gallery } from "@/lib/data";
import "./links.css";

export const metadata = {
  title: "Links: Instagram, YouTube, Google & Booking",
  description: "All official Jaguar Sound links in one place: Instagram, YouTube, Facebook, Google Business Profile and booking for DJ and sound in Dahod, Gujarat.",
  alternates: { canonical: "/links" },
  openGraph: {
    type: "website", siteName: "Jaguar Sound", locale: "en_IN", url: "/links",
    title: "Jaguar Sound | All Links", description: "Follow Jaguar Sound and book your DJ in Dahod, Gujarat.",
    images: [{ url: "/img/hero.jpg", alt: "Jaguar Sound speaker stack" }],
  },
};

const links = [
  { Icon: Instagram, title: "Instagram", subtitle: "20K+ Followers • Watch Our Latest Reels", url: "https://www.instagram.com/jaguar_sound_official/", g: "linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf)", c: "#d62976" },
  { Icon: Globe, title: "Official Website", subtitle: "Explore Jaguar Sound & Our Services", url: "https://jaguarsound.vercel.app", g: "linear-gradient(135deg,#ff4d63,#c70f2b)", c: "#ff1f3d" },
  { Icon: MapPin, title: "Google Business Profile", subtitle: "Find Us • Reviews • Location", url: "https://share.google/tMGCmlqcCeZR0SFpt", g: "linear-gradient(135deg,#34a853,#1e8e3e)", c: "#34a853" },
  { Icon: Star, title: "Google Profile", subtitle: "Jaguar Sound - DJ & Sound System", url: "https://profile.google.com/@jaguar_sound_official", g: "linear-gradient(135deg,#4285f4,#1a57c9)", c: "#4285f4" },
  { Icon: Youtube, title: "Jaguar Sound YouTube", subtitle: "600+ Subscribers • DJ Videos & Shorts", url: "https://www.youtube.com/@jaguar_sound_official/shorts", g: "linear-gradient(135deg,#ff3b3b,#c4000a)", c: "#ff0000" },
  { Icon: Facebook, title: "Facebook", subtitle: "500+ Followers • Follow Our Events", url: "https://www.facebook.com/JaguarSoundOfficial", g: "linear-gradient(135deg,#3b8cff,#1259c9)", c: "#1877f2" },
  { Icon: Youtube, title: "Ankit Patel YouTube", subtitle: "1,600+ Subscribers", url: "https://www.youtube.com/@patelankit-me", g: "linear-gradient(135deg,#ff7a45,#d9360b)", c: "#ff5a2a" },
];

const services = [
  ["Weddings", "Heart"], ["Timli", "Flame"], ["Garba", "Music"],
  ["Varghodo", "Truck"], ["Birthday", "Cake"], ["Live Events", "Speaker"],
];

const stats = [
  [Instagram, "20K+", "Instagram"], [Youtube, "600+", "YouTube"], [Facebook, "500+", "Facebook"],
];

const reel = gallery.slice(0, 10);

export default function LinksPage() {
  return (
    <div className="lk-page">
      {/* backdrop */}
      <div className="lk-bg" aria-hidden="true" />
      <div className="lk-beams" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="lk-eq" aria-hidden="true">
        {Array.from({ length: 36 }, (_, i) => <span key={i} style={{ "--d": `${(i % 9) * 0.11}s`, "--h": `${40 + ((i * 37) % 60)}%` }} />)}
      </div>

      <main className="lk-wrap">
        {/* HERO */}
        <header className="lk-hero">
          <span className="lk-badge"><i /> DJ • Sound • Entertainment</span>

          <div className="lk-avatar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/hero.jpg" alt="Jaguar Sound speaker stack" />
          </div>

          <h1><span className="lk-w1">JAGUAR</span><span className="lk-w2">SOUND</span></h1>
          <p className="lk-roar">Experience the <b>roar</b></p>
          <p className="lk-loc"><MapPin size={14} /> Piplod • Devgadh Baria • Dahod • Gujarat</p>

          <ul className="lk-stats">
            {stats.map(([I, n, l]) => (
              <li key={l}><I size={16} /><b>{n}</b><span>{l}</span></li>
            ))}
          </ul>

          <div className="lk-actions">
            <a className="lk-btn lk-btn-red" href={WA()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Book on WhatsApp</a>
            <a className="lk-btn lk-btn-glass" href={TEL}><Phone size={17} /> Call Now</a>
          </div>
        </header>

        {/* NOW PLAYING */}
        <section className="lk-player" aria-label="Jaguar Sound">
          <div className="lk-player-top">
            <span><i /> Now Playing</span>
            <small>Jaguar Sound</small>
          </div>
          <div className="lk-wave" aria-hidden="true">
            {Array.from({ length: 48 }, (_, i) => <i key={i} style={{ "--d": `${i * 0.045}s` }} />)}
          </div>
          <div className="lk-ctrl" aria-hidden="true"><SkipBack size={16} /><b><Play size={18} fill="currentColor" /></b><SkipForward size={16} /></div>
        </section>

        {/* LINKS */}
        <section>
          <div className="lk-title"><span /><h2>Connect with us</h2><span /></div>
          <div className="lk-list">
            {links.map((l, i) => (
              <a key={l.title + i} href={l.url} target="_blank" rel="noopener noreferrer"
                 className={i === 0 ? "lk-link lk-feature" : "lk-link"}
                 style={{ "--i": i, "--g": l.g, "--c": l.c }}>
                <span className="lk-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="lk-ico"><l.Icon size={22} /></span>
                <span className="lk-info"><h3>{l.title}</h3><p>{l.subtitle}</p></span>
                <span className="lk-arrow"><ArrowUpRight size={18} /></span>
              </a>
            ))}
          </div>
        </section>

        {/* PHOTO REEL */}
        <section className="lk-reel-sec">
          <div className="lk-title"><span /><h2>Live from our events</h2><span /></div>
          <div className="lk-reel" aria-hidden="true">
            <div className="lk-reel-track">
              {[...reel, ...reel].map((g, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={g.thumb} alt="" loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <div className="lk-title"><span /><h2>We make events loud</h2><span /></div>
          <div className="lk-services">
            {services.map(([name, icon], i) => (
              <div key={name} className="lk-svc" style={{ "--i": i }}>
                <Icon name={icon} size={22} />
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING */}
        <section className="lk-book">
          <div className="lk-book-light" aria-hidden="true" />
          <span className="lk-book-small">Ready to make some noise?</span>
          <h2>BOOK <em>JAGUAR SOUND</em></h2>
          <p>Turn your event into an unforgettable experience.</p>
          <Link href="/contact" className="lk-btn lk-btn-white">Book Now <ArrowUpRight size={18} /></Link>
        </section>

        <footer className="lk-foot">
          <b>JAGUAR SOUND</b>
          <p>The sound that makes you move.</p>
          <small>© {new Date().getFullYear()} Jaguar Sound - DJ & Sound System</small>
        </footer>
      </main>
    </div>
  );
}
