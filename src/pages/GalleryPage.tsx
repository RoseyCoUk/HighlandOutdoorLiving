import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Luxury Garden Sauna',
      category: 'Sauna',
      image: '/image copy copy copy.png',
      description: 'Custom-built sauna with premium cedar interior and LED lighting'
    },
    {
      id: 2,
      title: 'Premium Grill Pod',
      category: 'Grill Pod',
      image: '/image copy copy copy copy copy copy.png',
      description: 'All-weather grill pod with veranda extension'
    },
    {
      id: 3,
      title: 'Modern Storage Shed',
      category: 'Shed',
      image: '/image copy copy copy copy.png',
      description: 'Contemporary shed design with composite cladding'
    },
    {
      id: 4,
      title: 'Compact Spa Sauna',
      category: 'Sauna',
      image: '/image copy copy copy copy copy.png',
      description: 'Space-efficient sauna perfect for smaller gardens'
    },
    {
      id: 5,
      title: 'Entertainment Grill Pod',
      category: 'Grill Pod',
      image: '/image copy copy.png',
      description: 'Large grill pod designed for family gatherings'
    },
    {
      id: 6,
      title: 'Workshop Shed',
      category: 'Shed',
      image: '/image.png',
      description: 'Spacious workshop with power and lighting installation'
    },
    {
      id: 7,
      title: 'Lakeside Sauna',
      category: 'Sauna',
      image: '/image copy copy copy.png',
      description: 'Scenic sauna installation with panoramic views'
    },
    {
      id: 8,
      title: 'Garden Office Shed',
      category: 'Shed',
      image: '/image copy.png',
      description: 'Insulated garden office with modern finishes'
    },
    {
      id: 9,
      title: 'Deluxe Grill Pod',
      category: 'Grill Pod',
      image: '/image copy copy copy copy copy copy.png',
      description: 'Premium grill pod with custom lighting and seating'
    }
  ];

  const filters = ['All', 'Sauna', 'Grill Pod', 'Shed'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage(lightboxImage === 0 ? filteredProjects.length - 1 : lightboxImage - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightboxImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxImage]);

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-[73px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/image.png')"
          }}
        ></div>
        
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-white leading-tight tracking-wide">
            Our Work
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Real builds. Real results. Explore our portfolio of premium outdoor living solutions.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#222126]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Tabs */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-12">
              Project Gallery
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`px-6 py-3 text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    filter === filterOption
                      ? 'bg-[#C5B8AB] text-[#222126] font-semibold shadow-xl'
                      : 'border-2 border-[#C5B8AB]/50 text-[#C5B8AB] hover:border-[#C5B8AB] hover:bg-[#C5B8AB]/10'
                  }`}
                >
                  {filterOption}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/90 via-[#222126]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 bg-[#C5B8AB] text-[#222126] text-sm font-medium rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#C5B8AB]/90 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Click indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Results count */}
          <div className="text-center mt-12">
            <p className="text-[#C5B8AB]/70">
              Showing {filteredProjects.length} {filter === 'All' ? 'projects' : filter.toLowerCase() + ' projects'}
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          {filteredProjects.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image and info */}
          <div className="max-w-6xl w-full">
            <img
              src={filteredProjects[lightboxImage].image}
              alt={filteredProjects[lightboxImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image info */}
            <div className="text-center mt-6">
              <span className="inline-block px-3 py-1 bg-[#C5B8AB] text-[#222126] text-sm font-medium rounded-full mb-3">
                {filteredProjects[lightboxImage].category}
              </span>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {filteredProjects[lightboxImage].title}
              </h3>
              <p className="text-[#C5B8AB]/90 leading-relaxed max-w-2xl mx-auto">
                {filteredProjects[lightboxImage].description}
              </p>
              
              {/* Image counter */}
              <p className="text-[#C5B8AB]/60 text-sm mt-4">
                {lightboxImage + 1} of {filteredProjects.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-[#C5B8AB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#222126] mb-8">
            Ready to Create Your Own?
          </h2>
          
          <p className="text-xl text-[#222126]/80 mb-12 font-light">
            Let's discuss your vision and bring it to life with the same quality and attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:07730510368"
              className="inline-flex items-center px-8 py-4 bg-[#222126] text-[#C5B8AB] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Call for Quote
            </a>
            
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-[#222126] text-[#222126] font-semibold text-lg transition-all duration-300 hover:bg-[#222126] hover:text-[#C5B8AB] hover:scale-105"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;