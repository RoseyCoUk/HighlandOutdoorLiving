import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts, getBlogPostsByCategory } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    setFilteredPosts(getBlogPostsByCategory(selectedCategory));
  }, [selectedCategory]);

  const categories = ['All', 'Trends', 'Saunas', 'Grill Pods', 'Sheds'];

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      <SEOHead 
        title="Outdoor Living Blog - Expert Tips & Trends in Northern Ireland | NMG Outdoor Living"
        description="Discover the latest outdoor living trends, expert tips, and insights for saunas, grill pods, and custom sheds in Northern Ireland. Expert advice from NMG Outdoor Living."
        keywords={['outdoor living blog', 'sauna tips', 'grill pod trends', 'custom sheds', 'Northern Ireland', 'Maghera', 'outdoor living advice']}
        image="/landing pages/Sauna1.JPG"
        url="/blog"
        type="website"
      />
      {/* Hero Section */}
      <section className="relative py-32 pt-[120px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-8">
              Outdoor Living Blog
            </h1>
            <p className="text-xl text-[#C5B8AB]/90 max-w-3xl mx-auto leading-relaxed">
              Expert insights, trends, and tips for creating the perfect outdoor living space in Northern Ireland.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 border-2 transition-all duration-300 rounded-lg ${
                  selectedCategory === category
                    ? 'border-[#C5B8AB] bg-[#C5B8AB]/10 text-white'
                    : 'border-[#C5B8AB]/30 text-[#C5B8AB] hover:border-[#C5B8AB] hover:bg-[#C5B8AB]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur-sm border border-[#C5B8AB]/20 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#C5B8AB]/90 text-[#222126] text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-[#C5B8AB]/60 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-[#C5B8AB]/80 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#C5B8AB] hover:text-white transition-colors font-medium group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 