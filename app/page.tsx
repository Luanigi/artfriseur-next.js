"use client";

import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

import { useEffect } from 'react'
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
      <div className="hero-sec">
        <Navbar />
        <HeroSec />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
      <div className="services">
        <Services />
      </div>
    </main>

  );
}
