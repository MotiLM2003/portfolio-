import React from 'react';
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
  console.log('iMAGES', images);
  return (
    <Layout title='My home page'>
      <Link
        activeClass='active'
        className='test1'
        to='test1'
        spy={true}
        smooth={true}
        duration={500}
      >
        Test 1
      </Link>
      <Link
        activeClass='active'
        className='test1'
        to='test2'
        spy={true}
        smooth={true}
        duration={500}
      >
        Test 1
      </Link>
      <main className='container pt-5'>
        <Element name='test1' className='element'>
          <Hero />
        </Element>
        <Element name='test2' className='element'>
          <ImageGallery images={images} />
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
