import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase sans">
          <a href="#" className="hover:text-gray-400 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Pages</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Portfolio</a>
        </nav>

        {/* Logo */}
        <div className="text-3xl md:text-4xl font-serif tracking-tighter uppercase font-bold absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
          Coppola
        </div>

        {/* Right Nav */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-gray-400 transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-gray-400 transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] w-3 h-3 flex items-center justify-center rounded-full sans font-bold">0</span>
          </button>
          <button className="hover:text-gray-400 transition-colors md:hidden">
            <Menu size={24} strokeWidth={1.5} />
          </button>
          <div className="hidden md:block w-8 h-[1px] bg-white/30"></div>
          <button className="hidden md:block text-sm tracking-widest uppercase sans hover:text-gray-400 transition-colors">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}