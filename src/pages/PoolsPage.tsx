import React from 'react';
import SEOHead from '../components/SEOHead';

const PoolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2B2B2B] text-white flex items-center justify-center">
      <SEOHead 
        title="All-Weather Pools | Highland Outdoor Living"
        description="All-Weather Pools page is coming soon."
        image="/Arctic-Spa-1.jpg"
        url="/pools"
      />
      <div className="text-center px-6">
        <h1 className="text-3xl md:text-5xl font-semibold">All-Weather Pools</h1>
        <p className="mt-3 text-[#E0E0E0]">Coming soon.</p>
      </div>
    </div>
  );
};

export default PoolsPage;


