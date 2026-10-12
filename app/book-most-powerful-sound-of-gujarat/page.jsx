import { PHONE, TEL, WA } from "@/lib/data";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import Crumbs from "@/components/Crumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("book-most-powerful-sound-of-gujarat");


export default function Bookmostpowerfulsoundofgujarat() {
    return (
      <>
        <section className="section book" id="book-most-powerful-sound-of-gujarat">
          <Crumbs page="book-most-powerful-sound-of-gujarat" />
          <div className="book-box">
            <div>
              <span className="eyebrow light">Let&apos;s make your event special</span>
              <h2>Book Your Event Now</h2>
              <p>Get the best DJ setup for your next event. Contact us now!</p>
              <div className="cta-row">
                <a className="btn btn-white" href={WA()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Book on WhatsApp</a>
                <a className="btn btn-dark" href={TEL}><Phone size={16} /> Call Now</a>
              </div>
            </div>
            <div className="contact-cards">
              <a href={TEL}><Phone /><b>Call Now</b><span>{PHONE}</span></a>
              <a href={WA()} target="_blank" rel="noreferrer"><MessageCircle /><b>WhatsApp</b><span className="green">Chat Now</span></a>
              <div><MapPin /><b>Our Location</b><span>Piplod - Devgadh Bariya Dahod, Gujarat</span></div>
            </div>
          </div>
        </section>
      </>
    )
}