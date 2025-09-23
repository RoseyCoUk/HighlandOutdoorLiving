import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calculator, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onGetEstimate?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onGetEstimate }) => {
  return (
    <footer className="bg-[#2B2B2B] text-[#E0E0E0]">
      {/* CTA Section */}
      {onGetEstimate && (
        <section className="bg-[#1f1f1f] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-[#E0E0E0]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get your free instant estimate in just a few clicks. No commitment required.
              </p>
              <button
                onClick={onGetEstimate}
                className="inline-flex items-center px-10 py-4 bg-[#8B1E2D] text-white font-semibold text-lg rounded-none hover:bg-[#6f1824] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Calculator className="w-5 h-5 mr-3" />
                Get Free Estimate
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="mb-4">
              {/* Animated Logo */}
              <div className="relative">
                <div className="w-16 h-16 transition-all duration-500 hover:scale-110 hover:shadow-2xl">
                  <img 
                    src="/logo.svg" 
                    alt="Highland Outdoor Living Logo" 
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    loading="lazy"
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  />
                </div>
                {/* Glowing Ring Effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-[#C5B8AB]/30 hover:border-[#C5B8AB] hover:shadow-[0_0_20px_rgba(197,184,171,0.5)] transition-all duration-500 hover:scale-125 opacity-0 hover:opacity-100"></div>
              </div>
            </div>
            <p className="text-[#E0E0E0]/80 leading-relaxed text-lg">
              Arctic Spas hot tubs, all-weather pools, and luxury saunas for Inverness and the Scottish Highlands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#E0E0E0]/80 hover:text-white transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#E0E0E0]/80 hover:text-white transition-colors text-lg">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#E0E0E0]/80 hover:text-white transition-colors text-lg">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#E0E0E0]/80 hover:text-white transition-colors text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#E0E0E0]/80 hover:text-white transition-colors text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/hot-tubs" className="text-[#E0E0E0]/80 hover:text-white transition-colors text-lg">
                  Arctic Spas Hot Tubs
                </Link>
              </li>
              <li>
                <Link to="/pools" className="text-[#E0E0E0]/80 hover:text-white transition-colors text-lg">
                  All-Weather Pools
                </Link>
              </li>
              <li>
                <Link to="/saunas" className="text-[#E0E0E0]/80 hover:text-white transition-colors text-lg">
                  Luxury Saunas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#CBB79C] flex-shrink-0" />
                <a 
                  href="tel:+441463223085" 
                  className="text-[#E0E0E0]/80 hover:text-white transition-colors text-lg"
                >
                  +44 1463 223085
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#CBB79C] flex-shrink-0" />
                <a 
                  href="mailto:sales@hkbtltd.com" 
                  className="text-[#E0E0E0]/80 hover:text-white transition-colors text-lg"
                >
                  sales@hkbtltd.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#CBB79C] mt-1 flex-shrink-0" />
                <div className="text-[#E0E0E0]/80 text-lg">
                  <p>18-20 Harbour Road</p>
                  <p>Inverness, IV1 1UA</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#C5B8AB] mt-1 flex-shrink-0" />
                <div className="text-[#C5B8AB]/80 text-lg">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: By appointment</p>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="pt-2"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#E0E0E0]/60 text-base">
              © {new Date().getFullYear()} Highland Outdoor Living – Official Arctic Spas Partner in the Scottish Highlands.
            </p>
            <div className="flex space-x-8 text-base">
              <a href="#" className="text-[#E0E0E0]/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#E0E0E0]/60 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;