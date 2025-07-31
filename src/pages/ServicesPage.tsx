import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Waves, Home, Phone, Mail } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Garden Saunas',
      description: 'Transform your garden into a wellness retreat with our custom-built saunas. Handcrafted for year-round relaxation, each sauna combines traditional warmth with modern design.',
      features: ['Custom Design & Build', 'Premium Materials', 'Weather-Resistant', 'LED Lighting', 'Multiple Heating Options'],
      image: '/image copy copy copy.png',
      link: '/saunas',
      icon: Waves
    },
    {
      title: 'Grill Pods',
      description: 'Enjoy outdoor cooking in any weather with our premium grill pods. Designed for entertaining, these enclosed spaces bring the BBQ experience to a whole new level.',
      features: ['All-Weather Design', 'Professional Installation', 'Custom Features', 'LED Lighting', 'Veranda Options'],
      image: '/image copy copy copy copy copy copy.png',
      link: '/grill-pods',
      icon: Flame
    },
    {
      title: 'Custom Sheds',
      description: 'From storage solutions to garden offices and workshops, our bespoke sheds are built to last. Tailored to your space and requirements with premium materials.',
      features: ['Bespoke Designs', 'Multiple Uses', 'Durable Construction', 'Professional Installation', 'Various Sizes'],
      image: '/image copy copy copy copy.png',
      link: '/sheds',
      icon: Home
    }
  ];

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-[73px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/image.png')"
          }}
        ></div>
        
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-white leading-tight tracking-wide">
            Our Services
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Premium outdoor living solutions crafted with expertise, designed for durability, and built to enhance your lifestyle.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              What We Build
            </h2>
            <p className="text-lg text-[#C5B8AB]/80 max-w-3xl mx-auto">
              Each service represents our commitment to quality craftsmanship and customer satisfaction.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={`${service.title} by NMG Outdoor Living`}
                    className="w-full h-[400px] object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/60 to-transparent rounded-lg"></div>
                  
                  {/* Service Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-[#C5B8AB]/90 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-[#222126]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-[#C5B8AB]/90 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#C5B8AB] rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-[#C5B8AB]/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center px-6 py-3 bg-[#C5B8AB] text-[#222126] font-semibold transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services Section */}
      <section className="py-24 bg-[#C5B8AB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 leading-tight">
                  Custom & Bespoke Projects
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-[#222126]/90 leading-relaxed font-light">
                <p>
                  Have a unique vision for your outdoor space? We specialize in custom builds that go beyond our standard offerings. From combination structures to completely bespoke designs, we bring your ideas to life.
                </p>
                
                <p>
                  Our team works closely with you throughout the design process, ensuring every detail meets your exact specifications while maintaining our high standards of quality and durability.
                </p>
              </div>

              {/* Custom Services List */}
              <div className="space-y-4">
                {[
                  'Combination sauna and grill pod structures',
                  'Custom garden buildings and retreats',
                  'Bespoke outdoor entertainment areas',
                  'Specialized workshop and studio spaces'
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-[#222126] rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-[#222126]/80 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <img
                src="/image copy.png"
                alt="Custom outdoor living project by NMG"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/40 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Quote Section */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl text-[#C5B8AB]/80 mb-12 font-light">
            Every project is unique, so we provide personalized quotes based on your specific requirements.
          </p>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-12 border border-[#C5B8AB]/20 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Get Your Free Quote Today
            </h3>
            
            <p className="text-[#C5B8AB]/90 mb-8 leading-relaxed">
              Contact us for a no-obligation consultation and detailed quote. We'll discuss your vision, assess your space, and provide transparent pricing for your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:07730510368"
                className="inline-flex items-center px-8 py-4 bg-[#C5B8AB] text-[#222126] font-semibold text-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call for Quote
              </a>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-[#C5B8AB] text-[#C5B8AB] font-semibold text-lg transition-all duration-300 hover:bg-[#C5B8AB] hover:text-[#222126] hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-3" />
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;