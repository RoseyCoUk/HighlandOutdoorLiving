import { useState, useEffect, useCallback } from 'react';

export const useEstimateCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const openCalculator = useCallback(() => {
    setIsOpen(true);
    setHasShown(true);
  }, []);

  const closeCalculator = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    // Check if user has already seen the calculator in this session
    const hasSeenCalculator = sessionStorage.getItem('nmg-estimate-shown');
    if (hasSeenCalculator) {
      setHasShown(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let scrollHandler: (() => void) | null = null;

    // Time-based trigger (10 seconds)
    timeoutId = setTimeout(() => {
      if (!hasShown) {
        openCalculator();
        sessionStorage.setItem('nmg-estimate-shown', 'true');
      }
    }, 10000);

    // Scroll-based trigger (50% scroll)
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= 50 && !hasShown) {
        openCalculator();
        sessionStorage.setItem('nmg-estimate-shown', 'true');
        
        // Remove scroll listener after triggering
        if (scrollHandler) {
          window.removeEventListener('scroll', scrollHandler);
        }
      }
    };

    // Listen for custom event from StrategicCTA
    const handleCustomEvent = () => {
      openCalculator();
    };

    scrollHandler = handleScroll;
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('open-estimate-calculator', handleCustomEvent);

    return () => {
      clearTimeout(timeoutId);
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
      }
      window.removeEventListener('open-estimate-calculator', handleCustomEvent);
    };
  }, [hasShown, openCalculator]);

  return {
    isOpen,
    openCalculator,
    closeCalculator,
    hasShown
  };
}; 