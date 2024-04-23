"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Preislistedienstleistung from "../components/Preislistedienstleistung";

type dienstleistung = {
  dienstleistung: string;
  preisKurz: string;
  preisMittel: string;
  preisLang: string;
};

const dienstleistungen: dienstleistung[] = [
  {
    dienstleistung: "Waschen Föhnen oder Legen",
    preisKurz: "22€",
    preisMittel: "25€",
    preisLang: "28€",
  },
  {
    dienstleistung: "Waschen Schneiden Föhnen inkl. Festiger & Sp",
    preisKurz: "37€",
    preisMittel: "42€",
    preisLang: "45€",
  },
  {
    dienstleistung: "Haarschnitt",
    preisKurz: "30€",
    preisMittel: "33€",
    preisLang: "35€",
  },
  {
    dienstleistung: "Waschen Schneiden",
    preisKurz: "32€",
    preisMittel: "35€",
    preisLang: "37€",
  },
  {
    dienstleistung: "Dauerwelle",
    preisKurz: "37€",
    preisMittel: "47€",
    preisLang: "57€",
  },
  {
    dienstleistung: "Ansatz Färben/Tönung (bis zu 2 cm)",
    preisKurz: "30€",
    preisMittel: "31€",
    preisLang: "31€",
  },
  {
    dienstleistung: "Neufarbe",
    preisKurz: "40€",
    preisMittel: "45€",
    preisLang: "50€",
  },
  {
    dienstleistung: "Hauben Strähnen",
    preisKurz: "40€",
    preisMittel: "50€",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Foliensträhnen",
    preisKurz: "50€",
    preisMittel: "60€",
    preisLang: "70€",
  },
  {
    dienstleistung: "Aufhellung Blondierung",
    preisKurz: "30€",
    preisMittel: "40€",
    preisLang: "50€",
  },
  {
    dienstleistung: "Haar Kur",
    preisKurz: "5€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Intensiv-Kur",
    preisKurz: "10€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Augenbrauen Zupfen",
    preisKurz: "8€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Augenbrauen Rasieren",
    preisKurz: "5€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Augenbrauen Färben",
    preisKurz: "8€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Wimpern Färben",
    preisKurz: "10€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Hochsteckfrisur",
    preisKurz: "50€",
    preisMittel: "N/A",
    preisLang: "N/A",
  }
];

const dienstleistungenHerren: dienstleistung[] = [
  {
    dienstleistung: "Waschen Schneiden Föhnen",
    preisKurz: "ab 22€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Haarschnitt",
    preisKurz: "ab 19€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Bart Nassrasur",
    preisKurz: "ab 8€",
    preisMittel: "10€",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Bart Schneiden",
    preisKurz: "ab 5€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Färben",
    preisKurz: "ab 30€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Strähnen",
    preisKurz: "ab 40€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Bart Färben",
    preisKurz: "ab 20€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
];

export default function Page() {
  return (
    <div id="preisListe" className="dark:bg-black dark:text-white text-black bg-yellow-500 ">
      <Navbar />
      <div className="preis-container w-3/5 mt-20 m-auto">
        <h4 className="text-center tracking-widest">PREISLISTE</h4>
        <h1 className="text-center text-[50px] preisliste-heading fadeUp">Preise für Damen und Herren</h1>
        <hr className="w-[50px] h-1 border rounded mt-5 m-auto dark:border-white border-black"/>

        <div className="heading-preis-btns m-4 flex place-content-center flex-wrap gap-2" data-aos="zoom-in">
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

          <hr className="w-[100%]" />

          {dienstleistungen.map((dienstleistung, index) => (
            <div key={index}>
              <Preislistedienstleistung dienstleistung={dienstleistung}/>
            </div>
          ))}
        </div>

        <div id="herren" className="mt-[150px]">
          <div className="damen-header flex place-content-between">
            <h1 className="text-left text-[35px]">HERREN</h1>
            <div className="stufen flex">
              <h1 className="text-[35px] px-10">·</h1>
              <h1 className="text-[35px] px-10">··</h1>
              <h1 className="text-[35px] pl-10">···</h1>
            </div>
          </div>

          <hr className="w-[100%]" />

          {dienstleistungenHerren.map((dienstleistung, index) => (
            <div key={index}>
              <Preislistedienstleistung dienstleistung={dienstleistung}/>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}