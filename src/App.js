import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  const [openNav, setOpenNav] = useState(false);
  const [loading, setLoading] = useState(true)

  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  useEffect(() => {
    AOS.init({duration: 2500})

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3200);
}, [])

  return (
    <Router>
      { loading ? 
        <div className='bg-e8 h-screen w-screen flex flex-col justify-center items-center gap-8'>
          <ClimbingBoxLoader color="#222222" loading={loading} size={25}/>
          <div className='text-center font-bold flex flex-col gap-2 lg:gap-4'>
            <p className='text-xl lg:text-3xl' data-aos='fade-right'>Creating economic alliances</p>
            <p className='text-xl lg:text-3xl' data-aos='fade-left'>among African countries</p>
            <h2 className='text-2xl lg:text-5xl mt-4 animate-bounce' data-aos='fade-up' data-aos-duration='3000'>Terren Africa</h2>
          </div>
        </div>
      :
      <>
        <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer scrollToTop={scrollToTop}/>
      </>
      }  
    </Router>
  );
}

export default App;
