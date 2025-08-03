import { useEffect } from 'react';

interface ABTestTrackerProps {
  testName: string;
  variant: 'A' | 'B';
  elementId?: string;
  onConversion?: () => void;
}

const ABTestTracker: React.FC<ABTestTrackerProps> = ({
  testName,
  variant,
  elementId,
  onConversion
}) => {
  useEffect(() => {
    // Track test impression
    const trackImpression = () => {
      const testData = {
        testName,
        variant,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`
      };

      // Store in localStorage for persistence
      const existingTests = JSON.parse(localStorage.getItem('ab_tests') || '{}');
      existingTests[testName] = {
        ...existingTests[testName],
        variant,
        impressions: (existingTests[testName]?.impressions || 0) + 1,
        lastSeen: new Date().toISOString()
      };
      localStorage.setItem('ab_tests', JSON.stringify(existingTests));

      // Send to analytics if available
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'ab_test_impression', {
          event_category: 'A/B Testing',
          event_label: `${testName}_${variant}`,
          custom_map: {
            test_name: testName,
            variant: variant,
            element_id: elementId
          }
        });
      }

      console.log('A/B Test Impression:', testData);
    };

    // Track conversion
    const trackConversion = () => {
      const testData = {
        testName,
        variant,
        timestamp: new Date().toISOString(),
        url: window.location.href
      };

      // Update localStorage
      const existingTests = JSON.parse(localStorage.getItem('ab_tests') || '{}');
      if (existingTests[testName]) {
        existingTests[testName].conversions = (existingTests[testName]?.conversions || 0) + 1;
        existingTests[testName].conversionRate = (
          (existingTests[testName].conversions / existingTests[testName].impressions) * 100
        ).toFixed(2);
        localStorage.setItem('ab_tests', JSON.stringify(existingTests));
      }

      // Send to analytics if available
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'ab_test_conversion', {
          event_category: 'A/B Testing',
          event_label: `${testName}_${variant}`,
          value: 1,
          custom_map: {
            test_name: testName,
            variant: variant,
            element_id: elementId
          }
        });
      }

      console.log('A/B Test Conversion:', testData);
      onConversion?.();
    };

    // Track impression on mount
    trackImpression();

    // Add click tracking if element ID is provided
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.addEventListener('click', trackConversion);
        return () => {
          element.removeEventListener('click', trackConversion);
        };
      }
    }

    // Track scroll depth for engagement
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track at 25%, 50%, 75%, 100% scroll depths
        if ([25, 50, 75, 100].includes(scrollDepth)) {
          const existingTests = JSON.parse(localStorage.getItem('ab_tests') || '{}');
          if (existingTests[testName]) {
            existingTests[testName].maxScrollDepth = Math.max(
              existingTests[testName].maxScrollDepth || 0,
              scrollDepth
            );
            localStorage.setItem('ab_tests', JSON.stringify(existingTests));
          }
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth);
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, [testName, variant, elementId, onConversion]);

  return null; // This component doesn't render anything
};

// Utility function to get test results
export const getABTestResults = () => {
  try {
    return JSON.parse(localStorage.getItem('ab_tests') || '{}');
  } catch {
    return {};
  }
};

// Utility function to clear test data
export const clearABTestData = () => {
  localStorage.removeItem('ab_tests');
};

// Utility function to get winning variant
export const getWinningVariant = (testName: string) => {
  const tests = getABTestResults();
  const test = tests[testName];
  
  if (!test) return null;
  
  // Simple logic: variant with higher conversion rate wins
  // In a real implementation, you'd want statistical significance
  const conversionRate = parseFloat(test.conversionRate || '0');
  
  if (conversionRate > 5) { // 5% threshold
    return test.variant;
  }
  
  return null;
};

export default ABTestTracker; 