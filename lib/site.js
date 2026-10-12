// Change SITE_URL to your real domain (or set NEXT_PUBLIC_SITE_URL in .env.local / Vercel)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jaguarsound.vercel.app";

export const SITE = {
  name: "Jaguar Sound",
  title: "Jaguar Sound | Powerful DJ & Sound System in Dahod, Gujarat",
  description:
    "Jaguar Sound provides powerful DJ, high bass sound and premium lighting for weddings, Timli, Garba, Varghodo, birthdays and receptions in Piplod, Devgadh Baria, Dahod and all over Gujarat. Call or WhatsApp +91 9712448793.",
  phone: "+919712448793",
  instagram: "https://www.instagram.com/jaguar_sound_official",
  image: "/img/hero.jpg",
  keywords: [
    "Jaguar Sound", "DJ in Dahod", "DJ Dahod", "DJ sound system Dahod", "wedding DJ Gujarat",
    "Timli DJ", "Garba DJ", "Varghodo DJ", "Baraat DJ", "DJ in Devgadh Baria", "DJ Piplod",
    "sound and lighting rental Dahod", "birthday DJ Dahod",
  ],
};

export const NAV = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Gallery", "/gallery"],
  ["Setup", "/setup"], ["Team", "/team"], ["Contact", "/contact"],
];

// SEO for every page. Titles get " | Jaguar Sound" added automatically.
export const PAGES = {
  about: {
    path: "/about", name: "About Us", image: "/img/about.jpg",
    title: "About Us",
    description: "Jaguar Sound is a leading DJ and sound company in Piplod, Devgadh Baria, Dahod (Gujarat) offering powerful sound, premium lighting and DJ for weddings, parties, Timli and Garba.",
  },
  services: {
    path: "/services", name: "Services", image: "/img/svc3.jpg",
    title: "DJ Services: Wedding, Garba, Timli & Baraat in Dahod",
    description: "Book Jaguar Sound for wedding DJ, Garba and Dandiya, Varghodo and Baraat, birthday, reception and special events in Dahod, Devgadh Baria and across Gujarat.",
  },
  gallery: {
    path: "/gallery", name: "Gallery", image: "/gallery/1.jpg",
    title: "Event Gallery: DJ, Sound & Lighting Photos",
    description: "See photos from Jaguar Sound events: big speaker stacks, stage lighting, weddings, Garba nights and Timli programs in Dahod and Gujarat.",
  },
  setup: {
    path: "/setup", name: "Setup", image: "/img/svc3.jpg",
    title: "Professional DJ Sound & Lighting Setup in Dahod",
    description: "High power speakers, professional amplifiers, DJ console, moving head lights, lasers and mobile DJ trucks. Complete sound and lighting setup by Jaguar Sound, Dahod.",
  },
  team: {
    path: "/team", name: "Team", image: "/team/m1.jpg",
    title: "Our Team & Partners: DJs and Sound Engineers",
    description: "Meet the Jaguar Sound crew: Ankit (Dreamchaser), Hemu and Kuldip, plus our partners Todfod DJ, Dilip Vasava and RA Cabinet.",
  },
  reviews: {
    path: "/reviews", name: "Reviews", image: "/img/hero.jpg",
    title: "Client Reviews for DJ & Sound Service in Dahod",
    description: "Read what clients say about Jaguar Sound: reviews from wedding, Timli and Garba events in Dahod, Gujarat. Book your DJ with confidence.",
  },
  contact: {
    path: "/contact", name: "Contact", image: "/img/hero.jpg",
    title: "Book a DJ in Dahod: Call or WhatsApp +91 9712448793",
    description: "Book Jaguar Sound for your event. Call or WhatsApp +91 9712448793. Piplod, Devgadh Baria, Dahod, Gujarat.",
  },
};
