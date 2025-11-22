import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Features from './components/Features';
import InnerPages from './components/InnerPages';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <InnerPages />
      </main>
      <Footer />
    </div>
  );
}