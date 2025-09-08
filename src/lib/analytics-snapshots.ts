// Analytics Snapshots Service for Daily Growth Tracking
import { supabase } from './supabase';

export interface AnalyticsSnapshot {
  id?: string;
  date: string;
  page_views: number;
  users: number;
  sessions: number;
  bounce_rate: number;
  avg_session_duration: number;
  real_time_users: number;
  search_clicks: number;
  search_impressions: number;
  avg_position: number;
  click_through_rate: number;
  leads: number;
  estimate_requests: number;
  contact_forms: number;
  top_pages: any[];
  top_queries: any[];
  traffic_sources: any[];
  devices: any[];
  countries: any[];
  utm_sources: any[];
  created_at?: string;
  updated_at?: string;
}

// Store daily analytics snapshot
export const storeAnalyticsSnapshot = async (data: Omit<AnalyticsSnapshot, 'id' | 'created_at' | 'updated_at'>): Promise<{ success: boolean; error?: string }> => {
  try {
    const { error } = await supabase
      .from('analytics_snapshots')
      .upsert(data, { onConflict: 'date' });

    if (error) {
      console.error('Error storing analytics snapshot:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error storing analytics snapshot:', error);
    return { success: false, error: 'Failed to store analytics snapshot' };
  }
};

// Get analytics snapshots for date range
export const getAnalyticsSnapshots = async (
  startDate: string,
  endDate: string
): Promise<{ data: AnalyticsSnapshot[] | null; error?: string }> => {
  try {
    const { data, error } = await supabase
      .from('analytics_snapshots')
      .select('*')
      .gte('date', startDate)
      .lte('date', endDate)
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching analytics snapshots:', error);
      return { data: null, error: error.message };
    }

    return { data, error: undefined };
  } catch (error) {
    console.error('Error fetching analytics snapshots:', error);
    return { data: null, error: 'Failed to fetch analytics snapshots' };
  }
};

// Get growth metrics (comparing current period to previous period)
export const getGrowthMetrics = async (
  currentStartDate: string,
  currentEndDate: string,
  previousStartDate: string,
  previousEndDate: string
): Promise<{
  pageViewsGrowth: number;
  usersGrowth: number;
  sessionsGrowth: number;
  leadsGrowth: number;
  searchClicksGrowth: number;
  avgPositionChange: number;
}> => {
  try {
    // Get current period data
    const { data: currentData } = await getAnalyticsSnapshots(currentStartDate, currentEndDate);
    const { data: previousData } = await getAnalyticsSnapshots(previousStartDate, previousEndDate);

    if (!currentData || !previousData) {
      return {
        pageViewsGrowth: 0,
        usersGrowth: 0,
        sessionsGrowth: 0,
        leadsGrowth: 0,
        searchClicksGrowth: 0,
        avgPositionChange: 0,
      };
    }

    // Calculate totals for current period
    const currentTotals = currentData.reduce((acc, snapshot) => ({
      pageViews: acc.pageViews + snapshot.page_views,
      users: acc.users + snapshot.users,
      sessions: acc.sessions + snapshot.sessions,
      leads: acc.leads + snapshot.leads,
      searchClicks: acc.searchClicks + snapshot.search_clicks,
      avgPosition: acc.avgPosition + snapshot.avg_position,
    }), { pageViews: 0, users: 0, sessions: 0, leads: 0, searchClicks: 0, avgPosition: 0 });

    // Calculate totals for previous period
    const previousTotals = previousData.reduce((acc, snapshot) => ({
      pageViews: acc.pageViews + snapshot.page_views,
      users: acc.users + snapshot.users,
      sessions: acc.sessions + snapshot.sessions,
      leads: acc.leads + snapshot.leads,
      searchClicks: acc.searchClicks + snapshot.search_clicks,
      avgPosition: acc.avgPosition + snapshot.avg_position,
    }), { pageViews: 0, users: 0, sessions: 0, leads: 0, searchClicks: 0, avgPosition: 0 });

    // Calculate growth percentages
    const calculateGrowth = (current: number, previous: number) => {
      if (previous === 0) return current > 0 ? 100 : 0;
      return ((current - previous) / previous) * 100;
    };

    return {
      pageViewsGrowth: calculateGrowth(currentTotals.pageViews, previousTotals.pageViews),
      usersGrowth: calculateGrowth(currentTotals.users, previousTotals.users),
      sessionsGrowth: calculateGrowth(currentTotals.sessions, previousTotals.sessions),
      leadsGrowth: calculateGrowth(currentTotals.leads, previousTotals.leads),
      searchClicksGrowth: calculateGrowth(currentTotals.searchClicks, previousTotals.searchClicks),
      avgPositionChange: currentTotals.avgPosition / currentData.length - previousTotals.avgPosition / previousData.length,
    };
  } catch (error) {
    console.error('Error calculating growth metrics:', error);
    return {
      pageViewsGrowth: 0,
      usersGrowth: 0,
      sessionsGrowth: 0,
      leadsGrowth: 0,
      searchClicksGrowth: 0,
      avgPositionChange: 0,
    };
  }
};

// Get trend data for charts
export const getTrendData = async (
  startDate: string,
  endDate: string
): Promise<{
  dates: string[];
  pageViews: number[];
  users: number[];
  sessions: number[];
  searchClicks: number[];
  avgPosition: number[];
}> => {
  try {
    const { data } = await getAnalyticsSnapshots(startDate, endDate);

    if (!data || data.length === 0) {
      return {
        dates: [],
        pageViews: [],
        users: [],
        sessions: [],
        searchClicks: [],
        avgPosition: [],
      };
    }

    return {
      dates: data.map(snapshot => snapshot.date),
      pageViews: data.map(snapshot => snapshot.page_views),
      users: data.map(snapshot => snapshot.users),
      sessions: data.map(snapshot => snapshot.sessions),
      searchClicks: data.map(snapshot => snapshot.search_clicks),
      avgPosition: data.map(snapshot => snapshot.avg_position),
    };
  } catch (error) {
    console.error('Error getting trend data:', error);
    return {
      dates: [],
      pageViews: [],
      users: [],
      sessions: [],
      searchClicks: [],
      avgPosition: [],
    };
  }
};

// Auto-snapshot function (to be called daily)
export const createDailySnapshot = async (analyticsData: any): Promise<{ success: boolean; error?: string }> => {
  const today = new Date().toISOString().split('T')[0];
  
  const snapshotData: Omit<AnalyticsSnapshot, 'id' | 'created_at' | 'updated_at'> = {
    date: today,
    page_views: analyticsData.pageViews || 0,
    users: analyticsData.users || 0,
    sessions: analyticsData.sessions || 0,
    bounce_rate: analyticsData.bounceRate || 0,
    avg_session_duration: analyticsData.avgSessionDuration || 0,
    real_time_users: analyticsData.realTimeUsers || 0,
    search_clicks: analyticsData.searchConsole?.totalClicks || 0,
    search_impressions: analyticsData.searchConsole?.totalImpressions || 0,
    avg_position: analyticsData.searchConsole?.averagePosition || 0,
    click_through_rate: analyticsData.searchConsole?.clickThroughRate || 0,
    leads: analyticsData.conversions?.leads || 0,
    estimate_requests: analyticsData.conversions?.estimateRequests || 0,
    contact_forms: analyticsData.conversions?.contactForms || 0,
    top_pages: analyticsData.topPages || [],
    top_queries: analyticsData.searchConsole?.topQueries || [],
    traffic_sources: analyticsData.trafficSources || [],
    devices: analyticsData.searchConsole?.devices || [],
    countries: analyticsData.searchConsole?.countries || [],
    utm_sources: [], // TODO: Extract UTM data from analytics
  };

  return await storeAnalyticsSnapshot(snapshotData);
};
