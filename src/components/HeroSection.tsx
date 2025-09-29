import React from 'react';
import { ChevronDown, Calculator } from 'lucide-react';
import StrategicCTA from './StrategicCTA';

interface HeroSectionProps {
  onGetEstimate?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetEstimate }) => {
  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#2B2B2B] overflow-hidden pt-16 sm:pt-20 md:pt-[73px]">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CBB79C]/20 to-transparent animate-pulse"></div>
      </div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/arctic-spas-hero.jpg')"
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Logo and brand name */}
        <div className="mb-8 sm:mb-12 mt-4 md:mt-6 animate-fade-in">
          <div className="inline-flex items-center justify-center w-40 h-40 sm:w-56 sm:h-56 mb-6 sm:mb-8 bg-[#CBB79C]/10 rounded-full border border-[#CBB79C]/30 p-2 sm:p-3 shadow-[0_0_0_0_rgba(203,183,156,0.4)] hero-logo-anim">
            <img 
              src="/Highland%20Outdoor%20Living.png" 
              alt="Highland Outdoor Living Logo" 
              className="w-full h-full object-contain rounded-full"
              loading="eager"
            />
          </div>
        </div>

        {/* Main headline */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-light mb-4 sm:mb-6 leading-[1.05] px-2 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#CBB79C]">
            Relax
          </span>
          <span className="text-[#CBB79C]">.</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#CBB79C]"> Refresh</span>
          <span className="text-[#CBB79C]">.</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#CBB79C]"> Rejuvenate</span>
          <span className="text-[#CBB79C]">.</span>
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#CBB79C]/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          Luxury Hot Tubs, Pools & Saunas from Arctic Spas – serving Inverness and the Scottish Highlands.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-2 px-4">
          <a
            href="/hot-tubs"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 bg-[#8B1E2D] text-white font-semibold hover:bg-[#6f1824] transition-colors shadow-lg"
          >
            View Arctic Spas Range
          </a>
          
          <a
            href="#quote-form"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 bg-[#CBB79C] text-[#2B2B2B] font-semibold hover:bg-[#b9a185] transition-colors shadow-lg"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Scroll indicator below CTAs, not overlapping */}
        <div className="mt-6 flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#CBB79C]/60" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;