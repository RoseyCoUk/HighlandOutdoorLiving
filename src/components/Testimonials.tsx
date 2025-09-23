import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah McKenna",
      location: "Inverness",
      rating: 5,
      text: "Absolutely delighted with our new Arctic Spas hot tub from Highland. The craftsmanship is exceptional and it's become our favorite place to unwind.",
      product: "Garden Sauna"
    },
    {
      name: "David Thompson",
      location: "Fortrose",
      rating: 5,
      text: "Our all‑weather pool is incredible — we swim year‑round and use it for cold‑plunge recovery.",
      product: "All‑Weather Pool"
    },
    {
      name: "Emma Wilson",
      location: "Nairn",
      rating: 5,
      text: "The sauna is perfect for recovery after a long day. Friendly team, great installation, and superb finish.",
      product: "Luxury Sauna"
    }
  ];

  return (
    <section className="py-24 bg-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#E0E0E0] max-w-3xl mx-auto">
            Hear from customers across Inverness and the Scottish Highlands
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-white/20" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#CBB79C] fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#E0E0E0] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="font-semibold text-white mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-[#E0E0E0]/60 text-sm mb-2">
                  {testimonial.location}
                </p>
                <span className="inline-block px-3 py-1 bg-[#8B1E2D] text-white text-xs font-medium rounded-full">
                  {testimonial.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-[#E0E0E0]/70">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-[#E0E0E0]/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-[#E0E0E0]/70">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;