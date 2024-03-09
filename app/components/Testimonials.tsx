import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from "next/image"
import Picture from "./Images/features.png"
import { faEuroSign, faShieldHalved, faSquareCheck } from '@fortawesome/free-solid-svg-icons'


export default function Testimonials() {
    return (
        <div id="feature" className="testimonials">
            <div className="title-text">
                <p className="text-yellow-500">FEATURES</p>
                <h1>Warum uns Auswählen?</h1>
            </div>

            <div className="feature-box">
                <div className="features" data-aos="fade-up">
                    <h1>Erfahrene Mitarbeiter</h1>
                    <div className="features-desc">
                        <div className="feature-icon">
                            <FontAwesomeIcon icon={faShieldHalved} className="feature-icon" />
                        </div>
                        <div className="feature-text">
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                               Quidem tempora adipisci veniam voluptas, tempore praesen
                               tium molestias?
                            </p>
                        </div>
                    </div>


                    <h1>Qualiät an erster Stelle</h1>
                    <div className="features-desc">
                        <div className="feature-icon">
                            <FontAwesomeIcon icon={faSquareCheck} className="feature-icon" />
                        </div>
                        <div className="feature-text">
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                               Quidem tempora adipisci veniam voluptas, tempore praesen
                               tium molestias?
                            </p>
                        </div>
                    </div>


                    <h1>Preiswerte Preise</h1>
                    <div className="features-desc">
                        <div className="feature-icon">
                            <FontAwesomeIcon icon={faEuroSign} className="feature-icon" />
                        </div>
                        
                        <div className="feature-text">
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                               Quidem tempora adipisci veniam voluptas, tempore praesen
                               tium molestias?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="features-img">
                    <Image src={Picture} alt={"Loading..."} className="rounded-lg img" />
                </div>
            </div>
        </div>
    )
}
