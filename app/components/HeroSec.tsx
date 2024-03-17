import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function HeroSec() {
  return (
    <div className="herotxt text-center">

      <div className="header-con">
        <h1 className="text-[130px] pt-14 pr-5 hero-header text-white">
          Art
        </h1>
      </div>

      <p className="italic text-[20px] z-10 text-white">Wir lassen dich wie neu aussehen</p>
      
      <div className="hero-btn" data-aos="zoom-in">
        <a href="https://g.co/kgs/f1eVot2" target="_blank"><span></span>Unser laden!</a>
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