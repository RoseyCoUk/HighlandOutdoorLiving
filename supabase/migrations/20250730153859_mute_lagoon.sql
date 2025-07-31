/*
  # Create leads table for NMG Admin Dashboard

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `product` (text, required) - values: Sauna, Grill Pod, Shed, General
      - `message` (text, required)
      - `status` (text, default: "New") - values: New, Contacted, Quoted, Closed
      - `notes` (text, optional) - for internal use
      - `source` (text, optional) - where the lead came from
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `leads` table
    - Add policy for authenticated users to read/write leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  product text NOT NULL CHECK (product IN ('Sauna', 'Grill Pod', 'Shed', 'General')),
  message text NOT NULL,
  status text DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Quoted', 'Closed')),
  notes text,
  source text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert leads"
  ON leads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete leads"
  ON leads
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status);
CREATE INDEX IF NOT EXISTS leads_product_idx ON leads(product);