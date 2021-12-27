import react, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Props {
  image: { url: string; alt: string };
}

export const GalleryImage: React.FC<Props> = ({ image }) => {
  return (
    <div className='image-gallery'>
      <Image
        key={image.url}
        src={image.url}
        width='100%'
        height='65%'
        layout='responsive'
        objectFit='cover'
        alt={image.alt}
        className='object-cover object-center  transition scale-[.95] hover:scale-100 ease-out duration-600'
      />
    </div>
  );
};
