import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Calculator } from 'lucide-react';
import { submitLead } from '../lib/forms';

interface QuoteFormProps {
  onGetEstimate?: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onGetEstimate }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        product: 'General',
        source: 'Home Page Quote Form'
      });

      if (result.success) {
        navigate('/thank-you?product=project');
      } else {
        alert('There was an error submitting your form. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="quote-form" className="relative py-20 min-h-screen flex items-center">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1212818/pexels-photo-1212818.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-[#222126]/70"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-lg p-12 shadow-xl">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-semibold text-[#222126] mb-4">
              Thank You!
            </h2>
            <p className="text-[#222126]/80 text-lg">
              Thanks for your interest in NMG! We'll be in touch shortly to discuss your project.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="relative py-16 sm:py-20 min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1212818/pexels-photo-1212818.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      ></div>
      <div className="absolute inset-0 bg-[#222126]/70"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 px-2">
            Get a Tailored Quote for Your Space
          </h2>
          <p className="text-base sm:text-xl text-[#C5B8AB]/90 mb-4 px-2">
            Tell us about your outdoor space and we'll help you bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#C5B8AB]/20 rounded-full border border-[#C5B8AB]/30">
              <span className="text-[#C5B8AB] text-xs sm:text-sm font-medium">✓ We typically respond within 24 hours</span>
            </div>
            {onGetEstimate && (
              <button
                onClick={onGetEstimate}
                className="inline-flex items-center px-4 sm:px-6 py-2 bg-[#C5B8AB] text-[#222126] font-semibold text-sm sm:text-base rounded-lg hover:bg-white transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Get Instant Estimate
              </button>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 bg-white/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-xl" role="form" aria-label="Quote request form">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-[#222126] font-medium mb-2 text-sm sm:text-base">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby="name-error"
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#222126] transition-colors text-sm sm:text-base"
              />
              <div id="name-error" className="sr-only" role="alert"></div>
            </div>

            <div>
              <label htmlFor="email" className="block text-[#222126] font-medium mb-2 text-sm sm:text-base">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#222126] transition-colors text-sm sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[#222126] font-medium mb-2 text-sm sm:text-base">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#222126] transition-colors text-sm sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-[#222126] font-medium mb-2 text-sm sm:text-base">
                Location (town/city) *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#222126] transition-colors text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <label htmlFor="message" className="block text-[#222126] font-medium mb-2 text-sm sm:text-base">
              Tell us what you're looking for... *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#222126] transition-colors resize-vertical text-sm sm:text-base"
              placeholder="Describe your outdoor space project, preferred materials, timeline, or any specific requirements..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#222126] text-[#C5B8AB] py-3 sm:py-4 font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-[#222126]/90 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'Submitting...' : 'Request My Quote'}</span>
            {!isSubmitting && <Send className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;