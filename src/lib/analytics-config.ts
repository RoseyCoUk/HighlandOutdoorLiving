// Analytics Configuration for NMG Outdoor Living
export interface AnalyticsConfig {
  googleAnalyticsId: string;
  googleSearchConsoleProperty: string;
  googleTagManagerId: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

// Get analytics configuration from environment variables
export const getAnalyticsConfig = (): AnalyticsConfig => {
  const googleTagManagerId = import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID || 'GT-T5MFT2Z9';
  const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || 'G-7K63E6241H';
  const googleSearchConsoleProperty = import.meta.env.VITE_GOOGLE_SEARCH_CONSOLE_PROPERTY || 'nmgoutdoorliving.com';
  
  const isDevelopment = import.meta.env.DEV;
  const isProduction = import.meta.env.PROD;

  return {
    googleTagManagerId,
    googleAnalyticsId,
    googleSearchConsoleProperty,
    isDevelopment,
    isProduction,
  };
};

// Custom dimensions for business insights
export const CUSTOM_DIMENSIONS = {
  PRODUCT_INTEREST: 'product_interest',
  LOCATION: 'location',
  LEAD_SOURCE: 'lead_source',
  USER_TYPE: 'user_type',
  CONVERSION_VALUE: 'conversion_value',
} as const;

// Custom metrics for tracking
export const CUSTOM_METRICS = {
  ESTIMATE_VALUE: 'estimate_value',
  LEAD_SCORE: 'lead_score',
  ENGAGEMENT_SCORE: 'engagement_score',
} as const;

// Event names for consistent tracking
export const EVENTS = {
  // Page tracking
  PAGE_VIEW: 'page_view',
  
  // User engagement
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
  VIDEO_PLAY: 'video_play',
  VIDEO_COMPLETE: 'video_complete',
  
  // Product interest
  PRODUCT_VIEW: 'product_view',
  PRODUCT_INTEREST: 'product_interest',
  GALLERY_VIEW: 'gallery_view',
  
  // Lead generation
  LEAD_CONVERSION: 'lead_conversion',
  ESTIMATE_REQUEST: 'estimate_request',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  
  // Calculator interactions
  CALCULATOR_OPEN: 'calculator_open',
  CALCULATOR_COMPLETE: 'calculator_complete',
  CALCULATOR_ABANDON: 'calculator_abandon',
  
  // Social interactions
  SOCIAL_SHARE: 'social_share',
  SOCIAL_FOLLOW: 'social_follow',
  
  // Admin actions
  ADMIN_LOGIN: 'admin_login',
  ADMIN_ACTION: 'admin_action',
} as const;

// Product categories for tracking
export const PRODUCT_CATEGORIES = {
  SAUNAS: 'Saunas',
  GRILL_PODS: 'Grill Pods',
  SHEDS: 'Sheds',
  GENERAL: 'General',
} as const;

// Lead sources for attribution
export const LEAD_SOURCES = {
  GOOGLE_SEARCH: 'Google Search',
  DIRECT: 'Direct',
  SOCIAL_MEDIA: 'Social Media',
  REFERRAL: 'Referral',
  EMAIL: 'Email',
  PHONE: 'Phone',
  CONTACT_FORM: 'Contact Form',
  ESTIMATE_CALCULATOR: 'Estimate Calculator',
  GALLERY: 'Gallery',
  BLOG: 'Blog',
} as const;

// User types for segmentation
export const USER_TYPES = {
  NEW_VISITOR: 'New Visitor',
  RETURNING_VISITOR: 'Returning Visitor',
  LEAD: 'Lead',
  CUSTOMER: 'Customer',
  ADMIN: 'Admin',
} as const;
