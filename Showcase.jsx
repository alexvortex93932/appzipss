import React from 'react';
import { ArrowRight } from 'lucide-react';

const demos = [
  {
    title: "Main Home",
    image: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/1-main-home.jpg",
    link: "#"
  },
  {
    title: "Vertical Split",
    image: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/6-horizontal-scroll-showcase.jpg",
    link: "#"
  },
  {
    title: "Film Festival",
    image: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/7-film-banner-showcase.jpg",
    link: "#"
  },
  {
    title: "Film Presentation",
    image: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/3-film-presentation.jpg",
    link: "#"
  },
  {
    title: "Film Magazine",
    image: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/8-film-magazine.jpg",
    link: "#"
  },
  {
    title: "Film Poster",
    image: "https://coppola.qodeinteractive.com/wp-content/uploads/2022/02/12-film-poster.jpg",
    link: "#"
  }
];

export default function Showcase() {
  return (
    <section id="demos" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Stunning Layouts</h2>
          <p className="text-gray-400 max-w-2xl mx-auto sans font-light">
            Choose from a collection of carefully crafted homepages designed for film festivals, movie studios, and filmmakers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {demos.map((demo, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 bg-gray-900 aspect-[4/3]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={demo.image} 
                  alt={demo.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              <h3 className="text-xl text-center uppercase tracking-widest sans text-gray-300 group-hover:text-white transition-colors">
                {demo.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}