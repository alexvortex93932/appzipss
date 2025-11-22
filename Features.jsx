import React from 'react';

export default function Features() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center mb-32">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-16">
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 block sans">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Present your films, promote news and festivals.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 font-light sans">
              Coppola includes all the features you need to create a professional movie website. Showcase your portfolio, sell merchandise, and blog about the latest cinema trends.
            </p>
            <a href="#" className="text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:text-gray-300 hover:border-white transition-all sans">
              Explore Features
            </a>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="flex gap-4">
              <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/landing-slider-2-image-1-new.jpg" className="w-1/3 mt-12 shadow-lg" alt="Feature 1" />
              <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/landing-slider-2-image-2new.jpg" className="w-1/3 mb-12 shadow-lg" alt="Feature 2" />
              <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/landing-slider-2-image-3new.jpg" className="w-1/3 mt-24 shadow-lg" alt="Feature 3" />
            </div>
          </div>
        </div>

        {/* Feature 2 - Text List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 gap-0 border-t border-white/10">
              {[
                "Crossed Out Scribble",
                "Strikethrough Hover",
                "Glitch Effect",
                "Cinematic Reveal",
                "Focus Mode",
                "Director's Cut"
              ].map((item, i) => (
                <div key={i} className="py-6 border-b border-white/10 flex items-center justify-between group cursor-pointer hover:bg-zinc-900/50 transition-colors px-4">
                  <span className="text-xl md:text-2xl font-serif text-gray-400 group-hover:text-white transition-colors">{item}</span>
                  <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity sans">View</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 md:pl-12">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Diverse mesmerizing hover types
            </h2>
            <p className="text-gray-400 leading-relaxed font-light sans">
              Engage your audience with interactive elements designed specifically for the film industry. Subtle animations and bold transitions make your content stand out.
            </p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-serif mb-16">Share your movie stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="group cursor-pointer">
               <div className="overflow-hidden mb-4">
                 <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/landing-slider-3-image-2.jpg" className="w-full transform group-hover:scale-105 transition-transform duration-700" alt="Blog 1" />
               </div>
               <h4 className="text-lg font-serif">Behind the Scenes</h4>
               <p className="text-sm text-gray-500 sans mt-2">November 2022</p>
             </div>
             <div className="group cursor-pointer mt-12 md:mt-0">
               <div className="overflow-hidden mb-4">
                 <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/landing-slider-3-image-3new.png" className="w-full transform group-hover:scale-105 transition-transform duration-700" alt="Blog 2" />
               </div>
               <h4 className="text-lg font-serif">The Director's Vision</h4>
               <p className="text-sm text-gray-500 sans mt-2">December 2022</p>
             </div>
             <div className="group cursor-pointer mt-0 md:mt-12">
               <div className="overflow-hidden mb-4">
                 <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/landing-slider-3-image-4.png" className="w-full transform group-hover:scale-105 transition-transform duration-700" alt="Blog 3" />
               </div>
               <h4 className="text-lg font-serif">Festival Awards</h4>
               <p className="text-sm text-gray-500 sans mt-2">January 2023</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}