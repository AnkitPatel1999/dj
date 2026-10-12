import { Check, ArrowRight, Volume2, Users, Music } from "lucide-react";
import Crumbs from "@/components/Crumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("about");

export default function About() {
    return (
      <>
        <section className="section about" id="about">
          <Crumbs page="about" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="about-img" src="/img/about.jpg" alt="Jaguar Sound mobile speaker stack" />
          <div>
            <span className="eyebrow">About Us</span>
            <h2>Jaguar <em>Sound</em></h2>
            <p className="lead">Jaguar Sound is a leading DJ and sound company based in Piplod, Devgadh Bariya, Dahod (Gujarat). We provide powerful sound, premium lighting and electrifying DJ experience for weddings, parties, timli, garba and all types of events.</p>
            <ul className="about-feats">
              <li><Volume2 /> High Quality Sound</li>
              <li><Users /> Experienced Team</li>
              <li><Check /> Professional Setup</li>
              <li><Music /> Best in Timli Remixes</li>
            </ul>
            <a className="btn" href="#services">More About Us <ArrowRight size={16} /></a>
          </div>
        </section>
      </>
    )
}