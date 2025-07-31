import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah McKenna",
      location: "Ballymena",
      rating: 5,
      text: "Absolutely delighted with our new garden sauna from NMG. The craftsmanship is exceptional and it's become our favorite place to unwind. The team was professional throughout the entire process.",
      product: "Garden Sauna"
    },
    {
      name: "David Thompson",
      location: "Coleraine",
      rating: 5,
      text: "The grill pod has transformed our outdoor entertaining. We can now BBQ year-round regardless of the weather. Quality is outstanding and the installation was seamless.",
      product: "Grill Pod"
    },
    {
      name: "Emma Wilson",
      location: "Antrim",
      rating: 5,
      text: "Our custom shed is perfect for my pottery studio. NMG listened to all our requirements and delivered exactly what we needed. Highly recommend their bespoke service.",
      product: "Custom Shed"
    }
  ];

  return (
    <section className="py-24 bg-[#C5B8AB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#222126]/80 max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across Northern Ireland
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-[#222126]/20" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#222126]/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-[#222126] mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-[#222126]/60 text-sm mb-2">
                  {testimonial.location}
                </p>
                <span className="inline-block px-3 py-1 bg-[#222126]/10 text-[#222126] text-xs font-medium rounded-full">
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
              <div className="text-3xl font-bold text-[#222126] mb-2">200+</div>
              <div className="text-[#222126]/70">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#222126] mb-2">15+</div>
              <div className="text-[#222126]/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#222126] mb-2">100%</div>
              <div className="text-[#222126]/70">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;