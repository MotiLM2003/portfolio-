import react, { useState, useEffect } from 'react';
import Head from 'next/head';
interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className='p-[0.3rem] sm:p-2 shadow-md   h-14 md:h-20 flex items-center'>
      <p>container</p>
    </header>
  );
};
