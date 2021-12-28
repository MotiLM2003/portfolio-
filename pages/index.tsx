import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { Layout } from '@/components/shared/Layout';
import { ImageGallery } from '@/components/ImageGallery';
import { Hero } from '@/components/Hero';
import { images } from '../utils/data';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

interface Props {
  images: [{ url: string; image: string; alt: string }];
}
const Home: NextPage<Props> = ({ images }) => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      // console.log('begin', to, element);
    });
    Events.scrollEvent.register('end', () => {
      // console.log('end');
    });
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Layout title='My home page'>
      <main className='container pt-5'>
        <Element name='section-1' className='element'>
          <Hero />
        </Element>
        <Element name='section-2' className='element'>
          <ImageGallery images={images} />
        </Element>
        <Element name='section-3' className='element'>
          <Hero />
        </Element>
        <Element name='section-4' className='element'>
          <Hero />
        </Element>
      </main>
    </Layout>
  );
};

export default Home;

export async function getStaticProps(context: any) {
  return {
    props: {
      images: images,
    },
  };
}
