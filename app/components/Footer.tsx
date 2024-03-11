import Image from "next/image"
import Logo from "./Images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faLocationDot, faPhoneFlip } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from "lucide-react"


function Footer() {

    const handleClick = (targetUrl: string): void => {
        window.location.href = targetUrl;
      };

  return (
    <div className="py-40 px-0 pb-5 bg-neutral-200 dark:bg-[#111] relative">
        <Image src={Logo} alt="" className="footer-img max-w-md opacity-10 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="title-text">
            <p>KONTAKTIERE UNS!</p>
            <h1>Besuche uns Heute!</h1>
        </div>
        <div className="footer-row">
        <div className="footer-left">
            <h1>Öffnungszeiten</h1>
            <p><FontAwesomeIcon icon={faClock} className="text-[20px] text-yellow-500 mr-[10px] ml-[10px]"/>Montag bis Freitag - 08:30 bis 18:30</p>
            <p><FontAwesomeIcon icon={faClock} className="text-[20px] text-yellow-500 mr-[10px] ml-[10px]"/>Samstags 08:00 - 16:00</p>
        </div>
        <div className="footer-right">
            <h1>Info</h1>
            <p>Weberstraße 50, 45879 Gelsenkirchen<FontAwesomeIcon icon={faLocationDot} className="text-[20px] text-yellow-500 mr-[10px] ml-[10px]"/></p>
            <p>+49 209 1476264<FontAwesomeIcon icon={faPhoneFlip} className="text-[20px] text-yellow-500 mr-[10px] ml-[10px]"/></p>
        </div>
    </div>

    <div className="social-links">
        <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6 text-[20px] leading-10 border-2 border-solid border-yellow-500 text-yellow-500 cursor-pointer transition duration-500 mx-2 mt-10 p-1.5 hover:bg-yellow-500 hover:text-black hover:translate-y-[-7px]" onClick={() => handleClick('/404')}/>
        <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-[20px] leading-10 border-2 border-solid border-yellow-500 text-yellow-500 cursor-pointer transition duration-500 mx-2 mt-10 p-1.5 hover:bg-yellow-500 hover:text-black hover:translate-y-[-7px] insta" onClick={() => handleClick('https://www.instagram.com/artfriseur/')}/>
        <FontAwesomeIcon icon={faTiktok} className="h-6 w-6 text-[20px] leading-10 border-2 border-solid border-yellow-500 text-yellow-500 cursor-pointer transition duration-500 mx-2 mt-10 p-1.5 hover:bg-yellow-500 hover:text-black hover:translate-y-[-7px] tiktok" onClick={() => handleClick('https://www.tiktok.com/@esatajeti')}/>
        <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-[20px] leading-10 border-2 border-solid border-yellow-500 text-yellow-500 cursor-pointer transition duration-500 mx-2 mt-10 p-1.5 hover:bg-yellow-500 hover:text-black hover:translate-y-[-7px]" onClick={() => handleClick('/404')}/>
        <p className="text-sm mt-5">© 2024 Art Friseur</p>
    </div>
    </div>
  )
}

export default Footer
