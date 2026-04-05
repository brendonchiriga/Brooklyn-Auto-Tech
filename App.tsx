import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default App;