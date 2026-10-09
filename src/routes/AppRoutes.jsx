import { Routes, Route } from "react-router-dom";

import HeaderFooter from "../layouts/HeaderFooter";
import RouteSEO from "../components/RouteSEO";

import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Gallery from "../components/gallery/page";
import Team from "../components/Team";
import Support from "../components/Support";
import Links from "../components/Links";

export default function AppRoutes() {
  return (
    <>
    <RouteSEO />      
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<HeaderFooter />}>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />
      </Route>
    </Routes>
    </>
  );
}