import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function HeroSec() {
  return (
    <div className="herotxt text-center">

      <div className="header-con">
        <h1 className="text-[130px] pt-14 pr-5 hero-header text-yellow-500">
          ART
        </h1>
      </div>

      <p className="italic text-[20px] z-10 text-white">Entdecke dein neues Ich - Dein Style beginnt hier!</p>
      
      <div className="hero-btn" data-aos="zoom-in">
        <a href="/gallery"><span></span>Unsere Werke</a>
        <a href="#testimonial"><span></span>Bewertungen</a>
        <a href="/preisliste"><span></span> Preis Liste</a>
      </div>

      <div className="scroll text-lg text-white">
          <h3>Scroll</h3>
          <FontAwesomeIcon icon={faArrowDown} className='m-auto hochrunter w-[50px] h-[150px] scroll-arrow'/>
      </div>
    </div>
  )
}