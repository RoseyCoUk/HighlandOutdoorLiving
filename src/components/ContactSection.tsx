import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { submitLead } from '../lib/forms';
import { useAnalytics } from '../hooks/useAnalytics';
import { trackPhoneClick, trackEmailClick, trackFormSubmission } from '../hooks/useGA4Events';

const ContactSection = () => {
  const navigate = useNavigate();
  const analytics = useAnalytics();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
        product: 'General',
        source: 'Contact Section'
      });

      if (result.success) {
        // Track successful form submission
        analytics.trackContactFormSubmit('Contact Section', 'General');
        analytics.trackLeadConversion('Contact Section', 'General', 25);
        trackFormSubmission('contact-form', 'Contact Section');
        navigate('/thank-you?product=project');
      } else {
        // Fallback to email if Supabase fails
        const subject = `Contact Form Submission from ${contactForm.name}`;
        const body = `Name: ${contactForm.name}
Email: ${contactForm.email}
Message: ${contactForm.message}

Source: Contact Section`;

        const mailtoLink = `mailto:sales@hkbtltd.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
        navigate('/thank-you?product=project');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Fallback to email if Supabase fails
      const subject = `Contact Form Submission from ${contactForm.name}`;
      const body = `Name: ${contactForm.name}
Email: ${contactForm.email}
Message: ${contactForm.message}

Source: Contact Section`;

      const mailtoLink = `mailto:sales@hkbtltd.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');
      navigate('/thank-you?product=project');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 bg-[#2B2B2B]">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left side - Map */}
        <div className="relative h-[320px] md:h-[520px]">
          <iframe
            src="https://www.google.com/maps?q=18-20%20Harbour%20Road,%20Inverness,%20IV1%201UA&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) brightness(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Highland Outdoor Living Location - 18-20 Harbour Road, Inverness"
          ></iframe>
          
          {/* Map pin indicator */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-[#C5B8AB] rounded-full border-4 border-white shadow-lg animate-pulse"></div>
          </div>
        </div>

        {/* Right side - Contact Info */}
        <div className="bg-[#2B2B2B] flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                Get In Touch
              </h2>
              <p className="text-[#E0E0E0]">
                Ready to relax, refresh, and rejuvenate?
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#CBB79C]/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#CBB79C]" />
                </div>
                <div>
                  <p className="text-[#C5B8AB]/70 text-sm">Phone</p>
                  <a 
                    href="tel:+441463223085" 
                    onClick={() => {
                      analytics.trackPhoneClick('Contact Section');
                      trackPhoneClick('+441463223085');
                    }}
                    className="text-white text-xl font-medium hover:text-[#CBB79C] transition-colors"
                  >
                    +44 1463 223085
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#CBB79C]/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#CBB79C]" />
                </div>
                <div>
                  <p className="text-[#C5B8AB]/70 text-sm">Email</p>
                  <a 
                    href="mailto:sales@hkbtltd.com" 
                    onClick={() => {
                      analytics.trackEmailClick('Contact Section');
                      trackEmailClick('sales@hkbtltd.com');
                    }}
                    className="text-white text-xl font-medium hover:text-[#CBB79C] transition-colors break-all"
                  >
                    sales@hkbtltd.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#CBB79C]/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#CBB79C]" />
                </div>
                <div>
                  <p className="text-[#C5B8AB]/70 text-sm">Location</p>
                  <p className="text-white text-xl font-medium leading-tight">
                    18-20 Harbour Road<br />Inverness, IV1 1UA
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send a Quick Message
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-none focus:outline-none focus:border-[#CBB79C] transition-colors text-white placeholder-[#E0E0E0]/60"
                />

                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-none focus:outline-none focus:border-[#CBB79C] transition-colors text-white placeholder-[#E0E0E0]/60"
                />

                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-none focus:outline-none focus:border-[#CBB79C] transition-colors resize-vertical text-white placeholder-[#E0E0E0]/60"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8B1E2D] text-white py-3 font-semibold transition-all duration-300 hover:bg-[#6f1824] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;