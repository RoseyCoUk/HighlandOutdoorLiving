import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Check, Shield, Leaf, Wrench, Globe, Clock, Phone, Mail, MapPin, Send, Star, Flame, Droplets, EclipseIcon as Eco } from 'lucide-react';
import { submitLead, formatName } from '../lib/forms';

const GrillPodPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

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
        name: formatName(formData.firstName, formData.lastName),
        email: formData.email,
        message: formData.message,
        product: 'Grill Pod',
        source: 'Grill Pod Page'
      });

      if (result.success) {
        navigate('/thank-you?product=grill pod');
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

  const galleryTabs = ['All', 'Interior', 'Exterior', 'At Night'];
  
  const galleryImages = {
    All: [
      { src: '/image copy copy copy copy copy copy.png', alt: 'Premium Grill Pod Installation' },
      { src: '/image copy copy.png', alt: 'Interior Comfort' },
      { src: '/image copy copy copy copy copy.png', alt: 'Night Ambiance' },
      { src: '/image copy copy copy.png', alt: 'Custom Features' },
      { src: '/image copy copy copy copy.png', alt: 'All-Season Use' },
      { src: '/image.png', alt: 'Entertainment Space' }
    ],
    Interior: [
      { src: '/image copy copy.png', alt: 'Interior Comfort' },
      { src: '/image copy copy copy.png', alt: 'Custom Features' }
    ],
    Exterior: [
      { src: '/image copy copy copy copy copy copy.png', alt: 'Premium Installation' },
      { src: '/image copy copy copy copy.png', alt: 'All-Season Design' }
    ],
    'At Night': [
      { src: '/image copy copy copy copy copy.png', alt: 'Night Ambiance' },
      { src: '/image.png', alt: 'Evening Entertainment' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-[73px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/image copy copy copy copy copy copy.png')"
          }}
        ></div>
        
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-none tracking-tighter uppercase transform hover:scale-105 transition-transform duration-700">
            THE GRILL POD
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            Outdoor cooking, all year round — beautifully enclosed.
          </p>

          <button
            onClick={scrollToQuote}
            className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#C5B8AB] to-white text-[#222126] font-black text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:shadow-2xl transform hover:from-white hover:to-[#C5B8AB]"
          >
            Request a Quote
            <ChevronDown className="ml-3 w-6 h-6 transition-transform group-hover:translate-y-3" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-12 h-12 text-white/60" />
        </div>
      </section>

      {/* Intro Section - Premium Outdoor Solution */}
      <section className="py-32 bg-[#222126] relative">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C5B8AB]/20 via-transparent to-[#C5B8AB]/10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-12">
              <div>
                <p className="text-sm font-bold text-[#C5B8AB]/70 mb-6 tracking-[0.3em] uppercase">
                  GRILL POD INTRO
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-12 leading-tight">
                  Premium Outdoor Solution
                </h2>
              </div>
              
              <p className="text-lg text-[#C5B8AB]/90 leading-relaxed font-light">
                The Grill Pod is our premium solution for year-round cooking and hosting. Built to last, insulated for all seasons, and tailored to your style — it's more than a BBQ shelter. <span className="text-white font-medium">It's a showpiece.</span>
              </p>
            </div>

            {/* Right - Floating Features Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-12 border border-[#C5B8AB]/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-8 tracking-wide">Key Features</h3>
                <div className="space-y-6">
                  {[
                    'Enclosed grilling design',
                    'Veranda add-on',
                    'LED lighting',
                    '32A electric hookup',
                    'All-weather materials'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-[#C5B8AB] text-base">
                      <div className="w-4 h-4 bg-gradient-to-r from-[#C5B8AB] to-white rounded-full mr-5 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C5B8AB]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customisation Section - Bespoke Pods */}
      <section className="py-32 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 tracking-tight">
              Bespoke Pods, Built Your Way
            </h2>
          </div>

          {/* Asymmetric Staggered Layout */}
          <div className="space-y-8">
            {/* Row 1 - Large + Small */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white p-16 shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-3xl">
                <h3 className="text-2xl font-black text-[#222126] mb-6 uppercase tracking-wide">
                  Pod Options
                </h3>
                <p className="text-base text-[#222126]/80 leading-relaxed font-light">
                  Exterior cladding, lighting, wall finishes — every detail crafted to your vision and space requirements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#222126] to-[#222126]/80 p-10 text-white transform hover:scale-105 transition-all duration-700">
                <h3 className="text-xl font-bold mb-4 text-[#C5B8AB]">
                  Standard Features
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Insulation, grill-ready setup, electrics — all essentials included.
                </p>
              </div>
            </div>

            {/* Row 2 - Small + Large */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-10 shadow-xl transform hover:scale-105 transition-all duration-700">
                <h3 className="text-xl font-bold text-[#222126] mb-4">
                  Verandas
                </h3>
                <p className="text-sm text-[#222126]/80 leading-relaxed">
                  Optional covered extension for expanded entertaining space.
                </p>
              </div>

              <div className="lg:col-span-2 bg-gradient-to-r from-[#222126] via-[#222126]/90 to-[#222126] p-16 text-white transform hover:scale-105 transition-all duration-700">
                <h3 className="text-2xl font-bold mb-6 text-[#C5B8AB]">
                  Requirements & Links
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-white mb-3 text-base">Requirements:</h4>
                    <p className="text-white/90 text-sm">32A power, solid base</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3 text-base">Resources:</h4>
                    <p className="text-white/90 text-sm">Installation PDFs, warranty link</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - See the Grill Pod in Action */}
      <section className="py-32 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-12 tracking-tight">
              See the Grill Pod in Action
            </h2>

            {/* Gallery Tabs */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {galleryTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-base font-medium transition-all duration-500 transform hover:scale-105 ${
                    activeTab === tab
                      ? 'bg-[#C5B8AB] text-[#222126] font-bold shadow-xl'
                      : 'border-2 border-[#C5B8AB]/50 text-[#C5B8AB] hover:border-[#C5B8AB] hover:bg-[#C5B8AB]/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages[activeTab as keyof typeof galleryImages].map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl hover:-translate-y-4 hover:scale-105 ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : 
                  index === 2 ? 'lg:row-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? 'h-96 lg:h-full' : 'h-80'
                  }`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/90 via-[#222126]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {image.alt}
                    </h3>
                    <div className="w-16 h-1 bg-[#C5B8AB] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Get to Know Us */}
      <section className="py-32 bg-[#C5B8AB]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-12 font-serif tracking-tight">
            Trusted By Homeowners Across the UK
          </h2>
          
          <p className="text-lg text-[#222126]/90 leading-relaxed mb-12 font-light max-w-4xl mx-auto">
            We craft custom-built outdoor living spaces that fuse beauty, comfort, and durability. With 15+ years of design and installation experience, our team brings every Grill Pod to life with care and precision.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center space-x-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-10 h-10 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-[#222126] text-lg font-bold">
              Over 100 custom-built pods delivered
            </p>
            <p className="text-[#222126]/70 text-base font-medium">
              "Exceptional craftsmanship and attention to detail"
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Why Choose the Grill Pod? */}
      <section className="py-32 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Why Choose the Grill Pod?
            </h2>
          </div>

          {/* Zig-zag Feature Layout */}
          <div className="space-y-20">
            {[
              { icon: Flame, title: 'Exceptional Quality', description: 'Premium materials and meticulous attention to every detail' },
              { icon: Droplets, title: 'Weatherproof Build', description: 'Engineered to withstand all seasons and weather conditions' },
              { icon: Eco, title: 'Eco-Friendly', description: 'Sustainable materials and environmentally conscious construction' },
              { icon: Wrench, title: 'First-Rate Craftsmanship', description: 'Expert installation and superior build quality' },
              { icon: Globe, title: 'Multilingual Support', description: 'We communicate in your preferred language' },
              { icon: Clock, title: '24/7 Assistance', description: 'Always available when you need support or guidance' }
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } max-w-5xl mx-auto`}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-[#C5B8AB] to-white rounded-full flex items-center justify-center flex-shrink-0 transform hover:scale-110 transition-all duration-500 shadow-2xl">
                  <feature.icon className="w-16 h-16 text-[#222126]" />
                </div>
                <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[#C5B8AB]/90 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section - Ready to Build Yours? */}
      <section id="quote-form" className="py-32 bg-[#C5B8AB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 tracking-tight">
              Ready to Build Yours?
            </h2>
            <p className="text-xl text-[#222126]/80 font-light">
              Tell us about your vision...
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-lg p-20 text-center shadow-2xl transform scale-105">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-10">
                <Send className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#222126] mb-6">
                Thank You!
              </h3>
              <p className="text-[#222126]/80 text-lg">
                We'll be in touch shortly to discuss your Grill Pod project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-16 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <label htmlFor="firstName" className="block text-[#222126] font-bold mb-3 text-base">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-[#222126] transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-[#222126] font-bold mb-3 text-base">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-[#222126] transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#222126] font-bold mb-3 text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-[#222126] transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-[#222126] font-bold mb-3 text-base">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-[#222126] transition-colors text-base"
                  />
                </div>
              </div>

              <div className="mb-12">
                <label htmlFor="message" className="block text-[#222126] font-bold mb-3 text-base">
                  Tell us about your vision... *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-[#222126] transition-colors resize-vertical text-base"
                  placeholder="Describe your space, preferred features, timeline, or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#222126] to-[#222126]/90 text-[#C5B8AB] py-6 font-black text-lg uppercase tracking-wider transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send My Request'}</span>
                {!isSubmitting && <Send className="w-6 h-6" />}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Section - Visit Our Workshop */}
      <section className="relative h-screen">
        <div className="grid lg:grid-cols-2 h-full">
          {/* Map */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.7891234567!2d-6.6234567!3d54.8234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485fd123456789ab%3A0x123456789abcdef0!2s9%20Ballyknock%20Rd%2C%20Maghera%20BT46%205AB%2C%20UK!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) brightness(0.6)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NMG Workshop Location"
            ></iframe>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-[#C5B8AB] rounded-full border-4 border-white shadow-2xl animate-pulse"></div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-[#222126] flex items-center justify-center p-8 lg:p-16">
            <div className="w-full max-w-lg space-y-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                  Visit Our Workshop
                </h2>
                <p className="text-lg text-[#C5B8AB]/80 font-light">
                  See Grill Pods in person and discuss your project.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-center space-x-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C5B8AB] to-white rounded-full flex items-center justify-center">
                    <Phone className="w-10 h-10 text-[#222126]" />
                  </div>
                  <div>
                    <p className="text-[#C5B8AB]/70 text-sm uppercase tracking-wider font-bold">Phone</p>
                    <a 
                      href="tel:07730510368" 
                      className="text-white text-xl font-medium hover:text-[#C5B8AB] transition-colors"
                    >
                      07730 510368
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C5B8AB] to-white rounded-full flex items-center justify-center">
                    <Mail className="w-10 h-10 text-[#222126]" />
                  </div>
                  <div>
                    <p className="text-[#C5B8AB]/70 text-sm uppercase tracking-wider font-bold">Email</p>
                    <a 
                      href="mailto:nigelmcg@gmail.com" 
                      className="text-white text-xl font-medium hover:text-[#C5B8AB] transition-colors break-all"
                    >
                      nigelmcg@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C5B8AB] to-white rounded-full flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-[#222126]" />
                  </div>
                  <div>
                    <p className="text-[#C5B8AB]/70 text-sm uppercase tracking-wider font-bold">Location</p>
                    <p className="text-white text-xl font-medium leading-tight">
                      9 Ballyknock Road<br />Maghera
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:07730510368"
                className="w-full bg-gradient-to-r from-[#C5B8AB] to-white text-[#222126] py-6 font-black text-lg uppercase tracking-wider transition-all duration-500 hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl"
              >
                <Phone className="w-6 h-6" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrillPodPage;