import React, { useState, useEffect } from 'react';
import { FileText, Edit3, Trash2, Eye, Plus, Search, Filter } from 'lucide-react';
import { blogPosts, BlogPost } from '../../data/blogPosts';

interface BlogManagerProps {
  onEditBlog: (blog: BlogPost) => void;
  onDeleteBlog: (id: string) => void;
  onAddBlog: () => void;
}

const BlogManager: React.FC<BlogManagerProps> = ({ onEditBlog, onDeleteBlog, onAddBlog }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>(blogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'category'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const categories = ['All', 'Saunas', 'Grill Pods', 'Sheds', 'General'];

  const filteredBlogs = blogs
    .filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = filterCategory === 'All' || blog.category === filterCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'category':
          comparison = a.category.localeCompare(b.category);
          break;
        case 'date':
        default:
          comparison = new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      onDeleteBlog(id);
      setBlogs(prev => prev.filter(blog => blog.id !== id));
    }
  };

  const handleEdit = (blog: BlogPost) => {
    onEditBlog(blog);
  };

  const handleAdd = () => {
    // This will be handled by the parent component
    onAddBlog();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
          <FileText className="h-5 w-5 mr-2 text-blue-600" />
          Blog Management
        </h2>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Blog
        </button>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'category')}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
              <option value="category">Sort by Category</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center"
            >
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className="space-y-4">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No blogs found matching your criteria.
          </div>
        ) : (
          filteredBlogs.map(blog => (
            <div key={blog.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
                    {blog.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{blog.excerpt}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{blog.readTime}</span>
                    <span>•</span>
                    <span>{blog.publishedDate}</span>
                    <span>•</span>
                    <span>{blog.tags.slice(0, 3).join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => window.open(`/blog/${blog.slug}`, '_blank')}
                    className="p-2 text-gray-400 hover:text-gray-600"
                    title="View Blog"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleEdit(blog)}
                    className="p-2 text-gray-400 hover:text-blue-600"
                    title="Edit Blog"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="p-2 text-gray-400 hover:text-red-600"
                    title="Delete Blog"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Total: {blogs.length} blogs</span>
          <span>Filtered: {filteredBlogs.length} blogs</span>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;
