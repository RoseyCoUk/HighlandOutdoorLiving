import React from 'react';
import { TreePine, Flame, Waves, Wrench } from 'lucide-react';

const BrandPositioning = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = [
    { icon: Waves, text: 'Arctic Spas Hot Tubs' },
    { icon: Waves, text: 'All‑Weather Pools' },
    { icon: Waves, text: 'Luxury Saunas' },
    { icon: Wrench, text: 'Expert Installation' }
  ];

  return (
    <section className="py-20 bg-white" id="why-highland">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative group">
            <img
              src="/Arctic Spa 1.jpg"
              alt="Highland Outdoor Living Arctic Spas installation"
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-[#8B1E2D] mb-2">Why Highland</h3>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-[#2B2B2B] leading-tight">
              Where Craftsmanship Meets
              <br />
              <span className="text-[#CBB79C]">Comfort</span>
            </h2>

            <p className="text-lg text-[#2B2B2B] leading-relaxed">
              Your ticket to paradise. We bring Arctic Spas hot tubs, all‑weather pools, and luxury saunas to the Scottish Highlands.
            </p>

            {/* Icon highlights with hover effects */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-[#e5e5e5] transition-all duration-300 hover:border-[#8B1E2D] hover:scale-105 cursor-pointer"
                >
                  <item.icon className="w-6 h-6 text-[#8B1E2D]" />
                  <span className="text-[#2B2B2B] font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToGallery}
              className="inline-flex items-center px-6 py-3 bg-[#8B1E2D] text-white font-medium rounded-none transition-all duration-300 hover:bg-[#6f1824]"
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