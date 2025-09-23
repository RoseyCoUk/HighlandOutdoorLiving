import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook, Instagram } from 'lucide-react';
import { submitLead } from '../lib/forms';

const ContactPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        product: 'General',
        source: 'Contact Page'
      });

      if (result.success) {
        navigate('/thank-you?product=project');
      } else {
        // Fallback to email if Supabase fails
        const subject = `Contact Form Submission from ${formData.name}`;
        const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Source: Contact Page`;

        const mailtoLink = `mailto:nigelmcg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
        navigate('/thank-you?product=project');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Fallback to email if Supabase fails
      const subject = `Contact Form Submission from ${formData.name}`;
      const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Source: Contact Page`;

      const mailtoLink = `mailto:nigelmcg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');
      navigate('/thank-you?product=project');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-[73px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/sauna/Sauna3.JPG')"
          }}
        ></div>
        
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-white leading-tight tracking-wide">
            Get in Touch
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to transform your outdoor space? Let's discuss your vision and bring it to life.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                  Send Us an Enquiry
                </h2>
                <p className="text-lg text-[#C5B8AB]/80 leading-relaxed">
                  Tell us about your project and we'll get back to you with a detailed quote and timeline.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-lg p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Thank You!
                  </h3>
                  <p className="text-[#C5B8AB]/90 text-lg">
                    We've received your enquiry and will be in touch within 24 hours to discuss your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white/10 border border-[#C5B8AB]/30 rounded-none focus:outline-none focus:border-[#C5B8AB] transition-colors text-white placeholder-[#C5B8AB]/50"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white/10 border border-[#C5B8AB]/30 rounded-none focus:outline-none focus:border-[#C5B8AB] transition-colors text-white placeholder-[#C5B8AB]/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-3">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/10 border border-[#C5B8AB]/30 rounded-none focus:outline-none focus:border-[#C5B8AB] transition-colors text-white placeholder-[#C5B8AB]/50"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-3">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-white/10 border border-[#C5B8AB]/30 rounded-none focus:outline-none focus:border-[#C5B8AB] transition-colors resize-vertical text-white placeholder-[#C5B8AB]/50"
                      placeholder="Describe your outdoor space project, preferred timeline, budget range, or any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C5B8AB] text-[#222126] py-4 font-semibold text-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#222126]/30 border-t-[#222126] rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h3>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#C5B8AB]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Phone</h4>
                  <a 
                    href="tel:07730510368" 
                    className="text-[#C5B8AB] text-lg hover:text-white transition-colors"
                  >
                    07730 510368
                  </a>
                  <p className="text-[#C5B8AB]/70 text-sm mt-1">
                    Call us for immediate assistance
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#C5B8AB]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Email</h4>
                  <a 
                    href="mailto:nigelmcg@gmail.com" 
                    className="text-[#C5B8AB] text-lg hover:text-white transition-colors break-all"
                  >
                    nigelmcg@gmail.com
                  </a>
                  <p className="text-[#C5B8AB]/70 text-sm mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#C5B8AB]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Location</h4>
                  <p className="text-[#C5B8AB] text-lg leading-tight">
                    18-20 Harbour Road<br />
                    Inverness<br />
                    Scottish Highlands
                  </p>
                  <p className="text-[#C5B8AB]/70 text-sm mt-1">
                    Serving Inverness and the Scottish Highlands
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#C5B8AB]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Business Hours</h4>
                  <div className="text-[#C5B8AB] space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: By appointment</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C5B8AB]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="flex space-x-2">
                    <Facebook className="w-4 h-4 text-[#C5B8AB]" />
                    <Instagram className="w-4 h-4 text-[#C5B8AB]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/profile.php?id=100065453470878" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#C5B8AB] hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Facebook</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/nmg_outdoorliving" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#C5B8AB] hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Instagram</span>
                    </a>
                  </div>
                  <p className="text-[#C5B8AB]/70 text-sm mt-1">
                    See our latest projects and updates
                  </p>
                </div>
              </div>

              {/* Trust Signal */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 border border-[#C5B8AB]/20">
                <h4 className="text-white font-medium mb-3">Why Choose Highland?</h4>
                <ul className="space-y-2 text-[#C5B8AB]/80 text-sm">
                  <li>• Free consultations and quotes</li>
                  <li>• 15+ years of experience</li>
                  <li>• Fully insured and certified</li>
                  <li>• Local Inverness-based team</li>
                  <li>• Comprehensive warranty coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96">
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
        
        {/* Map Pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-[#C5B8AB] rounded-full border-4 border-white shadow-xl animate-pulse"></div>
        </div>

        {/* Map Overlay Info */}
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 shadow-xl max-w-sm">
          <h4 className="text-[#222126] font-semibold mb-2">Visit Our Workshop</h4>
          <p className="text-[#222126]/80 text-sm">
            See our craftsmanship up close and discuss your project in person.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;