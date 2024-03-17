"use client";

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

interface ImageProps  {
    id: number;
    href: string;
    imageSRC: string;
}

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}



const GallerieImage = ({images}: {images: ImageProps}) => {
    const [isLoading, setLoading] = useState(true)

    return (
      <a href={images.href} className='group'>
          <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-zinc-900">
              <Image 
                  src={images.imageSRC} 
                  alt='404 foto nicht gefunden' 
                  objectFit='cover'
                  layout='fill'
                  className={cn(
                      'group-hover:opacity-75 transition-all duration-200',
                      isLoading
                      ? 'grayscale blur-2xl scale-110'
                      : 'grayscale-0 blur-0 scale-100'
                  )}
                  onLoadingComplete={() => setLoading(false)}
              />
          </div>
        </a>
    )
  }

  export default GallerieImage