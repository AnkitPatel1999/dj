import { Poppins, Permanent_Marker } from "next/font/google";
import "./globals.css";

const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-body" });
const brush = Permanent_Marker({ subsets: ["latin"], weight: "400", variable: "--font-brush" });

export const metadata = {
  title: "Jaguar Sound | Powerful DJ & Sound System in Dahod, Gujarat",
  description: "Powerful DJ for weddings, Timli, Garba, birthdays and receptions in Piplod, Devgadh Baria, Dahod. Call or WhatsApp +91 9712448793.",
  openGraph: { title: "Jaguar Sound | Powerful DJ for Every Event", description: "High bass sound, premium lighting and DJ for all events in Gujarat.", type: "website", images: ["/img/hero.jpg"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${brush.variable}`}>
      <body>{children}</body>
    </html>
  );
}
