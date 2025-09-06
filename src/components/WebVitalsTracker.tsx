// Web Vitals Tracker for SEO and performance monitoring
import { useEffect } from 'react';
import { trackCoreWebVitals } from '../lib/search-console';

interface WebVitalsTrackerProps {
  children: React.ReactNode;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Track Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          trackCoreWebVitals('LCP', lastEntry.startTime, window.location.pathname);
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // LCP not supported
        }

        // Track First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            trackCoreWebVitals('FID', entry.processingStart - entry.startTime, window.location.pathname);
          });
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          // FID not supported
        }

        // Track Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          trackCoreWebVitals('CLS', clsValue, window.location.pathname);
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // CLS not supported
        }

        // Track First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            trackCoreWebVitals('FCP', entry.startTime, window.location.pathname);
          });
        });
        
        try {
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          // FCP not supported
        }
      }

      // Track page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        trackCoreWebVitals('page_load_time', loadTime, window.location.pathname);
      });
    };

    // Only track on production
    if (import.meta.env.PROD) {
      trackWebVitals();
    }
  }, []);

  return <>{children}</>;
};

export default WebVitalsTracker;
