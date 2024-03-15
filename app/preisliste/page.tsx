"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Preislistedienstleistung from "../components/Preislistedienstleistung";

const dienstleistungeen = [
  {
    dienstleistung: "Waschen Föhnen oder Legen",
    preisKurz: "19€",
    preisMittel: "22€",
    preisLang: "25€",
  },{
    dienstleistung: "Waschen Schneiden Föhnen",
    preisKurz: "31€",
    preisMittel: "35€",
    preisLang: "38€",
  },
  ,{
    dienstleistung: "Haarschnitt",
    preisKurz: "26€",
    preisMittel: "28€",
    preisLang: "30€",
  },
];




export default function page() {
  return (
    <div id="preisListe" className="dark:bg-[#000] dark:text-white text-black bg-neutral-300 h-[100dvh]">
      <Navbar />
      <div className="preis-container w-3/5 mt-20 m-auto">
        <h4 className="text-center tracking-widest">PREISLISTE</h4>
        <h1 className="text-center text-[50px] preisliste-heading">Preise für Damen und Herren</h1>
        <hr className="w-[50px] h-1 border rounded mt-5 m-auto dark:border-white border-black"/>

        <div className="heading-preis-btns m-4 flex place-content-center flex-wrap gap-2">
            <button className="border rounded p-4 dark:hover:bg-[#111] hover:bg-neutral-200 transition duration-150 ease-out hover:ease-in" onClick={() => {window.location.href = "/preisliste#damen"}}>DAMEN</button>
            <button className="border rounded p-4 dark:hover:bg-[#111] hover:bg-neutral-200 transition duration-150 ease-out hover:ease-in" onClick={() => {window.location.href = "/preisliste#herren"}}>HERREN</button>
        </div>

        <div id="damen">
          <div className="damen-header flex place-content-between">
            <h1 className="text-left text-[35px]">DAMEN</h1>
            <div className="stufen flex">
              <h1 className="text-[35px] px-10">·</h1>
              <h1 className="text-[35px] px-10">··</h1>
              <h1 className="text-[35px] pl-10">···</h1>
            </div>
          </div>

          <hr />

          {dienstleistungeen.map((dienstleistung, index) => (
            <div key={index}>
              <Preislistedienstleistung dienstleistung={dienstleistung}/>
            </div>
          ))}
        </div>

        {/*
        hier preisliste weiter machen 💯💯
        */}

      </div>
      <Footer />
    </div>
    
  )
}
