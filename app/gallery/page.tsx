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
        id: 1,
        href: "https://www.instagram.com/p/C3lLYXILND4/?img_index=1",
        imageSRC: "https://bit.ly/3TCdNPp",
    },
    {
        id: 1,
        href: "https://www.instagram.com/p/C4aPkVnIpwL",
        imageSRC: "https://www.instagram.com/p/C4aPkVnIpwL/media/?size=l",
    },
];
  
  function Gallerie() {
    return (
      <div id="gallerie" className="bg-neutral-500 dark:bg-black">
        <Navbar />
        <h1 className="text-center text-[100px] mt-10">Art Gallerie</h1>
  
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {images.map((image) => (
              <GallerieImage key={image.id} images={image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Gallerie;