import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessMessageProps {
  message: string;
  onClose?: () => void;
  className?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message, onClose, className = '' }) => {
  return (
    <div className={`bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 ${className}`}>
      <div className="flex items-start space-x-3">
        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-medium text-green-400">
            {message}
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-green-400 hover:text-green-300 transition-colors"
            aria-label="Close success message"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SuccessMessage; 