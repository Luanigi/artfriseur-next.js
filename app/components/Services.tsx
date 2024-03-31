import Image from "next/image"
import ServicePic1 from "./Images/servicePic1.jpg"
import ServicePic2 from "./Images/servicePic2.jpg"
import ServicePic3 from "./Images/servicePic3.jpg"
import ServicePic4 from "./Images/servicePic4.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faUpRightFromSquare"
import { faBrush, faScissors, faShieldHalved, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"

function Services() {
  return (
    <div id="services" className="bg-yellow-500 text-black">
        <div className="title-text">
            <p className="text-white">SERVICES</p>
            <h1>Was wir anbieten!</h1>
        </div>
        <div className="service-box">
          <div className="single-service" data-aos="fade-up">
              <Image src={ServicePic1} alt={""} />
              <div className="overlay"></div>
              <div className="service-desc">
              <span className="flex justify-center">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="mt-1" />
                <h3>・Haar Styling・</h3>
                <FontAwesomeIcon icon={faWandMagicSparkles} className="mt-1" />
              </span>
                    <hr />
                    <p>
                        Ob elegant, verspielt oder modern: Wir kreieren typgerechte 
                        Stylings für jeden Anlass. Mit unseren professionellen 
                        Styling-Produkten und unserer Expertise zaubern wir Looks, 
                        die deinen Typ perfekt in Szene setzen.
                    </p>
                </div>
            </div>

            <div className="single-service" data-aos="fade-up">
                <Image src={ServicePic2} alt={""} />
                <div className="overlay"></div>
                <div className="service-desc">
                <span className="flex justify-center">
                    <FontAwesomeIcon icon={faShieldHalved} className="mt-1" />
                    <h3>・Bart Pflege・</h3>
                    <FontAwesomeIcon icon={faShieldHalved} className="mt-1" />
                </span>
                    <hr />
                    <p>
                        Wir bieten dir ein umfangreiches Angebot an Bartpflege-Dienstleistungen,
                        die deinen Bart optimal in Form bringen und pflegen. Unsere erfahrenen 
                        Friseure gehen auf deine individuellen Bedürfnisse ein!
                    </p>
                </div>
            </div>

            <div className="single-service" data-aos="fade-up">
                <Image src={ServicePic3} alt={""} />
                <div className="overlay"></div>
                <div className="service-desc">
                    <span className="flex justify-center">
                        <FontAwesomeIcon icon={faScissors} className="mt-1" />
                        <h3>・Haare schnitt・</h3>                        
                        <FontAwesomeIcon icon={faScissors} className="mt-1" />

                    </span>
                    <hr />
                    <p>
                        Ob modischer Kurzhaarschnitt, elegante Langhaarfrisur oder trendige 
                        Trendfrisur: Wir finden den perfekten Haarschnitt für deine Haarstruktur, 
                        deinen Typ und deine Wünsche.
                    </p>
                </div>
            </div>

            <div className="single-service" data-aos="fade-up">
                <Image src={ServicePic4} alt={""} />
                <div className="overlay"></div>
                <div className="service-desc">
                <span className="flex justify-center">
                    <FontAwesomeIcon icon={faBrush} className="mt-1" />
                    <h3>・Haare Färben・</h3>
                    <FontAwesomeIcon icon={faBrush} className="mt-1" />
                </span>
                    <hr />
                    <p>
                        Zeige deine Individualität mit einer neuen Haarfarbe!
                        Von dezenten Strähnen bis hin zu intensiven Färbungen - 
                        wir bringen Farbe in dein Leben! 
                    </p>
                </div>

            </div>
            <button data-aos="zoom-in">
            <a className="hover:scale-50" href="/gallery">Mehr bilder sehen <FontAwesomeIcon icon={faUpRightFromSquare} /></a>
            </button>
        </div>
    </div>
  )
}

export default Services
