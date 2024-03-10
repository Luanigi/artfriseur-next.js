"use client";

import Link from "next/link"
import { useState } from "react"
import Logo from "./Images/logo.png";
import Image from 'next/image'

export default function Navbar() {

  const [isClicked, setisClicked] = useState(false);

  const toggleNavbar = () => {
    setisClicked(!isClicked);
  }


  return (
    <>
    <nav className="bg-transparent pt-4 fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={"/"} className="text-white"><Image src={Logo} className="w-32 h-80%" alt="Art Friseur" /></Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4 p-2 rounded-lg bg-white/20 backdrop-blur-lg">
              <Link href={"/"} className="text-white nav-hover rounded-lg p-2">Home</Link>
              <Link href={"/gallery"} className="text-white nav-hover rounded-lg p-2">Gallerie</Link>
              <Link href={"#services"} className="text-white nav-hover rounded-lg p-2">Services</Link>
              <Link href={"/contact"} className="text-white nav-hover rounded-lg p-2">Contact</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button 
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus-outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}
            >
              {isClicked ? (
                <svg  className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor" >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClicked && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center p-10">
              <Link href={"/"} className="text-white block hover:bg-white/20 backdrop-blur-lg rounded-lg p-2 border-solid border-2 border-white">Home</Link>
              <Link href={"/gallery"} className="text-white block hover:bg-white/20 backdrop-blur-lg rounded-lg p-2 border-solid border-2 border-white">gallerie</Link>
              <Link href={"/services"} className="text-white block hover:bg-white/20 backdrop-blur-lg rounded-lg p-2 border-solid border-2 border-white">Services</Link>
              <Link href={"/contact"} className="text-white block hover:bg-white/20 backdrop-blur-lg rounded-lg p-2 border-solid border-2 border-white">Contact</Link>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}