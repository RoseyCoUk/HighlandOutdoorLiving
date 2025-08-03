import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Track Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Track page load performance
    const trackPageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            // Time to First Byte
            ttfb: navigation.responseStart - navigation.requestStart,
            // DOM Content Loaded
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            // Page Load Complete
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            // Total Page Load Time
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
            // Resource Load Time
            resourceLoadTime: navigation.responseEnd - navigation.responseStart,
            // DNS Lookup Time
            dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
            // TCP Connection Time
            tcpConnection: navigation.connectEnd - navigation.connectStart,
            // Server Response Time
            serverResponse: navigation.responseEnd - navigation.requestStart
          };

          console.log('Performance Metrics:', metrics);

          // Send to analytics if available
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'performance_metrics', {
              event_category: 'Performance',
              event_label: 'Page Load',
              value: Math.round(metrics.totalLoadTime),
              custom_map: {
                ttfb: metrics.ttfb,
                dom_content_loaded: metrics.domContentLoaded,
                load_complete: metrics.loadComplete,
                resource_load: metrics.resourceLoadTime,
                dns_lookup: metrics.dnsLookup,
                tcp_connection: metrics.tcpConnection,
                server_response: metrics.serverResponse
              }
            });
          }
        }
      }
    };

    // Track resource loading performance
    const trackResourcePerformance = () => {
      if ('performance' in window) {
        const resources = performance.getEntriesByType('resource');
        
        const imageResources = resources.filter(resource => 
          resource.name.includes('.jpg') || 
          resource.name.includes('.jpeg') || 
          resource.name.includes('.png') || 
          resource.name.includes('.webp')
        );

        const totalImageLoadTime = imageResources.reduce((total, resource) => {
          return total + (resource.responseEnd - resource.fetchStart);
        }, 0);

        const averageImageLoadTime = imageResources.length > 0 
          ? totalImageLoadTime / imageResources.length 
          : 0;

        console.log('Image Performance:', {
          totalImages: imageResources.length,
          totalLoadTime: totalImageLoadTime,
          averageLoadTime: averageImageLoadTime
        });
      }
    };

    // Track user interactions
    const trackUserInteractions = () => {
      let firstInteraction = false;
      let firstScroll = false;

      const trackFirstInteraction = () => {
        if (!firstInteraction) {
          firstInteraction = true;
          const timeToFirstInteraction = performance.now();
          
          console.log('First User Interaction:', {
            timeToFirstInteraction,
            timestamp: new Date().toISOString()
          });

          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'first_interaction', {
              event_category: 'User Experience',
              event_label: 'Interaction',
              value: Math.round(timeToFirstInteraction)
            });
          }
        }
      };

      const trackFirstScroll = () => {
        if (!firstScroll) {
          firstScroll = true;
          const timeToFirstScroll = performance.now();
          
          console.log('First Scroll:', {
            timeToFirstScroll,
            timestamp: new Date().toISOString()
          });

          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'first_scroll', {
              event_category: 'User Experience',
              event_label: 'Scroll',
              value: Math.round(timeToFirstScroll)
            });
          }
        }
      };

      // Track clicks, touches, and scrolls
      document.addEventListener('click', trackFirstInteraction, { once: true });
      document.addEventListener('touchstart', trackFirstInteraction, { once: true });
      document.addEventListener('scroll', trackFirstScroll, { once: true });
    };

    // Track form interactions
    const trackFormPerformance = () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const formStartTime = performance.now();
          
          // Track form submission time
          setTimeout(() => {
            const formSubmissionTime = performance.now() - formStartTime;
            
            console.log('Form Submission Performance:', {
              formId: form.id || 'unknown',
              submissionTime: formSubmissionTime,
              timestamp: new Date().toISOString()
            });

            if (typeof window.gtag !== 'undefined') {
              window.gtag('event', 'form_submission', {
                event_category: 'Forms',
                event_label: form.id || 'unknown',
                value: Math.round(formSubmissionTime)
              });
            }
          }, 100);
        });
      });
    };

    // Initialize tracking
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        trackPageLoad();
        trackResourcePerformance();
        trackUserInteractions();
        trackFormPerformance();
      });
    } else {
      trackPageLoad();
      trackResourcePerformance();
      trackUserInteractions();
      trackFormPerformance();
    }

    // Track when page becomes visible
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        console.log('Page became visible:', {
          timestamp: new Date().toISOString(),
          timeHidden: performance.now()
        });
      }
    });

  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor; 