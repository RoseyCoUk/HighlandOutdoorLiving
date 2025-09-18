import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Sheds',
      description: 'Durable, stylish, and low-maintenance shed solutions built to last.',
      features: ['Fencing', 'Decking', 'Cladding'],
      image: '/Shed1.png',
      alt: 'Custom storage shed with durable construction',
      cta: 'View Shed Range'
    },
    {
      title: 'Garden Saunas',
      description: 'Unwind in your own custom-built sauna — tailored for wellness, comfort, and style.',
      features: ['Custom Design', 'Premium Materials', 'Installation Included'],
      image: '/sauna/Sauna1.JPG',
      alt: 'Interior of luxury garden sauna with soft lighting',
      cta: 'Explore Sauna Options'
    },
    {
      title: 'Grill Pods',
      description: 'Enjoy BBQs all year round with handcrafted grill pods designed for entertaining in any weather.',
      features: ['Weather Resistant', 'Custom Designs', 'Professional Installation'],
      image: '/Nigel Grill Pod/GrillPod1.JPG',
      alt: 'NMG custom grill pod installation',
      cta: 'View Grill Pod Range'
    }
  ];

  return (
    <section className="py-20 bg-[#C5B8AB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-4">
            Explore Our Core Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#222126] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-[#222126]/80 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#222126]/70">
                      <div className="w-2 h-2 bg-[#222126] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.cta && service.title === 'Grill Pods' && (
                  <Link 
                    to="/grill-pods"
                    className="inline-flex items-center text-[#222126] font-medium transition-colors hover:text-[#222126]/70"
                  >
                    {service.cta}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                )}
                
                {service.cta && service.title === 'Sheds' && (
                  <Link 
                    to="/sheds"
                    className="inline-flex items-center text-[#222126] font-medium transition-colors hover:text-[#222126]/70"
                  >
                    {service.cta}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                )}
                
                {service.cta && service.title === 'Garden Saunas' && (
                  <Link 
                    to="/saunas"
                    className="inline-flex items-center text-[#222126] font-medium transition-colors hover:text-[#222126]/70"
                  >
                    {service.cta}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;