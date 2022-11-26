import React from 'react';
import Cards from '../components/Cards';
import Grow from '../components/Grow';

import Partners from '../components/Partners'
import Started from '../components/Started';

export default function Home() {
  return (
    <>
      <Grow />
      <Partners />
      <Started />
      <Cards />
    </>
  )
}
