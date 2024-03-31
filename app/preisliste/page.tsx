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
    preisKurz: "19€",
    preisMittel: "22€",
    preisLang: "25€",
  },
  {
    dienstleistung: "Waschen Schneiden Föhnen",
    preisKurz: "31€",
    preisMittel: "35€",
    preisLang: "38€",
  },
  {
    dienstleistung: "Haarschnitt",
    preisKurz: "26€",
    preisMittel: "28€",
    preisLang: "30€",
  },
  {
    dienstleistung: "Waschen Schneiden",
    preisKurz: "26€",
    preisMittel: "28€",
    preisLang: "30€",
  },
  {
    dienstleistung: "Dauerwelle Schneiden Föhnen inkl. Kur",
    preisKurz: "56€",
    preisMittel: "62€",
    preisLang: "72€",
  },
  {
    dienstleistung: "Ansatz Färben\Tönung (bis zu 2cm)",
    preisKurz: "27€",
    preisMittel: "29€",
    preisLang: "31€",
  },
  {
    dienstleistung: "Ansatz Färben Schneiden Föhnen inkl. Kur",
    preisKurz: "53€",
    preisMittel: "58€",
    preisLang: "62€",
  },
  {
    dienstleistung: "Ansatz Färben Schneiden inkl. Kur",
    preisKurz: "47€",
    preisMittel: "51€",
    preisLang: "53€",
  },
  {
    dienstleistung: "Ansatz Färben Föhnen inkl. Kur",
    preisKurz: "44€",
    preisMittel: "48€",
    preisLang: "50€",
  },
  {
    dienstleistung: "Neufarbe",
    preisKurz: "33€",
    preisMittel: "39€",
    preisLang: "49€",
  },
  {
    dienstleistung: "Neufarben Schneiden Föhnen inkl. Kur",
    preisKurz: "59€",
    preisMittel: "67€",
    preisLang: "72€",
  },
  {
    dienstleistung: "Neufarbe Schneiden inkl. Kur",
    preisKurz: "51€",
    preisMittel: "57€",
    preisLang: "62€",
  },
  {
    dienstleistung: "Neufarbe Föhnen inkl. Kur",
    preisKurz: "48€",
    preisMittel: "54€",
    preisLang: "59€",
  },
  {
    dienstleistung: "Hauben Strähnen",
    preisKurz: "32€",
    preisMittel: "38€",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Foliensträhnen",
    preisKurz: "40€",
    preisMittel: "50€",
    preisLang: "60€",
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
    dienstleistung: "Augenbrauen Zupfen",
    preisKurz: "7€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Augenbrauen Rasieren",
    preisKurz: "4€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Augenbrauen Färben",
    preisKurz: "6€",
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
    preisKurz: "ab 45€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
];

const dienstleistungenHerren: dienstleistung[] = [
  {
    dienstleistung: "Waschen Schneiden Föhnen",
    preisKurz: "ab 20€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Haarschnitt",
    preisKurz: "ab 18€",
    preisMittel: "N/A",
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
    preisKurz: "ab 27€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Strähnen",
    preisKurz: "ab 30€",
    preisMittel: "N/A",
    preisLang: "N/A",
  },
  {
    dienstleistung: "Bart Färben",
    preisKurz: "ab 15",
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