import { Poppins, Permanent_Marker } from "next/font/google";
import "./globals.css";

const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-body" });
const brush = Permanent_Marker({ subsets: ["latin"], weight: "400", variable: "--font-brush" });

import { SITE, SITE_URL } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";



export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    url: "/",
    title: "Jaguar Sound | Powerful DJ for Every Event",
    description: "High bass sound, premium lighting and DJ for weddings, Timli, Garba and all events in Dahod, Gujarat.",
    images: [{ url: SITE.image, width: 1134, height: 966, alt: "Jaguar Sound DJ speaker stack at a live event" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaguar Sound | Powerful DJ for Every Event",
    description: "High bass sound, premium lighting and DJ for all events in Dahod, Gujarat.",
    images: [SITE.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // verification: { google: "PASTE_GOOGLE_SEARCH_CONSOLE_CODE" },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE.name,
  description: SITE.description,
  url: SITE_URL,
  image: `${SITE_URL}${SITE.image}`,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piplod, Devgadh Baria",
    addressLocality: "Dahod",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  areaServed: [{ "@type": "AdministrativeArea", name: "Dahod" }, { "@type": "State", name: "Gujarat" }],
  sameAs: [SITE.instagram],
  knowsAbout: ["Wedding DJ", "Garba DJ", "Timli DJ", "Varghodo DJ", "Sound system rental", "Stage lighting"],
};

console.log("h")
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${brush.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />

        <Nav></Nav>
        {children}
        <Footer></Footer>

        </body>
    </html>
  );
}
