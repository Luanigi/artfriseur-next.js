"use client";

import Navbar from "../components/Navbar"
import GallerieImage from "../components/GallerieImage";
import React from 'react'

interface ImageProps {
    id: number;
    href: string;
    imageSRC: string;
  }
  
const images: ImageProps[] = [
    {
      id: 1,
      href: "https://www.instagram.com/p/Czaf6nYIgwP/",
      imageSRC: "https://www.instagram.com/p/Czaf6nYIgwP/media/?size=l",
    },
    {
      id: 2,
      href: "https://www.instagram.com/p/C3lLYXILND4/",
      imageSRC: "https://bit.ly/3TCdNPp",
    },
    {
      id: 3,
      href: "https://www.instagram.com/p/C4aPkVnIpwL",
      imageSRC: "https://www.instagram.com/p/C4aPkVnIpwL/media/?size=l",
    },
    {
      id: 4,
      href: "https://www.instagram.com/p/CqBHssEooJX",
      imageSRC: "https://www.instagram.com/p/CqBHssEooJX/media/?size=l",
    },
    {
      id: 5,
      href: "https://www.instagram.com/p/CkQldxToJu_",
      imageSRC: "https://www.instagram.com/p/CkQldxToJu_/media/?size=l",
    },
    {
      id: 6,
      href: "https://www.instagram.com/p/CiZQoBJoaUl",
      imageSRC: "https://www.instagram.com/p/CiZQoBJoaUl/media/?size=l",
    },
    {
      id: 7,
      href: "https://www.instagram.com/p/CZrfpMLoz7K/",
      imageSRC: "https://www.instagram.com/p/CZrfpMLoz7K/media/?size=l",
    },
    {
      id: 8,
      href: "https://www.instagram.com/p/Cr31rUdoZGu/",
      imageSRC: "https://www.instagram.com/p/Cr31rUdoZGu/media/?size=l"
    },
    {
      id: 9,
      href: "https://www.instagram.com/p/C40CXDHIHdU",
      imageSRC: "https://www.instagram.com/p/C40CXDHIHdU/media/?size=l"
    },
    {
      id: 10,
      href: "https://www.instagram.com/p/C42shv9ICjf",
      imageSRC: "https://www.instagram.com/p/C42shv9ICjf/media/?size=l"
    },
    {
      id: 11,
      href: "https://www.instagram.com/p/CxF8lMrIjbs/",
      imageSRC: "https://www.instagram.com/p/CxF8lMrIjbs/media/?size=l"
    },
    {
      id: 12,
      href: "https://www.instagram.com/p/CxF7PKzIYMc/",
      imageSRC: "https://www.instagram.com/p/CxF7PKzIYMc/media/?size=l"
    }
];

  let revImages = images.slice(0).reverse()
  
  function Gallerie() {
    return (
      <div id="gallerie" className="bg-yellow-500 text-black dark:text-white dark:bg-black">
        <span className="blur"></span>
        <Navbar />
        <h1 className="text-center text-[100px] mt-10">Art Gallerie</h1>
  
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {revImages.map((image) => (
              <GallerieImage key={image.id} images={image} />
            ))}
          </div>
        </div>
        <h1 className="text-center pb-10">Gehe zurück zur <a href="/" className="dark:text-yellow-500 text-white underline">Startseite</a></h1>
      </div>
    );
  }
  
  export default Gallerie;