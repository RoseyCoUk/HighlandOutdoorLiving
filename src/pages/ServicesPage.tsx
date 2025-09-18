import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Waves, Home, Phone, Mail, Building2 } from 'lucide-react';

const ServicesPage = () => {

  const services = [
    {
      title: 'Garden Saunas',
      description: 'Transform your garden into a wellness retreat with our custom-built saunas. Handcrafted for year-round relaxation, each sauna combines traditional warmth with modern design.',
      features: ['Custom Design & Build', 'Premium Materials', 'Weather-Resistant', 'LED Lighting', 'Multiple Heating Options'],
      image: '/sauna/Sauna1.JPG',
      link: '/saunas',
      icon: Waves
    },
    {
      title: 'Grill Pods',
      description: 'Enjoy outdoor cooking in any weather with our premium grill pods. Designed for entertaining, these enclosed spaces bring the BBQ experience to a whole new level.',
      features: ['All-Weather Design', 'Professional Installation', 'Custom Features', 'LED Lighting', 'Veranda Options'],
      image: '/Nigel Grill Pod/GrillPod1.JPG',
      link: '/grill-pods',
      icon: Flame
    },
    {
      title: 'Garden Rooms',
      description: 'Create beautiful outdoor living spaces with our custom garden rooms. From pizza oven rooms to dining areas, perfect for entertaining and relaxing in your garden year-round.',
      features: ['Custom Design', 'Galvanised Steel Frame', 'All-Weather Construction', 'LED Lighting', 'Professional Installation'],
      image: '/garden rooms/Pizza Oven.JPG',
      link: '/garden-rooms',
      icon: Building2
    },
    {
      title: 'Galvanised Steel Sheds',
      description: 'Durable, weather-resistant steel sheds built to last. From storage solutions to garden offices and workshops, tailored to your space and requirements.',
      features: ['Galvanised Steel Frame', 'Weather-Resistant', 'Bespoke Designs', 'Professional Installation', 'Various Sizes'],
      image: '/sheds/Big Steel Shed.JPG',
      link: '/sheds',
      icon: Home
    }
  ];

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-[73px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Nigel Grill Pod/GrillPod2.JPG')"
          }}
        ></div>
        
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 text-white leading-tight tracking-wide px-2">
            Our Services
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-2">
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
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-[#C5B8AB]/90 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-[#C5B8AB]">
                          <div className="w-2 h-2 bg-[#C5B8AB] rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center px-8 py-4 bg-[#C5B8AB] text-[#222126] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#C5B8AB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8">
              Why Choose NMG Outdoor Living?
            </h2>
            <p className="text-lg text-[#222126]/80 max-w-3xl mx-auto">
              We bring decades of experience and a passion for quality to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#222126] rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-[#C5B8AB]" />
              </div>
              <h3 className="text-xl font-semibold text-[#222126] mb-4">Local Expertise</h3>
              <p className="text-[#222126]/80">
                Based in Maghera, we understand the local climate and building requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#222126] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-[#C5B8AB]" />
              </div>
              <h3 className="text-xl font-semibold text-[#222126] mb-4">Personal Service</h3>
              <p className="text-[#222126]/80">
                Direct communication with our team throughout the entire process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#222126] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-[#C5B8AB]" />
              </div>
              <h3 className="text-xl font-semibold text-[#222126] mb-4">Quality Guarantee</h3>
              <p className="text-[#222126]/80">
                Premium materials and craftsmanship backed by our satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-xl text-[#C5B8AB]/80 mb-12 font-light">
            Let's discuss your vision and create something extraordinary for your outdoor space.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:07730510368"
              className="inline-flex items-center px-8 py-4 bg-[#C5B8AB] text-[#222126] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Call for Quote
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-[#C5B8AB] text-[#C5B8AB] font-semibold text-lg transition-all duration-300 hover:bg-[#C5B8AB] hover:text-[#222126] hover:scale-105"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;