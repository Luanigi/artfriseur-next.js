import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"
import Picture from "./Images/features.png"
import { faEuroSign, faShieldHalved, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

export default function Features() {
    return (
        <div id="feature" className="features">
            <div className="title-text">
                <p className="text-yellow-500">FEATURES</p>
                <h1 className='text-center dark:text-white text-[50px]'>Warum uns Auswählen?</h1>
            </div>

            <div className="feature-box">
                <div className="featuress">
                    <div data-aos="fade-up">
                        <h1 id='features-h1'>Beratung und Service</h1>
                        <div className="features-desc">
                        <div className="border-2 border-solid border-yellow-500 rounded-lg">
                            <FontAwesomeIcon icon={faShieldHalved} className="feature-icon" />
                        </div>
                        <div className="feature-text">
                            <p>
                            Unser Team aus erfahrenen Friseuren nimmt sich Zeit für 
                            deine individuellen Bedürfnisse und Wünsche. Wir beraten 
                            dich umfassend und typgerecht, um den perfekten Look für 
                            dich zu finden.
                            </p>
                        </div>
                        </div>
                    </div>

                    <div data-aos="fade-up">
                        <h1 id='features-h1'>Qualiät an erster Stelle</h1>
                        <div className="features-desc">
                        <div className="border-2 border-solid border-yellow-500 rounded-lg">
                            <FontAwesomeIcon icon={faSquareCheck} className="feature-icon" />
                        </div>
                        <div className="feature-text">
                            <p>
                            Wir verwenden ausschließlich hochwertige Produkte von 
                            renommierten Marken, die dein Haar pflegen und schützen. 
                            Unsere Dienstleistungen zeichnen sich durch Präzision, 
                            Kreativität und Leidenschaft aus.
                            </p>
                        </div>
                        </div>
                    </div>

                    <div data-aos="fade-up">
                        <h1 id='features-h1'>Faire Preise für deine Schönheit</h1>
                        <div className="features-desc">
                        <div className="border-2 border-solid border-yellow-500 rounded-lg">
                            <FontAwesomeIcon icon={faEuroSign} className="feature-icon" />
                        </div>
                        
                        <div className="feature-text">
                            <p>
                            Wir sind der Meinung, dass jeder schöne Haare haben sollte, 
                            ohne dafür ein Vermögen ausgeben zu müssen. Deshalb bieten 
                            wir unsere Dienstleistungen zu fairen Preisen an, die für 
                            jeden erschwinglich sind.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="features-img">
                    <Image src={Picture} alt={"Loading..."} data-aos="zoom-in" className="rounded-lg img" />
                </div>
            </div>
        </div>
    )
}
