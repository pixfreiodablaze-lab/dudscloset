import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewArrivals } from './components/NewArrivals';
import { Collections } from './components/Collections';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <NewArrivals />
        <Collections />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;