"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { H } from "../../lib/functions"
import { partners } from "@/lib/data";

import Crumbs from "@/components/Crumbs";
import { pageMeta } from "@/lib/seo";

// export const metadata = pageMeta("partners");


export default function Partners() {
  const ref = useRef(null);
  const go = (d) => ref.current?.scrollBy({ left: d * 220, behavior: "smooth" });

    return (
      <>
        <section className="section" id="partners">
          <Crumbs page="partners" />
          <H eyebrow="Our Partners" a="We Support" b="& Collaborate" />
         
          <div className="carousel">
            <button className="arrow" onClick={() => go(-1)} aria-label="Previous"><ChevronLeft size={18} /></button>
            <div className="track" ref={ref}>
              {partners.map((p) => (
                <figure key={p.name} className="pcard">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} />
                  <figcaption>{p.name}</figcaption>
                </figure>
              ))}
            </div>
            <button className="arrow" onClick={() => go(1)} aria-label="Next"><ChevronRight size={18} /></button>
          </div>
          
        </section>
      </>
    )
}