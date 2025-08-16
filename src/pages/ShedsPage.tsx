import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Check, Shield, Wrench, Home, Star, Phone, Mail, MapPin, Send, Hammer, Building, TreePine, ChevronRight } from 'lucide-react';
import { submitLead } from '../lib/forms';

const ShedsPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
        product: 'Shed',
        source: 'Sheds Page'
      });

      if (result.success) {
        navigate('/thank-you?product=shed');
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

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB]">
      {/* 1. Hero Section - Above the Fold */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-[73px]">
        {/* Background Video/Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/landing pages/outdoor glass room.JPG')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 text-white leading-none tracking-tighter px-2">
            Bespoke Sheds Built to Last
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-16 max-w-4xl mx-auto leading-relaxed font-light px-2">
            Custom-designed shed solutions for extra space, style, and durability—perfect for storage, workshops, or garden retreats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <button
              onClick={scrollToQuote}
              className="group inline-flex items-center px-6 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-[#C5B8AB] to-white text-[#222126] font-black text-base sm:text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:shadow-2xl transform hover:from-white hover:to-[#C5B8AB] w-full sm:w-auto justify-center"
            >
              Request a Quote
              <ChevronRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-2" />
            </button>
            
            <button
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center px-6 sm:px-12 py-4 sm:py-6 border-2 border-[#C5B8AB] text-[#C5B8AB] font-black text-base sm:text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:bg-[#C5B8AB] hover:text-[#222126] w-full sm:w-auto justify-center"
            >
              Book a Viewing
              <MapPin className="ml-2 sm:ml-3 w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 sm:w-12 sm:h-12 text-white/60" />
        </div>
      </section>

      {/* Features Section - Why Choose Our Sheds? */}
      <section className="py-24 bg-[#222126] relative">
        {/* Soft Background Texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C5B8AB]/10 via-transparent to-[#C5B8AB]/5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Why Choose Our Sheds?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Durability',
                description: 'Built to withstand Northern Ireland\'s weather with premium materials and expert craftsmanship.'
              },
              {
                icon: Wrench,
                title: 'Bespoke Designs',
                description: 'Tailored to your space and style with custom sizing, finishes, and features.'
              },
              {
                icon: Home,
                title: 'Hassle-Free Installation',
                description: 'Fully installed by our expert team with complete project management from start to finish.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 border border-[#C5B8AB]/20 shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[#C5B8AB]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-[#C5B8AB]/90 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Recent Shed Projects */}
      <section className="py-24 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-4">
              Recent Shed Projects
            </h2>
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/Shed1.png', alt: 'Custom Storage Shed', title: 'Custom Storage Shed' },
              { src: '/landing pages/outdoor glass room.JPG', alt: 'Garden Office Shed', title: 'Garden Office Shed' },
              { src: '/landing pages/outdoor glass room 2.jpg', alt: 'Workshop Shed', title: 'Workshop Shed' },
              { src: '/image.png', alt: 'Traditional Timber Shed', title: 'Traditional Timber Shed' },
              { src: '/image copy.png', alt: 'Modern Composite Shed', title: 'Modern Composite Shed' },
              { src: '/image copy copy.png', alt: 'Large Storage Solution', title: 'Large Storage Solution' }
            ].map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 ${
                  index === 0 ? 'lg:row-span-2' : 
                  index === 2 ? 'lg:col-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? 'h-96 lg:h-full' : 
                    index === 2 ? 'h-64' : 'h-80'
                  }`}
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/80 via-[#222126]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {image.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#C5B8AB] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options Section - Popular Shed Types */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Popular Shed Types
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: 'Storage Sheds',
                description: 'Maximize your storage space with custom-built sheds designed for tools, equipment, and seasonal items.',
                image: '/Shed1.png'
              },
              {
                icon: Home,
                title: 'Garden Offices',
                description: 'Create the perfect work-from-home space with insulated, fully-equipped garden office sheds.',
                image: '/landing pages/outdoor glass room.JPG'
              },
              {
                icon: Hammer,
                title: 'Workshops',
                description: 'Dedicated workshop spaces with power, lighting, and ventilation for all your DIY and craft projects.',
                image: '/landing pages/outdoor glass room 2.jpg'
              }
            ].map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#C5B8AB]/90 rounded-full flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-[#222126]" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#222126] mb-4">
                    {option.title}
                  </h3>
                  
                  <p className="text-[#222126]/80 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  <button className="inline-flex items-center text-[#222126] font-semibold transition-all duration-300 hover:text-[#222126]/70 hover:scale-105">
                    View More
                    <ChevronDown className="ml-2 w-4 h-4 rotate-[-90deg]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-[#C5B8AB]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 font-serif">
            Trusted Shed Specialists
          </h2>
          
          <blockquote className="text-xl text-[#222126]/90 leading-relaxed mb-12 font-light max-w-4xl mx-auto italic">
            "Every shed is handcrafted with precision and care. We bring decades of construction expertise to each project, ensuring your shed is built to last for generations."
          </blockquote>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-[#222126] text-lg font-semibold">
              Trusted by 200+ Northern Ireland homeowners
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-24 bg-[#222126]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Get a Free Shed Quote
            </h2>
            <p className="text-lg text-[#C5B8AB]/70 mb-4">
              Tell us about your shed requirements and we'll provide a tailored quote
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-[#C5B8AB]/20 rounded-full border border-[#C5B8AB]/30">
              <span className="text-[#C5B8AB] text-sm font-medium">✓ We respond within 24 hours</span>
            </div>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-lg p-16 text-center shadow-2xl">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#222126] mb-4">
                Thank You!
              </h3>
              <p className="text-[#222126]/80 text-lg">
                We'll be in touch shortly to discuss your shed project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-[#222126] font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#222126] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#222126] font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#222126] transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-[#222126] font-semibold mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#222126] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-[#222126] font-semibold mb-2">
                  Tell us about your shed requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#222126] transition-colors resize-vertical"
                  placeholder="Describe your ideal shed size, purpose, style preferences, and any special requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#222126] text-[#C5B8AB] py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Request My Quote'}</span>
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="relative h-screen">
        <div className="grid lg:grid-cols-2 h-full">
          {/* Map */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.7891234567!2d-6.6234567!3d54.8234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485fd123456789ab%3A0x123456789abcdef0!2s9%20Ballyknock%20Rd%2C%20Maghera%20BT46%205AB%2C%20UK!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) brightness(0.7)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NMG Workshop Location"
            ></iframe>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-[#C5B8AB] rounded-full border-4 border-white shadow-xl animate-pulse"></div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-[#222126] flex items-center justify-center p-8 lg:p-16">
            <div className="w-full max-w-md space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                  Visit Our Workshop
                </h2>
                <p className="text-[#C5B8AB]/80">
                  See our craftsmanship up close and discuss your shed project
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-[#C5B8AB]" />
                  </div>
                  <div>
                    <p className="text-[#C5B8AB]/70 text-sm uppercase tracking-wide">Phone</p>
                    <a 
                      href="tel:07730510368" 
                      className="text-white text-xl font-medium hover:text-[#C5B8AB] transition-colors"
                    >
                      07730 510368
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 text-[#C5B8AB]" />
                  </div>
                  <div>
                    <p className="text-[#C5B8AB]/70 text-sm uppercase tracking-wide">Email</p>
                    <a 
                      href="mailto:nigelmcg@gmail.com" 
                      className="text-white text-xl font-medium hover:text-[#C5B8AB] transition-colors break-all"
                    >
                      nigelmcg@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#C5B8AB]" />
                  </div>
                  <div>
                    <p className="text-[#C5B8AB]/70 text-sm uppercase tracking-wide">Location</p>
                    <p className="text-white text-xl font-medium leading-tight">
                      9 Ballyknock Road<br />Maghera
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:07730510368"
                className="w-full bg-[#C5B8AB] text-[#222126] py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white flex items-center justify-center space-x-2 shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShedsPage;