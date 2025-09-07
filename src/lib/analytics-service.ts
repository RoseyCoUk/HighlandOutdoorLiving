// Enhanced Analytics Service for NMG Outdoor Living
import { 
  getAnalyticsConfig, 
  CUSTOM_DIMENSIONS, 
  CUSTOM_METRICS, 
  EVENTS, 
  PRODUCT_CATEGORIES, 
  LEAD_SOURCES, 
  USER_TYPES 
} from './analytics-config';

// Extend the global window interface for GTM dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

class AnalyticsService {
  private config = getAnalyticsConfig();
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;
    
    // Initialize dataLayer if it doesn't exist (GTM does this automatically)
    window.dataLayer = window.dataLayer || [];
    
    // Check if dataLayer is available (GTM indicator)
    if (Array.isArray(window.dataLayer)) {
      this.isInitialized = true;
    }
  }

  // Check if analytics is ready
  public isReady(): boolean {
    return this.isInitialized && typeof window !== 'undefined' && Array.isArray(window.dataLayer);
  }

  // Helper method to push events to GTM dataLayer
  private pushToDataLayer(eventData: Record<string, any>) {
    if (!this.isReady()) return;
    window.dataLayer.push(eventData);
  }

  // Track page views with enhanced data
  public trackPageView(page: string, title: string, additionalData?: Record<string, any>) {
    this.pushToDataLayer({
      event: EVENTS.PAGE_VIEW,
      page_title: title,
      page_location: page,
      page_path: page,
      content_group1: this.getContentGroup(page),
      content_group2: this.getProductCategory(page),
      ...additionalData
    });
  }

  // Track user engagement events
  public trackEngagement(eventName: string, parameters?: Record<string, any>) {
    this.pushToDataLayer({
      event: eventName,
      event_category: 'Engagement',
      event_label: eventName,
      ...parameters
    });
  }

  // Track product interest
  public trackProductInterest(product: string, category: string, value?: number) {
    this.pushToDataLayer({
      event: EVENTS.PRODUCT_INTEREST,
      event_category: 'Product Interest',
      event_label: product,
      product_category: category,
      value: value || 0,
      currency: 'GBP',
      [CUSTOM_DIMENSIONS.PRODUCT_INTEREST]: product,
    });
  }

  // Track lead conversions
  public trackLeadConversion(source: string, product?: string, value?: number) {
    this.pushToDataLayer({
      event: EVENTS.LEAD_CONVERSION,
      event_category: 'Conversion',
      event_label: 'Lead Generated',
      lead_source: source,
      product_category: product || PRODUCT_CATEGORIES.GENERAL,
      value: value || 100, // Default lead value
      currency: 'GBP',
      [CUSTOM_DIMENSIONS.LEAD_SOURCE]: source,
      [CUSTOM_DIMENSIONS.CONVERSION_VALUE]: value || 100,
    });
  }

  // Track estimate requests
  public trackEstimateRequest(product: string, location: string, estimatedValue?: number) {
    this.pushToDataLayer({
      event: EVENTS.ESTIMATE_REQUEST,
      event_category: 'Conversion',
      event_label: 'Estimate Requested',
      product_category: product,
      location: location,
      value: estimatedValue || 50,
      currency: 'GBP',
      [CUSTOM_DIMENSIONS.PRODUCT_INTEREST]: product,
      [CUSTOM_DIMENSIONS.LOCATION]: location,
      [CUSTOM_METRICS.ESTIMATE_VALUE]: estimatedValue || 50,
    });
  }

  // Track calculator interactions
  public trackCalculatorOpen(product: string) {
    this.pushToDataLayer({
      event: EVENTS.CALCULATOR_OPEN,
      event_category: 'Calculator',
      event_label: 'Calculator Opened',
      product_category: product,
      [CUSTOM_DIMENSIONS.PRODUCT_INTEREST]: product,
    });
  }

  public trackCalculatorComplete(product: string, estimatedValue: number) {
    this.pushToDataLayer({
      event: EVENTS.CALCULATOR_COMPLETE,
      event_category: 'Calculator',
      event_label: 'Calculator Completed',
      product_category: product,
      value: estimatedValue,
      currency: 'GBP',
      [CUSTOM_DIMENSIONS.PRODUCT_INTEREST]: product,
      [CUSTOM_METRICS.ESTIMATE_VALUE]: estimatedValue,
    });
  }

  public trackCalculatorAbandon(product: string, step: number) {
    this.pushToDataLayer({
      event: EVENTS.CALCULATOR_ABANDON,
      event_category: 'Calculator',
      event_label: 'Calculator Abandoned',
      product_category: product,
      step: step,
      [CUSTOM_DIMENSIONS.PRODUCT_INTEREST]: product,
    });
  }

  // Track contact form submissions
  public trackContactFormSubmit(source: string, product?: string) {
    this.pushToDataLayer({
      event: EVENTS.CONTACT_FORM_SUBMIT,
      event_category: 'Conversion',
      event_label: 'Contact Form Submitted',
      lead_source: source,
      product_category: product || PRODUCT_CATEGORIES.GENERAL,
      value: 25,
      currency: 'GBP',
      [CUSTOM_DIMENSIONS.LEAD_SOURCE]: source,
    });
  }

  // Track phone and email clicks
  public trackPhoneClick(location: string) {
    this.pushToDataLayer({
      event: EVENTS.PHONE_CLICK,
      event_category: 'Contact',
      event_label: 'Phone Number Clicked',
      location: location,
      value: 10,
      currency: 'GBP',
    });
  }

  public trackEmailClick(location: string) {
    this.pushToDataLayer({
      event: EVENTS.EMAIL_CLICK,
      event_category: 'Contact',
      event_label: 'Email Address Clicked',
      location: location,
      value: 5,
      currency: 'GBP',
    });
  }

  // Track video interactions
  public trackVideoPlay(videoTitle: string, videoLocation: string) {
    this.pushToDataLayer({
      event: EVENTS.VIDEO_PLAY,
      event_category: 'Video',
      event_label: videoTitle,
      video_title: videoTitle,
      video_location: videoLocation,
    });
  }

  public trackVideoComplete(videoTitle: string, videoLocation: string) {
    this.pushToDataLayer({
      event: EVENTS.VIDEO_COMPLETE,
      event_category: 'Video',
      event_label: videoTitle,
      video_title: videoTitle,
      video_location: videoLocation,
    });
  }

  // Track scroll depth
  public trackScrollDepth(percentage: number, page: string) {
    this.pushToDataLayer({
      event: EVENTS.SCROLL_DEPTH,
      event_category: 'Engagement',
      event_label: `${percentage}% scrolled`,
      scroll_depth: percentage,
      page_location: page,
    });
  }

  // Track social interactions
  public trackSocialShare(platform: string, content: string) {
    this.pushToDataLayer({
      event: EVENTS.SOCIAL_SHARE,
      event_category: 'Social',
      event_label: platform,
      social_platform: platform,
      content_title: content,
    });
  }

  // Track admin actions
  public trackAdminAction(action: string, details?: string) {
    this.pushToDataLayer({
      event: EVENTS.ADMIN_ACTION,
      event_category: 'Admin',
      event_label: action,
      admin_action: action,
      admin_details: details,
      [CUSTOM_DIMENSIONS.USER_TYPE]: USER_TYPES.ADMIN,
    });
  }

  // Set user properties
  public setUserProperties(properties: Record<string, any>) {
    this.pushToDataLayer({
      event: 'user_properties',
      ...properties
    });
  }

  // Helper methods
  private getContentGroup(page: string): string {
    if (page.includes('/saunas')) return 'Saunas';
    if (page.includes('/grill-pods')) return 'Grill Pods';
    if (page.includes('/sheds')) return 'Sheds';
    if (page.includes('/gallery')) return 'Gallery';
    if (page.includes('/blog')) return 'Blog';
    if (page.includes('/contact')) return 'Contact';
    if (page.includes('/about')) return 'About';
    return 'Home';
  }

  private getProductCategory(page: string): string {
    if (page.includes('/saunas')) return PRODUCT_CATEGORIES.SAUNAS;
    if (page.includes('/grill-pods')) return PRODUCT_CATEGORIES.GRILL_PODS;
    if (page.includes('/sheds')) return PRODUCT_CATEGORIES.SHEDS;
    return PRODUCT_CATEGORIES.GENERAL;
  }

  // Get current analytics configuration
  public getConfig() {
    return this.config;
  }

  // Get GA4 measurement ID
  public getMeasurementId(): string | null {
    return this.config.googleAnalyticsId || null;
  }
}

// Create singleton instance
export const analyticsService = new AnalyticsService();

// Export convenience functions
export const trackPageView = (page: string, title: string, additionalData?: Record<string, any>) => 
  analyticsService.trackPageView(page, title, additionalData);

export const trackProductInterest = (product: string, category: string, value?: number) => 
  analyticsService.trackProductInterest(product, category, value);

export const trackLeadConversion = (source: string, product?: string, value?: number) => 
  analyticsService.trackLeadConversion(source, product, value);

export const trackEstimateRequest = (product: string, location: string, estimatedValue?: number) => 
  analyticsService.trackEstimateRequest(product, location, estimatedValue);

export const trackContactFormSubmit = (source: string, product?: string) => 
  analyticsService.trackContactFormSubmit(source, product);

export const trackCalculatorOpen = (product: string) => 
  analyticsService.trackCalculatorOpen(product);

export const trackCalculatorComplete = (product: string, estimatedValue: number) => 
  analyticsService.trackCalculatorComplete(product, estimatedValue);

export const trackCalculatorAbandon = (product: string, step: number) => 
  analyticsService.trackCalculatorAbandon(product, step);

export const trackPhoneClick = (location: string) => 
  analyticsService.trackPhoneClick(location);

export const trackEmailClick = (location: string) => 
  analyticsService.trackEmailClick(location);

export const trackVideoPlay = (videoTitle: string, videoLocation: string) => 
  analyticsService.trackVideoPlay(videoTitle, videoLocation);

export const trackVideoComplete = (videoTitle: string, videoLocation: string) => 
  analyticsService.trackVideoComplete(videoTitle, videoLocation);

export const trackScrollDepth = (percentage: number, page: string) => 
  analyticsService.trackScrollDepth(percentage, page);

export const trackSocialShare = (platform: string, content: string) => 
  analyticsService.trackSocialShare(platform, content);

export const trackAdminAction = (action: string, details?: string) => 
  analyticsService.trackAdminAction(action, details);

export default analyticsService;
