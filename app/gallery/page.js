"use client";
import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { gallery } from "@/lib/data";


const tabs = ["All", "Wedding", "Garba", "Timli", "Setup"];

export default function Gallery() {
  const [tab, setTab] = useState("All");
  const [open, setOpen] = useState(null);
  const list = gallery.filter((g) => tab === "All" || g.cat === tab);

  useEffect(() => {
    if (open === null) return;
    const k = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o + 1) % list.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o - 1 + list.length) % list.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, list.length]);

  return (
    <>
      <div className="gal-head">
        <h2><span className="eyebrow">Our Gallery</span>Event <em>Moments</em></h2>
        <div className="tabs" role="tablist">
          {tabs.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? "on" : ""} onClick={() => { setTab(t); setOpen(null); }}>{t}</button>
          ))}
        </div>
      </div>
      <div className="gal-grid">
        {list.map((g, i) => (
          <button key={g.src} className="gtile" onClick={() => setOpen(i)} aria-label={`Open ${g.alt}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={g.thumb} alt={g.alt} loading="lazy" />
          </button>
        ))}
      </div>
      <div className="center">
        <a className="btn btn-outline" href="https://www.instagram.com/jaguar_sound_official" target="_blank" rel="noreferrer">View Full Gallery <ArrowRight size={16} /></a>
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={list[open].src} alt={list[open].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lb-close" onClick={() => setOpen(null)} aria-label="Close"><X /></button>
        </div>
      )}
    </>
  );
}
