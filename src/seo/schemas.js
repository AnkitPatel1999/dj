const SITE_URL = "https://jaguarsound.vercel.app"; // no trailing slash
const SITE_NAME = "Jaguar Sound";
const LOGO = `${SITE_URL}/logo.png`;

const organization = {
  "@type": "Organization", // use "LocalBusiness" if you serve a physical location
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO },
  email: "jaguarsoundofficial@gmail.com",
  telephone: "+91 9712448793",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vanbhela Talav Faliya Piplod",
    addressLocality: "Piplod",
    addressRegion: "Gujarat",
    postalCode: "389130",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/JaguarSoundOfficial",
    "https://www.instagram.com/jaguar_sound_official/",
    "https://jaguarsound.vercel.app",
    "https://www.youtube.com/@jaguar_sound_official/",
    "https://www.youtube.com/@patelankit-me",
    "https://profile.google.com/@jaguar_sound_official",
    "https://share.google/tMGCmlqcCeZR0SFpt",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 9712448793",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Gujarati", "Hindi"],
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

// ---- Per-page config ----
export const pages = {
    "/": {
      title: "Jaguar Sound Piplod | DJ Sound & Event Entertainment in Dahod",
      description:
        "Jaguar Sound Piplod provides powerful DJ sound and event entertainment for weddings, Timli, Garba, Varghodo, birthdays and live events in Dahod, Gujarat.",
      type: "WebPage",
      name: "Jaguar Sound Piplod",
    },
  
    "/about": {
      title: "About Jaguar Sound Piplod | DJ Sound in Dahod",
      description:
        "About Jaguar Sound Piplod, a DJ sound and event entertainment brand serving Piplod, Devgadh Bariya, Dahod and surrounding areas of Gujarat.",
      type: "AboutPage",
      name: "About Jaguar Sound",
    },
  
    "/services": {
      title: "DJ Sound & Event Services in Dahod | Jaguar Sound",
      description:
        "Explore Jaguar Sound services for weddings, Timli, Garba, Varghodo, birthdays, festivals and live events in Piplod, Dahod and Devgadh Bariya.",
      type: "CollectionPage",
      name: "DJ Sound & Event Services",
  
      extra: () => ({
        "@type": "OfferCatalog",
        name: "Jaguar Sound DJ & Event Services",
  
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wedding DJ Sound",
              description:
                "Powerful DJ sound and entertainment for wedding celebrations and events in Dahod and Gujarat.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              areaServed: "Dahod, Gujarat, India",
            },
          },
  
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Timli Sound & DJ",
              description:
                "High-power DJ sound and entertainment for Timli nights, celebrations and cultural events in Dahod and surrounding areas.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              areaServed: "Dahod, Gujarat, India",
            },
          },
  
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Garba DJ Sound",
              description:
                "DJ sound and entertainment setup for Garba events, Navratri celebrations and cultural programs in Gujarat.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              areaServed: "Gujarat, India",
            },
          },
  
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Varghodo Sound",
              description:
                "Powerful sound and DJ entertainment for Varghodo, wedding processions and celebrations in Dahod and Gujarat.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              areaServed: "Dahod, Gujarat, India",
            },
          },
  
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Birthday DJ",
              description:
                "DJ sound and entertainment for birthday parties, private celebrations and special events in Dahod and nearby areas.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              areaServed: "Dahod, Gujarat, India",
            },
          },
  
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Live Event Sound",
              description:
                "Professional DJ sound and event entertainment for live events, festivals and large celebrations across Gujarat.",
              provider: {
                "@id": `${SITE_URL}/#organization`,
              },
              areaServed: "Gujarat, India",
            },
          },
        ],
      }),
    },
  
    "/gallery": {
      title: "DJ Event Gallery in Dahod | Jaguar Sound Piplod",
      description:
        "Explore Jaguar Sound event photos and videos from weddings, Timli, Garba, Varghodo, birthdays and live events in Dahod and Gujarat.",
      type: "ImageGallery",
      name: "Jaguar Sound Event Gallery",
  
      extra: () => ({
        "@type": "ImageGallery",
  
        name: "Jaguar Sound Event Gallery",
  
        description:
          "Photos and videos from Jaguar Sound DJ events, weddings, Timli, Garba, Varghodo and live events across Dahod and Gujarat.",
      }),
    },
  
    "/team": {
      title: "Jaguar Sound Team | DJ & Event Entertainment in Dahod",
      description:
        "Meet the Jaguar Sound team behind DJ sound, event entertainment and live event production in Piplod, Devgadh Bariya, Dahod and Gujarat.",
      type: "AboutPage",
      name: "Jaguar Sound Team",
  
      extra: () => ({
        "@type": "ItemList",
  
        name: "Jaguar Sound Team",
  
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
  
            item: {
              "@type": "Person",
              name: "Jaguar Sound Team",
              jobTitle: "DJ & Event Entertainment",
              worksFor: {
                "@id": `${SITE_URL}/#organization`,
              },
            },
          },
        ],
      }),
    },
  
    "/support": {
      title: "DJ Sound FAQs & Support | Jaguar Sound Piplod",
      description:
        "Find answers about Jaguar Sound bookings, DJ sound setups, event services, availability and coverage across Piplod, Dahod and Gujarat.",
      type: "WebPage",
      name: "Jaguar Sound Support & FAQs",
  
      // Only keep FAQs that are actually visible on the page
      extra: () => ({
        "@type": "FAQPage",
  
        mainEntity: [
          {
            "@type": "Question",
            name: "What events does Jaguar Sound cover?",
  
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Jaguar Sound provides DJ sound and event entertainment for weddings, birthdays, Timli, Garba, Varghodo, festivals and live events.",
            },
          },
  
          {
            "@type": "Question",
            name: "Which areas does Jaguar Sound serve?",
  
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Jaguar Sound serves Piplod, Devgadh Bariya, Dahod and surrounding areas of Gujarat.",
            },
          },
  
          {
            "@type": "Question",
            name: "How can I book Jaguar Sound?",
  
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "You can contact Jaguar Sound through the official website or social media channels to discuss your event and booking requirements.",
            },
          },
  
          {
            "@type": "Question",
            name: "Does Jaguar Sound provide wedding DJ services?",
  
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. Jaguar Sound provides DJ sound and entertainment services for weddings and other celebrations.",
            },
          },
        ],
      }),
    },
  
    "/contact": {
      title: "Contact Jaguar Sound | DJ Booking in Dahod, Gujarat",
      description:
        "Contact Jaguar Sound Piplod to book DJ sound and event entertainment for weddings, Timli, Garba, Varghodo, birthdays and live events in Dahod, Gujarat.",
      type: "ContactPage",
      name: "Contact Jaguar Sound",
    },
  
    "/links": {
      title: "Jaguar Sound Official Links | Instagram, YouTube & More",
      description:
        "Find all official Jaguar Sound Piplod links, including Instagram, YouTube, Facebook, Google Business Profile, website and event booking information.",
      type: "CollectionPage",
      name: "Jaguar Sound Official Links",
    },
  };






export function buildSchema(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = pages[path];
  if (!page) return null;

  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  const webpage = {
    "@type": page.type,
    "@id": `${url}#webpage`,
    url,
    name: page.name,
    description: page.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };

  const graph = [organization, website, webpage];

  if (path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: page.name, item: url },
      ],
    });
  }

  if (page.extra) graph.push(page.extra());

  return {
    meta: { title: page.title, description: page.description, url },
    json: { "@context": "https://schema.org", "@graph": graph },
  };
}