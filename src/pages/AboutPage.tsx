import React, { useEffect } from 'react';
import { Users, Award, Wrench, MapPin, Phone, Mail } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-[73px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/image copy.png')"
          }}
        ></div>
        
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-white leading-tight tracking-wide">
            About NMG Outdoor Living
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Your trusted Maghera-based team for premium outdoor living solutions across Northern Ireland.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#222126] relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C5B8AB]/10 via-transparent to-[#C5B8AB]/5"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-[#C5B8AB]/60 mb-4 tracking-[0.2em] uppercase">
                  Our Story
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                  Crafting Outdoor Dreams Since Day One
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-[#C5B8AB]/90 leading-relaxed font-light">
                <p>
                  Founded in the heart of Maghera, NMG Outdoor Living began with a simple mission: to transform ordinary outdoor spaces into extraordinary living experiences. What started as a passion for quality craftsmanship has grown into Northern Ireland's trusted name for premium outdoor structures.
                </p>
                
                <p>
                  Our team combines traditional building techniques with modern materials and design innovation. Every sauna, grill pod, and shed we create is a testament to our commitment to excellence, durability, and the unique needs of Northern Ireland homeowners.
                </p>
                
                <p>
                  From our workshop in Maghera, we've had the privilege of enhancing hundreds of gardens across the region, creating spaces where families gather, relax, and make lasting memories.
                </p>
              </div>
            </div>

            {/* Right - Company Image */}
            <div className="relative">
              <img
                src="/image.png"
                alt="NMG Outdoor Living workshop and craftsmanship"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/40 to-transparent rounded-lg"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#C5B8AB]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-4">
              Why Choose NMG?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Local Expertise',
                description: 'Based in Maghera with deep understanding of Northern Ireland\'s climate and building requirements. We know what works in our unique environment.'
              },
              {
                icon: Award,
                title: 'High-Quality Materials',
                description: 'We source only the finest materials, from premium timber to weather-resistant composites, ensuring your investment stands the test of time.'
              },
              {
                icon: Wrench,
                title: 'Hassle-Free Service',
                description: 'From initial consultation to final installation, we handle every detail. Our comprehensive service means you can relax while we create your dream space.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-[#222126]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[#222126]" />
                </div>
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

      {/* Customer Focused Section */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="/image copy copy.png"
                alt="Custom outdoor living installation by NMG"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/60 to-transparent rounded-lg"></div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-[#C5B8AB]/60 mb-4 tracking-[0.2em] uppercase">
                  Customer Focused
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                  Tailored Builds, Personal Service
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-[#C5B8AB]/90 leading-relaxed font-light">
                <p>
                  Every project begins with understanding your vision. We listen carefully to your needs, assess your space, and work with you to design the perfect outdoor solution that fits both your lifestyle and budget.
                </p>
                
                <p>
                  Our commitment doesn't end with installation. We provide comprehensive aftercare, maintenance guidance, and warranty support to ensure your outdoor investment continues to bring joy for years to come.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#C5B8AB]/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C5B8AB] mb-2">200+</div>
                  <div className="text-[#C5B8AB]/70 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C5B8AB] mb-2">15+</div>
                  <div className="text-[#C5B8AB]/70 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-[#C5B8AB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-xl text-[#222126]/80 mb-12 font-light">
            Let's discuss how we can transform your outdoor space.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:07730510368"
              className="inline-flex items-center px-8 py-4 bg-[#222126] text-[#C5B8AB] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Us Now
            </a>
            
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-[#222126] text-[#222126] font-semibold text-lg transition-all duration-300 hover:bg-[#222126] hover:text-[#C5B8AB] hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-3" />
              Send Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;