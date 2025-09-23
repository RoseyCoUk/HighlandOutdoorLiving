import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Arctic Spas Hot Tubs',
      description: 'Your ticket to paradise — energy‑efficient hot tubs engineered for the Highlands.',
      features: ['Hydrotherapy Jets', 'Energy Efficient', 'Smart Controls'],
      image: '/arctic-spas-hero.jpg',
      alt: 'Arctic Spas hot tub in Inverness home',
      cta: 'View Arctic Spas Range',
      link: '/hot-tubs'
    },
    {
      title: 'All‑Weather Pools',
      description: 'Year‑round swimming and cold plunge therapy with insulated, smart‑controlled pools.',
      features: ['Swim Spa Options', 'Cold Plunge', 'Insulated Shell'],
      image: '/arctic-spas-pool.jpg',
      alt: 'All‑weather pool in the Scottish Highlands',
      cta: 'Explore Pools',
      link: '/pools'
    },
    {
      title: 'Luxury Saunas',
      description: 'Relax. Refresh. Rejuvenate. Premium saunas designed for comfort and recovery.',
      features: ['Traditional & Infrared', 'Premium Materials', 'Professional Installation'],
      image: '/sauna/Sauna1.JPG',
      alt: 'Luxury sauna interior',
      cta: 'Explore Saunas',
      link: '/saunas'
    }
  ];

  return (
    <section className="py-20 bg-[#1F2A44]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Explore Our Core Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#1f1f1f] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B1E2D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-[#E0E0E0] mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#E0E0E0]/80">
                      <div className="w-2 h-2 bg-[#CBB79C] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.cta && service.link && (
                  <Link 
                    to={service.link}
                    className="inline-flex items-center px-4 py-2 bg-[#8B1E2D] text-white font-medium transition-colors hover:bg-[#6f1824]"
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