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
    <section className="relative min-h-screen flex items-center justify-center bg-[#222126] overflow-hidden pt-16 sm:pt-20 md:pt-[73px]">
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
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Logo and brand name */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-32 h-32 sm:w-48 sm:h-48 mb-6 sm:mb-8 bg-[#C5B8AB]/10 rounded-full border border-[#C5B8AB]/30 p-4 sm:p-6">
            <img 
              src="/logo.png" 
              alt="Highland Outdoor Living Logo" 
              className="w-full h-full object-contain rounded-full"
              loading="eager"
            />
          </div>
        </div>

        {/* Main headline */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 text-white leading-tight px-2">
          Tailored Outdoor Spaces
          <br />
          <span className="text-[#C5B8AB]">That Inspire</span>
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#C5B8AB]/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          Premium PVC solutions, luxury saunas, and handcrafted grill pods designed to transform your outdoor space.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 px-4">
          <StrategicCTA
            type="quote"
            text="Get a Free Design Quote"
            size="lg"
            className="w-full sm:w-auto"
          />
          
          {onGetEstimate && (
            <StrategicCTA
              type="estimate"
              text="Get Instant Estimate"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            />
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#C5B8AB]/60" />
      </div>
    </section>
  );
};

export default HeroSection;