// Google Analytics 4 integration for admin dashboard
export interface AnalyticsData {
  pageViews: number;
  users: number;
  sessions: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{
    page: string;
    views: number;
    title: string;
  }>;
  trafficSources: Array<{
    source: string;
    users: number;
    percentage: number;
  }>;
  conversions: {
    leads: number;
    estimateRequests: number;
    contactForms: number;
  };
  realTimeUsers: number;
}

export interface AnalyticsTimeRange {
  startDate: string;
  endDate: string;
}

// Mock analytics data for development
export const getMockAnalyticsData = (timeRange: AnalyticsTimeRange): AnalyticsData => {
  const daysDiff = Math.ceil((new Date(timeRange.endDate).getTime() - new Date(timeRange.startDate).getTime()) / (1000 * 60 * 60 * 24));
  const multiplier = Math.max(1, daysDiff);
  
  return {
    pageViews: Math.floor(1250 * multiplier + Math.random() * 200),
    users: Math.floor(180 * multiplier + Math.random() * 50),
    sessions: Math.floor(220 * multiplier + Math.random() * 30),
    bounceRate: 45.2 + (Math.random() * 10 - 5),
    avgSessionDuration: 2.5 + (Math.random() * 1 - 0.5),
    topPages: [
      { page: '/', views: Math.floor(450 * multiplier), title: 'Home' },
      { page: '/saunas', views: Math.floor(320 * multiplier), title: 'Saunas' },
      { page: '/grill-pods', views: Math.floor(280 * multiplier), title: 'Grill Pods' },
      { page: '/sheds', views: Math.floor(200 * multiplier), title: 'Sheds' },
      { page: '/gallery', views: Math.floor(150 * multiplier), title: 'Gallery' },
    ],
    trafficSources: [
      { source: 'Google Search', users: Math.floor(120 * multiplier), percentage: 66.7 },
      { source: 'Direct', users: Math.floor(35 * multiplier), percentage: 19.4 },
      { source: 'Social Media', users: Math.floor(15 * multiplier), percentage: 8.3 },
      { source: 'Referral', users: Math.floor(10 * multiplier), percentage: 5.6 },
    ],
    conversions: {
      leads: Math.floor(15 * multiplier + Math.random() * 5),
      estimateRequests: Math.floor(8 * multiplier + Math.random() * 3),
      contactForms: Math.floor(7 * multiplier + Math.random() * 2),
    },
    realTimeUsers: Math.floor(Math.random() * 5) + 1,
  };
};

// Real Google Analytics integration (requires Google Analytics Reporting API)
export const getRealAnalyticsData = async (timeRange: AnalyticsTimeRange): Promise<AnalyticsData> => {
  // This would integrate with Google Analytics Reporting API
  // For now, return mock data
  return getMockAnalyticsData(timeRange);
};

// Get analytics data for different time periods
export const getAnalyticsData = async (period: '7d' | '30d' | '90d' = '7d'): Promise<AnalyticsData> => {
  const endDate = new Date();
  const startDate = new Date();
  
  switch (period) {
    case '7d':
      startDate.setDate(endDate.getDate() - 7);
      break;
    case '30d':
      startDate.setDate(endDate.getDate() - 30);
      break;
    case '90d':
      startDate.setDate(endDate.getDate() - 90);
      break;
  }
  
  const timeRange: AnalyticsTimeRange = {
    startDate: startDate.toISOString().split('T')[0],
    endDate: endDate.toISOString().split('T')[0],
  };
  
  // Check if we're in development or production
  if (import.meta.env.DEV) {
    return getMockAnalyticsData(timeRange);
  }
  
  return getRealAnalyticsData(timeRange);
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track lead conversion
export const trackLeadConversion = (source: string, product?: string) => {
  trackEvent('lead_conversion', {
    source,
    product,
    value: 1,
    currency: 'GBP'
  });
};

// Track estimate request
export const trackEstimateRequest = (product: string, location: string) => {
  trackEvent('estimate_request', {
    product,
    location,
    value: 1,
    currency: 'GBP'
  });
};

// Track page view
export const trackPageView = (page: string, title: string) => {
  trackEvent('page_view', {
    page_title: title,
    page_location: page
  });
};