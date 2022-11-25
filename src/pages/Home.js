import React, { useState } from 'react';
import Grow from '../components/Grow';
import MobileNav from '../components/MobileNav';
import Navbar from '../components/Navbar'
import Partners from '../components/Partners'
import Started from '../components/Started';

export default function Home() {
  const [openNav, setOpenNav] = useState(false);
  
  return (
    <>
      <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <Grow />
      <Partners />
      <Started />
    </>
  )
}
