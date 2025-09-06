import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  TrendingUp, 
  ExternalLink,
  RefreshCw,
  Search,
  Target,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';
import { getAnalyticsData, AnalyticsData } from '../../lib/analytics';

const AnalyticsDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d'>('7d');
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [dataSource, setDataSource] = useState<'real' | 'mock'>('mock');

  useEffect(() => {
    fetchAnalyticsData();
  }, [selectedPeriod]);

  const fetchAnalyticsData = async () => {
    setLoading(true);
    try {
      const data = await getAnalyticsData(selectedPeriod);
      setAnalyticsData(data);
      setLastUpdated(new Date());
      
      // Check if we're using real data (on live site with GA4 loaded)
      const isLiveSite = window.location.hostname === 'nmgpvcsupplies.co.uk';
      const hasGtag = typeof window !== 'undefined' && window.gtag;
      setDataSource(isLiveSite && hasGtag ? 'real' : 'mock');
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#222126]"></div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Unable to load analytics data</p>
        <button 
          onClick={fetchAnalyticsData}
          className="mt-4 px-4 py-2 bg-[#222126] text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Page Views',
      value: formatNumber(analyticsData.pageViews),
      icon: Eye,
      color: 'bg-blue-500',
      change: '+12%',
      changeType: 'positive' as const,
    },
    {
      title: 'Users',
      value: formatNumber(analyticsData.users),
      icon: Users,
      color: 'bg-green-500',
      change: '+8%',
      changeType: 'positive' as const,
    },
    {
      title: 'Sessions',
      value: formatNumber(analyticsData.sessions),
      icon: BarChart3,
      color: 'bg-purple-500',
      change: '+15%',
      changeType: 'positive' as const,
    },
    {
      title: 'Bounce Rate',
      value: `${analyticsData.bounceRate.toFixed(1)}%`,
      icon: MousePointer,
      color: 'bg-orange-500',
      change: '-3%',
      changeType: 'positive' as const,
    },
    {
      title: 'Avg. Session',
      value: formatDuration(analyticsData.avgSessionDuration * 60),
      icon: Clock,
      color: 'bg-indigo-500',
      change: '+5%',
      changeType: 'positive' as const,
    },
    {
      title: 'Real-time Users',
      value: analyticsData.realTimeUsers.toString(),
      icon: TrendingUp,
      color: 'bg-red-500',
      change: 'Live',
      changeType: 'neutral' as const,
    },
  ];

  const searchConsoleCards = [
    {
      title: 'Search Clicks',
      value: formatNumber(analyticsData.searchConsole.totalClicks),
      icon: Search,
      color: 'bg-blue-600',
      change: '+18%',
      changeType: 'positive' as const,
    },
    {
      title: 'Impressions',
      value: formatNumber(analyticsData.searchConsole.totalImpressions),
      icon: Eye,
      color: 'bg-green-600',
      change: '+22%',
      changeType: 'positive' as const,
    },
    {
      title: 'Avg Position',
      value: analyticsData.searchConsole.averagePosition.toFixed(1),
      icon: Target,
      color: 'bg-purple-600',
      change: '-1.2',
      changeType: 'positive' as const,
    },
    {
      title: 'CTR',
      value: `${analyticsData.searchConsole.clickThroughRate.toFixed(1)}%`,
      icon: TrendingUp,
      color: 'bg-orange-600',
      change: '+0.3%',
      changeType: 'positive' as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              dataSource === 'real' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {dataSource === 'real' ? 'Live Data' : 'Demo Data'}
            </span>
          </div>
          <p className="text-gray-600">
            Last updated: {lastUpdated.toLocaleTimeString()}
            {dataSource === 'mock' && (
              <span className="ml-2 text-sm text-yellow-600">
                (Using demo data - will switch to live data when Google Analytics is ready)
              </span>
            )}
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          {/* Time Period Selector */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            {(['7d', '30d', '90d'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  selectedPeriod === period
                    ? 'bg-white text-[#222126] shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period === '7d' ? '7 days' : period === '30d' ? '30 days' : '90 days'}
              </button>
            ))}
          </div>
          
          {/* Refresh Button */}
          <button
            onClick={fetchAnalyticsData}
            className="p-2 text-gray-600 hover:text-[#222126] transition-colors"
            title="Refresh data"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Analytics Stats Grid */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Website Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statCards.map((stat) => (
            <div key={stat.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${stat.color} rounded-lg p-3`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 
                    'text-gray-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Console Stats Grid */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Search Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {searchConsoleCards.map((stat) => (
            <div key={stat.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${stat.color} rounded-lg p-3`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 
                    'text-gray-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
          <div className="space-y-3">
            {analyticsData.topPages.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{page.title}</p>
                    <p className="text-xs text-gray-500">{page.page}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">{formatNumber(page.views)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {analyticsData.trafficSources.map((source) => (
              <div key={source.source} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{source.source}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">{formatNumber(source.users)}</span>
                  <span className="text-xs text-gray-500">({source.percentage.toFixed(1)}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Console Data */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Search Console Insights</h3>
        
        {/* Top Search Queries */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Top Search Queries</h4>
          <div className="space-y-3">
            {analyticsData.searchConsole.topQueries.map((query, index) => (
              <div key={query.query} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{query.query}</p>
                    <p className="text-xs text-gray-500">Position: {query.position.toFixed(1)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{formatNumber(query.clicks)} clicks</div>
                  <div className="text-xs text-gray-500">{query.ctr.toFixed(1)}% CTR</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Performance by Page */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Search Performance by Page</h4>
          <div className="space-y-3">
            {analyticsData.searchConsole.topPages.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{page.page}</p>
                    <p className="text-xs text-gray-500">Position: {page.position.toFixed(1)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{formatNumber(page.clicks)} clicks</div>
                  <div className="text-xs text-gray-500">{page.ctr.toFixed(1)}% CTR</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device & Country Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Devices */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Search Traffic by Device</h4>
            <div className="space-y-3">
              {analyticsData.searchConsole.devices.map((device) => (
                <div key={device.device} className="flex items-center justify-between">
                  <div className="flex items-center">
                    {device.device === 'Desktop' && <Monitor className="h-4 w-4 text-gray-500 mr-2" />}
                    {device.device === 'Mobile' && <Smartphone className="h-4 w-4 text-gray-500 mr-2" />}
                    {device.device === 'Tablet' && <Monitor className="h-4 w-4 text-gray-500 mr-2" />}
                    <span className="text-sm font-medium text-gray-900">{device.device}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{formatNumber(device.clicks)}</div>
                    <div className="text-xs text-gray-500">{device.percentage.toFixed(1)}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Countries */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Search Traffic by Country</h4>
            <div className="space-y-3">
              {analyticsData.searchConsole.countries.map((country) => (
                <div key={country.country} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-900">{country.country}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{formatNumber(country.clicks)}</div>
                    <div className="text-xs text-gray-500">{country.percentage.toFixed(1)}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Conversions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#222126] mb-2">
              {analyticsData.conversions.leads}
            </div>
            <div className="text-sm text-gray-600">Total Leads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {analyticsData.conversions.estimateRequests}
            </div>
            <div className="text-sm text-gray-600">Estimate Requests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {analyticsData.conversions.contactForms}
            </div>
            <div className="text-sm text-gray-600">Contact Forms</div>
          </div>
        </div>
      </div>

      {/* Google Analytics & Search Console Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-blue-900">Google Analytics</h4>
              <p className="text-sm text-blue-700">
                View detailed analytics in Google Analytics dashboard
              </p>
            </div>
            <a
              href="https://analytics.google.com/analytics/web/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Open GA4
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-green-900">Google Search Console</h4>
              <p className="text-sm text-green-700">
                View search performance and SEO insights
              </p>
            </div>
            <a
              href="https://search.google.com/search-console/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
            >
              Open GSC
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
