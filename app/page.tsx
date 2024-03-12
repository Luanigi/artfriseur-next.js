"use client";

import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";

import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Home() {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])


  return (
    <main>
      <div id="home" className="hero-sec" >
        <Navbar />
        <HeroSec />
      </div>
      <div className="features">
        <Features />
      </div>
      <div className="services">
        <Services />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </main>

  );
}
