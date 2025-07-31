import React from 'react';
import { TreePine, Flame, Waves, Wrench } from 'lucide-react';

const BrandPositioning = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = [
    { icon: TreePine, text: 'Bespoke PVC Installations' },
    { icon: Flame, text: 'Premium Grill Pods' },
    { icon: Waves, text: 'Luxury Saunas' },
    { icon: Wrench, text: 'Expert Workmanship' }
  ];

  return (
    <section className="py-20 bg-[#222126]" id="why-nmg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative group">
            <img
              src="/image copy.png"
              alt="NMG outdoor living installation showcasing craftsmanship and comfort"
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/60 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-[#C5B8AB] mb-2">Why NMG</h3>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Where Craftsmanship Meets
              <br />
              <span className="text-[#C5B8AB]">Comfort</span>
            </h2>

            <p className="text-lg text-[#C5B8AB]/90 leading-relaxed">
              With years of experience in outdoor living solutions, we combine traditional craftsmanship with modern materials. Every project is tailored to your space, lifestyle, and vision — creating outdoor areas that truly enhance your home.
            </p>

            {/* Icon highlights with hover effects */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-[#C5B8AB]/10 rounded-lg border border-[#C5B8AB]/20 transition-all duration-300 hover:bg-[#C5B8AB]/20 hover:border-[#C5B8AB]/40 hover:scale-105 cursor-pointer"
                >
                  <item.icon className="w-6 h-6 text-[#C5B8AB]" />
                  <span className="text-[#C5B8AB] font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToGallery}
              className="inline-flex items-center px-6 py-3 border border-[#C5B8AB] text-[#C5B8AB] font-medium rounded-none transition-all duration-300 hover:bg-[#C5B8AB] hover:text-[#222126]"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPositioning;