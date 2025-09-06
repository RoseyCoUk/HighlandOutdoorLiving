import React, { useState, useEffect } from 'react';
import { Save, Eye, ArrowLeft, Image, Tag, Calendar } from 'lucide-react';
import { BlogPost } from '../../data/blogPosts';

interface BlogEditorProps {
  blog: BlogPost | null;
  onSave: (blog: BlogPost) => void;
  onCancel: () => void;
  onPreview: (blog: BlogPost) => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ blog, onSave, onCancel, onPreview }) => {
  const [formData, setFormData] = useState<BlogPost>({
    id: '',
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    category: 'Saunas',
    tags: [],
    seoKeywords: [],
    seoDescription: '',
    image: '',
    readTime: '',
    featured: false,
    author: 'NMG Outdoor Living Team',
    publishedDate: new Date().toISOString().split('T')[0],
    createdAt: '',
    updatedAt: ''
  });

  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    if (blog) {
      setFormData(blog);
    }
  }, [blog]);

  const categories = ['Saunas', 'Grill Pods', 'Sheds', 'General'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (name === 'tags' || name === 'seoKeywords') {
      const arrayValue = value.split(',').map(item => item.trim()).filter(item => item);
      setFormData(prev => ({
        ...prev,
        [name]: arrayValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
      readTime: calculateReadTime(prev.content)
    }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    setFormData(prev => ({
      ...prev,
      content,
      readTime: calculateReadTime(content)
    }));
  };

  const handleSave = () => {
    const updatedBlog = {
      ...formData,
      updatedAt: new Date().toISOString()
    };
    onSave(updatedBlog);
  };

  const handlePreview = () => {
    setIsPreview(!isPreview);
    if (!isPreview) {
      onPreview(formData);
    }
  };

  if (isPreview) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Blog Preview</h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePreview}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Edit
            </button>
            <button
              onClick={() => window.open(`/blog/${formData.slug}`, '_blank')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
            >
              <Eye className="h-4 w-4 mr-2" />
              Open in New Tab
            </button>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{formData.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{formData.excerpt}</p>
          <div className="text-sm text-gray-500 mb-6">
            <span className="mr-4">{formData.readTime}</span>
            <span className="mr-4">•</span>
            <span className="mr-4">{formData.publishedDate}</span>
            <span className="mr-4">•</span>
            <span>{formData.category}</span>
          </div>
          <div className="whitespace-pre-wrap text-gray-700">
            {formData.content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Edit Blog Post</h2>
        <div className="flex space-x-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Cancel
          </button>
          <button
            onClick={handlePreview}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
          >
            <Save className="h-4 w-4 mr-2" />
            Save
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleTitleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Slug
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="blog-slug"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Excerpt *
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog excerpt"
          />
        </div>

        {/* SEO Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SEO Description
            </label>
            <textarea
              name="seoDescription"
              value={formData.seoDescription}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="SEO meta description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="/path/to/image.jpg"
            />
          </div>
        </div>

        {/* Tags and Keywords */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags.join(', ')}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tag1, tag2, tag3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SEO Keywords (comma-separated)
            </label>
            <input
              type="text"
              name="seoKeywords"
              value={formData.seoKeywords.join(', ')}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="keyword1, keyword2, keyword3"
            />
          </div>
        </div>

        {/* Category and Settings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Published Date
            </label>
            <input
              type="date"
              name="publishedDate"
              value={formData.publishedDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">Featured</span>
            </label>
          </div>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content (Markdown) *
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleContentChange}
            rows={20}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
            placeholder="Enter blog content in Markdown format..."
          />
          <div className="mt-2 text-sm text-gray-500">
            {formData.readTime} • {formData.content.split(/\s+/).length} words
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
