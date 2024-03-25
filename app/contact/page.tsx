"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../components/Navbar"
import { faLocationDot, faMessage, faPhoneFlip } from "@fortawesome/free-solid-svg-icons"
import Footer from "../components/Footer"

function contact() {
  return (
    <div id="contact" className="contct">
      <Navbar />
      <h1 className="text-center mt-14 text-[10vw] sm:text-[65px]">Kontaktiere Uns!</h1>
      <p className="text-center text-yellow-500 text-[3vw] sm:text-[1em]">Du hast immernoch Fragen? Wir sind da um zu helfen!</p>

      <div className="grid my-10 sm:w-[50%] w-[80%] m-auto gap-5 content-center">
      
      {/* first card */}

      <div className="card bg-zinc-900 border rounded-lg p-10 flex">
        
        <div className="cardIcon">
            <FontAwesomeIcon icon={faPhoneFlip} className="rspsvIcon border-2 bg-zinc-800 border-white text-white p-2 text-3xl rounded-md" />
        </div>

        <div className="text restext pl-[30px]">
            <h1 className="text-lg font-black tracking-wide text-yellow-500">Komm ins Gespräch!</h1> 
            <p>Du möchtest ein Termin bei uns Buchen? Rufe direkt im Salon an!</p>
        </div>

        <button className="rounded ml-auto uppercase p-3 bg-white/20 hover:bg-white/40 text-white tracking-wide font-black">
            <a href="tel:+492091476264">Jetzt Anrufen!</a>
        </button>

      </div>

      {/* second card */}

      <div className="card bg-zinc-900 border rounded-lg p-10 flex">
        

        <div className="cardIcon">
        <FontAwesomeIcon icon={faMessage} className="rspsvIcon border-2 bg-zinc-800 border-white text-white p-2 text-3xl rounded-md" />
        </div>

        <div className="restext pl-[30px]">
            <h1 className="text-lg font-black tracking-wide text-yellow-500">Lass uns quatschen!</h1> 
            <p>Auf Instagram sind wir zur jederzeit erreichbar!</p>
        </div>

        <button className="rounded ml-auto uppercase p-3 bg-white/20 hover:bg-white/40 text-white tracking-wide font-black">
            <a href="https://www.instagram.com/artfriseur/" target="_blank">Schreibe uns!</a>
        </button>

      </div>

      {/* third card */}

      <div className="card bg-zinc-900 border rounded-lg p-10 flex flex-col">
        

        <div className="cardIcon m-auto">
        <FontAwesomeIcon icon={faLocationDot} className="border-2 standort bg-zinc-800 border-white text-white p-2 text-3xl rounded-md" />
        </div>

        <div className="text">
            <h1 className="text-lg font-black tracking-wide text-center text-yellow-500">Besuche uns Vorort!</h1> 
            <div className="responsive_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60.50158888450824!2d7.09913490578788!3d51.509308521098376!2m3!1f77.25000000000003!2f38.753126782444376!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x47b8e761209fdf7d%3A0xcafb77d212c7f87a!2sFriseur%20Art%20Esat%20Ajeti!5e1!3m2!1sde!2sde!4v1711297985390!5m2!1sde!2sde"loading="lazy"></iframe>
            </div>
        </div>
      </div>


      </div>

      <Footer />
    </div>
  )
}

export default contact