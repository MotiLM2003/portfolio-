import React from 'react';
import type { NextPage } from 'next';
import { Layout } from '@/components/shared/Layout';
import { ImageGallery } from '@/components/ImageGallery';
import { Hero } from '@/components/Hero';

interface Props {
  images: [{ url: string; image: string; alt: string }];
}
const Home: NextPage<Props> = ({ images }) => {
  console.log('iMAGES', images);
  return (
    <Layout title='My home page'>
      <main className='container pt-5'>
        <Hero />
        <ImageGallery images={images} />
      </main>
    </Layout>
  );
};

export default Home;

export async function getStaticProps(context: any) {
  console.log('here');
  const response = await fetch(`http://localhost:3000/api/data`);
  const data = await response.json();
  return {
    props: {
      images: data,
    },
  };
}
