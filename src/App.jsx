import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AIEvolution from "./components/AIEvolution";
import ProductFeatures from "./components/ProductFeatures";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Smoothness
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="bg-zinc-900 text-white"
    >
      <Navbar />
      <section id="home" data-scroll-section>
        <Hero />
      </section>
      <section id="evolution" data-scroll-section>
        <AIEvolution />
      </section>
      <section id="features" data-scroll-section>
        <ProductFeatures />
      </section>
      <section id="contact" data-scroll-section>
        <Contact />
      </section>
      <section id="footer" data-scroll-section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
