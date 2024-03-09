import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function HeroSec() {
  return (
    <div className="herotxt text-center">
        <h1 className="text-[130px] pt-14 hero-header customFont">
          Art
        </h1>
        <p className="italic text-[20px] z-10">Wir lassen dich wie neu aussehen</p>
        <div className="hero-btn">
          <a href="https://www.google.com/search?q=art+friseur+gelsenkirchen&amp;sxsrf=AOaemvIg5R0Vcgx5VaF5ILEqsDBKzAzlYg%3A1639247679194&amp;ei=P--0YeuSC76J9u8PpsCrgA8&amp;ved=0ahUKEwirrve8sdz0AhW-hP0HHSbgCvAQ4dUDCA4&amp;oq=art+friseur+gelsenkirchen&amp;gs_lcp=Cgdnd3Mtd2l6EAxKBAhBGABKBAhGGABQAFgAYABoAHAAeACAAQCIAQCSAQCYAQA&amp;sclient=gws-wiz" target="_blank"><span></span>Unser laden!</a>
          <a href="#testimonial"><span></span>Bewertungen</a>
          <a href=""><span></span> Preis Liste</a>
        </div>
        <div className="scroll text-lg">
            <h3>Scroll</h3>
            <FontAwesomeIcon icon={faArrowDown} className='m-auto w-10 h-100 sm:pt-0 hochrunter arrowww'/>
        </div>
    </div>
  )
}