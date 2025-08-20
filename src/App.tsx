import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandPositioning from './components/BrandPositioning';
import ServicesOverview from './components/ServicesOverview';
import ProjectGallery from './components/ProjectGallery';
import QuoteForm from './components/QuoteForm';
import ContactSection from './components/ContactSection';
import Testimonials from './components/Testimonials';
import CustomerReviews from './components/CustomerReviews';
import PerformanceMonitor from './components/PerformanceMonitor';
import StrategicCTA from './components/StrategicCTA';
import LiveChat from './components/LiveChat';
import FAQSection from './components/FAQSection';
import AccessibilityManager from './components/AccessibilityManager';
import AccessibilityTester from './components/AccessibilityTester';
import GrillPodPage from './pages/GrillPodPage';
import SaunaPage from './pages/SaunaPage';
import ShedsPage from './pages/ShedsPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
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
import SEOHead from './components/SEOHead';
import FloatingSocialButton from './components/FloatingSocialButton';

// ScrollToTop component that uses the hook inside Router context
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  const { isOpen, openCalculator, closeCalculator } = useEstimateCalculator();
  const [showAccessibilityTester, setShowAccessibilityTester] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <PerformanceMonitor />
        <AccessibilityManager>
          <Header />
          <EstimateCalculator isOpen={isOpen} onClose={closeCalculator} />
          <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#222126] font-['Inter'] text-[#C5B8AB]">
            <SEOHead 
              title="NMG Outdoor Living - Premium Saunas, Grill Pods & Custom Sheds in Northern Ireland"
              description="Transform your outdoor space with premium saunas, all-weather grill pods, and custom sheds in Northern Ireland. Expert installation in Maghera, Belfast, and beyond."
              keywords={['outdoor living', 'saunas', 'grill pods', 'custom sheds', 'Northern Ireland', 'Maghera', 'Belfast', 'garden offices', 'outdoor kitchens']}
              image="/landing pages/Sauna1.JPG"
            />
            <main>
              <HeroSection onGetEstimate={openCalculator} />
              <BrandPositioning />
              <ServicesOverview />
            <ProjectGallery />
            <CustomerReviews />
            <Testimonials />
            <FAQSection />
            <QuoteForm onGetEstimate={openCalculator} />
            <ContactSection />
            </main>
          </div>
        } />
        <Route path="/grill-pods" element={<GrillPodPage />} />
        <Route path="/saunas" element={<SaunaPage />} />
        <Route path="/sheds" element={<ShedsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
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
          <FloatingSocialButton />
          <LiveChat />
          {process.env.NODE_ENV === 'development' && (
            <AccessibilityTester 
              isVisible={showAccessibilityTester} 
              onToggle={() => setShowAccessibilityTester(!showAccessibilityTester)} 
            />
          )}
          </AccessibilityManager>
        </Router>
      </HelmetProvider>
  );
}

export default App;