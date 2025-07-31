import React, { useState } from 'react';

const ProjectGallery = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: 'Maghera Garden Revamp',
      category: 'PVC',
      image: '/image.png',
      description: 'Complete garden transformation with PVC fencing and decking'
    },
    {
      title: 'Garden Sauna in Maghera',
      category: 'Saunas',
      image: '/image copy copy copy.png',
      description: 'Custom-built luxury sauna with premium finishes'
    },
    {
      title: 'Custom Grill Pod Installation',
      category: 'Grill Pods',
      image: '/image copy copy copy copy copy copy.png',
      description: 'Weather-resistant grill pod for year-round entertaining'
    },
    {
      title: 'Modern PVC Decking',
      category: 'PVC',
      image: '/image copy.png',
      description: 'Low-maintenance PVC decking with contemporary design'
    },
    {
      title: 'Outdoor Wellness Sauna',
      category: 'Saunas',
      image: '/image copy copy copy copy copy.png',
      description: 'Wellness-focused sauna design with natural materials'
    },
    {
      title: 'Entertainment Grill Pod',
      category: 'Grill Pods',
      image: '/image copy copy.png',
      description: 'Spacious grill pod perfect for family gatherings'
    }
  ];

  const filters = ['All', 'PVC', 'Saunas', 'Grill Pods'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
                onClick={() => setFilter(filterOption)}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
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
      </div>
    </section>
  );
};

export default ProjectGallery;