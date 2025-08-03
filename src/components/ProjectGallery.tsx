import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProjectGallery = () => {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: 'Premium Grill Pod Installation',
      category: 'Grill Pods',
      image: '/landing pages/GrillPod1.JPG',
      description: 'Custom-built weatherproof grill pod with Mont Alpi kitchen'
    },
    {
      title: 'Luxury Garden Sauna',
      category: 'Saunas',
      image: '/landing pages/Sauna1.JPG',
      description: 'Steel-framed, fully-insulated sauna with premium finishes'
    },
    {
      title: 'Modern Outdoor Kitchen',
      category: 'Grill Pods',
      image: '/landing pages/GrillPod2.JPG',
      description: 'All-weather outdoor kitchen perfect for year-round entertaining'
    },
    {
      title: 'Custom Shed Workshop',
      category: 'Sheds',
      image: '/landing pages/outdoor glass room.JPG',
      description: 'Bespoke workshop shed with power and lighting'
    },
    {
      title: 'Garden Wellness Sauna',
      category: 'Saunas',
      image: '/landing pages/Sauna2.JPG',
      description: 'Thermal aspen interior sauna for ultimate relaxation'
    },
    {
      title: 'Entertainment Grill Pod',
      category: 'Grill Pods',
      image: '/landing pages/GrillPod3.JPG',
      description: 'Spacious grill pod designed for family gatherings'
    },
    {
      title: 'Compact Garden Sauna',
      category: 'Saunas',
      image: '/landing pages/Sauna3.JPG',
      description: 'Space-efficient sauna perfect for smaller gardens'
    },
    {
      title: 'Professional Grill Pod',
      category: 'Grill Pods',
      image: '/landing pages/GrillPod4.JPG',
      description: 'Commercial-grade outdoor kitchen installation'
    },
    {
      title: 'Luxury Shed Office',
      category: 'Sheds',
      image: '/landing pages/outdoor glass room 2.jpg',
      description: 'Insulated garden office with modern amenities'
    }
  ];

  const filters = ['All', 'Saunas', 'Grill Pods', 'Sheds'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Show only 2 items initially, or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 2);

  // Reset showAll when filter changes
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  return (
    <section id="gallery" className="py-20 bg-[#222126]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Our Work in Action
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => handleFilterChange(filterOption)}
                className={`px-6 py-2 transition-all duration-300 ${
                  filter === filterOption
                    ? 'bg-[#C5B8AB] text-[#222126] font-semibold'
                    : 'border border-[#C5B8AB]/50 text-[#C5B8AB] hover:border-[#C5B8AB] hover:bg-[#C5B8AB]/10'
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid - masonry style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#222126]/90 via-[#222126]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#C5B8AB]/90 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-[#C5B8AB] text-[#222126] text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredProjects.length > 2 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center px-8 py-4 bg-[#C5B8AB] text-[#222126] font-semibold text-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-2xl"
            >
              {showAll ? 'Show Less' : 'View More'}
              <ChevronDown className={`ml-2 w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;