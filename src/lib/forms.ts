import { supabase, Lead } from './supabase';

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  product?: 'Sauna' | 'Grill Pod' | 'Shed' | 'General';
  source?: string;
}

export const submitLead = async (formData: FormData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Check if Supabase is available
    if (!supabase) {
      return { success: false, error: 'Database not configured' };
    }

    const { error } = await supabase
      .from('leads')
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        product: formData.product || 'General',
        message: formData.message,
        source: formData.source || 'Website',
        status: 'New'
      });

    if (error) {
      console.error('Error submitting lead:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Unexpected error submitting lead:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
};

export const formatName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`.trim();
}; 