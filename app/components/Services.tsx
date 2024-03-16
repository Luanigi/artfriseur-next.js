import Image from "next/image"
import ServicePic1 from "./Images/servicePic1.jpg"
import ServicePic2 from "./Images/servicePic2.jpg"
import ServicePic3 from "./Images/servicePic3.jpg"
import ServicePic4 from "./Images/servicePic4.jpg"

function Services() {
  return (
    <div id="services" className="bg-yellow-500 text-black">
        <div className="title-text">
            <p className="text-white">SERVICES</p>
            <h1 className="">Was wir anbieten!</h1>
        </div>
        <div className="service-box">
          <div className="single-service" data-aos="fade-up">
              <Image src={ServicePic1} alt={""} />
              <div className="overlay"></div>
              <div className="service-desc">
                  <h3>Haar Styling</h3>
                    <hr />
                    <p>
                        Du willst deine haare Stylen? Komm zu uns, wir haben eine mitarbeiterin
                        die nur auf Haar styling spezialisert ist also wirst du eine sehr tolle,
                        unterhaltsame Erfahrung sammeln beim Haare Stylen!
                    </p>
                </div>
            </div>

            <div className="single-service" data-aos="fade-up">
                <Image src={ServicePic2} alt={""} />
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Bart Pflege</h3>
                    <hr />
                    <p>
                        Wir achten sehr auf deine Haut und dein bart deswegen nutzen wir 
                        die besten mittel wenn wir mit den besten rasier klingen dein bart 
                        reparieren damit deine haut nicht reißt also blutet. Und schnitt wünsche werden
                        auch immer erfüllt
                    </p>
                </div>
            </div>

            <div className="single-service" data-aos="fade-up">
                <Image src={ServicePic3} alt={""} />
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Haare schnitt</h3>
                    <hr />
                    <p>
                        wir werden jedes mal deine wünsche erfüllen und auf die eingehen
                        beim haare schneiden. Wir können jeden schnitt deiner frisur verpassen!
                    </p>
                </div>
            </div>

            <div className="single-service" data-aos="fade-up">
                <Image src={ServicePic4} alt={""} />
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Haare Waschen</h3>
                    <hr />
                    <p>
                        Wir Bieten eine Haar Reinigung an die sehr gründlich
                        ausgeführt wird und deine haare zum glanzen bringt
                    </p>
                </div>

            </div>
            <button data-aos="zoom-in">
            <a href="/gallery">Mehr bilder sehen!</a>
            </button>
        </div>
        {/* <h1 className="m-auto text-center text-[10vw]" data-aos="zoom-in">COMING SOON...</h1> */}
    </div>
  )
}

export default Services
