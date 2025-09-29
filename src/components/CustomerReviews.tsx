import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  product: string;
  date: string;
  image?: string;
}

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      location: "Inverness",
      rating: 5,
      review: "Highland Outdoor Living transformed our garden with a stunning Arctic Spas hot tub. The quality is exceptional and the team was professional throughout. We use it year-round and it's become the heart of our outdoor relaxation space.",
      product: "Arctic Spas Hot Tub",
      date: "March 2024",
      image: "/Nigel Grill Pod/GrillPod1.JPG"
    },
    {
      id: 2,
      name: "David O'Connor",
      location: "Fort William",
      rating: 5,
      review: "The sauna installation was seamless from start to finish. The steel frame construction is incredibly sturdy and the heat-up time is amazing. Best investment we've made for our home.",
      product: "Sauna",
      date: "February 2024",
      image: "/sauna/Sauna1.JPG"
    },
    {
      id: 3,
      name: "Emma & James Wilson",
      location: "Nairn",
      rating: 5,
      review: "Our Arctic Spas hot tub is exactly what we needed. The team listened to our requirements and delivered a perfect solution. The energy-efficient design looks modern and requires minimal maintenance.",
      product: "Arctic Spas Hot Tub",
      date: "January 2024",
      image: "/Shed1.png"
    },
    {
      id: 4,
      name: "Robert McLaughlin",
      location: "Aviemore",
      rating: 5,
      review: "Outstanding service and craftsmanship. The Arctic Spas hot tub has exceeded our expectations. The energy-efficient design is top quality and the weatherproof construction is perfect for the Scottish Highlands climate.",
      product: "Arctic Spas Hot Tub",
      date: "December 2023",
      image: "/Nigel Grill Pod/GrillPod2.JPG"
    },
    {
      id: 5,
      name: "Lisa & Patrick Kelly",
      location: "Elgin",
      rating: 5,
      review: "We're absolutely delighted with our garden sauna. The thermal aspen interior is beautiful and the Harvia heater is incredibly efficient. It's our daily wellness ritual now.",
      product: "Sauna",
      date: "November 2023",
      image: "/sauna/Sauna2.JPG"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            What Our Customers Say
          </h2>
          <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto">
            Hear from homeowners across Inverness and the Scottish Highlands about their Arctic Spas hot tubs, pools, and saunas.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Review Content */}
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-white/20" />
              
              <div className="bg-[#1f1f1f] rounded-lg p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="flex mr-4">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                  <span className="text-[#E0E0E0]/70 text-sm">
                    {reviews[currentReview].rating}/5
                  </span>
                </div>

                <blockquote className="text-[#E0E0E0] text-lg leading-relaxed mb-6 italic">
                  "{reviews[currentReview].review}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">
                      {reviews[currentReview].name}
                    </h4>
                    <p className="text-[#E0E0E0]/60 text-sm">
                      {reviews[currentReview].location} • {reviews[currentReview].product}
                    </p>
                    <p className="text-[#E0E0E0]/40 text-xs">
                      {reviews[currentReview].date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview
                        ? 'bg-[#8B1E2D]'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={reviews[currentReview].image}
                  alt={`${reviews[currentReview].product} project`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/20 to-transparent"></div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevReview}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#8B1E2D] text-white rounded-full flex items-center justify-center hover:bg-[#6f1824] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextReview}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#8B1E2D] text-white rounded-full flex items-center justify-center hover:bg-[#6f1824] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-[#E0E0E0]/70 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-[#E0E0E0]/70 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-[#E0E0E0]/70 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5 Years</div>
              <div className="text-[#E0E0E0]/70 text-sm">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews; 