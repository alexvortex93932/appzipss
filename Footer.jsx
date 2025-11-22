import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        
        <div className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Every film needs its audience. <br/>
            Find yours easily with <span className="italic">Coppola!</span>
          </h2>
          <a href="#" className="inline-block px-10 py-4 bg-white text-black uppercase tracking-[0.2em] text-xs font-bold hover:bg-gray-200 transition-colors transform hover:scale-105 duration-300">
            Purchase Theme
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left border-t border-white/10 pt-16 mb-16">
          <div>
            <h4 className="text-lg font-serif mb-6">Coppola</h4>
            <p className="text-gray-500 text-sm leading-relaxed sans">
              A premium WordPress theme for filmmakers, studios, and production companies. Beautifully crafted with attention to detail.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-6">Studio</h4>
            <ul className="space-y-3 text-gray-500 text-sm sans">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-6">Help</h4>
            <ul className="space-y-3 text-gray-500 text-sm sans">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs tracking-widest uppercase text-gray-600 sans">
          <p>© 2022 Qode Interactive, All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}