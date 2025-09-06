import React, { useState, useEffect } from 'react';
import { supabase, Lead } from '../../lib/supabase';
import { Users, TrendingUp, Clock, CheckCircle, BarChart3, FileText, Plus } from 'lucide-react';
import AnalyticsDashboard from './AnalyticsDashboard';
import BlogGenerator from './BlogGenerator';
import BlogManager from './BlogManager';
import BlogEditor from './BlogEditor';
import { BlogPost } from '../../data/blogPosts';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    thisWeekLeads: 0,
    closedLeads: 0,
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'blogs'>('overview');
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [showBlogGenerator, setShowBlogGenerator] = useState(false);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Get total leads
      const { count: totalLeads } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true });

      // Get new leads
      const { count: newLeads } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'New');

      // Get this week's leads
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      
      const { count: thisWeekLeads } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', oneWeekAgo.toISOString());

      // Get closed leads
      const { count: closedLeads } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'Closed');

      setStats({
        totalLeads: totalLeads || 0,
        newLeads: newLeads || 0,
        thisWeekLeads: thisWeekLeads || 0,
        closedLeads: closedLeads || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlogGenerated = (blog: BlogPost) => {
    // In a real app, you'd save this to your database
    console.log('Blog generated:', blog);
    setShowBlogGenerator(false);
    // You could also update the blog list here
  };

  const handleEditBlog = (blog: BlogPost) => {
    setEditingBlog(blog);
  };

  const handleDeleteBlog = (id: string) => {
    // In a real app, you'd delete from your database
    console.log('Delete blog:', id);
  };

  const handleAddBlog = () => {
    setShowBlogGenerator(true);
  };

  const handleSaveBlog = (blog: BlogPost) => {
    // In a real app, you'd save to your database
    console.log('Save blog:', blog);
    setEditingBlog(null);
  };

  const handlePreviewBlog = (blog: BlogPost) => {
    // Open blog in new tab for preview
    window.open(`/blog/${blog.slug}`, '_blank');
  };

  const statCards = [
    {
      title: 'Total Leads',
      value: stats.totalLeads,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'New Leads',
      value: stats.newLeads,
      icon: Clock,
      color: 'bg-yellow-500',
    },
    {
      title: 'This Week',
      value: stats.thisWeekLeads,
      icon: TrendingUp,
      color: 'bg-green-500',
    },
    {
      title: 'Closed',
      value: stats.closedLeads,
      icon: CheckCircle,
      color: 'bg-purple-500',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#222126]"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to the NMG Admin Dashboard</p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-[#222126] text-[#222126]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === 'analytics'
                  ? 'border-[#222126] text-[#222126]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('blogs')}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === 'blogs'
                  ? 'border-[#222126] text-[#222126]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FileText className="h-4 w-4 mr-2" />
              Blogs
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat) => (
              <div key={stat.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className={`${stat.color} rounded-lg p-3`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/admin/leads"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Users className="h-8 w-8 text-[#222126] mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">View All Leads</h3>
                  <p className="text-sm text-gray-600">Manage customer inquiries</p>
                </div>
              </a>
              
              <button
                onClick={() => setActiveTab('analytics')}
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <BarChart3 className="h-8 w-8 text-[#222126] mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">View Analytics</h3>
                  <p className="text-sm text-gray-600">Website performance & insights</p>
                </div>
              </button>
              
              <div className="flex items-center p-4 border border-gray-200 rounded-lg opacity-50">
                <CheckCircle className="h-8 w-8 text-gray-400 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-500">Reports</h3>
                  <p className="text-sm text-gray-400">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'analytics' && <AnalyticsDashboard />}

      {activeTab === 'blogs' && (
        <div className="space-y-6">
          {editingBlog ? (
            <BlogEditor
              blog={editingBlog}
              onSave={handleSaveBlog}
              onCancel={() => setEditingBlog(null)}
              onPreview={handlePreviewBlog}
            />
          ) : showBlogGenerator ? (
            <BlogGenerator
              onBlogGenerated={handleBlogGenerated}
            />
          ) : (
            <BlogManager
              onEditBlog={handleEditBlog}
              onDeleteBlog={handleDeleteBlog}
              onAddBlog={handleAddBlog}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;