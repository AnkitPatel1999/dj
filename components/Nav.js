"use client";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { nav, WA } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="brand" aria-label="Jaguar Sound home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/logo.png" alt="Jaguar Sound" />
      </a>
      <nav className={open ? "links open" : "links"}>
        
        {nav.map((link,i) => (
          <a
            key={link.href}
            href={link.hash}
            title={link.title}
            className={i === 0 ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {link.title}
          </a>
        ))}
      </nav>
      <a className="btn btn-sm book-top" href={WA()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Book Now</a>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
