import React, { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Footer from './components/Footer'

function App() {
  const [openNav, setOpenNav] = useState(false);
  const spinner = document.getElementById('spinner')


  // if(spinner){
  //   setTimeout(() => {
  //     spinner.style.display = 'none'
  //   }, 3000)
  //   if(spinner.style.display = 'none'){
  //     setLoadPage(true)
  //   } 
  // }

  return (
    <Router>
      <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
