import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  product: 'Sauna' | 'Grill Pod' | 'Shed' | 'General';
  message: string;
  status: 'New' | 'Contacted' | 'Quoted' | 'Closed';
  notes?: string;
  source?: string;
  created_at: string;
  // Additional fields that might be useful for estimate calculator leads
  location?: string;
  timeframe?: string;
  budget?: string;
}

export interface LeadUpdate {
  status?: Lead['status'];
  notes?: string;
}