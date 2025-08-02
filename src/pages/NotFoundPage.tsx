import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Phone, Mail } from 'lucide-react';

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-black text-[#C5B8AB]/20 leading-none">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-lg text-[#C5B8AB]/80 leading-relaxed max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-[#C5B8AB] text-[#222126] font-semibold text-lg transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 mr-3" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 border-2 border-[#C5B8AB] text-[#C5B8AB] font-semibold text-lg transition-all duration-300 hover:bg-[#C5B8AB] hover:text-[#222126] hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            Go Back
          </button>
        </div>

        {/* Contact Section */}
        <div className="border-t border-[#C5B8AB]/20 pt-8">
          <p className="text-[#C5B8AB]/60 mb-4">
            Need help? Contact us directly:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07730510368"
              className="inline-flex items-center text-[#C5B8AB]/80 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              07730 510368
            </a>
            
            <a
              href="mailto:nigelmcg@gmail.com"
              className="inline-flex items-center text-[#C5B8AB]/80 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              nigelmcg@gmail.com
            </a>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mt-12 pt-8 border-t border-[#C5B8AB]/20">
          <p className="text-[#C5B8AB]/60 mb-4">
            Popular pages you might be looking for:
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/saunas"
              className="text-[#C5B8AB]/80 hover:text-white transition-colors px-4 py-2 border border-[#C5B8AB]/30 hover:border-[#C5B8AB] rounded"
            >
              Saunas
            </Link>
            <Link
              to="/grill-pods"
              className="text-[#C5B8AB]/80 hover:text-white transition-colors px-4 py-2 border border-[#C5B8AB]/30 hover:border-[#C5B8AB] rounded"
            >
              Grill Pods
            </Link>
            <Link
              to="/sheds"
              className="text-[#C5B8AB]/80 hover:text-white transition-colors px-4 py-2 border border-[#C5B8AB]/30 hover:border-[#C5B8AB] rounded"
            >
              Sheds
            </Link>
            <Link
              to="/contact"
              className="text-[#C5B8AB]/80 hover:text-white transition-colors px-4 py-2 border border-[#C5B8AB]/30 hover:border-[#C5B8AB] rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 