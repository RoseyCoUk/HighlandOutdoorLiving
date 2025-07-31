import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Send, ArrowLeft, CheckCircle } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const product = searchParams.get('product') || 'project';

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] pt-[73px]">
      <div className="max-w-2xl mx-auto px-6 text-center py-20">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
          Thank You!
        </h1>
        
        <p className="text-xl text-[#C5B8AB]/90 mb-8 leading-relaxed">
          Thanks for your interest in our {product.toLowerCase()}! We've received your inquiry and will be in touch within 24 hours to discuss your project.
        </p>

        {/* What's Next */}
        <div className="bg-[#C5B8AB]/10 border border-[#C5B8AB]/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What's Next?
          </h2>
          <div className="space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#C5B8AB] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#222126] text-sm font-bold">1</span>
              </div>
              <p className="text-[#C5B8AB]/90">We'll review your requirements and prepare a personalized quote</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#C5B8AB] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#222126] text-sm font-bold">2</span>
              </div>
              <p className="text-[#C5B8AB]/90">Our team will contact you to discuss design options and timeline</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#C5B8AB] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#222126] text-sm font-bold">3</span>
              </div>
              <p className="text-[#C5B8AB]/90">We'll schedule a site visit to assess your outdoor space</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-[#C5B8AB]/5 border border-[#C5B8AB]/10 rounded-lg p-6 mb-12">
          <h3 className="text-lg font-semibold text-white mb-3">
            Need to reach us sooner?
          </h3>
          <p className="text-[#C5B8AB]/80 mb-4">
            Call us directly at <span className="text-white font-semibold">+44 28 7963 1234</span>
          </p>
          <p className="text-[#C5B8AB]/80">
            Or email us at <span className="text-white font-semibold">info@nmgoutdoorliving.com</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-[#C5B8AB] text-[#222126] font-semibold transition-all duration-300 hover:bg-white hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-4 border-2 border-[#C5B8AB] text-[#C5B8AB] font-semibold transition-all duration-300 hover:bg-[#C5B8AB] hover:text-[#222126]"
          >
            View Our Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage; 