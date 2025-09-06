// React hook for analytics tracking
import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsService } from '../lib/analytics-service';

export const useAnalytics = () => {
  // Safely get location, fallback to window.location if not in Router context
  let location;
  try {
    location = useLocation();
  } catch (error) {
    // Fallback if not in Router context
    location = { pathname: window.location.pathname };
  }

  // Track page views automatically
  useEffect(() => {
    const page = location.pathname;
    const title = document.title;
    
    analyticsService.trackPageView(page, title, {
      page_path: page,
      page_location: window.location.href,
    });
  }, [location]);

  // Track scroll depth
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let maxScroll = 0;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          // Track milestone scroll depths
          if (scrollPercent >= 25 && maxScroll < 25) {
            analyticsService.trackScrollDepth(25, location.pathname);
          } else if (scrollPercent >= 50 && maxScroll < 50) {
            analyticsService.trackScrollDepth(50, location.pathname);
          } else if (scrollPercent >= 75 && maxScroll < 75) {
            analyticsService.trackScrollDepth(75, location.pathname);
          } else if (scrollPercent >= 90 && maxScroll < 90) {
            analyticsService.trackScrollDepth(90, location.pathname);
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname]);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage > 10) { // Only track if user spent more than 10 seconds
        analyticsService.trackEngagement('time_on_page', {
          time_on_page: timeOnPage,
          page: location.pathname,
        });
      }
    };
  }, [location.pathname]);

  // Convenience functions for components
  const trackProductInterest = useCallback((product: string, category: string, value?: number) => {
    analyticsService.trackProductInterest(product, category, value);
  }, []);

  const trackLeadConversion = useCallback((source: string, product?: string, value?: number) => {
    analyticsService.trackLeadConversion(source, product, value);
  }, []);

  const trackEstimateRequest = useCallback((product: string, location: string, estimatedValue?: number) => {
    analyticsService.trackEstimateRequest(product, location, estimatedValue);
  }, []);

  const trackContactFormSubmit = useCallback((source: string, product?: string) => {
    analyticsService.trackContactFormSubmit(source, product);
  }, []);

  const trackCalculatorOpen = useCallback((product: string) => {
    analyticsService.trackCalculatorOpen(product);
  }, []);

  const trackCalculatorComplete = useCallback((product: string, estimatedValue: number) => {
    analyticsService.trackCalculatorComplete(product, estimatedValue);
  }, []);

  const trackCalculatorAbandon = useCallback((product: string, step: number) => {
    analyticsService.trackCalculatorAbandon(product, step);
  }, []);

  const trackPhoneClick = useCallback((location: string) => {
    analyticsService.trackPhoneClick(location);
  }, []);

  const trackEmailClick = useCallback((location: string) => {
    analyticsService.trackEmailClick(location);
  }, []);

  const trackVideoPlay = useCallback((videoTitle: string, videoLocation: string) => {
    analyticsService.trackVideoPlay(videoTitle, videoLocation);
  }, []);

  const trackVideoComplete = useCallback((videoTitle: string, videoLocation: string) => {
    analyticsService.trackVideoComplete(videoTitle, videoLocation);
  }, []);

  const trackSocialShare = useCallback((platform: string, content: string) => {
    analyticsService.trackSocialShare(platform, content);
  }, []);

  const trackAdminAction = useCallback((action: string, details?: string) => {
    analyticsService.trackAdminAction(action, details);
  }, []);

  return {
    trackProductInterest,
    trackLeadConversion,
    trackEstimateRequest,
    trackContactFormSubmit,
    trackCalculatorOpen,
    trackCalculatorComplete,
    trackCalculatorAbandon,
    trackPhoneClick,
    trackEmailClick,
    trackVideoPlay,
    trackVideoComplete,
    trackSocialShare,
    trackAdminAction,
    isReady: analyticsService.isReady(),
  };
};

export default useAnalytics;
