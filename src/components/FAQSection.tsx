import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const faqData: FAQItem[] = [
    // Saunas
    {
      id: 'sauna-1',
      question: 'Do I need planning permission for a garden sauna?',
      answer: 'Most garden saunas don\'t require planning permission if they are less than 2.5m in height and don\'t cover more than 50% of your garden. However, if you live in a conservation area or have a listed building, you may need permission. We always recommend checking with your local council.',
      category: 'Saunas',
      tags: ['planning permission', 'garden sauna', 'regulations']
    },
    {
      id: 'sauna-2',
      question: 'How long does it take to heat up a sauna?',
      answer: 'Our steel-framed saunas heat up in approximately 15 minutes, compared to 45-60 minutes for traditional wooden barrel saunas. This is due to our superior insulation and efficient Harvia heaters.',
      category: 'Saunas',
      tags: ['heating', 'efficiency', 'Harvia heaters']
    },
    {
      id: 'sauna-3',
      question: 'What maintenance does a sauna require?',
      answer: 'Our saunas require minimal maintenance. The composite cladding and galvanized steel frame stand up to the elements without the frequent oiling and staining that wooden saunas need. Regular cleaning of the interior and annual heater inspection is all that\'s required.',
      category: 'Saunas',
      tags: ['maintenance', 'composite cladding', 'steel frame']
    },
    {
      id: 'sauna-4',
      question: 'What power supply do I need for a sauna?',
      answer: 'We\'ll confirm the exact power requirement once we know your sauna size and heater specification. Typically, you\'ll need a dedicated electrical circuit. Our team handles all electrical connections during installation.',
      category: 'Saunas',
      tags: ['electrical', 'power supply', 'installation']
    },

    // Grill Pods
    {
      id: 'grill-1',
      question: 'Are grill pods weatherproof?',
      answer: 'Yes, our grill pods are fully weatherproof and designed for year-round use in Northern Ireland\'s climate. They feature galvanized steel frames, composite cladding, and proper insulation to withstand rain, wind, and temperature changes.',
      category: 'Grill Pods',
      tags: ['weatherproof', 'year-round', 'climate']
    },
    {
      id: 'grill-2',
      question: 'What appliances come with a grill pod?',
      answer: 'Our grill pods come with premium Mont Alpi appliances including a gas grill, side burner, warming drawer, and storage. We can customize the appliance package based on your cooking needs and preferences.',
      category: 'Grill Pods',
      tags: ['Mont Alpi', 'appliances', 'customization']
    },
    {
      id: 'grill-3',
      question: 'How long does grill pod installation take?',
      answer: 'Grill pod installation typically takes 2-3 days depending on the size and complexity. Our team handles everything from delivery to final setup, including electrical and gas connections.',
      category: 'Grill Pods',
      tags: ['installation', 'timeline', 'delivery']
    },
    {
      id: 'grill-4',
      question: 'Do you deliver throughout Northern Ireland?',
      answer: 'Yes, we deliver and install throughout Northern Ireland and Ireland. Our team travels to all areas and handles the complete installation process, including delivery, setup, and final testing.',
      category: 'Grill Pods',
      tags: ['delivery', 'Northern Ireland', 'installation']
    },

    // Sheds
    {
      id: 'shed-1',
      question: 'What sizes are available for custom sheds?',
      answer: 'We build sheds in any size to suit your needs. Popular sizes range from 2.4m x 3.6m for garden offices to 4.5m x 6m for large workshops. All our sheds are bespoke to your space and requirements.',
      category: 'Sheds',
      tags: ['sizes', 'custom', 'bespoke']
    },
    {
      id: 'shed-2',
      question: 'Can sheds be used as garden offices?',
      answer: 'Absolutely! Many of our sheds are designed specifically as garden offices. We can include insulation, electricity, internet connections, heating, and all the amenities you need for a comfortable workspace.',
      category: 'Sheds',
      tags: ['garden office', 'insulation', 'electricity']
    },
    {
      id: 'shed-3',
      question: 'What materials do you use for sheds?',
      answer: 'We use premium materials including FSC-certified timber, composite cladding, and galvanized steel frames. All materials are chosen for durability and low maintenance in Northern Ireland\'s climate.',
      category: 'Sheds',
      tags: ['materials', 'timber', 'composite', 'durability']
    },
    {
      id: 'shed-4',
      question: 'Do sheds require a concrete base?',
      answer: 'We can install sheds on various base types including concrete slabs, timber decks, or existing patios. We\'ll recommend the best option based on your site conditions and shed size.',
      category: 'Sheds',
      tags: ['base', 'foundation', 'installation']
    },

    // General
    {
      id: 'general-1',
      question: 'What warranty do you provide?',
      answer: 'All our products come with a comprehensive 5-year warranty covering materials and workmanship. We use premium materials and expert craftsmanship to ensure long-lasting quality.',
      category: 'General',
      tags: ['warranty', 'quality', 'materials']
    },
    {
      id: 'general-2',
      question: 'How do I get a quote?',
      answer: 'You can get a quote by calling us at 07730 510368, filling out our online quote form, or booking a consultation. We\'ll discuss your requirements and provide a detailed, no-obligation quote.',
      category: 'General',
      tags: ['quote', 'consultation', 'contact']
    },
    {
      id: 'general-3',
      question: 'Do you offer financing options?',
      answer: 'We can discuss various payment options including staged payments and financing arrangements. We want to make your outdoor living dreams accessible and will work with you to find the best solution.',
      category: 'General',
      tags: ['financing', 'payment', 'options']
    },
    {
      id: 'general-4',
      question: 'How long does the entire process take?',
      answer: 'From initial consultation to completion typically takes 4-8 weeks depending on the project complexity and current workload. We\'ll provide a detailed timeline during your consultation.',
      category: 'General',
      tags: ['timeline', 'process', 'consultation']
    }
  ];

  const categories = ['All', 'Saunas', 'Grill Pods', 'Sheds', 'General'];

  // Filter FAQ items based on search and category
  const filteredFAQs = useMemo(() => {
    return faqData.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Toggle FAQ item
  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-[#222126]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#C5B8AB]/90 max-w-3xl mx-auto">
            Find answers to common questions about our outdoor living solutions. Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C5B8AB]/60" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-[#C5B8AB]/30 rounded-lg text-white placeholder-[#C5B8AB]/60 focus:outline-none focus:border-[#C5B8AB] transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#C5B8AB] text-[#222126] font-semibold'
                      : 'bg-white/10 text-[#C5B8AB] hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-[#C5B8AB]/60 text-sm">
            {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-sm border border-[#C5B8AB]/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="w-5 h-5 text-[#C5B8AB] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.question}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-[#C5B8AB]/20 text-[#C5B8AB] text-xs rounded">
                          {item.category}
                        </span>
                        {item.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-white/10 text-[#C5B8AB]/60 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {openItems.has(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-[#C5B8AB] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#C5B8AB] flex-shrink-0" />
                  )}
                </button>

                {openItems.has(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="pl-9">
                      <div className="prose prose-invert max-w-none">
                        <p className="text-[#C5B8AB]/90 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-[#C5B8AB]/40 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">No questions found</h3>
              <p className="text-[#C5B8AB]/60">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#C5B8AB]/10 border border-[#C5B8AB]/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-[#C5B8AB]/90 mb-6 max-w-2xl mx-auto">
              Our team is here to help. Contact us for personalized advice and detailed information about your outdoor living project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447730510368"
                className="inline-flex items-center px-6 py-3 bg-[#C5B8AB] text-[#222126] font-semibold rounded-lg hover:bg-white transition-colors"
              >
                Call Us Now
              </a>
              <a
                href="mailto:nigelmcg@gmail.com"
                className="inline-flex items-center px-6 py-3 border border-[#C5B8AB] text-[#C5B8AB] font-semibold rounded-lg hover:bg-[#C5B8AB] hover:text-[#222126] transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 