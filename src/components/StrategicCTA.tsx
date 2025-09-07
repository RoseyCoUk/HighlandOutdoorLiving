import React, { useState } from 'react';
import { ChevronRight, Phone, Calendar, Calculator, ArrowRight } from 'lucide-react';
import { trackQuoteButtonClick } from '../hooks/useGA4Events';

interface StrategicCTAProps {
  variant?: 'primary' | 'secondary' | 'floating' | 'banner';
  type?: 'quote' | 'estimate' | 'call' | 'booking';
  text?: string;
  className?: string;
  onAction?: () => void;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StrategicCTA: React.FC<StrategicCTAProps> = ({
  variant = 'primary',
  type = 'quote',
  text,
  className = '',
  onAction,
  showIcon = true,
  size = 'md'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // CTA configurations
  const ctaConfigs = {
    quote: {
      text: text || 'Get Free Quote',
      icon: ChevronRight,
      action: () => {
        trackQuoteButtonClick('Get Free Quote', 'quote-button');
        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
        onAction?.();
      }
    },
    estimate: {
      text: text || 'Get Instant Estimate',
      icon: Calculator,
      action: () => {
        // Trigger estimate calculator
        const event = new CustomEvent('open-estimate-calculator');
        window.dispatchEvent(event);
        onAction?.();
      }
    },
    call: {
      text: text || 'Call Now',
      icon: Phone,
      action: () => {
        window.location.href = 'tel:+447730510368';
        onAction?.();
      }
    },
    booking: {
      text: text || 'Book Consultation',
      icon: Calendar,
      action: () => {
        // Open booking modal or redirect
        window.open('mailto:nigelmcg@gmail.com?subject=Consultation%20Booking', '_blank');
        onAction?.();
      }
    }
  };

  const config = ctaConfigs[type];
  const IconComponent = config.icon;

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-[#C5B8AB] text-[#222126] hover:bg-white hover:scale-105 hover:shadow-2xl',
    secondary: 'border-2 border-[#C5B8AB] text-[#C5B8AB] hover:bg-[#C5B8AB] hover:text-[#222126] hover:scale-105',
    floating: 'fixed bottom-6 right-6 z-50 bg-[#C5B8AB] text-[#222126] rounded-full shadow-2xl hover:scale-110 hover:shadow-3xl',
    banner: 'w-full bg-gradient-to-r from-[#C5B8AB] to-white text-[#222126] hover:from-white hover:to-[#C5B8AB]'
  };

  const baseClasses = `inline-flex items-center justify-center font-semibold transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <button
      className={baseClasses}
      onClick={config.action}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={config.text}
    >
      {showIcon && variant !== 'floating' && (
        <IconComponent className={`w-4 h-4 ${variant === 'secondary' ? 'mr-2' : 'mr-2'} transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
      )}
      {variant === 'floating' && showIcon && (
        <Phone className="w-5 h-5" />
      )}
      <span className={variant === 'floating' ? 'sr-only' : ''}>
        {config.text}
      </span>
    </button>
  );
};

export default StrategicCTA; 