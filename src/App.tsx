import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ForClinics from './components/ForClinics';
import Demo from './components/Demo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <ForClinics />
      <Demo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;