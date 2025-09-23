import React from 'react';
import SEOHead from '../components/SEOHead';

const HotTubsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2B2B2B] text-white">
      <SEOHead 
        title="Arctic Spas Hot Tubs | Highland Outdoor Living Inverness"
        description="Explore Arctic Spas hot tubs designed for the Scottish Highlands. Energy‑efficient, durable, and built for comfort."
        image="/arctic-spas-hero.jpg"
        url="/hot-tubs"
      />
      <section className="pt-24 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-light mb-4">Arctic Spas Hot Tubs</h1>
        <p className="text-[#E0E0E0] max-w-3xl mx-auto">
          Your ticket to paradise. Relax after a long day of everyday life with
          premium hydrotherapy, smart controls, and rugged construction engineered for cold climates.
        </p>
        <div className="mt-8">
          <a href="https://www.arcticspas.co.uk/" target="_blank" rel="noreferrer" className="inline-block px-6 py-4 bg-[#8B1E2D] hover:bg-[#6f1824] text-white font-semibold">View Arctic Spas Range</a>
        </div>
      </section>
    </div>
  );
};

export default HotTubsPage;


