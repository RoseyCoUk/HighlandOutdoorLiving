import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Volume2, VolumeX, MousePointer, Keyboard } from 'lucide-react';

interface AccessibilityTesterProps {
  isVisible: boolean;
  onToggle: () => void;
}

const AccessibilityTester: React.FC<AccessibilityTesterProps> = ({ isVisible, onToggle }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    if (isHighContrast) {
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--accent-color', '#000000');
    } else {
      root.style.removeProperty('--text-color');
      root.style.removeProperty('--bg-color');
      root.style.removeProperty('--accent-color');
    }

    if (isReducedMotion) {
      root.style.setProperty('--animation-duration', '0.01ms');
      root.style.setProperty('--transition-duration', '0.01ms');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    if (isLargeText) {
      root.style.setProperty('--font-size-multiplier', '1.2');
    } else {
      root.style.removeProperty('--font-size-multiplier');
    }
  }, [isHighContrast, isReducedMotion, isLargeText]);

  // Test keyboard navigation
  const testKeyboardNavigation = () => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    console.log('Focusable elements found:', focusableElements.length);
    
    // Highlight focusable elements
    focusableElements.forEach((el, index) => {
      const element = el as HTMLElement;
      const originalOutline = element.style.outline;
      element.style.outline = '3px solid red';
      
      setTimeout(() => {
        element.style.outline = originalOutline;
      }, 1000 + (index * 200));
    });
  };

  // Test color contrast
  const testColorContrast = () => {
    const elements = document.querySelectorAll('*');
    const lowContrastElements: Element[] = [];
    
    elements.forEach(element => {
      const style = window.getComputedStyle(element);
      const backgroundColor = style.backgroundColor;
      const color = style.color;
      
      // Simple contrast check (this is a basic implementation)
      if (backgroundColor && color && backgroundColor !== 'rgba(0, 0, 0, 0)') {
        // Add more sophisticated contrast checking here
        console.log('Element:', element, 'Background:', backgroundColor, 'Color:', color);
      }
    });
    
    console.log('Color contrast test completed');
  };

  // Test screen reader compatibility
  const testScreenReader = () => {
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt: HTMLImageElement[] = [];
    
    images.forEach(img => {
      if (!img.alt) {
        imagesWithoutAlt.push(img);
        img.style.outline = '3px solid red';
      }
    });
    
    console.log('Images without alt text:', imagesWithoutAlt.length);
    
    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log('Headings found:', headings.length);
    
    // Check for proper form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    const inputsWithoutLabels: Element[] = [];
    
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      if (id && !document.querySelector(`label[for="${id}"]`)) {
        inputsWithoutLabels.push(input);
      }
    });
    
    console.log('Inputs without labels:', inputsWithoutLabels.length);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Accessibility Tester</h3>
        <button
          onClick={onToggle}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close accessibility tester"
        >
          <EyeOff className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Visual Tests */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Visual Tests</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isHighContrast}
                onChange={(e) => setIsHighContrast(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">High Contrast Mode</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isReducedMotion}
                onChange={(e) => setIsReducedMotion(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">Reduced Motion</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isLargeText}
                onChange={(e) => setIsLargeText(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">Large Text</span>
            </label>
          </div>
        </div>

        {/* Audio Tests */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Audio Tests</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isMuted}
                onChange={(e) => setIsMuted(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">Mute Audio</span>
            </label>
          </div>
        </div>

        {/* Automated Tests */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Automated Tests</h4>
          <div className="space-y-2">
            <button
              onClick={testKeyboardNavigation}
              className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
            >
              <Keyboard className="w-4 h-4" />
              <span>Test Keyboard Navigation</span>
            </button>
            
            <button
              onClick={testColorContrast}
              className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
            >
              <Eye className="w-4 h-4" />
              <span>Test Color Contrast</span>
            </button>
            
            <button
              onClick={testScreenReader}
              className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
            >
              <Volume2 className="w-4 h-4" />
              <span>Test Screen Reader</span>
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded">
          <p className="mb-2"><strong>Instructions:</strong></p>
          <ul className="space-y-1">
            <li>• Use Tab to navigate through elements</li>
            <li>• Check console for test results</li>
            <li>• Red outlines indicate accessibility issues</li>
            <li>• Test with screen reader software</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityTester; 