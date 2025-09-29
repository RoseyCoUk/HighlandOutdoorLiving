import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProjectGallery = () => {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: 'Arctic Spas Hot Tub Installation',
      category: 'Hot Tubs',
      image: '/Arctic%20Spa%201.jpg',
      description: 'Energy‑efficient hot tub designed for the Highlands climate'
    },
    {
      title: 'Luxury Garden Sauna',
      category: 'Saunas',
      image: '/sauna/Sauna6.JPG',
      description: 'Steel-framed, fully-insulated sauna with premium finishes'
    },
    {
      title: 'All‑Weather Pool',
      category: 'Pools',
      image: '/arctic-spas-pool.jpg',
      description: 'Year‑round swimming and cold plunge therapy'
    },
    {
      title: 'Luxury Glass Pavilion',
      description: 'Premium outdoor entertainment space with glass walls',
      image: '/garden rooms/outdoor glass room 2.jpg',
      category: 'Other'
    },
    {
      title: 'Entertainment Grill Pod',
      category: 'Grill Pods',
      image: '/Nigel Grill Pod/Grill Pod Scenic Close Shot.jpg',
      description: 'Spacious grill pod designed for family gatherings'
    },
    {
      title: 'Compact Garden Sauna',
      category: 'Saunas',
      image: '/sauna/Sauna8.JPG',
      description: 'Space-efficient sauna perfect for smaller gardens'
    },
    {
      title: 'Professional Grill Pod',
      category: 'Grill Pods',
      image: '/Nigel Grill Pod/Grill Pod Exterior 1.jpg',
      description: 'Commercial-grade outdoor kitchen installation'
    },
    {
      title: 'Luxury Shed Office',
      category: 'Sheds',
      image: '/sheds/Big Tan Shed Interior.jpeg',
      description: 'Insulated garden office with modern amenities'
    },
    {
      title: 'Interior Sauna Experience',
      category: 'Saunas',
      image: '/sauna/InsideSauna1.JPG',
      description: 'Premium interior sauna with thermal aspen finishes'
    },
    {
      title: 'Grill Pod Interior',
      category: 'Grill Pods',
      image: '/Nigel Grill Pod/Grill In Action.jpg',
      description: 'Spacious interior with premium kitchen appliances'
    },
    {
      title: 'Luxury Pizza Oven Setup',
      category: 'Grill Pods',
      image: '/garden rooms/Pizza Oven.JPG',
      description: 'Professional pizza oven with outdoor dining area'
    },
    {
      title: 'Grill Pod Storage Solutions',
      category: 'Grill Pods',
      image: '/Nigel Grill Pod/Grill Pod Drawers.jpg',
      description: 'Smart storage solutions in premium grill pod design'
    },
    {
      title: 'Garden Storage Shed',
      category: 'Sheds',
      image: '/sheds/Garden Shed.jpeg',
      description: 'Traditional garden shed with classic design and secure storage'
    },
    {
      title: 'Medium Garden Shed',
      category: 'Sheds',
      image: '/sheds/Medium Garden Shed.jpeg',
      description: 'Mid-size garden shed perfect for tools and equipment storage'
    },
    {
      title: 'Compact Garden Shed',
      category: 'Sheds',
      image: '/sheds/Small Shed.jpeg',
      description: 'Space-efficient shed designed for smaller garden spaces'
    },
    {
      title: 'Custom Garden Shed',
      category: 'Sheds',
      image: '/sheds/Another Shed.jpeg',
      description: 'Bespoke garden shed built to your exact specifications'
    },
    {
      title: 'Shed Construction Process',
      category: 'Sheds',
      image: '/sheds/Another Shed In Construction.jpeg',
      description: 'Professional construction process showing quality workmanship'
    }
  ];

  const filters = ['All', 'Hot Tubs', 'Pools', 'Saunas', 'Other'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Show only 3 items initially, or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  // Reset showAll when filter changes
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#2B2B2B] mb-8">
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
                    ? 'bg-[#8B1E2D] text-white font-semibold'
                    : 'border border-[#2B2B2B]/30 text-[#2B2B2B] hover:border-[#2B2B2B] hover:bg-[#2B2B2B]/10'
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
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#E0E0E0]/90 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-[#8B1E2D] text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredProjects.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center px-8 py-4 bg-[#8B1E2D] text-white font-semibold text-lg transition-all duration-300 hover:bg-[#6f1824] hover:scale-105 hover:shadow-2xl"
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