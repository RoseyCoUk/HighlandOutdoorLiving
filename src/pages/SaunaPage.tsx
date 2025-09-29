import React from 'react';
import SEOHead from '../components/SEOHead';

const SaunaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2B2B2B] text-white flex items-center justify-center">
      <SEOHead 
        title="Luxury Saunas | Highland Outdoor Living"
        description="Saunas page is coming soon."
        image="/Arctic-Spa-1.jpg"
        url="/saunas"
      />
      <div className="text-center px-6">
        <h1 className="text-3xl md:text-5xl font-semibold">Luxury Saunas</h1>
        <p className="mt-3 text-[#E0E0E0]">Coming soon.</p>
      </div>
    </div>
  );
};

export default SaunaPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Check, Droplets, Brain, Flame, Leaf, Star, Phone, Mail, MapPin, Send, X, ChevronRight, Shield, Wrench, Clock, Zap, Award, Truck, Home, Settings, Users, Calendar, ArrowRight, Eye, Palette } from 'lucide-react';
import { submitLead, formatName } from '../lib/forms';
import SEOHead from '../components/SEOHead';

const SaunaPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phone: '',
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
        phone: formData.phone,
        message: formData.message,
        product: 'Sauna',
        source: 'Sauna Page'
      });

      if (result.success) {
        navigate('/thank-you?product=sauna');
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

  const scrollToOptions = () => {
    document.getElementById('customisation')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "Do I need a HIAB crane?",
      answer: "Yes. A HIAB is required to position the sauna. We can organise it for you, or you can arrange it locally."
    },
    {
      question: "What kind of base do I need?",
      answer: "A level concrete base. We'll send you the exact size and depth requirements for your build."
    },
    {
      question: "Do you offer standard sizes?",
      answer: "No — all of our saunas are bespoke to your space and preferences."
    },
    {
      question: "How long does it take to heat up?",
      answer: "Around 15 minutes, versus 45–60 minutes for a typical wooden barrel sauna."
    },
    {
      question: "What's the maintenance like?",
      answer: "Minimal. The composite cladding and galvanised steel frame stand up to the elements without the frequent oiling/staining wooden saunas need."
    },
    {
      question: "Can you deliver to my area?",
      answer: "Yes — we deliver throughout the UK & Ireland."
    },
    {
      question: "What heaters do you use?",
      answer: "Harvia heaters — known for reliability and performance."
    },
    {
      question: "What power supply do I need?",
      answer: "We'll confirm the exact requirement once we know your size/heater spec."
    }
  ];

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB]">
      <SEOHead 
        title="Garden Saunas in Northern Ireland - Premium Sauna Installation | NMG Outdoor Living"
        description="Transform your garden with premium saunas in Northern Ireland. Expert sauna installation in Maghera, Belfast, and beyond. Health benefits, relaxation, and property value enhancement."
        keywords={['garden saunas', 'sauna installation', 'Northern Ireland', 'Maghera', 'Belfast', 'sauna benefits', 'outdoor saunas', 'wellness']}
        image="/sauna/InsideSauna1.JPG"
        url="/saunas"
        type="product"
      />
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-[73px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/sauna/Sauna1.JPG')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 text-white leading-none tracking-tighter px-2">
            Steel-Framed, Fully-Insulated, Bespoke Saunas.
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-16 max-w-4xl mx-auto leading-relaxed font-light px-2">
            Galvanised steel frame, fully insulated, Trocal roof and composite cladding — a low-maintenance sauna that looks modern and costs less to run.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <button
              onClick={scrollToQuote}
              className="group inline-flex items-center px-6 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-[#C5B8AB] to-white text-[#222126] font-black text-base sm:text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:shadow-2xl transform hover:from-white hover:to-[#C5B8AB] w-full sm:w-auto justify-center"
            >
              Get a Bespoke Quote
              <ChevronRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-2" />
            </button>
            
            <button
              onClick={scrollToOptions}
              className="group inline-flex items-center px-6 sm:px-12 py-4 sm:py-6 border-2 border-[#C5B8AB] text-[#C5B8AB] font-black text-base sm:text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:bg-[#C5B8AB] hover:text-[#222126] w-full sm:w-auto justify-center"
            >
              See Cladding & Interior Options
              <Settings className="ml-2 sm:ml-3 w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 sm:w-12 sm:h-12 text-white/60" />
        </div>
      </section>

      {/* 2. Social Proof & Trust Strip */}
      <section className="py-12 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { icon: Award, text: "Built with Harvia® heaters" },
              { icon: Settings, text: "Bespoke to your space" },
              { icon: Truck, text: "Delivered across UK & Ireland" },
              { icon: Shield, text: "Low maintenance exterior" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-[#222126] rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#C5B8AB]" />
                </div>
                <p className="text-[#222126] font-medium text-sm leading-tight px-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Ours is Different */}
      <section className="py-32 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Engineered, Not Just Assembled.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Galvanised Steel Frame",
                description: "Rigid, long-lasting and built to handle UK & Irish weather."
              },
              {
                icon: Flame,
                title: "Fully Insulated Shell",
                description: "Faster heat-up, better heat retention, lower running costs."
              },
              {
                icon: Home,
                title: "Trocal Roof",
                description: "Industrial-grade waterproofing to keep the elements out."
              },
              {
                icon: Leaf,
                title: "Composite Cladding",
                description: "Modern look, minimal upkeep vs traditional timber exteriors."
              },
              {
                icon: Droplets,
                title: "Thermal Aspen Interior",
                description: "Premium feel inside; warm, comfortable, and built for heat."
              },
              {
                icon: Award,
                title: "Harvia Heaters",
                description: "The industry standard for reliability and performance."
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

          <div className="text-center mt-12">
            <button
              onClick={scrollToOptions}
              className="group inline-flex items-center px-8 py-4 bg-[#C5B8AB] text-[#222126] font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              See the full spec
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Performance vs Traditional */}
      <section className="py-32 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 tracking-tight">
              Performance Comparison
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <div className="grid grid-cols-3 divide-x divide-gray-200">
                {/* Header */}
                <div className="p-6 lg:p-8 bg-[#222126] text-white">
                  <h3 className="text-lg lg:text-xl font-bold mb-2">Feature</h3>
                </div>
                <div className="p-6 lg:p-8 bg-[#222126] text-white">
                  <h3 className="text-lg lg:text-xl font-bold mb-2">Our Steel & Composite Sauna</h3>
                </div>
                <div className="p-6 lg:p-8 bg-[#222126] text-white">
                  <h3 className="text-lg lg:text-xl font-bold mb-2">Traditional Wooden Barrel Sauna</h3>
                </div>
              </div>

              {/* Comparison Rows */}
              {[
                { feature: "Heat-up time", modern: "~15 minutes", traditional: "45–60 minutes" },
                { feature: "Weather resistance", modern: "Designed for UK/Irish climate", traditional: "Can warp & weather" },
                { feature: "Maintenance", modern: "Low (composite & steel)", traditional: "High (regular staining/oiling)" },
                { feature: "Running costs", modern: "Lower (insulated, heats fast)", traditional: "Higher (longer heat-up, more loss)" },
                { feature: "Aesthetics", modern: "Modern, clean lines", traditional: "Rustic" },
                { feature: "Privacy", modern: "Large tinted window + glass door", traditional: "Clear/glass or small portholes" },
                { feature: "Roof", modern: "Trocal waterproof roofing", traditional: "Typically timber shingles" },
                { feature: "Custom sizes", modern: "Fully bespoke", traditional: "Often fixed" }
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-3 divide-x divide-gray-200">
                  <div className="p-4 lg:p-6 bg-gray-50">
                    <p className="font-bold text-[#222126] text-sm lg:text-base">{row.feature}</p>
                  </div>
                  <div className="p-4 lg:p-6">
                    <p className="text-green-600 font-medium text-sm lg:text-base">{row.modern}</p>
                  </div>
                  <div className="p-4 lg:p-6">
                    <p className="text-red-600 font-medium text-sm lg:text-base">{row.traditional}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Table */}
            <div className="md:hidden">
              {[
                { feature: "Heat-up time", modern: "~15 minutes", traditional: "45–60 minutes" },
                { feature: "Weather resistance", modern: "Designed for UK/Irish climate", traditional: "Can warp & weather" },
                { feature: "Maintenance", modern: "Low (composite & steel)", traditional: "High (regular staining/oiling)" },
                { feature: "Running costs", modern: "Lower (insulated, heats fast)", traditional: "Higher (longer heat-up, more loss)" },
                { feature: "Aesthetics", modern: "Modern, clean lines", traditional: "Rustic" },
                { feature: "Privacy", modern: "Large tinted window + glass door", traditional: "Clear/glass or small portholes" },
                { feature: "Roof", modern: "Trocal waterproof roofing", traditional: "Typically timber shingles" },
                { feature: "Custom sizes", modern: "Fully bespoke", traditional: "Often fixed" }
              ].map((row, index) => (
                <div key={index} className="border-b border-gray-200 p-4">
                  <div className="mb-3">
                    <h4 className="font-bold text-[#222126] text-sm mb-2">{row.feature}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 p-3 rounded min-w-0">
                      <p className="text-green-700 font-medium text-xs mb-1">Our Sauna</p>
                      <p className="text-green-600 text-sm leading-relaxed break-words">{row.modern}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded min-w-0">
                      <p className="text-red-700 font-medium text-xs mb-1">Traditional</p>
                      <p className="text-red-600 text-sm leading-relaxed break-words">{row.traditional}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Customisation & Options */}
      <section id="customisation" className="py-32 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Made for Your Space
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Cladding choices",
                description: "Show real swatches of composite, timber, and modern finishes"
              },
              {
                icon: Droplets,
                title: "Side shower compartment",
                description: "Optional integrated shower for complete wellness experience"
              },
              {
                icon: Eye,
                title: "Window size & tint",
                description: "Customizable privacy and natural light options"
              },
              {
                icon: Flame,
                title: "Heater options",
                description: "Harvia models, electric/wood if applicable"
              },
              {
                icon: Users,
                title: "Bench configuration & lighting",
                description: "Custom layouts and ambient lighting packages"
              },
              {
                icon: Palette,
                title: "Exterior colours / handles / hardware",
                description: "Personalize every detail to match your style"
              }
            ].map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 border border-[#C5B8AB]/20 rounded-lg text-center transform hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C5B8AB] to-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-[#222126]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>
                <p className="text-[#C5B8AB]/90 text-sm leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToQuote}
              className="group inline-flex items-center px-12 py-6 bg-[#C5B8AB] text-[#222126] font-black text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:shadow-2xl"
            >
              Build your sauna
              <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Gallery / Case Studies */}
      <section className="py-32 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 tracking-tight">
              Real Projects, Real Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                image: '/sauna/InsideSauna1.JPG',
                title: 'Modern Garden Sauna',
                caption: 'Heat-ready in 15 minutes, even in December.'
              },
              {
                image: '/sauna/InsideSauna2.JPG',
                title: 'Lakeside Wellness Retreat',
                caption: 'Weatherproof design withstands coastal conditions.'
              },
              {
                image: '/sauna/InsideSauna3.JPG',
                title: 'Compact Urban Sauna',
                caption: 'Bespoke size fits perfectly in small gardens.'
              },
              {
                image: '/sauna/InsideSauna4.JPG',
                title: 'Luxury Spa Sauna',
                caption: 'Thermal aspen interior provides premium comfort.'
              },
              {
                image: '/sauna/InsideSauna5.JPG',
                title: 'Family Wellness Hub',
                caption: 'Large tinted window maintains privacy while connecting to nature.'
              },
              {
                image: '/sauna/InsideSauna6.JPG',
                title: 'All-Season Sauna',
                caption: 'Trocal roof ensures year-round protection.'
              },
              {
                image: '/sauna/InsideSauna7.JPG',
                title: 'Premium Interior Design',
                caption: 'Custom lighting and premium materials throughout.'
              },
              {
                image: '/sauna/InsideSauna8.JPG',
                title: 'Luxury Finishes',
                caption: 'High-end finishes and attention to detail.'
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/90 via-[#222126]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#C5B8AB] text-sm leading-relaxed">
                      {project.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Delivery & Installation */}
      <section className="py-32 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Hassle-Free Delivery & Placement
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-16">
            {[
              {
                step: "1",
                title: "Design & Quote",
                description: "We finalise your spec and price."
              },
              {
                step: "2",
                title: "Prepare Base",
                description: "A level concrete base is required (we provide guidance)."
              },
              {
                step: "3",
                title: "Delivery",
                description: "We deliver across the UK & Ireland."
              },
              {
                step: "4",
                title: "HIAB Crane Placement",
                description: "Required to position the sauna. We can organise this, or you can."
              },
              {
                step: "5",
                title: "Power & First Heat",
                description: "Connect power, and you're ready to sweat in ~15 minutes."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#C5B8AB] rounded-full flex items-center justify-center mx-auto mb-6 text-[#222126] font-bold text-2xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#C5B8AB]/90 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Before you order checklist */}
          <div className="bg-gradient-to-r from-[#C5B8AB]/20 to-transparent p-8 rounded-lg border border-[#C5B8AB]/30">
            <h3 className="text-2xl font-bold text-white mb-6">Before you order checklist:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-[#C5B8AB] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Level concrete base ready</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-[#C5B8AB] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Access for HIAB crane (we can advise)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-[#C5B8AB] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Power supply available (we'll confirm exact requirement)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:07730510368"
              className="group inline-flex items-center px-12 py-6 bg-[#C5B8AB] text-[#222126] font-black text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:shadow-2xl"
            >
              Talk to us about delivery to your location
              <Phone className="ml-3 w-6 h-6 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. Cost & Running-Cost Story */}
      <section className="py-32 bg-[#C5B8AB]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8 tracking-tight">
            Heats in 15 Minutes = Lower Bills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-2xl">
              <div className="w-16 h-16 bg-[#222126] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-[#C5B8AB]" />
              </div>
              <h3 className="text-xl font-bold text-[#222126] mb-4">Full insulation + fast heat-up</h3>
              <p className="text-[#222126]/80 leading-relaxed">
                Less time & energy to reach temperature means significant savings on your energy bills.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-2xl">
              <div className="w-16 h-16 bg-[#222126] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#C5B8AB]" />
              </div>
              <h3 className="text-xl font-bold text-[#222126] mb-4">Composite exterior & steel frame</h3>
              <p className="text-[#222126]/80 leading-relaxed">
                Less maintenance spend over the years compared to traditional wooden saunas.
              </p>
            </div>
          </div>

          <div className="bg-[#222126] p-8 rounded-lg text-white">
            <p className="text-lg font-medium">
              Want a running-cost estimate for your garden and usage pattern? Ask us when you enquire.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Strong Final CTA Block */}
      <section className="py-32 bg-[#222126]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
            Ready to design your modern, low-maintenance sauna?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={scrollToQuote}
              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#C5B8AB] to-white text-[#222126] font-black text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:shadow-2xl transform hover:from-white hover:to-[#C5B8AB]"
            >
              Get a Bespoke Quote
              <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
            </button>
            
            <a
              href="tel:07730510368"
              className="group inline-flex items-center px-12 py-6 border-2 border-[#C5B8AB] text-[#C5B8AB] font-black text-lg uppercase tracking-wider transition-all duration-700 hover:scale-110 hover:bg-[#C5B8AB] hover:text-[#222126]"
            >
              Talk to a Designer
              <Users className="ml-3 w-6 h-6 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Reassurance bullets */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-6 h-6 text-[#C5B8AB]" />
              <span className="text-white font-medium">Delivered UK & Ireland</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Settings className="w-6 h-6 text-[#C5B8AB]" />
              <span className="text-white font-medium">HIAB & base guidance provided</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-6 h-6 text-[#C5B8AB]" />
              <span className="text-white font-medium">Built for UK/Irish weather</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
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
              Get Your Bespoke Sauna Quote
            </h2>
            <p className="text-xl text-[#C5B8AB]/80 font-light">
              Tell us about your vision and we'll create a custom quote for your perfect sauna.
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
                We'll be in touch shortly to discuss your sauna project.
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

                <div>
                  <label htmlFor="phone" className="block text-[#222126] font-bold mb-3 text-base">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                  placeholder="Describe your space, preferred size, heater type, special features, or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#222126] to-[#222126]/90 text-[#C5B8AB] py-6 font-black text-lg uppercase tracking-wider transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Get My Bespoke Quote'}</span>
                {!isSubmitting && <Send className="w-6 h-6" />}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 11. Footer */}
      <section className="py-16 bg-[#C5B8AB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-[#222126] mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#222126]" />
                  <a href="tel:07730510368" className="text-[#222126] hover:text-[#222126]/80 transition-colors">
                    07730 510368
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#222126]" />
                  <a href="mailto:nigelmcg@gmail.com" className="text-[#222126] hover:text-[#222126]/80 transition-colors break-all">
                    nigelmcg@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#222126]" />
                  <span className="text-[#222126]">9 Ballyknock Road, Maghera</span>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div>
              <h3 className="text-xl font-bold text-[#222126] mb-6">Service Area</h3>
              <p className="text-[#222126]/80">UK & Ireland</p>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold text-[#222126] mb-6">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-[#222126]/80 hover:text-[#222126] transition-colors">Warranty</a>
                <a href="#" className="block text-[#222126]/80 hover:text-[#222126] transition-colors">Terms & Conditions</a>
                <a href="#" className="block text-[#222126]/80 hover:text-[#222126] transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#222126]/20 mt-12 pt-8 text-center">
            <p className="text-[#222126]/60">
              © 2024 NMG Outdoor Living. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaunaPage;