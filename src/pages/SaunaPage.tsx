import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, Droplets, Brain, Flame, Leaf, Star, Phone, Mail, MapPin, Send } from 'lucide-react';

const SaunaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder form submission - ready for backend integration
    console.log('Sauna quote request:', formData);
    alert('Thank you for your sauna inquiry! We will contact you shortly with a detailed quote.');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-[73px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/image copy copy copy.png')"
          }}
        ></div>
        
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-white leading-tight tracking-wide">
            Garden Saunas
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Custom-built wellness retreats — designed for year-round relaxation.
          </p>

          <button
            onClick={scrollToQuote}
            className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#C5B8AB]/90 to-[#C5B8AB] text-[#222126] font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:from-white hover:to-[#C5B8AB]"
          >
            Request a Quote
            <ChevronDown className="ml-3 w-5 h-5 transition-transform group-hover:translate-y-1" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Intro Section - Your Personal Sanctuary */}
      <section className="py-24 bg-[#222126] relative">
        {/* Soft Background Texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C5B8AB]/10 via-transparent to-[#C5B8AB]/5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-[#C5B8AB]/60 mb-4 tracking-[0.2em] uppercase">
                  Your Personal Sanctuary
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                  Handcrafted Wellness
                </h2>
              </div>
              
              <p className="text-lg text-[#C5B8AB]/90 leading-relaxed font-light">
                Our outdoor saunas combine modern aesthetics with traditional warmth. Each unit is handcrafted to suit your space and lifestyle — insulated, weather-resistant, and finished with premium materials inside and out.
              </p>
            </div>

            {/* Right - Floating Features Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 border border-[#C5B8AB]/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <h3 className="text-xl font-semibold text-white mb-6">Key Features</h3>
                <div className="space-y-4">
                  {[
                    'Weatherproof design',
                    'Thermowood or cedar interiors',
                    'Glass-fronted or solid wall options',
                    'Built-in LED ambient lighting',
                    'Electrical or wood-burning heater',
                    'Optional cold plunge or shower extension'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-[#C5B8AB] text-sm">
                      <div className="w-3 h-3 bg-[#C5B8AB] rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#C5B8AB]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored to You Section */}
      <section className="py-24 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-4">
              Tailored to You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Interior Finishes',
                description: 'Thermowood, cedar, spruce — with optional scents and lighting packages',
                icon: '🌿'
              },
              {
                title: 'Exterior Cladding',
                description: 'Match your garden aesthetic with wood, PVC, or composite',
                icon: '🏡'
              },
              {
                title: 'Heating Options',
                description: 'Electric heater or traditional wood-burning stove',
                icon: '🔥'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="text-4xl mb-6 text-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#222126] mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-[#222126]/80 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Explore Our Builds
            </h2>
          </div>

          {/* Masonry-style Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/image copy copy copy.png', alt: 'Compact Spa Garden', title: 'Compact Spa Garden' },
              { src: '/image copy copy copy copy copy.png', alt: 'Lakeside Sauna with Cold Plunge', title: 'Lakeside Sauna with Cold Plunge' },
              { src: '/image copy copy copy copy.png', alt: 'Decked Sauna + Veranda Extension', title: 'Decked Sauna + Veranda Extension' },
              { src: '/image.png', alt: 'Modern Garden Sauna', title: 'Modern Garden Sauna' },
              { src: '/image copy.png', alt: 'Traditional Wood Sauna', title: 'Traditional Wood Sauna' },
              { src: '/image copy copy.png', alt: 'Luxury Wellness Retreat', title: 'Luxury Wellness Retreat' }
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

      {/* Wellness Benefits Section */}
      <section className="py-24 bg-[#C5B8AB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8">
              Why Invest in a Sauna?
            </h2>
            <p className="text-lg text-[#222126]/80 leading-relaxed max-w-3xl mx-auto">
              Experience the transformative benefits of regular sauna use — from detoxification and stress relief to improved sleep and muscle recovery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Droplets, text: 'Year-Round Wellness' },
              { icon: Brain, text: 'Reduces Stress' },
              { icon: '💪', text: 'Aids Muscle Recovery' },
              { icon: Brain, text: 'Boosts Mental Clarity' },
              { icon: Flame, text: 'Heat Retention' },
              { icon: Leaf, text: 'Eco-Conscious Materials' }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {typeof benefit.icon === 'string' ? (
                    <span className="text-2xl">{benefit.icon}</span>
                  ) : (
                    <benefit.icon className="w-8 h-8 text-[#222126]" />
                  )}
                </div>
                <p className="text-[#222126] font-medium text-sm text-center">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 font-serif">
            Crafted by Experts
          </h2>
          
          <blockquote className="text-xl text-[#C5B8AB]/90 leading-relaxed mb-12 font-light max-w-4xl mx-auto italic">
            "Each sauna is handmade with care by our skilled craftsmen. We bring decades of joinery and installation experience to every project — ensuring comfort, safety, and long-term durability."
          </blockquote>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-[#C5B8AB] text-lg font-semibold">
              Trusted by 100+ UK homeowners
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-24 bg-[#C5B8AB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-4">
              Design Your Sauna
            </h2>
            <p className="text-lg text-[#222126]/70">
              Tell us your vision and we'll bring it to life
            </p>
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
                We'll be in touch shortly to discuss your sauna project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-[#222126] font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#222126] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-[#222126] font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
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

                <div>
                  <label htmlFor="location" className="block text-[#222126] font-semibold mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
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
                  Tell us your preferred size, style, heater type, and special features *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#222126] transition-colors resize-vertical"
                  placeholder="Describe your vision for the perfect sauna..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#222126] text-[#C5B8AB] py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Send My Request</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative h-screen">
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
                  Experience our craftsmanship firsthand
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

export default SaunaPage;