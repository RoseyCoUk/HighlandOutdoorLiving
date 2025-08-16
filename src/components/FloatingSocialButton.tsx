import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Share2 } from 'lucide-react';

const FloatingSocialButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100065453470878',
      icon: Facebook,
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nmg_outdoorliving',
      icon: Instagram,
      color: 'hover:bg-pink-600',
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className={`fixed z-50 transition-all duration-500 floating-button floating-button-right ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    } bottom-4 right-4 sm:bottom-6 sm:right-6`}>
      {/* Main Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isExpanded 
            ? 'bg-[#C5B8AB] text-[#222126]' 
            : 'bg-[#222126] text-[#C5B8AB] border-2 border-[#C5B8AB]'
        } flex items-center justify-center backdrop-blur-sm`}
        aria-label="Find us online"
      >
        <Share2 className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} />
      </button>

      {/* Social Media Buttons */}
      <div className={`absolute bottom-16 right-0 space-y-3 transition-all duration-500 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${social.bgColor} text-white flex items-center justify-center group backdrop-blur-sm`}
              style={{
                animationDelay: `${index * 150}ms`,
                transform: isExpanded ? 'translateY(0)' : 'translateY(10px)',
                opacity: isExpanded ? 1 : 0
              }}
              aria-label={`Follow us on ${social.name}`}
            >
              <Icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <div className="absolute right-14 bg-[#222126]/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                {social.name}
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#222126]/95 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Backdrop for mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};

export default FloatingSocialButton; 