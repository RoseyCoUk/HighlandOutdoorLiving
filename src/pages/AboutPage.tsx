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
            backgroundImage: "url('/landing pages/Sauna1.JPG')"
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
                src="/landing pages/Sauna4.JPG"
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
                description: 'Based in Maghera, we understand Northern Ireland\'s unique climate and building requirements.'
              },
              {
                icon: Award,
                title: 'Quality Craftsmanship',
                description: 'Every project reflects our commitment to premium materials and expert workmanship.'
              },
              {
                icon: Users,
                title: 'Personal Service',
                description: 'Direct communication with our team throughout your entire project journey.'
              },
              {
                icon: Wrench,
                title: 'Custom Solutions',
                description: 'Bespoke designs tailored to your specific space and lifestyle requirements.'
              },
              {
                icon: Phone,
                title: 'Ongoing Support',
                description: 'We\'re here for you long after installation with maintenance and support.'
              },
              {
                icon: Mail,
                title: 'Transparent Pricing',
                description: 'Clear, honest quotes with no hidden costs or surprise fees.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#222126] rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-[#C5B8AB]" />
                </div>
                <h3 className="text-xl font-semibold text-[#222126] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#222126]/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Our Process
            </h2>
            <p className="text-lg text-[#C5B8AB]/80 max-w-3xl mx-auto">
              From initial consultation to final installation, we guide you through every step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, assess your space, and provide expert recommendations.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Custom design creation tailored to your specific requirements and preferences.'
              },
              {
                step: '03',
                title: 'Build',
                description: 'Expert craftsmanship in our Maghera workshop using premium materials.'
              },
              {
                step: '04',
                title: 'Install',
                description: 'Professional installation and setup at your location with ongoing support.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#C5B8AB] rounded-full flex items-center justify-center mx-auto mb-6 text-[#222126] font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-[#C5B8AB]/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#C5B8AB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8">
              Meet Our Team
            </h2>
            <p className="text-lg text-[#222126]/80 max-w-3xl mx-auto">
              Skilled craftsmen and outdoor living experts dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Team Image */}
            <div className="relative">
              <img
                src="/landing pages/Sauna5.JPG"
                alt="NMG Outdoor Living team at work"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/40 to-transparent rounded-lg"></div>
            </div>

            {/* Right - Team Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-light text-[#222126] mb-6">
                  Experienced Craftsmen
                </h3>
                <p className="text-lg text-[#222126]/80 leading-relaxed mb-6">
                  Our team brings decades of combined experience in outdoor construction, joinery, and design. Each member is passionate about creating exceptional outdoor living spaces that stand the test of time.
                </p>
                <p className="text-lg text-[#222126]/80 leading-relaxed">
                  From our workshop in Maghera, we've built a reputation for quality, reliability, and customer satisfaction across Northern Ireland.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#222126] mb-2">100+</div>
                  <div className="text-[#222126]/80">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#222126] mb-2">15+</div>
                  <div className="text-[#222126]/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#222126] mb-2">5★</div>
                  <div className="text-[#222126]/80">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#222126] mb-2">24/7</div>
                  <div className="text-[#222126]/80">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Ready to Work With Us?
          </h2>
          
          <p className="text-xl text-[#C5B8AB]/80 mb-12 font-light">
            Let's discuss your outdoor living project and bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:07730510368"
              className="inline-flex items-center px-8 py-4 bg-[#C5B8AB] text-[#222126] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Call for Consultation
            </a>
            
            <a
              href="mailto:nigelmcg@gmail.com"
              className="inline-flex items-center px-8 py-4 border-2 border-[#C5B8AB] text-[#C5B8AB] font-semibold text-lg transition-all duration-300 hover:bg-[#C5B8AB] hover:text-[#222126] hover:scale-105"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;