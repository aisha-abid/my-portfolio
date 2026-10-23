import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

const App = () => {
  
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Work/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App