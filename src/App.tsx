import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandPositioning from './components/BrandPositioning';
import ServicesOverview from './components/ServicesOverview';
import ProjectGallery from './components/ProjectGallery';
import QuoteForm from './components/QuoteForm';
import ContactSection from './components/ContactSection';
import Testimonials from './components/Testimonials';
import GrillPodPage from './pages/GrillPodPage';
import SaunaPage from './pages/SaunaPage';
import ShedsPage from './pages/ShedsPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import LeadsPage from './components/admin/LeadsPage';
import AdminSettings from './components/admin/AdminSettings';
import AdminGuide from './components/admin/AdminGuide';
import ThankYouPage from './pages/ThankYouPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import EstimateCalculator from './components/EstimateCalculator';
import { useEstimateCalculator } from './hooks/useEstimateCalculator';

function App() {
  const { isOpen, openCalculator, closeCalculator } = useEstimateCalculator();

  return (
    <Router>
      <Header />
      <EstimateCalculator isOpen={isOpen} onClose={closeCalculator} />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB]">
            <HeroSection onGetEstimate={openCalculator} />
            <BrandPositioning />
            <ServicesOverview />
            <section className="py-12 bg-[#111]">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                    Inside Our Maghera Showroom
                  </h2>
                  <p className="text-xl text-[#C5B8AB]/90 max-w-3xl mx-auto leading-relaxed">
                    See what makes NMG Outdoor Living the go-to for premium saunas, sheds, and grill pods.
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <div className="relative rounded-lg shadow-2xl overflow-hidden">
                    <video
                      className="w-full h-auto rounded-lg"
                      autoPlay
                      muted
                      loop
                      controls
                      playsInline
                    >
                      <source src="/NMG Showroom Vid.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </section>
            <ProjectGallery />
            <Testimonials />
            <QuoteForm onGetEstimate={openCalculator} />
            <ContactSection />
          </div>
        } />
        <Route path="/grill-pods" element={<GrillPodPage />} />
        <Route path="/saunas" element={<SaunaPage />} />
        <Route path="/sheds" element={<ShedsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="leads" element={<LeadsPage />} />
          <Route path="guide" element={<AdminGuide />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer onGetEstimate={openCalculator} />
    </Router>
  );
}

export default App;