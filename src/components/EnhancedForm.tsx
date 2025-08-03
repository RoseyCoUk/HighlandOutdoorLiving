import React, { useState, useEffect } from 'react';
import { Check, AlertCircle, Loader2, Send } from 'lucide-react';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required: boolean;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => string | null;
  };
  options?: { value: string; label: string }[];
  placeholder?: string;
}

interface EnhancedFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => Promise<{ success: boolean; message?: string }>;
  submitText?: string;
  className?: string;
  showProgress?: boolean;
}

const EnhancedForm: React.FC<EnhancedFormProps> = ({
  fields,
  onSubmit,
  submitText = 'Submit',
  className = '',
  showProgress = true
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  // Calculate progress
  const totalSteps = showProgress ? Math.ceil(fields.length / 3) : 1;
  const progress = (currentStep / totalSteps) * 100;

  // Validation functions
  const validateField = (name: string, value: string): string | null => {
    const field = fields.find(f => f.name === name);
    if (!field) return null;

    // Required validation
    if (field.required && !value.trim()) {
      return `${field.label} is required`;
    }

    if (!value.trim()) return null;

    // Pattern validation
    if (field.validation?.pattern && !field.validation.pattern.test(value)) {
      if (field.type === 'email') return 'Please enter a valid email address';
      if (field.type === 'tel') return 'Please enter a valid phone number';
      return 'Please enter a valid value';
    }

    // Length validation
    if (field.validation?.minLength && value.length < field.validation.minLength) {
      return `${field.label} must be at least ${field.validation.minLength} characters`;
    }

    if (field.validation?.maxLength && value.length > field.validation.maxLength) {
      return `${field.label} must be no more than ${field.validation.maxLength} characters`;
    }

    // Custom validation
    if (field.validation?.custom) {
      return field.validation.custom(value);
    }

    return null;
  };

  // Handle field changes
  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error || '' }));
    }
  };

  // Handle field blur
  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name] || '');
    setErrors(prev => ({ ...prev, [name]: error || '' }));
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    fields.forEach(field => {
      const error = validateField(field.name, formData[field.name] || '');
      if (error) {
        newErrors[field.name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(fields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {}));
    
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await onSubmit(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || 'Form submitted successfully!');
        setFormData({});
        setTouched({});
        setErrors({});
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render field
  const renderField = (field: FormField) => {
    const hasError = touched[field.name] && errors[field.name];
    const isValid = touched[field.name] && !errors[field.name] && formData[field.name];

    const baseClasses = `w-full px-4 py-3 border rounded-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C5B8AB] ${
      hasError 
        ? 'border-red-500 bg-red-50' 
        : isValid 
          ? 'border-green-500 bg-green-50' 
          : 'border-gray-300 focus:border-[#C5B8AB]'
    }`;

    return (
      <div key={field.name} className="mb-6">
        <label htmlFor={field.name} className="block text-[#222126] font-medium mb-2">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        
        <div className="relative">
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              onBlur={() => handleBlur(field.name)}
              placeholder={field.placeholder}
              rows={4}
              className={baseClasses}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              onBlur={() => handleBlur(field.name)}
              className={baseClasses}
            >
              <option value="">{field.placeholder || 'Select an option'}</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              onBlur={() => handleBlur(field.name)}
              placeholder={field.placeholder}
              className={baseClasses}
            />
          )}
          
          {/* Status icons */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {hasError && <AlertCircle className="w-5 h-5 text-red-500" />}
            {isValid && <Check className="w-5 h-5 text-green-500" />}
          </div>
        </div>
        
        {hasError && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors[field.name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-xl ${className}`}>
      {/* Progress bar */}
      {showProgress && totalSteps > 1 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#222126]/60">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm font-medium text-[#222126]">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#C5B8AB] h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Success/Error messages */}
      {submitStatus !== 'idle' && (
        <div className={`mb-6 p-4 rounded-lg ${
          submitStatus === 'success' 
            ? 'bg-green-100 border border-green-400 text-green-700' 
            : 'bg-red-100 border border-red-400 text-red-700'
        }`}>
          <div className="flex items-center">
            {submitStatus === 'success' ? (
              <Check className="w-5 h-5 mr-2" />
            ) : (
              <AlertCircle className="w-5 h-5 mr-2" />
            )}
            {submitMessage}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          {fields.map(renderField)}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#222126] text-[#C5B8AB] py-4 font-semibold text-lg transition-all duration-300 hover:bg-[#222126]/90 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>{submitText}</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default EnhancedForm; 