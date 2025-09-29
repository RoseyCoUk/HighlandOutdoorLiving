import React from 'react';
import SEOHead from '../components/SEOHead';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2B2B2B] text-white flex items-center justify-center">
      <SEOHead 
        title="Blog | Highland Outdoor Living"
        description="Blog page is coming soon."
        image="/Arctic-Spa-1.jpg"
        url="/blog"
      />
      <div className="text-center px-6">
        <h1 className="text-3xl md:text-5xl font-semibold">Blog</h1>
        <p className="mt-3 text-[#E0E0E0]">Coming soon.</p>
      </div>
    </div>
  );
};

export default BlogPage;