// Google Analytics 4 Configuration for NMG Outdoor Living
// Measurement ID: G-7K63E6241H

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-7K63E6241H', {
      page_title: title,
      page_location: url,
    });
  }
};

// Track lead generation
export const trackLeadGeneration = (source: string, product: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'GBP',
      value: 15000, // Average lead value
      lead_type: product,
      source: source,
    });
  }
};

// Track quote form submissions
export const trackQuoteSubmission = (product: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quote_request', {
      event_category: 'engagement',
      event_label: product,
      custom_parameters: {
        location: location,
        product_type: product,
      },
    });
  }
};

// Track phone calls
export const trackPhoneCall = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'contact',
      event_label: source,
    });
  }
};

// Track email clicks
export const trackEmailClick = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'contact',
      event_label: source,
    });
  }
};

// Track blog engagement
export const trackBlogView = (postTitle: string, category: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_view', {
      event_category: 'content',
      event_label: postTitle,
      custom_parameters: {
        blog_category: category,
      },
    });
  }
};

// Track service page views
export const trackServiceView = (service: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_view', {
      event_category: 'product',
      event_label: service,
    });
  }
};

// Track gallery interactions
export const trackGalleryInteraction = (action: string, project: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'gallery_interaction', {
      event_category: 'engagement',
      event_label: action,
      custom_parameters: {
        project_type: project,
      },
    });
  }
};
