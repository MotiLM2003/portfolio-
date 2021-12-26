import React from 'react';
import type { NextPage } from 'next';
import { Layout } from '@/components/shared/Layout';
import { SlidingMenu } from '@/components/shared/SlidingMenu';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <Layout title='My home page'>
      <div>מה קורה אנשים</div>
    </Layout>
  );
};

export default Home;
