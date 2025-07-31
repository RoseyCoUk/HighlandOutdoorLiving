import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { submitLead } from '../lib/forms';

const ContactSection = () => {
  const navigate = useNavigate();
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
        navigate('/thank-you?product=project');
      } else {
        alert('There was an error submitting your form. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen">
      <div className="grid lg:grid-cols-2 h-screen">
        {/* Left side - Map */}
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.7891234567!2d-6.6234567!3d54.8234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485fd123456789ab%3A0x123456789abcdef0!2s9%20Ballyknock%20Rd%2C%20Maghera%20BT46%205AB%2C%20UK!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) brightness(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NMG Location Map - 9 Ballyknock Road, Maghera"
          ></iframe>
          
          {/* Map pin indicator */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-[#C5B8AB] rounded-full border-4 border-white shadow-lg animate-pulse"></div>
          </div>
        </div>

        {/* Right side - Contact Info */}
        <div className="bg-[#222126] flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                Get In Touch
              </h2>
              <p className="text-[#C5B8AB]/80">
                Ready to transform your outdoor space?
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#C5B8AB]" />
                </div>
                <div>
                  <p className="text-[#C5B8AB]/70 text-sm">Phone</p>
                  <a 
                    href="tel:07730510368" 
                    className="text-white text-xl font-medium hover:text-[#C5B8AB] transition-colors"
                  >
                    07730 510368
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#C5B8AB]" />
                </div>
                <div>
                  <p className="text-[#C5B8AB]/70 text-sm">Email</p>
                  <a 
                    href="mailto:nigelmcg@gmail.com" 
                    className="text-white text-xl font-medium hover:text-[#C5B8AB] transition-colors break-all"
                  >
                    nigelmcg@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#C5B8AB]" />
                </div>
                <div>
                  <p className="text-[#C5B8AB]/70 text-sm">Location</p>
                  <p className="text-white text-xl font-medium leading-tight">
                    9 Ballyknock Road<br />Maghera
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="border-t border-[#C5B8AB]/20 pt-8">
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
                  className="w-full px-4 py-3 bg-white/10 border border-[#C5B8AB]/30 rounded-none focus:outline-none focus:border-[#C5B8AB] transition-colors text-white placeholder-[#C5B8AB]/60"
                />

                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-[#C5B8AB]/30 rounded-none focus:outline-none focus:border-[#C5B8AB] transition-colors text-white placeholder-[#C5B8AB]/60"
                />

                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-[#C5B8AB]/30 rounded-none focus:outline-none focus:border-[#C5B8AB] transition-colors resize-vertical text-white placeholder-[#C5B8AB]/60"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C5B8AB] text-[#222126] py-3 font-semibold transition-all duration-300 hover:bg-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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