import React, { useState } from 'react';
import { Plus, Wand2, FileText, Save, Eye, Trash2, Edit3, Loader2 } from 'lucide-react';
import { BlogPost } from '../../data/blogPosts';

interface BlogGeneratorProps {
  onBlogGenerated: (blog: BlogPost) => void;
}

const BlogGenerator: React.FC<BlogGeneratorProps> = ({ onBlogGenerated }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBlog, setGeneratedBlog] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    topic: '',
    location: '',
    category: 'Saunas',
    keywords: '',
    tone: 'professional',
    length: 'medium'
  });

  const categories = ['Saunas', 'Grill Pods', 'Sheds', 'General'];
  const tones = ['professional', 'friendly', 'technical', 'casual'];
  const lengths = ['short', 'medium', 'long'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const generateBlog = async () => {
    setIsGenerating(true);
    
    try {
      // Try AI generation first
      const aiBlog = await generateWithAI(formData);
      if (aiBlog) {
        setGeneratedBlog(aiBlog);
        setIsEditing(true);
      } else {
        // Fallback to template generation
        const templateBlog = generateWithTemplate(formData);
        setGeneratedBlog(templateBlog);
        setIsEditing(true);
      }
    } catch (error) {
      console.error('Error generating blog:', error);
      // Fallback to template
      const templateBlog = generateWithTemplate(formData);
      setGeneratedBlog(templateBlog);
      setIsEditing(true);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateWithAI = async (data: typeof formData): Promise<BlogPost | null> => {
    try {
      // Check if we have an API key
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      if (!apiKey) {
        console.log('No OpenAI API key found, using template fallback');
        return null;
      }

      const prompt = createAIPrompt(data);
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a professional content writer specializing in outdoor living, saunas, grill pods, and garden structures. Write SEO-optimized blog posts for Northern Ireland audiences.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 2000,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('AI API request failed');
      }

      const result = await response.json();
      const content = result.choices[0].message.content;
      
      return parseAIContent(content, data);
    } catch (error) {
      console.error('AI generation failed:', error);
      return null;
    }
  };

  const createAIPrompt = (data: typeof formData) => {
    return `Create a comprehensive blog post about "${data.topic}" in ${data.location}, Northern Ireland.

Requirements:
- Category: ${data.category}
- Tone: ${data.tone}
- Length: ${data.length}
- Keywords: ${data.keywords}
- Target audience: Northern Ireland homeowners
- Include local SEO optimization
- Add practical advice and costs
- Include call-to-action for NMG Outdoor Living

Format the response as JSON with these fields:
{
  "title": "SEO-optimized title",
  "excerpt": "Compelling excerpt",
  "content": "Full markdown content with headers, lists, and sections",
  "tags": ["tag1", "tag2", "tag3"],
  "seoKeywords": ["keyword1", "keyword2", "keyword3"],
  "seoDescription": "SEO meta description"
}`;
  };

  const parseAIContent = (content: string, data: typeof formData): BlogPost => {
    try {
      const parsed = JSON.parse(content);
      const slug = generateSlug(parsed.title);
      
      return {
        id: `generated-${Date.now()}`,
        slug,
        title: parsed.title,
        excerpt: parsed.excerpt,
        content: parsed.content,
        category: data.category,
        tags: parsed.tags || [],
        seoKeywords: parsed.seoKeywords || [],
        seoDescription: parsed.seoDescription,
        image: getDefaultImage(data.category),
        readTime: calculateReadTime(parsed.content),
        featured: false,
        author: 'NMG Outdoor Living Team',
        publishedDate: new Date().toISOString().split('T')[0]
      };
    } catch (error) {
      console.error('Error parsing AI content:', error);
      throw error;
    }
  };

  const generateWithTemplate = (data: typeof formData): BlogPost => {
    const templates = {
      Saunas: generateSaunaTemplate(data),
      'Grill Pods': generateGrillPodTemplate(data),
      Sheds: generateShedTemplate(data),
      General: generateGeneralTemplate(data)
    };

    const template = templates[data.category as keyof typeof templates];
    const slug = generateSlug(template.title);
    
    return {
      id: `generated-${Date.now()}`,
      slug,
      title: template.title,
      excerpt: template.excerpt,
      content: template.content,
      category: template.category,
      tags: template.tags,
      seoKeywords: template.seoKeywords,
      seoDescription: template.seoDescription,
      image: template.image,
      readTime: template.readTime,
      featured: template.featured,
      author: 'NMG Outdoor Living Team',
      publishedDate: new Date().toISOString().split('T')[0]
    };
  };

  const generateSaunaTemplate = (data: typeof formData) => {
    const title = `${data.topic} in ${data.location}: Complete Guide 2024`;
    return {
      title,
      excerpt: `Everything you need to know about ${data.topic.toLowerCase()} in ${data.location}. Expert advice, costs, and installation tips from NMG Outdoor Living.`,
      content: `# ${title}

${data.location} residents are discovering the benefits of ${data.topic.toLowerCase()}, creating personal wellness retreats in their gardens. With the city's unique climate and planning requirements, proper installation is crucial for optimal performance.

## Why Choose ${data.topic} in ${data.location}?

### Local Benefits
- **Property values**: Can increase home value by 8-12%
- **Wellness culture**: Growing interest in health and wellness
- **Garden space**: Many properties have suitable outdoor areas
- **Year-round use**: Perfect for Northern Ireland climate

## Popular Types in ${data.location}

### Basic Package
- **Features**: Essential features for beginners
- **Cost**: £5,000-8,000
- **Best for**: First-time buyers
- **Installation**: 1-2 weeks

### Premium Package
- **Features**: Advanced features and finishes
- **Cost**: £8,000-15,000
- **Best for**: Serious enthusiasts
- **Installation**: 2-3 weeks

## Installation Process

### Site Preparation
1. **Location selection**: Choose optimal location
2. **Foundation preparation**: Level, stable foundation
3. **Utility connections**: Plan electrical requirements
4. **Access preparation**: Clear access for delivery

### Timeline
- **Planning**: 1-2 weeks
- **Installation**: 1-2 weeks
- **Total**: 2-4 weeks

## Cost Breakdown for ${data.location}

### Basic Package
- **Unit**: £5,000-8,000
- **Installation**: £1,500-2,500
- **Utilities**: £1,000-1,500
- **Total**: £7,500-12,000

### Premium Package
- **Unit**: £8,000-15,000
- **Installation**: £2,500-4,000
- **Utilities**: £1,500-2,500
- **Finishing**: £2,000-3,000
- **Total**: £14,000-24,500

## Local Suppliers and Installation

### NMG Outdoor Living
- **Location**: Maghera, serving all ${data.location} areas
- **Experience**: 15+ years in outdoor structures
- **Services**: Design, supply, and installation
- **Warranty**: 5-year comprehensive warranty

## Getting Started

Contact NMG Outdoor Living for a free consultation:
- **Site visit**: Assess your space and requirements
- **Design advice**: Custom solutions for your needs
- **Cost estimate**: Transparent pricing
- **Timeline**: Realistic project schedule

## Conclusion

${data.topic} in ${data.location} offer the perfect combination of wellness, luxury, and property value. With proper planning, professional installation, and regular maintenance, your ${data.topic.toLowerCase()} will provide years of enjoyment and health benefits.

Contact NMG Outdoor Living today for expert advice on ${data.topic.toLowerCase()} in ${data.location}. Our team specializes in creating wellness spaces that perfectly suit the local climate and your specific requirements.`,
      category: 'Saunas',
      tags: [`${data.topic.toLowerCase()} ${data.location}`, 'wellness', 'installation', 'property value'],
      seoKeywords: [`${data.topic.toLowerCase()} ${data.location}`, 'wellness retreat', 'installation guide', 'property value'],
      seoDescription: `${data.topic} in ${data.location}. Expert installation, local planning advice, and custom design. Transform your garden into a wellness retreat with NMG Outdoor Living.`,
      image: '/landing pages/Sauna1.JPG',
      readTime: '7 min read',
      featured: false
    };
  };

  const generateGrillPodTemplate = (data: typeof formData) => {
    const title = `${data.topic} in ${data.location}: Custom Outdoor Kitchens`;
    return {
      title,
      excerpt: `Transform your ${data.location} garden with a custom ${data.topic.toLowerCase()}. Expert design, installation, and maintenance services.`,
      content: `# ${title}

${data.location} residents are embracing outdoor living with custom ${data.topic.toLowerCase()} that transform their gardens into year-round entertainment spaces.

## Why ${data.location} Loves ${data.topic}

### Perfect Climate
${data.location}'s temperate climate makes it ideal for outdoor cooking:
- **Mild summers**: Comfortable outdoor dining
- **Moderate winters**: Year-round use with proper heating
- **Low humidity**: Ideal for grilling and smoking
- **Stable weather**: Predictable conditions for outdoor structures

## Popular Styles in ${data.location}

### Traditional Style
- **Features**: Built-in grills, prep areas, storage
- **Best for**: Classic BBQ enthusiasts
- **Cost**: £8,000-15,000

### Modern Style
- **Features**: Full kitchen facilities, dining areas
- **Best for**: Serious outdoor cooking
- **Cost**: £15,000-35,000

## Installation Process

### Site Preparation
1. **Ground assessment**: Check for stability and drainage
2. **Utility connections**: Plan for gas, water, and electricity
3. **Access**: Ensure delivery and installation access
4. **Permits**: Obtain necessary permissions

## Cost Breakdown for ${data.location}

### Budget Option
- **Basic unit**: £5,000-8,000
- **Installation**: £1,500-2,500
- **Utilities**: £1,000-1,500
- **Total**: £7,500-12,000

### Premium Option
- **Premium unit**: £15,000-25,000
- **Installation**: £3,000-5,000
- **Utilities**: £2,000-3,000
- **Finishing**: £2,000-3,000
- **Total**: £22,000-36,000

## Local Suppliers and Installation

### NMG Outdoor Living
- **Location**: Maghera, serving all ${data.location} areas
- **Experience**: 15+ years in outdoor structures
- **Services**: Design, supply, and installation
- **Warranty**: 5-year comprehensive warranty

## Conclusion

${data.topic} in ${data.location} offer the perfect solution for outdoor cooking and entertaining. Contact NMG Outdoor Living today for expert advice and professional installation.`,
      category: 'Grill Pods',
      tags: [`${data.topic.toLowerCase()} ${data.location}`, 'outdoor kitchens', 'BBQ', 'entertainment'],
      seoKeywords: [`${data.topic.toLowerCase()} ${data.location}`, 'outdoor kitchens', 'BBQ pods', 'entertainment spaces'],
      seoDescription: `${data.topic} in ${data.location}. Custom outdoor kitchens with expert design, installation, and maintenance. Transform your garden into an entertainment space.`,
      image: '/landing pages/GrillPod1.JPG',
      readTime: '6 min read',
      featured: false
    };
  };

  const generateShedTemplate = (data: typeof formData) => {
    const title = `${data.topic} in ${data.location}: Professional Installation Guide`;
    return {
      title,
      excerpt: `Professional ${data.topic.toLowerCase()} installation services across ${data.location}. Expert installation, planning advice, and maintenance services.`,
      content: `# ${title}

Professional ${data.topic.toLowerCase()} installation is essential for ensuring your outdoor structure is built to last. With ${data.location}'s unique climate and planning requirements, proper installation is crucial.

## Why Professional Installation Matters

### Quality Assurance
- **Expert knowledge**: Professional installers understand local conditions
- **Proper techniques**: Correct installation methods ensure durability
- **Quality materials**: Professional-grade materials and tools
- **Warranty protection**: Installation warranty included

## Types of ${data.topic} We Install

### Basic ${data.topic}
- **Features**: Essential features for everyday use
- **Cost**: £3,000-6,000
- **Best for**: General use
- **Installation**: 1-2 days

### Premium ${data.topic}
- **Features**: Advanced features and finishes
- **Cost**: £6,000-12,000
- **Best for**: Professional use
- **Installation**: 2-3 days

## Installation Process

### Pre-Installation
1. **Site survey**: Comprehensive site assessment
2. **Planning**: Detailed installation plan
3. **Permits**: Planning permission assistance
4. **Preparation**: Site preparation requirements

### Installation Timeline
- **Planning**: 1-2 weeks
- **Installation**: 1-3 days
- **Total**: 2-4 weeks

## Cost Breakdown for ${data.location}

### Basic Installation
- **Unit**: £3,000-6,000
- **Installation**: £1,000-2,000
- **Utilities**: £500-1,000
- **Total**: £4,500-9,000

### Premium Installation
- **Unit**: £6,000-12,000
- **Installation**: £2,000-4,000
- **Utilities**: £1,000-2,000
- **Finishing**: £1,000-2,000
- **Total**: £10,000-20,000

## Local Suppliers and Installation

### NMG Outdoor Living
- **Location**: Maghera, serving all ${data.location} areas
- **Experience**: 15+ years in outdoor structures
- **Services**: Design, supply, and installation
- **Warranty**: 5-year comprehensive warranty

## Conclusion

Professional ${data.topic.toLowerCase()} installation in ${data.location} is essential for ensuring your outdoor structure is built to last. Contact NMG Outdoor Living today for expert installation services.`,
      category: 'Sheds',
      tags: [`${data.topic.toLowerCase()} ${data.location}`, 'professional installation', 'garden offices', 'custom sheds'],
      seoKeywords: [`${data.topic.toLowerCase()} ${data.location}`, 'professional installation', 'garden offices', 'installation guide'],
      seoDescription: `${data.topic} in ${data.location}. Professional installation services with expert guidance, quality materials, and ongoing support.`,
      image: '/Shed1.png',
      readTime: '6 min read',
      featured: false
    };
  };

  const generateGeneralTemplate = (data: typeof formData) => {
    const title = `${data.topic} in ${data.location}: Complete Guide`;
    return {
      title,
      excerpt: `Everything you need to know about ${data.topic.toLowerCase()} in ${data.location}. Expert advice, costs, and professional services.`,
      content: `# ${title}

${data.location} residents are discovering the benefits of ${data.topic.toLowerCase()}, creating versatile outdoor spaces that enhance their homes and lifestyles.

## Why Choose ${data.topic} in ${data.location}?

### Local Benefits
- **Property values**: Can increase home value by 10-15%
- **Lifestyle enhancement**: Improved quality of life
- **Year-round use**: Perfect for Northern Ireland climate
- **Custom solutions**: Tailored to your specific needs

## Popular Options in ${data.location}

### Basic Package
- **Features**: Essential features for everyday use
- **Cost**: £5,000-10,000
- **Best for**: First-time buyers
- **Installation**: 1-2 weeks

### Premium Package
- **Features**: Advanced features and finishes
- **Cost**: £10,000-20,000
- **Best for**: Serious enthusiasts
- **Installation**: 2-3 weeks

## Installation Process

### Site Preparation
1. **Location selection**: Choose optimal location
2. **Foundation preparation**: Level, stable foundation
3. **Utility connections**: Plan electrical requirements
4. **Access preparation**: Clear access for delivery

### Timeline
- **Planning**: 1-2 weeks
- **Installation**: 1-2 weeks
- **Total**: 2-4 weeks

## Cost Breakdown for ${data.location}

### Basic Package
- **Unit**: £5,000-10,000
- **Installation**: £2,000-3,000
- **Utilities**: £1,000-1,500
- **Total**: £8,000-14,500

### Premium Package
- **Unit**: £10,000-20,000
- **Installation**: £3,000-5,000
- **Utilities**: £1,500-2,500
- **Finishing**: £2,000-3,000
- **Total**: £16,500-30,500

## Local Suppliers and Installation

### NMG Outdoor Living
- **Location**: Maghera, serving all ${data.location} areas
- **Experience**: 15+ years in outdoor structures
- **Services**: Design, supply, and installation
- **Warranty**: 5-year comprehensive warranty

## Getting Started

Contact NMG Outdoor Living for a free consultation:
- **Site visit**: Assess your space and requirements
- **Design advice**: Custom solutions for your needs
- **Cost estimate**: Transparent pricing
- **Timeline**: Realistic project schedule

## Conclusion

${data.topic} in ${data.location} offer the perfect solution for enhancing your outdoor living space. Contact NMG Outdoor Living today for expert advice and professional installation.`,
      category: 'General',
      tags: [`${data.topic.toLowerCase()} ${data.location}`, 'outdoor living', 'custom design', 'installation'],
      seoKeywords: [`${data.topic.toLowerCase()} ${data.location}`, 'outdoor living', 'custom design', 'installation guide'],
      seoDescription: `${data.topic} in ${data.location}. Complete guide with expert advice, costs, and professional installation services.`,
      image: '/Shed1.png',
      readTime: '6 min read',
      featured: false
    };
  };

  const getDefaultImage = (category: string) => {
    const images = {
      Saunas: '/landing pages/Sauna1.JPG',
      'Grill Pods': '/landing pages/GrillPod1.JPG',
      Sheds: '/Shed1.png',
      General: '/Shed1.png'
    };
    return images[category as keyof typeof images] || '/Shed1.png';
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleSave = () => {
    if (generatedBlog) {
      onBlogGenerated(generatedBlog);
      setGeneratedBlog(null);
      setIsEditing(false);
      setFormData({
        topic: '',
        location: '',
        category: 'Saunas',
        keywords: '',
        tone: 'professional',
        length: 'medium'
      });
    }
  };

  const handleEdit = (field: keyof BlogPost, value: string | string[] | boolean) => {
    if (generatedBlog) {
      setGeneratedBlog(prev => prev ? {
        ...prev,
        [field]: value,
        updatedAt: new Date().toISOString()
      } : null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
          <Wand2 className="h-5 w-5 mr-2 text-blue-600" />
          Blog Generator
        </h2>
        <div className="text-sm text-gray-500">
          {isGenerating ? 'Generating...' : 'AI-Powered Content Creation'}
        </div>
      </div>

      {!isEditing ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Topic
              </label>
              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                placeholder="e.g., Outdoor Saunas, Grill Pods, Garden Offices"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Belfast, Derry, Antrim"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

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
                Tone
              </label>
              <select
                name="tone"
                value={formData.tone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {tones.map(tone => (
                  <option key={tone} value={tone}>{tone}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Length
              </label>
              <select
                name="length"
                value={formData.length}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {lengths.map(length => (
                  <option key={length} value={length}>{length}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Keywords (comma-separated)
            </label>
            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
              placeholder="e.g., outdoor living, wellness, installation, costs"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={generateBlog}
            disabled={!formData.topic || !formData.location || isGenerating}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isGenerating ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Wand2 className="h-4 w-4 mr-2" />
            )}
            {isGenerating ? 'Generating Blog...' : 'Generate Blog Post'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Generated Blog Post</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 flex items-center"
              >
                <Save className="h-4 w-4 mr-1" />
                Save Blog
              </button>
            </div>
          </div>

          {generatedBlog && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={generatedBlog.title}
                  onChange={(e) => handleEdit('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt
                </label>
                <textarea
                  value={generatedBlog.excerpt}
                  onChange={(e) => handleEdit('excerpt', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SEO Description
                </label>
                <textarea
                  value={generatedBlog.seoDescription}
                  onChange={(e) => handleEdit('seoDescription', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={generatedBlog.tags.join(', ')}
                  onChange={(e) => handleEdit('tags', e.target.value.split(',').map(tag => tag.trim()))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content Preview
                </label>
                <div className="border border-gray-300 rounded-md p-4 max-h-64 overflow-y-auto bg-gray-50">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700">
                    {generatedBlog.content.substring(0, 500)}...
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogGenerator;
