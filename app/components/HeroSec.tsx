import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function HeroSec() {
  return (
    <div className="herotxt text-center">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl pt-14 pb-10 hero-header fadeUp font-bold" id='hero-hed'>
          Gelsenkirchens Nr. <span className='pl-1'>1</span>
        </h1>
      </div>

      <p className="italic text-[17px] z-10 text-white tracking-wide">
        {/*Entdecke dein neues Ich ~ Dein Style beginnt hier!*/} 
        Ihr professioneller Friseursalon für trendige Haarschnitte und Stylings
      </p>

      
      <div className="hero-btn" data-aos="zoom-in">
        <a href="#testimonial"><span></span>Bewertungen</a>
        <a href="/gallery"><span></span>Unsere Werke</a>
        <a href="/preisliste"><span></span> Preis Liste</a>
      </div>

      <div className="scroll text-lg text-white">
          <h3>Scroll</h3>
          <FontAwesomeIcon icon={faArrowDown} className='m-auto hochrunter w-[50px] h-[150px] scroll-arrow'/>
      </div>
    </div>
  )
}