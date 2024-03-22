"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../components/Navbar"
import { faMessage, faPhoneFlip } from "@fortawesome/free-solid-svg-icons"
import Footer from "../components/Footer"

function contact() {
  return (
    <div id="contact">
      <Navbar />
      <h1 className="text-center mt-14 text-[10vw] sm:text-[65px]">Kontaktiere Uns!</h1>
      <p className="text-center text-yellow-500 text-[3vw] sm:text-[1em]">Du hast immernoch Fragen? Wir sind da um zu helfen!</p>

      <div className="grid my-10 sm:w-[50%] w-[80%] m-auto gap-5 content-center">
      
      <div className="card bg-zinc-900 border rounded-lg p-10 flex">
        

        <div className="cardIcon">
        <FontAwesomeIcon icon={faPhoneFlip} className="border-2 bg-zinc-800 border-white text-white p-2 text-3xl rounded-md" />
        </div>

        <div className="text pl-[30px]">
            <h1 className="text-lg font-black tracking-wide text-yellow-500">Direkt Erreichen</h1> 
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <button className="rounded ml-auto uppercase p-3 bg-white/20 hover:bg-white/40 text-white tracking-wide font-black">
            <a href="tel:+492091476264">Jetzt Anrufen!</a>
        </button>

       </div>
       <div className="card bg-zinc-900 border rounded-lg p-10 flex">
        

        <div className="cardIcon">
        <FontAwesomeIcon icon={faPhoneFlip} className="border-2 bg-zinc-800 border-white text-white p-2 text-3xl rounded-md" />
        </div>

        <div className="text pl-[30px]">
            <h1 className="text-lg font-black tracking-wide text-yellow-500">Direkt Erreichen</h1> 
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <button className="rounded ml-auto uppercase p-3 bg-white/20 hover:bg-white/40 text-white tracking-wide font-black">
            <a href="tel:+492091476264">Jetzt Anrufen!</a>
        </button>

       </div>
       <div className="card bg-zinc-900 border rounded-lg p-10 flex">
        

        <div className="cardIcon">
        <FontAwesomeIcon icon={faPhoneFlip} className="border-2 bg-zinc-800 border-white text-white p-2 text-3xl rounded-md" />
        </div>

        <div className="text pl-[30px]">
            <h1 className="text-lg font-black tracking-wide text-yellow-500">Direkt Erreichen</h1> 
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <button className="rounded ml-auto uppercase p-3 bg-white/20 hover:bg-white/40 text-white tracking-wide font-black">
            <a href="tel:+492091476264">Jetzt Anrufen!</a>
        </button>

       </div>


      </div>

      <Footer />
    </div>
  )
}

export default contact