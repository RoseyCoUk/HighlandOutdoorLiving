import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {

  const [filter, setFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Luxury Garden Sauna',
      category: 'Sauna',
      image: '/landing pages/Sauna6.JPG',
      description: 'Steel-framed, fully-insulated sauna with premium finishes'
    },
    {
      id: 2,
      title: 'Premium Grill Pod',
      category: 'Grill Pod',
      image: '/Nigel Grill Pod/022 HiRes.jpg',
      description: 'All-weather grill pod with Mont Alpi kitchen'
    },
    {
      id: 3,
      title: 'Modern Storage Shed',
      category: 'Shed',
      image: '/sheds/7f48b43d-826d-4937-82c9-d43d0b93e097.JPG',
      description: 'Contemporary shed design with galvanised steel frame'
    },
    {
      id: 3.5,
      title: 'Garden Room',
      category: 'Garden Room',
      image: '/garden rooms/8ab6ed75-b93d-445e-9adf-4db36c921a87.JPG',
      description: 'Beautiful outdoor living space for year-round use'
    },
    {
      id: 4,
      title: 'Compact Spa Sauna',
      category: 'Sauna',
      image: '/landing pages/Sauna7.JPG',
      description: 'Space-efficient sauna perfect for smaller gardens'
    },
    {
      id: 5,
      title: 'Entertainment Grill Pod',
      category: 'Grill Pod',
      image: '/Nigel Grill Pod/008.jpg',
      description: 'Large grill pod designed for family gatherings'
    },
    {
      id: 6,
      title: 'Workshop Shed',
      category: 'Shed',
      image: '/sheds/IMG_3774.JPG',
      description: 'Spacious workshop with power and lighting installation'
    },
    {
      id: 7,
      title: 'Garden Wellness Sauna',
      category: 'Sauna',
      image: '/landing pages/Sauna8.JPG',
      description: 'Thermal aspen interior sauna for ultimate relaxation'
    },
    {
      id: 8,
      title: 'Garden Office Shed',
      category: 'Shed',
      image: '/sheds/84e6f01a-16e9-4a4c-8730-5b0d62c08214.JPG',
      description: 'Insulated garden office with modern finishes'
    },
    {
      id: 8.5,
      title: 'Luxury Garden Room',
      category: 'Garden Room',
      image: '/garden rooms/b94fa607-4b57-4496-8726-a3a38f5e91e3.JPG',
      description: 'Premium garden room with panoramic views'
    },
    {
      id: 9,
      title: 'Deluxe Grill Pod',
      category: 'Grill Pod',
      image: '/landing pages/GrillPod3.JPG',
      description: 'Premium grill pod with custom lighting and seating'
    },
    {
      id: 10,
      title: 'Modern Outdoor Kitchen',
      category: 'Grill Pod',
      image: '/landing pages/GrillPod4.JPG',
      description: 'Contemporary outdoor kitchen with premium appliances'
    },
    {
      id: 11,
      title: 'Luxury Shed Office',
      category: 'Shed',
      image: '/sheds/7f48b43d-826d-4937-82c9-d43d0b93e097.JPG',
      description: 'Professional garden office with all amenities'
    },
    {
      id: 11.5,
      title: 'Contemporary Garden Room',
      category: 'Garden Room',
      image: '/garden rooms/e30f758f-dc62-4ef9-9b91-b92acbe279fd.JPG',
      description: 'Modern garden room with sleek design and functionality'
    },
    {
      id: 11.6,
      title: 'The Old Thatch Inn Pizza Oven Room',
      category: 'Garden Room',
      image: '/sheds/IMG_2006.HEIC',
      description: 'Bespoke garden room with integrated pizza oven - galvanised steel frame with stylish cladding and roller door'
    },
    {
      id: 12,
      title: 'Compact Garden Sauna',
      category: 'Sauna',
      image: '/landing pages/Sauna6.JPG',
      description: 'Perfect sauna for smaller garden spaces'
    },
    {
      id: 13,
      title: 'Luxury Spa Sauna',
      category: 'Sauna',
      image: '/landing pages/Sauna7.JPG',
      description: 'Premium spa-grade sauna with advanced features'
    },
    {
      id: 14,
      title: 'Premium Grill Pod',
      category: 'Grill Pod',
      image: '/landing pages/GrillPod5.JPG',
      description: 'Deluxe grill pod with premium finishes and appliances'
    },
    {
      id: 15,
      title: 'Garden Wellness Retreat',
      category: 'Sauna',
      image: '/landing pages/Sauna8.JPG',
      description: 'Comprehensive wellness space for ultimate relaxation'
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

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  useEffect(() => {
    if (lightboxImage !== null) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [lightboxImage]);

  return (
    <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 pt-[120px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-8">
              Our Portfolio
            </h1>
            <p className="text-xl text-[#C5B8AB]/90 max-w-3xl mx-auto leading-relaxed">
              Explore our latest projects showcasing premium outdoor living solutions across Northern Ireland.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-8 py-3 transition-all duration-300 rounded-lg ${
                  filter === filterOption
                    ? 'bg-[#C5B8AB] text-[#222126] font-semibold shadow-lg'
                    : 'border-2 border-[#C5B8AB]/50 text-[#C5B8AB] hover:border-[#C5B8AB] hover:bg-[#C5B8AB]/10'
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-4 hover:scale-105 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/90 via-[#222126]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[#C5B8AB]/90 text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <span className="inline-block px-4 py-2 bg-[#C5B8AB] text-[#222126] text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#C5B8AB]/70 text-xl">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl w-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-[#C5B8AB] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-[#C5B8AB] transition-colors"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-[#C5B8AB] transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={filteredProjects[lightboxImage].image}
                alt={filteredProjects[lightboxImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {filteredProjects[lightboxImage].title}
                </h3>
                <p className="text-[#C5B8AB] text-lg">
                  {filteredProjects[lightboxImage].description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="inline-block px-4 py-2 bg-[#C5B8AB] text-[#222126] text-sm font-semibold rounded-full">
                    {filteredProjects[lightboxImage].category}
                  </span>
                  <span className="text-white/70">
                    {lightboxImage + 1} of {filteredProjects.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;