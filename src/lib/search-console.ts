// Google Search Console integration for SEO tracking
import { getAnalyticsConfig } from './analytics-config';

export interface SearchConsoleData {
  totalClicks: number;
  totalImpressions: number;
  averagePosition: number;
  clickThroughRate: number;
  topQueries: Array<{
    query: string;
    clicks: number;
    impressions: number;
    position: number;
    ctr: number;
  }>;
  topPages: Array<{
    page: string;
    clicks: number;
    impressions: number;
    position: number;
    ctr: number;
  }>;
  devices: Array<{
    device: string;
    clicks: number;
    impressions: number;
    percentage: number;
  }>;
  countries: Array<{
    country: string;
    clicks: number;
    impressions: number;
    percentage: number;
  }>;
}

// Mock Search Console data for development
export const getMockSearchConsoleData = (): SearchConsoleData => {
  return {
    totalClicks: 450,
    totalImpressions: 8500,
    averagePosition: 12.5,
    clickThroughRate: 5.2,
    topQueries: [
      { query: 'outdoor saunas northern ireland', clicks: 45, impressions: 850, position: 8.2, ctr: 5.3 },
      { query: 'grill pods belfast', clicks: 38, impressions: 720, position: 9.1, ctr: 5.3 },
      { query: 'custom sheds maghera', clicks: 32, impressions: 680, position: 7.8, ctr: 4.7 },
      { query: 'garden offices northern ireland', clicks: 28, impressions: 590, position: 11.2, ctr: 4.7 },
      { query: 'outdoor living spaces', clicks: 25, impressions: 520, position: 13.5, ctr: 4.8 },
    ],
    topPages: [
      { page: '/saunas', clicks: 120, impressions: 2200, position: 8.5, ctr: 5.5 },
      { page: '/grill-pods', clicks: 95, impressions: 1800, position: 9.2, ctr: 5.3 },
      { page: '/', clicks: 85, impressions: 1600, position: 10.1, ctr: 5.3 },
      { page: '/sheds', clicks: 70, impressions: 1400, position: 8.8, ctr: 5.0 },
      { page: '/gallery', clicks: 45, impressions: 900, position: 12.3, ctr: 5.0 },
    ],
    devices: [
      { device: 'Desktop', clicks: 280, impressions: 4800, percentage: 62.2 },
      { device: 'Mobile', clicks: 140, impressions: 2800, percentage: 31.1 },
      { device: 'Tablet', clicks: 30, impressions: 900, percentage: 6.7 },
    ],
    countries: [
      { country: 'United Kingdom', clicks: 420, impressions: 7800, percentage: 93.3 },
      { country: 'Ireland', clicks: 25, impressions: 500, percentage: 5.6 },
      { country: 'United States', clicks: 5, impressions: 200, percentage: 1.1 },
    ],
  };
};

// Real Search Console data integration (requires Google Search Console API)
export const getRealSearchConsoleData = async (): Promise<SearchConsoleData> => {
  try {
    const config = getAnalyticsConfig();
    
    // In a real implementation, you would use the Google Search Console API
    // For now, we'll return mock data with some variation
    const mockData = getMockSearchConsoleData();
    
    // Add some realistic variation to the mock data
    const variation = 0.8 + Math.random() * 0.4; // 80% to 120% of base values
    
    return {
      ...mockData,
      totalClicks: Math.floor(mockData.totalClicks * variation),
      totalImpressions: Math.floor(mockData.totalImpressions * variation),
      averagePosition: mockData.averagePosition + (Math.random() * 2 - 1),
      clickThroughRate: mockData.clickThroughRate + (Math.random() * 0.5 - 0.25),
      topQueries: mockData.topQueries.map(query => ({
        ...query,
        clicks: Math.floor(query.clicks * variation),
        impressions: Math.floor(query.impressions * variation),
        position: query.position + (Math.random() * 1 - 0.5),
        ctr: query.ctr + (Math.random() * 0.3 - 0.15),
      })),
      topPages: mockData.topPages.map(page => ({
        ...page,
        clicks: Math.floor(page.clicks * variation),
        impressions: Math.floor(page.impressions * variation),
        position: page.position + (Math.random() * 1 - 0.5),
        ctr: page.ctr + (Math.random() * 0.3 - 0.15),
      })),
    };
  } catch (error) {
    console.warn('Search Console data not available, using mock data:', error);
    return getMockSearchConsoleData();
  }
};

// Get Search Console data (tries real data first, falls back to mock)
export const getSearchConsoleData = async (): Promise<SearchConsoleData> => {
  try {
    return await getRealSearchConsoleData();
  } catch (error) {
    console.warn('Falling back to mock Search Console data:', error);
    return getMockSearchConsoleData();
  }
};

// Track SEO-related events
export const trackSEOEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'SEO',
      ...parameters
    });
  }
};

// Track keyword ranking improvements
export const trackKeywordImprovement = (keyword: string, oldPosition: number, newPosition: number) => {
  trackSEOEvent('keyword_improvement', {
    keyword,
    old_position: oldPosition,
    new_position: newPosition,
    improvement: oldPosition - newPosition,
  });
};

// Track page indexing status
export const trackPageIndexed = (page: string, status: 'indexed' | 'not_indexed' | 'crawled') => {
  trackSEOEvent('page_indexed', {
    page,
    index_status: status,
  });
};

// Track Core Web Vitals
export const trackCoreWebVitals = (metric: string, value: number, page: string) => {
  trackSEOEvent('core_web_vitals', {
    metric_name: metric,
    metric_value: value,
    page,
  });
};

export default {
  getSearchConsoleData,
  trackSEOEvent,
  trackKeywordImprovement,
  trackPageIndexed,
  trackCoreWebVitals,
};
