import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calculator } from 'lucide-react';

interface FooterProps {
  onGetEstimate?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onGetEstimate }) => {
  return (
    <footer className="bg-[#222126] text-[#C5B8AB] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              NMG Outdoor Living
            </h3>
            <p className="text-[#C5B8AB]/80 leading-relaxed">
              Premium outdoor living solutions across Northern Ireland. Crafting bespoke saunas, grill pods, and sheds with expert craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#C5B8AB]/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#C5B8AB]/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#C5B8AB]/80 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#C5B8AB]/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#C5B8AB]/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/saunas" className="text-[#C5B8AB]/80 hover:text-white transition-colors">
                  Garden Saunas
                </Link>
              </li>
              <li>
                <Link to="/grill-pods" className="text-[#C5B8AB]/80 hover:text-white transition-colors">
                  Grill Pods
                </Link>
              </li>
              <li>
                <Link to="/sheds" className="text-[#C5B8AB]/80 hover:text-white transition-colors">
                  Custom Sheds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C5B8AB]" />
                <a 
                  href="tel:07730510368" 
                  className="text-[#C5B8AB]/80 hover:text-white transition-colors"
                >
                  07730 510368
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C5B8AB]" />
                <a 
                  href="mailto:nigelmcg@gmail.com" 
                  className="text-[#C5B8AB]/80 hover:text-white transition-colors"
                >
                  nigelmcg@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C5B8AB] mt-1" />
                <div className="text-[#C5B8AB]/80">
                  <p>9 Ballyknock Road</p>
                  <p>Maghera, Northern Ireland</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#C5B8AB] mt-1" />
                <div className="text-[#C5B8AB]/80 text-sm">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {onGetEstimate && (
          <div className="border-t border-[#C5B8AB]/20 pt-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-[#C5B8AB]/80 mb-6 max-w-2xl mx-auto">
                Get your free instant estimate in just a few clicks. No commitment required.
              </p>
              <button
                onClick={onGetEstimate}
                className="inline-flex items-center px-8 py-3 bg-[#C5B8AB] text-[#222126] font-semibold rounded-lg hover:bg-white transition-colors shadow-lg hover:shadow-xl"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Get Free Estimate
              </button>
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="border-t border-[#C5B8AB]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#C5B8AB]/60 text-sm">
              © {new Date().getFullYear()} NMG Outdoor Living. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#C5B8AB]/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#C5B8AB]/60 hover:text-white transition-colors">
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