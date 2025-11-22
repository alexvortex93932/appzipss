import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-gray-800 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-gray-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-4 animate-fade-in-up">
          <span className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-400 sans">
            Now Showing, It's
          </span>
        </div>
        
        <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-serif font-bold uppercase tracking-tighter mb-12 animate-fade-in relative inline-block">
          Coppola
          <span className="absolute -top-10 -right-10 text-lg tracking-widest border border-white/30 rounded-full w-24 h-24 flex items-center justify-center rotate-12 hidden md:flex">
            2022
          </span>
        </h1>

        {/* Hero Images Composition */}
        <div className="relative max-w-5xl mx-auto mt-8 h-[40vh] md:h-[60vh]">
          <img 
            src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/landing-slider-1-image-2.png" 
            alt="Film Scene 1"
            className="absolute top-0 left-[10%] w-[30%] shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-700 z-10"
          />
          <img 
            src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/landing-slider-1-image-1.png" 
            alt="Film Scene 2"
            className="absolute top-[10%] left-[35%] w-[30%] shadow-2xl z-20 hover:scale-105 transition-all duration-700"
          />
          <img 
            src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/landing-slider-1-image-3.png" 
            alt="Film Scene 3"
            className="absolute top-0 right-[10%] w-[30%] shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-700 z-10"
          />
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center pt-20">
             <p className="sans text-gray-400 text-sm tracking-widest uppercase mb-6">
               Winner of 5 Academy Awards
             </p>
             <a href="#demos" className="inline-block px-8 py-3 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm sans">
               View Demos
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}