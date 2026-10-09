import "./links.css";

const links = [
  {
    icon: "📸",
    title: "Instagram",
    subtitle: "20K+ Followers • Watch Our Latest Reels",
    url: "https://www.instagram.com/jaguar_sound_official/",
  },
  {
    icon: "🌐",
    title: "Official Website",
    subtitle: "Explore Jaguar Sound & Our Services",
    url: "https://jaguarsound.vercel.app",
  },
  {
    icon: "📍",
    title: "Google Business Profile",
    subtitle: "Find Us • Reviews • Location",
    url: "https://share.google/tMGCmlqcCeZR0SFpt",
  },
  {
    icon: "⭐",
    title: "Google Profile",
    subtitle: "Jaguar Sound - DJ & Sound System",
    url: "https://profile.google.com/@jaguar_sound_official",
  },
  {
    icon: "▶",
    title: "Jaguar Sound YouTube",
    subtitle: "600+ Subscribers • DJ Videos & Shorts",
    url: "https://www.youtube.com/@jaguar_sound_official/shorts",
  },
  {
    icon: "f",
    title: "Facebook",
    subtitle: "500+ Followers • Follow Our Events",
    url: "https://www.facebook.com/JaguarSoundOfficial",
  },
  {
    icon: "▶",
    title: "Ankit Patel YouTube",
    subtitle: "1,600+ Subscribers",
    url: "https://www.youtube.com/@patelankit-me",
  },
];

const services = [
  "Weddings",
  "Timli",
  "Garba",
  "Varghodo",
  "Birthday",
  "Live Events",
];

export default function Links() {
  return (
    <div className="dj-page">

      {/* Animated background */}
      <div className="dj-glow glow-one"></div>
      <div className="dj-glow glow-two"></div>
      <div className="dj-grid"></div>

      {/* Equalizer */}
      <div className="equalizer">
        {[...Array(32)].map((_, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${(index % 8) * 0.08}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="dj-container">

        {/* HERO */}
        <header className="dj-hero">

          <div className="dj-badge">
            🔊 DJ • SOUND • ENTERTAINMENT
          </div>

          <div className="jaguar-logo">
            <span>🐆</span>
          </div>

          <div className="live-status">
            <span></span>
            LIVE ENTERTAINMENT
          </div>

          <h1>
            JAGUAR
            <strong>SOUND</strong>
          </h1>

          <h2>PIPLOD - DEVGADH BARIA - DAHOD - GUJARAT</h2>

          <p className="experience">
            EXPERIENCE THE <span>ROAR</span>
          </p>

          <p className="hero-description">
            Powerful DJ Sound & Event Entertainment
            <br />
            Piplod • Devgadh Bariya • Dahod • Gujarat
          </p>

          {/* STATS */}
          <div className="dj-stats">

            <div>
              <strong>20K+</strong>
              <span>INSTAGRAM</span>
            </div>

            <div>
              <strong>600+</strong>
              <span>YOUTUBE</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>FACEBOOK</span>
            </div>

          </div>
        </header>

        {/* SOUND VISUALIZER */}
        <div className="sound-visualizer">

          <div className="visualizer-label">
            <span>NOW PLAYING</span>
            <small>JAGUAR SOUND</small>
          </div>

          <div className="wave">
            {[...Array(45)].map((_, index) => (
              <i
                key={index}
                style={{
                  animationDelay: `${index * 0.04}s`,
                }}
              ></i>
            ))}
          </div>

          <div className="music-controls">
            <span>◀</span>
            <b>▶</b>
            <span>▶</span>
          </div>

        </div>

        {/* LINKS */}
        <section className="links-section">

          <div className="section-title">
            <span></span>
            <h3>CONNECT WITH US</h3>
            <span></span>
          </div>

          <div className="links-list">

            {links.map((link, index) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="dj-link"
                key={index}
              >

                <div className="link-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="link-icon">
                  {link.icon}
                </div>

                <div className="link-info">
                  <h4>{link.title}</h4>
                  <p>{link.subtitle}</p>
                </div>

                <div className="link-arrow">
                  ↗
                </div>

              </a>
            ))}

          </div>
        </section>

        {/* SERVICES */}
        <section className="services">

          <div className="section-title">
            <span></span>
            <h3>WE MAKE EVENTS LOUD</h3>
            <span></span>
          </div>

          <div className="service-grid">

            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <span>
                  {["🎧", "🔥", "🎶", "🥁", "🎉", "🔊"][index]}
                </span>
                <strong>{service}</strong>
              </div>
            ))}

          </div>

        </section>

        {/* BOOKING */}
        <section className="booking">

          <div className="booking-light"></div>

          <span className="booking-small">
            READY TO MAKE SOME NOISE?
          </span>

          <h2>
            BOOK <span>JAGUAR SOUND</span>
          </h2>

          <p>
            Turn your event into an unforgettable experience.
          </p>

          <a
            href="https://jaguarsound.vercel.app/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="book-button"
          >
            <span>🎧</span>
            BOOK NOW
            <b>↗</b>
          </a>

        </section>

        {/* FOOTER */}
        <footer>

          <div className="footer-logo">
            🐆 JAGUAR SOUND
          </div>

          <p>
            THE SOUND THAT MAKES YOU MOVE.
          </p>

          <small>
            © {new Date().getFullYear()} Jaguar Sound - DJ & Sound System
          </small>

        </footer>

      </div>
    </div>
  );
}