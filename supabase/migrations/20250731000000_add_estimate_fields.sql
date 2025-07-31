/*
  # Add estimate calculator fields to leads table

  This migration adds dedicated columns for estimate calculator data:
  - `location` (text, optional) - installation location
  - `timeframe` (text, optional) - project timeline
  - `budget` (text, optional) - budget range

  These fields will make it easier to filter and analyze estimate requests.
*/

-- Add new columns for estimate calculator data
ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS location text,
ADD COLUMN IF NOT EXISTS timeframe text,
ADD COLUMN IF NOT EXISTS budget text;

-- Add comments for documentation
COMMENT ON COLUMN leads.location IS 'Installation location (Garden, Patio, Commercial Site, Other)';
COMMENT ON COLUMN leads.timeframe IS 'Project timeline (ASAP, 1–3 months, Just Browsing)';
COMMENT ON COLUMN leads.budget IS 'Budget range (Under £3k, £3k–£6k, £6k+)';

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS leads_location_idx ON leads(location);
CREATE INDEX IF NOT EXISTS leads_timeframe_idx ON leads(timeframe);
CREATE INDEX IF NOT EXISTS leads_budget_idx ON leads(budget);
CREATE INDEX IF NOT EXISTS leads_source_idx ON leads(source); 