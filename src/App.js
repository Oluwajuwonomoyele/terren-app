import React, { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer'

function App() {
  const [openNav, setOpenNav] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <Router>
      <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer scrollToTop={scrollToTop}/>
    </Router>
  );
}

export default App;
