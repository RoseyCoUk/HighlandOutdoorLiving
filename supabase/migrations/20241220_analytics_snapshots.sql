-- Create analytics_snapshots table for daily growth tracking
CREATE TABLE IF NOT EXISTS analytics_snapshots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  page_views INTEGER DEFAULT 0,
  users INTEGER DEFAULT 0,
  sessions INTEGER DEFAULT 0,
  bounce_rate DECIMAL(5,2) DEFAULT 0,
  avg_session_duration DECIMAL(10,2) DEFAULT 0,
  real_time_users INTEGER DEFAULT 0,
  search_clicks INTEGER DEFAULT 0,
  search_impressions INTEGER DEFAULT 0,
  avg_position DECIMAL(5,2) DEFAULT 0,
  click_through_rate DECIMAL(5,2) DEFAULT 0,
  leads INTEGER DEFAULT 0,
  estimate_requests INTEGER DEFAULT 0,
  contact_forms INTEGER DEFAULT 0,
  top_pages JSONB DEFAULT '[]',
  top_queries JSONB DEFAULT '[]',
  traffic_sources JSONB DEFAULT '[]',
  devices JSONB DEFAULT '[]',
  countries JSONB DEFAULT '[]',
  utm_sources JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create unique index on date to prevent duplicates
CREATE UNIQUE INDEX IF NOT EXISTS analytics_snapshots_date_unique ON analytics_snapshots(date);

-- Create index for date range queries
CREATE INDEX IF NOT EXISTS analytics_snapshots_date_idx ON analytics_snapshots(date);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_analytics_snapshots_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_analytics_snapshots_updated_at
  BEFORE UPDATE ON analytics_snapshots
  FOR EACH ROW
  EXECUTE FUNCTION update_analytics_snapshots_updated_at();

-- Insert sample data for the last 30 days (for testing)
INSERT INTO analytics_snapshots (date, page_views, users, sessions, bounce_rate, avg_session_duration, real_time_users, search_clicks, search_impressions, avg_position, click_through_rate, leads, estimate_requests, contact_forms)
SELECT 
  CURRENT_DATE - INTERVAL '1 day' * generate_series(0, 29) as date,
  (RANDOM() * 50 + 20)::INTEGER as page_views,
  (RANDOM() * 15 + 5)::INTEGER as users,
  (RANDOM() * 20 + 8)::INTEGER as sessions,
  (RANDOM() * 20 + 40)::DECIMAL(5,2) as bounce_rate,
  (RANDOM() * 2 + 2)::DECIMAL(10,2) as avg_session_duration,
  (RANDOM() * 3 + 1)::INTEGER as real_time_users,
  (RANDOM() * 10 + 5)::INTEGER as search_clicks,
  (RANDOM() * 200 + 100)::INTEGER as search_impressions,
  (RANDOM() * 5 + 8)::DECIMAL(5,2) as avg_position,
  (RANDOM() * 2 + 4)::DECIMAL(5,2) as click_through_rate,
  (RANDOM() * 3 + 1)::INTEGER as leads,
  (RANDOM() * 2 + 1)::INTEGER as estimate_requests,
  (RANDOM() * 2 + 1)::INTEGER as contact_forms
ON CONFLICT (date) DO NOTHING;
