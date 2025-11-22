import React from 'react';

const pages = [
  { name: "Artist Portfolio", img: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/landing-slider-4-image-2new.jpg" },
  { name: "Our Team", img: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/landing-slider-4-image-3new.jpg" },
  { name: "About Us", img: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/landing-slider-4-image-4new.jpg" },
  { name: "Get In Touch", img: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/landing-slider-4-image-5new.jpg" },
  { name: "Speakers", img: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/landing-slider-4-image-6new.jpg" }
];

export default function InnerPages() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6 text-center mb-16">
        <span className="text-xs tracking-[0.3em] uppercase text-gray-500 sans block mb-4">Pre-designed</span>
        <h2 className="text-3xl md:text-5xl font-serif">Multiuse Inner Pages</h2>
      </div>

      <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
        <div className="flex px-6 gap-8 w-max mx-auto">
          {pages.map((page, index) => (
            <div key={index} className="group w-64 md:w-80 flex-shrink-0 cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] border border-white/10">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={page.img} 
                  alt={page.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-center text-lg uppercase tracking-widest sans text-gray-400 group-hover:text-white transition-colors">
                {page.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Section Teaser */}
      <div className="container mx-auto px-6 mt-24">
        <div className="bg-white text-black p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <span className="text-sm tracking-widest uppercase font-bold mb-4 block">WooCommerce Ready</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Your online movie store</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Fully compatible with WooCommerce. Sell merchandise, digital downloads, or tickets directly from your website.
            </p>
            <button className="bg-black text-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors">
              Visit Shop
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
            <img 
              src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/landing-slider-5-image-1.jpg" 
              className="w-full h-full object-cover opacity-90"
              alt="Shop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}