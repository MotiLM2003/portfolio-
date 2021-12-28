import Image from 'next/image';
import react, { useState, useEffect } from 'react';
import { GalleryImage } from './GalleryImage';
import { images } from '../utils/data';

interface Props {
  images: [{ url: string; image: string; alt: string }];
}

export const ImageGallery: React.FC<Props> = ({ images }) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-2 2xl:grid-cols-3 gap-3'>
      {images.map((image, index) => (
        <GalleryImage key={image.url} image={image} />
      ))}
    </section>
  );
};
