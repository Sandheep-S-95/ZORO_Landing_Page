import React from 'react';
import { Element } from 'react-scroll';
import Home from '../components/Home';
import Services from '../components/Services';
import About from '../components/About';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import WhatsAppButton from "../components/WhatsAppButton";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="blog">
        <Blog />
      </Element>
      <Element name="newsletter">
        <NewsLetter />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
      <WhatsAppButton />
    </div>
  );
}

export default App;