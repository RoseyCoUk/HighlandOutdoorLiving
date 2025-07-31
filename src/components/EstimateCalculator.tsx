import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface EstimateFormData {
  product: string;
  location: string;
  timeframe: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
}

interface EstimateCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<EstimateFormData>({
    product: '',
    location: '',
    timeframe: '',
    budget: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<EstimateFormData>>({});

  const totalSteps = 5;

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Auto-close after successful submission
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        onClose();
        // Reset form after closing
        setTimeout(() => {
          setCurrentStep(1);
          setFormData({
            product: '',
            location: '',
            timeframe: '',
            budget: '',
            name: '',
            email: '',
            phone: ''
          });
          setIsSubmitted(false);
          setErrors({});
        }, 300);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, onClose]);

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<EstimateFormData> = {};

    switch (step) {
      case 1:
        if (!formData.product) newErrors.product = 'Please select a product';
        break;
      case 2:
        if (!formData.location) newErrors.location = 'Please select an installation location';
        break;
      case 3:
        if (!formData.timeframe) newErrors.timeframe = 'Please select a timeframe';
        break;
      case 4:
        if (!formData.budget) newErrors.budget = 'Please select a budget range';
        break;
      case 5:
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('leads')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product: formData.product,
          message: `Estimate Request - ${formData.product} for ${formData.location} installation. Timeline: ${formData.timeframe}, Budget: ${formData.budget}`,
          location: formData.location,
          timeframe: formData.timeframe,
          budget: formData.budget,
          source: 'Estimate Calculator',
          status: 'New'
        });

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting estimate request:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof EstimateFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What product are you interested in?</h3>
            <div className="grid gap-4">
              {[
                { value: 'Sauna', label: 'Sauna', description: 'Custom outdoor saunas for relaxation and wellness' },
                { value: 'Grill Pod', label: 'Grill Pod', description: 'Professional outdoor cooking and entertainment spaces' },
                { value: 'Shed', label: 'Shed', description: 'Storage solutions and garden buildings' }
              ].map(option => (
                <label key={option.value} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[#222126] transition-colors">
                  <input
                    type="radio"
                    name="product"
                    value={option.value}
                    checked={formData.product === option.value}
                    onChange={(e) => updateFormData('product', e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded-full mr-4 flex items-center justify-center ${
                    formData.product === option.value 
                      ? 'border-[#222126] bg-[#222126]' 
                      : 'border-gray-300'
                  }`}>
                    {formData.product === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                </label>
              ))}
            </div>
            {errors.product && <p className="text-red-600 text-sm">{errors.product}</p>}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Where will you install it?</h3>
            <div className="grid gap-4">
              {[
                { value: 'Garden', label: 'Garden', description: 'Backyard or garden installation' },
                { value: 'Patio', label: 'Patio', description: 'Patio or deck area' },
                { value: 'Commercial Site', label: 'Commercial Site', description: 'Business or commercial property' },
                { value: 'Other', label: 'Other', description: 'Different location' }
              ].map(option => (
                <label key={option.value} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[#222126] transition-colors">
                  <input
                    type="radio"
                    name="location"
                    value={option.value}
                    checked={formData.location === option.value}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded-full mr-4 flex items-center justify-center ${
                    formData.location === option.value 
                      ? 'border-[#222126] bg-[#222126]' 
                      : 'border-gray-300'
                  }`}>
                    {formData.location === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                </label>
              ))}
            </div>
            {errors.location && <p className="text-red-600 text-sm">{errors.location}</p>}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What's your timeline?</h3>
            <div className="grid gap-4">
              {[
                { value: 'ASAP', label: 'ASAP', description: 'Ready to start immediately' },
                { value: '1–3 months', label: '1–3 months', description: 'Planning for the near future' },
                { value: 'Just Browsing', label: 'Just Browsing', description: 'Exploring options for later' }
              ].map(option => (
                <label key={option.value} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[#222126] transition-colors">
                  <input
                    type="radio"
                    name="timeframe"
                    value={option.value}
                    checked={formData.timeframe === option.value}
                    onChange={(e) => updateFormData('timeframe', e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded-full mr-4 flex items-center justify-center ${
                    formData.timeframe === option.value 
                      ? 'border-[#222126] bg-[#222126]' 
                      : 'border-gray-300'
                  }`}>
                    {formData.timeframe === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                </label>
              ))}
            </div>
            {errors.timeframe && <p className="text-red-600 text-sm">{errors.timeframe}</p>}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What's your budget range?</h3>
            <div className="grid gap-4">
              {[
                { value: 'Under £3k', label: 'Under £3,000', description: 'Budget-friendly options' },
                { value: '£3k–£6k', label: '£3,000 – £6,000', description: 'Mid-range solutions' },
                { value: '£6k+', label: '£6,000+', description: 'Premium custom builds' }
              ].map(option => (
                <label key={option.value} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-[#222126] transition-colors">
                  <input
                    type="radio"
                    name="budget"
                    value={option.value}
                    checked={formData.budget === option.value}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded-full mr-4 flex items-center justify-center ${
                    formData.budget === option.value 
                      ? 'border-[#222126] bg-[#222126]' 
                      : 'border-gray-300'
                  }`}>
                    {formData.budget === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                </label>
              ))}
            </div>
            {errors.budget && <p className="text-red-600 text-sm">{errors.budget}</p>}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your contact information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent ${
                    errors.name ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent ${
                    errors.phone ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-4">
            We'll be in touch with your tailored estimate shortly.
          </p>
          <p className="text-sm text-gray-500">
            This window will close automatically in a few seconds...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Get Your Free Instant Estimate</h2>
            <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  i + 1 <= currentStep ? 'bg-[#222126]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {renderStep()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              className="flex items-center px-6 py-2 bg-[#222126] text-white rounded-lg hover:bg-[#222126]/90 transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center px-6 py-2 bg-[#222126] text-white rounded-lg hover:bg-[#222126]/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Estimate'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstimateCalculator; 