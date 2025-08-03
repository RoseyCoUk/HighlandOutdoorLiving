import React, { useEffect, useRef } from 'react';

interface AccessibilityManagerProps {
  children: React.ReactNode;
}

const AccessibilityManager: React.FC<AccessibilityManagerProps> = ({ children }) => {
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip to main content functionality
    const handleSkipToMain = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && e.shiftKey === false) {
        const skipLink = document.getElementById('skip-to-main');
        if (skipLink) {
          skipLink.focus();
        }
      }
    };

    // Focus management for modals and overlays
    const handleFocusTrap = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const modal = document.querySelector('[role="dialog"]');
      
      if (modal && activeElement && !modal.contains(activeElement)) {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
        }
      }
    };

    // Announce page changes to screen readers
    const announcePageChange = (title: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page loaded: ${title}`;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Add event listeners
    document.addEventListener('keydown', handleSkipToMain);
    document.addEventListener('keydown', handleFocusTrap);

    // Announce current page
    announcePageChange(document.title);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleSkipToMain);
      document.removeEventListener('keydown', handleFocusTrap);
    };
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <a
        id="skip-to-main"
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C5B8AB] focus:text-[#222126] focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Main content wrapper */}
      <div ref={mainContentRef} id="main-content" tabIndex={-1}>
        {children}
      </div>
    </>
  );
};

export default AccessibilityManager; 