import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';

const DerryPage: React.FC = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="Garden Sheds & Outdoor Saunas Derry/Londonderry | NMG Outdoor Living"
        description="Premium steel garden sheds, outdoor saunas & grill pods in Derry/Londonderry. Expert installation across Derry & Northern Ireland. Free quotes available."
        keywords={[
          'garden sheds Derry',
          'steel sheds Londonderry',
          'outdoor sauna Derry',
          'garden sauna Londonderry',
          'grill pods Derry',
          'custom sheds Derry',
          'heavy duty sheds Londonderry',
          'galvanized sheds Derry',
          'outdoor kitchen Derry',
          'garden office Londonderry'
        ]}
        url="/derry"
      />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#222126] via-[#2a2d32] to-[#222126] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-[#C5B8AB] mr-3" />
                <span className="text-lg font-medium text-[#C5B8AB]">Serving Derry/Londonderry & Surrounding Areas</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Premium Garden Sheds & Outdoor Saunas in <span className="text-[#C5B8AB]">Derry/Londonderry</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your Derry garden with our galvanized steel sheds, energy-efficient saunas, and luxury grill pods. 
                Expert installation across Derry/Londonderry, Strabane, Limavady, and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToQuote}
                  className="bg-[#C5B8AB] text-[#222126] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors duration-300 flex items-center justify-center"
                >
                  Get Free Derry Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => window.open('tel:02879632000', '_self')}
                  className="border-2 border-[#C5B8AB] text-[#C5B8AB] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C5B8AB] hover:text-[#222126] transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call 028 7963 2000
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose NMG for Derry */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#222126]">
                Why Derry Homeowners Choose NMG Outdoor Living
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-[#C5B8AB] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#222126]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#222126]">Local Derry Expertise</h3>
                  <p className="text-gray-600">
                    Based in Maghera, we understand Derry's unique weather conditions and planning requirements. 
                    Expert installation across all Derry/Londonderry postcodes.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-[#C5B8AB] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-[#222126]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#222126]">Superior Quality</h3>
                  <p className="text-gray-600">
                    Our galvanized steel sheds require only one concrete base (vs competitors' two), 
                    saving you money and hassle. Built to withstand Derry's weather.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-[#C5B8AB] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-[#222126]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#222126]">Fast Installation</h3>
                  <p className="text-gray-600">
                    Quick turnaround times for Derry installations. Our saunas heat up in 15-20 minutes 
                    vs traditional saunas taking 45-60 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Derry Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#222126]">
                We Serve All Derry/Londonderry Areas
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  'Derry City Centre',
                  'Waterside',
                  'Bogside',
                  'Creggan',
                  'Shantallow',
                  'Strabane',
                  'Limavady',
                  'Coleraine',
                  'Portstewart',
                  'Portrush',
                  'Ballymoney',
                  'Ballymena'
                ].map((area, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                    <MapPin className="w-6 h-6 text-[#C5B8AB] mx-auto mb-2" />
                    <p className="font-medium text-[#222126]">{area}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  Don't see your area? We cover all of Derry/Londonderry and surrounding regions.
                </p>
                <button
                  onClick={scrollToQuote}
                  className="bg-[#C5B8AB] text-[#222126] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
                >
                  Check Coverage for Your Area
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Derry-Specific Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#222126]">
                Perfect for Derry's Climate
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-[#222126]">Built for Derry Weather</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Galvanized Steel Frames:</strong> Resist Derry's high winds and coastal conditions
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Composite Cladding:</strong> Maintenance-free, won't rot like traditional wood
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Energy Efficient:</strong> Our saunas heat up quickly, saving on Derry's energy costs
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Single Base Requirement:</strong> Save money vs competitors requiring double concrete bases
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-[#222126]">Derry Installation Process</h4>
                  <ol className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-8 h-8 bg-[#C5B8AB] text-[#222126] rounded-full flex items-center justify-center font-bold mr-3">1</span>
                      <span>Free site survey in Derry</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 bg-[#C5B8AB] text-[#222126] rounded-full flex items-center justify-center font-bold mr-3">2</span>
                      <span>Custom quote and design</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 bg-[#C5B8AB] text-[#222126] rounded-full flex items-center justify-center font-bold mr-3">3</span>
                      <span>Professional installation</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 bg-[#C5B8AB] text-[#222126] rounded-full flex items-center justify-center font-bold mr-3">4</span>
                      <span>After-sales support</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contact-section">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default DerryPage;
