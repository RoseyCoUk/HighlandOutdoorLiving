import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Check, Shield, Leaf, Wrench, Globe, Clock, Phone, Mail, MapPin, Send, Star, Flame, Droplets, X, ChevronRight, ChevronLeft, Play, Quote } from 'lucide-react';
import { submitLead, formatName } from '../lib/forms';

const GrillPodPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

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
        name: formatName(formData.firstName, formData.lastName),
        email: formData.email,
        message: formData.message,
        product: 'Grill Pod',
        source: 'Grill Pod Page'
      });

      if (result.success) {
        navigate('/thank-you?product=grill pod');
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

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToViewing = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "How weatherproof is the Grill Pod?",
      answer: "The Grill Pod is fully weatherproof with galvanized steel frame, composite cladding, and sealed construction. It's designed to withstand all weather conditions year-round, including rain, snow, and wind."
    },
    {
      question: "Can it be used in winter?",
      answer: "Absolutely! The Grill Pod is fully insulated and designed for year-round use. The Mont Alpi kitchen provides powerful heating, and the insulated structure keeps you comfortable even in cold weather."
    },
    {
      question: "Can I customize the interior?",
      answer: "Yes, the interior is fully customizable. You can choose from different flooring options, wall finishes, lighting configurations, and add features like TVs, sound systems, and additional storage."
    },
    {
      question: "How is delivery/installation handled?",
      answer: "We handle everything from delivery to installation. Our team will deliver the Grill Pod to your location and professionally install it, including electrical connections and any additional features you've chosen."
    },
    {
      question: "What power requirements are needed?",
      answer: "The Grill Pod requires a 32A power supply. We'll assess your current electrical setup and provide guidance on any necessary upgrades during the consultation process."
    },
    {
      question: "How long does installation take?",
      answer: "Installation typically takes 1-2 days depending on the complexity of your setup and any additional features. We'll provide a detailed timeline during the planning phase."
    }
  ];

  const testimonials = [
    {
      name: "Sarah & Mark Thompson",
      location: "Belfast",
      quote: "The Grill Pod has transformed our outdoor entertaining. We use it year-round and the Mont Alpi kitchen is incredible. Best investment we've made!",
      rating: 5
    },
    {
      name: "David Wilson",
      location: "Lisburn",
      quote: "Professional installation, exceptional quality. The weatherproof design means we can BBQ even in the rain. Highly recommend!",
      rating: 5
    },
    {
      name: "Emma & James O'Connor",
      location: "Newry",
      quote: "From the initial consultation to final installation, the team was fantastic. Our Grill Pod is the envy of the neighborhood!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      {/* 1. Hero Section - Above the Fold */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-[73px]">
        {/* Background Video/Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/Nigel Grill Pod/001.jpg')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-none tracking-tighter">
            The Ultimate Outdoor Kitchen Experience Starts Here
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Weatherproof. Luxurious. Effortless. Meet the Grill Pod.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={scrollToQuote}
              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#C5B8AB] to-white text-[#222126] font-black text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:shadow-2xl transform hover:from-white hover:to-[#C5B8AB]"
            >
              Request a Quote
              <ChevronRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
            
            <button
              onClick={scrollToViewing}
              className="group inline-flex items-center px-12 py-6 border-2 border-[#C5B8AB] text-[#C5B8AB] font-black text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:bg-[#C5B8AB] hover:text-[#222126]"
            >
              Book a Viewing
              <MapPin className="ml-3 w-6 h-6 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-12 h-12 text-white/60" />
        </div>
      </section>

      {/* 2. What is the Grill Pod? */}
      <section className="py-32 bg-[#222126] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Not Just a Grill. A Revolution in Outdoor Living.
            </h2>
            <p className="text-xl text-[#C5B8AB]/90 max-w-4xl mx-auto leading-relaxed font-light">
              The Grill Pod is a fully insulated, weatherproof outdoor kitchen, built to last with a galvanized steel frame, luxury finishes, and high-end cooking equipment.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Galvanized Steel Frame",
                description: "Rustproof and durable construction"
              },
              {
                icon: Leaf,
                title: "Composite Cladding",
                description: "Modern, maintenance-free exterior"
              },
              {
                icon: Wrench,
                title: "Child-Safe Electric Roller Door",
                description: "Secure and convenient access"
              },
              {
                icon: Flame,
                title: "Fully Insulated",
                description: "Year-round comfort and use"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 border border-[#C5B8AB]/20 rounded-lg text-center transform hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C5B8AB] to-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-[#222126]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#C5B8AB]/90 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Inside the Pod */}
      <section className="py-32 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 tracking-tight">
              Step Inside Comfort and Style
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="/Nigel Grill Pod/002.jpg"
                alt="Grill Pod Interior"
                className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/20 to-transparent rounded-lg"></div>
            </div>

            {/* Right - Features */}
            <div className="space-y-8">
              <p className="text-lg text-[#222126]/90 leading-relaxed font-light">
                Inside the Grill Pod, you'll find everything you need for the ultimate outdoor cooking experience:
              </p>
              
              <div className="space-y-6">
                {[
                  "Luxury LVT flooring for comfort and style",
                  "PVC wall panels for easy cleaning",
                  "TV & Bluetooth speaker system for entertainment",
                  "Mini fridge & Mont Alpi deluxe kitchen",
                  "All built with the highest standards of comfort, safety, and tech"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#222126] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-[#C5B8AB]" />
                    </div>
                    <p className="text-[#222126] font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mont Alpi Kitchen Highlight */}
      <section className="py-32 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Culinary Excellence with Mont Alpi
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Product Image */}
            <div className="relative">
              <img
                src="/Nigel Grill Pod/003.jpg"
                alt="Mont Alpi 805 DFC Kitchen"
                className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-[#C5B8AB] text-[#222126] px-4 py-2 rounded-full font-bold text-sm">
                Premium Kitchen
              </div>
            </div>

            {/* Right - Feature Highlights */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Mont Alpi 805 DFC Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "6 x 304 stainless steel burners + 2 infrared burners",
                  "White granite waterfall sides",
                  "LED-lit knobs & internal lights",
                  "Integrated outdoor fridge with LED lighting",
                  "115,000 BTUs of pure power",
                  "Fully assembled, ready to cook"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[#C5B8AB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-3 h-3 text-[#222126]" />
                    </div>
                    <p className="text-[#C5B8AB]/90 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#C5B8AB]/20 to-transparent p-6 rounded-lg border border-[#C5B8AB]/30">
                <p className="text-white font-bold text-lg mb-2">Professional Grade</p>
                <p className="text-[#C5B8AB]/90 text-sm">
                  The Mont Alpi kitchen is the same equipment used by professional chefs and outdoor catering companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose the Grill Pod Over Wood? */}
      <section className="py-32 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 tracking-tight">
              Why Grill Pods Beat Traditional Wooden Kitchens
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              {/* Header */}
              <div className="p-8 bg-[#222126] text-white">
                <h3 className="text-xl font-bold mb-2">Feature</h3>
              </div>
              <div className="p-8 bg-[#222126] text-white">
                <h3 className="text-xl font-bold mb-2">Grill Pod</h3>
              </div>
              <div className="p-8 bg-[#222126] text-white">
                <h3 className="text-xl font-bold mb-2">Traditional Wood</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {[
              { feature: "Weatherproof", grillPod: "✅ Fully sealed", traditional: "❌ Warps, rots" },
              { feature: "Insulated", grillPod: "✅ Year-round use", traditional: "❌ Poor insulation" },
              { feature: "Low Maintenance", grillPod: "✅ Composite cladding", traditional: "❌ Requires staining" },
              { feature: "Built-In Appliances", grillPod: "✅ Included", traditional: "❌ Often extra" },
              { feature: "Safety", grillPod: "✅ Roller door & frame", traditional: "❌ Not secure" }
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-3 divide-x divide-gray-200">
                <div className="p-6 bg-gray-50">
                  <p className="font-bold text-[#222126]">{row.feature}</p>
                </div>
                <div className="p-6">
                  <p className="text-green-600 font-medium">{row.grillPod}</p>
                </div>
                <div className="p-6">
                  <p className="text-red-600 font-medium">{row.traditional}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Add-On: Pergola & Glass Surround */}
      <section className="py-32 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Rain or Shine – Entertain in Any Weather
            </h2>
            <p className="text-xl text-[#C5B8AB]/90 max-w-4xl mx-auto leading-relaxed font-light">
              Add a sleek veranda or pergola with glass enclosures to your Grill Pod. Perfect for winter barbecues or cozy autumn evenings.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="/Nigel Grill Pod/004.jpg"
                alt="Grill Pod with Pergola"
                className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/20 to-transparent rounded-lg"></div>
            </div>

            {/* Right - Features */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Pergola & Glass Features</h3>
              
              <div className="space-y-6">
                {[
                  "Weatherproof glass panels for year-round use",
                  "Integrated lighting for evening entertainment",
                  "Optional heating for winter comfort",
                  "Customizable size to fit your space",
                  "Professional installation included"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#C5B8AB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-[#222126]" />
                    </div>
                    <p className="text-[#C5B8AB]/90 font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#C5B8AB]/20 to-transparent p-6 rounded-lg border border-[#C5B8AB]/30">
                <p className="text-white font-bold text-lg mb-2">Perfect for All Seasons</p>
                <p className="text-[#C5B8AB]/90 text-sm">
                  Enjoy outdoor entertaining regardless of the weather. The pergola and glass surround create a comfortable, protected space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials / Lifestyle Section */}
      <section className="py-32 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 tracking-tight">
              See What Our Customers Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-[#222126] text-lg font-light mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#222126]">{testimonial.name}</p>
                    <p className="text-[#222126]/70 text-sm">{testimonial.location}</p>
                  </div>
                  <Quote className="w-8 h-8 text-[#C5B8AB]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action (CTA) */}
      <section className="py-32 bg-[#222126]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
            Ready to Elevate Your Outdoor Living?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={scrollToQuote}
              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#C5B8AB] to-white text-[#222126] font-black text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:shadow-2xl transform hover:from-white hover:to-[#C5B8AB]"
            >
              Get a Custom Quote
              <ChevronRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
            
            <button
              onClick={scrollToViewing}
              className="group inline-flex items-center px-12 py-6 border-2 border-[#C5B8AB] text-[#C5B8AB] font-black text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:bg-[#C5B8AB] hover:text-[#222126]"
            >
              See a Live Demo
              <Play className="ml-3 w-6 h-6 transition-transform group-hover:scale-110" />
            </button>
            
            <a
              href="tel:07730510368"
              className="group inline-flex items-center px-12 py-6 bg-[#222126] border-2 border-[#C5B8AB] text-[#C5B8AB] font-black text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:bg-[#C5B8AB] hover:text-[#222126]"
            >
              Talk to Our Team
              <Phone className="ml-3 w-6 h-6 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-32 bg-[#C5B8AB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#222126]">{faq.question}</h3>
                  {activeFAQ === index ? (
                    <X className="w-6 h-6 text-[#222126]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#222126]" />
                  )}
                </button>
                
                {activeFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-[#222126]/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-32 bg-[#222126]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Get Your Custom Grill Pod Quote
            </h2>
            <p className="text-xl text-[#C5B8AB]/80 font-light">
              Tell us about your vision and we'll create a custom quote for your perfect outdoor kitchen.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-lg p-20 text-center shadow-2xl transform scale-105">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-10">
                <Send className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#222126] mb-6">
                Thank You!
              </h3>
              <p className="text-[#222126]/80 text-lg">
                We'll be in touch shortly to discuss your Grill Pod project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-16 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <label htmlFor="firstName" className="block text-[#222126] font-bold mb-3 text-base">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-[#222126] transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-[#222126] font-bold mb-3 text-base">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-[#222126] transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#222126] font-bold mb-3 text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-[#222126] transition-colors text-base"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-[#222126] font-bold mb-3 text-base">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-[#222126] transition-colors text-base"
                  />
                </div>
              </div>

              <div className="mb-12">
                <label htmlFor="message" className="block text-[#222126] font-bold mb-3 text-base">
                  Tell us about your vision... *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-gray-300 focus:outline-none focus:border-[#222126] transition-colors resize-vertical text-base"
                  placeholder="Describe your space, preferred features, timeline, or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#222126] to-[#222126]/90 text-[#C5B8AB] py-6 font-black text-lg uppercase tracking-wider transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Get My Custom Quote'}</span>
                {!isSubmitting && <Send className="w-6 h-6" />}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Section - Visit Our Workshop */}
      <section id="contact-section" className="relative h-screen">
        <div className="grid lg:grid-cols-2 h-full">
          {/* Map */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.7891234567!2d-6.6234567!3d54.8234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485fd123456789ab%3A0x123456789abcdef0!2s9%20Ballyknock%20Rd%2C%20Maghera%20BT46%205AB%2C%20UK!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) brightness(0.6)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NMG Workshop Location"
            ></iframe>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-[#C5B8AB] rounded-full border-4 border-white shadow-2xl animate-pulse"></div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-[#222126] flex items-center justify-center p-8 lg:p-16">
            <div className="w-full max-w-lg space-y-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                  Visit Our Workshop
                </h2>
                <p className="text-lg text-[#C5B8AB]/80 font-light">
                  See Grill Pods in person and discuss your project.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-center space-x-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C5B8AB] to-white rounded-full flex items-center justify-center">
                    <Phone className="w-10 h-10 text-[#222126]" />
                  </div>
                  <div>
                    <p className="text-[#C5B8AB]/70 text-sm uppercase tracking-wider font-bold">Phone</p>
                    <a 
                      href="tel:07730510368" 
                      className="text-white text-xl font-medium hover:text-[#C5B8AB] transition-colors"
                    >
                      07730 510368
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C5B8AB] to-white rounded-full flex items-center justify-center">
                    <Mail className="w-10 h-10 text-[#222126]" />
                  </div>
                  <div>
                    <p className="text-[#C5B8AB]/70 text-sm uppercase tracking-wider font-bold">Email</p>
                    <a 
                      href="mailto:nigelmcg@gmail.com" 
                      className="text-white text-xl font-medium hover:text-[#C5B8AB] transition-colors break-all"
                    >
                      nigelmcg@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#C5B8AB] to-white rounded-full flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-[#222126]" />
                  </div>
                  <div>
                    <p className="text-[#C5B8AB]/70 text-sm uppercase tracking-wider font-bold">Location</p>
                    <p className="text-white text-xl font-medium leading-tight">
                      9 Ballyknock Road<br />Maghera
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:07730510368"
                className="w-full bg-gradient-to-r from-[#C5B8AB] to-white text-[#222126] py-6 font-black text-lg uppercase tracking-wider transition-all duration-500 hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl"
              >
                <Phone className="w-6 h-6" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrillPodPage;