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
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome to the NMG Admin Dashboard</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Last updated</p>
            <p className="text-sm font-medium text-gray-900">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1">
        <nav className="flex space-x-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'overview'
                ? 'bg-[#222126] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all duration-200 flex items-center justify-center ${
              activeTab === 'analytics'
                ? 'bg-[#222126] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('blogs')}
            className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all duration-200 flex items-center justify-center ${
              activeTab === 'blogs'
                ? 'bg-[#222126] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <FileText className="h-4 w-4 mr-2" />
            Blogs
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat) => (
              <div key={stat.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`${stat.color} rounded-lg p-3 shadow-sm`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              <div className="text-sm text-gray-500">Manage your business</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/admin/leads"
                className="group flex items-center p-6 border border-gray-200 rounded-lg hover:border-[#222126] hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#222126]">View All Leads</h3>
                  <p className="text-sm text-gray-600">Manage customer inquiries</p>
                </div>
              </a>
              
              <button
                onClick={() => setActiveTab('analytics')}
                className="group flex items-center p-6 border border-gray-200 rounded-lg hover:border-[#222126] hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#222126]">View Analytics</h3>
                  <p className="text-sm text-gray-600">Website performance & insights</p>
                </div>
              </button>
              
              <div className="flex items-center p-6 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-500">Reports</h3>
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