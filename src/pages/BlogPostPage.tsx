import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import { getBlogPostBySlug } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Get the blog post data based on the slug
  const blogPost = getBlogPostBySlug(slug || '');

  // If blog post is not found, show 404
  if (!blogPost) {
    return (
      <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Blog Post Not Found</h1>
          <p className="text-[#C5B8AB]/80 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#C5B8AB] text-[#222126] font-semibold rounded-lg hover:bg-white transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      <SEOHead 
        title={blogPost.title}
        description={blogPost.metaDescription}
        keywords={blogPost.metaKeywords}
        image={blogPost.image}
        url={`/blog/${blogPost.slug}`}
        type="article"
        author={blogPost.author}
        publishedTime={blogPost.date}
        section={blogPost.category}
        tags={blogPost.tags}
      />
      {/* Hero Section */}
      <section className="relative py-32 pt-[120px]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center text-[#C5B8AB]/80 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-[#C5B8AB]/60 mb-6">
              <span className="px-3 py-1 bg-[#C5B8AB]/20 text-[#C5B8AB] rounded-full">
                {blogPost.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blogPost.date).toLocaleDateString('en-GB', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>

            <p className="text-xl text-[#C5B8AB]/80 leading-relaxed mb-8">
              {blogPost.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="/ngmlogo.jpg"
                  alt="NMG Outdoor Living"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-white font-medium">{blogPost.author}</p>
                  <p className="text-[#C5B8AB]/60 text-sm">NMG Outdoor Living</p>
                </div>
              </div>

              <button className="flex items-center space-x-2 text-[#C5B8AB]/80 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-[#C5B8AB]/90 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#C5B8AB]/20">
            <div className="flex items-center space-x-2 mb-4">
              <Tag className="w-4 h-4 text-[#C5B8AB]/60" />
              <span className="text-[#C5B8AB]/60">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#C5B8AB]/10 text-[#C5B8AB] rounded-full text-sm hover:bg-[#C5B8AB]/20 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#C5B8AB]/10 to-[#C5B8AB]/5 border border-[#C5B8AB]/20 rounded-lg text-center">
            <h3 className="text-2xl font-light text-white mb-4">
              Ready to Transform Your Outdoor Space?
            </h3>
            <p className="text-[#C5B8AB]/80 mb-6">
              Get in touch with our team to discuss your outdoor living project and receive a bespoke quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#C5B8AB] text-[#222126] font-semibold rounded-lg hover:bg-white transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center px-8 py-3 border-2 border-[#C5B8AB] text-[#C5B8AB] font-semibold rounded-lg hover:bg-[#C5B8AB] hover:text-[#222126] transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage; 