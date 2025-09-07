// GA4 Event Tracking Hook
import { useEffect } from 'react';
import { getAnalyticsConfig } from '../lib/analytics-config';

// Extend window interface for gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const useGA4Events = () => {
  const config = getAnalyticsConfig();

  useEffect(() => {
    // Initialize GA4 if not already done
    if (typeof window !== 'undefined' && window.gtag && config.googleAnalyticsId) {
      window.gtag('config', config.googleAnalyticsId);
    }

    // Form submission tracking
    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (form.tagName === 'FORM') {
        window.gtag('event', 'form_submission', {
          event_category: 'Engagement',
          event_label: form.id || form.className || 'Unknown Form',
          form_id: form.id,
          form_class: form.className,
          form_action: form.action,
        });
      }
    };

    // Phone click tracking
    const handlePhoneClick = (event: Event) => {
      const link = (event.target as Element).closest('a');
      if (link && link.getAttribute('href')?.startsWith('tel:')) {
        window.gtag('event', 'tel_click', {
          event_category: 'Contact',
          event_label: 'Phone Number Clicked',
          phone_number: link.getAttribute('href')?.replace('tel:', ''),
          link_url: link.getAttribute('href'),
        });
      }
    };

    // Email click tracking
    const handleEmailClick = (event: Event) => {
      const link = (event.target as Element).closest('a');
      if (link && link.getAttribute('href')?.startsWith('mailto:')) {
        window.gtag('event', 'email_click', {
          event_category: 'Contact',
          event_label: 'Email Address Clicked',
          email_address: link.getAttribute('href')?.replace('mailto:', ''),
          link_url: link.getAttribute('href'),
        });
      }
    };

    // Quote button click tracking
    const handleQuoteButtonClick = (event: Event) => {
      const button = (event.target as Element).closest('button, a');
      if (button) {
        const buttonText = button.textContent?.trim();
        const buttonId = button.id;
        const buttonClass = button.className;
        
        // Check for quote button patterns
        const isQuoteButton = 
          buttonText === 'Get a Quote' || 
          buttonText === 'Get Quote' ||
          buttonText === 'Request Quote' ||
          buttonText === 'Free Quote' ||
          buttonId === 'quote-btn' ||
          buttonId === 'quote-button' ||
          buttonClass.includes('quote') ||
          buttonClass.includes('cta');
        
        if (isQuoteButton) {
          window.gtag('event', 'quote_button_click', {
            event_category: 'Conversion',
            event_label: 'Quote Button Clicked',
            button_text: buttonText,
            button_id: buttonId,
            button_class: buttonClass,
          });
        }
      }
    };

    // Add event listeners
    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('click', handlePhoneClick);
    document.addEventListener('click', handleEmailClick);
    document.addEventListener('click', handleQuoteButtonClick);

    // Cleanup function
    return () => {
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('click', handlePhoneClick);
      document.removeEventListener('click', handleEmailClick);
      document.removeEventListener('click', handleQuoteButtonClick);
    };
  }, [config.googleAnalyticsId]);
};

// Export individual tracking functions for manual use
export const trackFormSubmission = (formId?: string, formClass?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submission', {
      event_category: 'Engagement',
      event_label: formId || formClass || 'Manual Form Submission',
      form_id: formId,
      form_class: formClass,
    });
  }
};

export const trackPhoneClick = (phoneNumber: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'tel_click', {
      event_category: 'Contact',
      event_label: 'Phone Number Clicked',
      phone_number: phoneNumber,
    });
  }
};

export const trackEmailClick = (emailAddress: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'Contact',
      event_label: 'Email Address Clicked',
      email_address: emailAddress,
    });
  }
};

export const trackQuoteButtonClick = (buttonText?: string, buttonId?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quote_button_click', {
      event_category: 'Conversion',
      event_label: 'Quote Button Clicked',
      button_text: buttonText,
      button_id: buttonId,
    });
  }
};
