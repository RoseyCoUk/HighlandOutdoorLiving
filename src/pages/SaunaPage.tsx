import React from 'react';
import SEOHead from '../components/SEOHead';

const SaunaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2B2B2B] text-white flex items-center justify-center">
      <SEOHead 
        title="Luxury Saunas | Highland Outdoor Living"
        description="Saunas page is coming soon."
        image="/Arctic-Spa-1.jpg"
        url="/saunas"
      />
      <div className="text-center px-6">
        <h1 className="text-3xl md:text-5xl font-semibold">Luxury Saunas</h1>
        <p className="mt-3 text-[#E0E0E0]">Coming soon.</p>
      </div>
    </div>
  );
};

export default SaunaPage;