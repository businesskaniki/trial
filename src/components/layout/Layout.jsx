import React from 'react'
import Nav from '../Nav';
import Landing from '../Landing';
import Peson from '../Peson';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div>
        <Nav />
        <Landing />
        <Peson />
        <Projects />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default Layout