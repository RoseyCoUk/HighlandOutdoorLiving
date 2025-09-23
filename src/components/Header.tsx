import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Toggle menu with proper ARIA handling
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation links configuration
  const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Hot Tubs', path: '/hot-tubs' },
  { name: 'Pools', path: '/pools' },
  { name: 'Saunas', path: '/saunas' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <nav 
        className="max-w-7xl mx-auto px-2 sm:px-6 py-2 sm:py-3 flex items-center justify-between h-14 sm:h-16"
        role="navigation"
        aria-label="Main navigation"
        onKeyDown={handleKeyDown}
      >
        {/* Animated Logo */}
        <Link to="/" className="flex items-center justify-center h-full group pt-5 sm:pt-0">
          <div className="relative flex items-center justify-center">
            {/* 3D Rotating Logo */}
            <div className="w-8 h-8 sm:w-12 sm:h-12 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
              <img 
                src="/logo.svg" 
                alt="Highland Outdoor Living Logo" 
                className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                loading="lazy"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              />
            </div>
            {/* Glowing Ring Effect */}
            <div className="absolute inset-0 rounded-lg border-2 border-[#C5B8AB]/30 group-hover:border-[#C5B8AB] group-hover:shadow-[0_0_20px_rgba(197,184,171,0.5)] transition-all duration-500 group-hover:scale-125 opacity-0 group-hover:opacity-100"></div>
          </div>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navigationLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm lg:text-base font-medium transition-colors duration-200 hover:text-[#C5B8AB] focus:text-[#C5B8AB] focus:outline-none ${
                  location.pathname === link.path 
                    ? 'text-[#C5B8AB] font-semibold border-b-2 border-[#C5B8AB] pb-1' 
                    : 'text-[#e4d4c3] hover:text-white'
                }`}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          className="md:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#e4d4c3] hover:text-[#C5B8AB] transition-colors duration-200 focus:outline-none focus:text-[#C5B8AB]"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
          ) : (
            <Menu className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-xl transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="flex flex-col py-1.5 px-2 sm:px-6 space-y-0.5 sm:space-y-2" role="menu">
            {navigationLinks.map((link, index) => (
              <li key={link.path} role="none">
                <Link
                  to={link.path}
                  className={`block py-1 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-medium transition-all duration-300 hover:text-[#C5B8AB] focus:text-[#C5B8AB] focus:outline-none hover:bg-white/5 rounded-lg ${
                    location.pathname === link.path 
                      ? 'text-[#C5B8AB] font-bold bg-white/10' 
                      : 'text-[#e4d4c3]'
                  }`}
                  role="menuitem"
                  tabIndex={isMenuOpen ? 0 : -1}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                  style={{
                    animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;