"use client";

import { useState } from "react";
import BasketDrawer from "@/components/BasketDrawer";
import Benefits from "@/components/Benefits";
import Cta from "@/components/Cta";
import FlavoursPreview from "@/components/FlavoursPreview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      {booting ? <Loader onDone={() => setBooting(false)} /> : null}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-palm focus:px-4 focus:py-2 focus:text-palm-gold"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Benefits />
        <FlavoursPreview />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
      <BasketDrawer />
    </>
  );
}
