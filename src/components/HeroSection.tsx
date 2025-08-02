import React from 'react';
import { ChevronDown, Calculator } from 'lucide-react';

interface HeroSectionProps {
  onGetEstimate?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetEstimate }) => {
  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#222126] overflow-hidden pt-[73px]">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5B8AB]/20 to-transparent animate-pulse"></div>
      </div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/image.png')"
        }}
      ></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo and brand name */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-48 h-48 mb-8 bg-[#C5B8AB]/10 rounded-full border border-[#C5B8AB]/30 p-6">
            <img 
              src="/ngmlogo.jpg" 
              alt="NMG Outdoor Living Logo" 
              className="w-full h-full object-contain rounded-full"
              loading="eager"
            />
          </div>
        </div>

        {/* Main headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 text-white leading-tight">
          Tailored Outdoor Spaces
          <br />
          <span className="text-[#C5B8AB]">That Inspire</span>
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#C5B8AB]/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Premium PVC solutions, luxury saunas, and handcrafted grill pods designed to transform your outdoor space.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={scrollToQuote}
            className="group inline-flex items-center px-8 py-4 bg-[#C5B8AB] text-[#222126] font-semibold text-lg rounded-none transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-2xl"
          >
            Get a Free Design Quote
            <ChevronDown className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" />
          </button>
          
          {onGetEstimate && (
            <button
              onClick={onGetEstimate}
              className="group inline-flex items-center px-8 py-4 bg-transparent text-[#C5B8AB] font-semibold text-lg border-2 border-[#C5B8AB] rounded-none transition-all duration-300 hover:bg-[#C5B8AB] hover:text-[#222126] hover:scale-105 hover:shadow-2xl"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Instant Estimate
            </button>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#C5B8AB]/60" />
      </div>
    </section>
  );
};

export default HeroSection;