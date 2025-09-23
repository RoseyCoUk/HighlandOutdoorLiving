import React from 'react';
import SEOHead from '../components/SEOHead';

const PoolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2B2B2B] text-white">
      <SEOHead 
        title="All-Weather Pools & Swim Spas | Highland Outdoor Living"
        description="Arctic Spas All-Weather Pools and swim spas for Inverness and the Scottish Highlands. Wellness routines with cold plunge therapy."
        image="/arctic-spas-pool.jpg"
        url="/pools"
      />
      <section className="pt-24 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-light mb-4">All-Weather Pools</h1>
        <p className="text-[#E0E0E0] max-w-3xl mx-auto">
          Wellness routines with cold plunge therapy and year‑round swimming. Built for the Highlands with energy‑efficient insulation and smart controls.
        </p>
      </section>
    </div>
  );
};

export default PoolsPage;


