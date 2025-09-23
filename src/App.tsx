import React, { useEffect, useState, Suspense, lazy } from 'react';
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
// Lazy load pages for better performance
// const GrillPodPage = lazy(() => import('./pages/GrillPodPage'));
const SaunaPage = lazy(() => import('./pages/SaunaPage'));
// const ShedsPage = lazy(() => import('./pages/ShedsPage'));
const HotTubsPage = lazy(() => import('./pages/HotTubsPage'));
const PoolsPage = lazy(() => import('./pages/PoolsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
// Legacy location pages (removed from routing)
// const BelfastPage = lazy(() => import('./pages/BelfastPage'));
// const DerryPage = lazy(() => import('./pages/DerryPage'));

// Lazy load admin components
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'));
const AdminLogin = lazy(() => import('./components/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard'));
const LeadsPage = lazy(() => import('./components/admin/LeadsPage'));
const AdminSettings = lazy(() => import('./components/admin/AdminSettings'));
const AdminGuide = lazy(() => import('./components/admin/AdminGuide'));
import Footer from './components/Footer';
// Popup disabled: removing estimate calculator
import { useAnalytics } from './hooks/useAnalytics';
import { useGA4Events } from './hooks/useGA4Events';
import SEOHead from './components/SEOHead';
import FloatingSocialButton from './components/FloatingSocialButton';
import WebVitalsTracker from './components/WebVitalsTracker';

// ScrollToTop component that uses the hook inside Router context
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  const analytics = useAnalytics();
  useGA4Events(); // Initialize GA4 event tracking
  const [showAccessibilityTester, setShowAccessibilityTester] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <WebVitalsTracker>
          <PerformanceMonitor />
          <AccessibilityManager>
          <AppContent 
            showAccessibilityTester={showAccessibilityTester}
            setShowAccessibilityTester={setShowAccessibilityTester}
          />
          </AccessibilityManager>
        </WebVitalsTracker>
        </Router>
      </HelmetProvider>
  );
}

function AppContent({ 
  showAccessibilityTester, 
  setShowAccessibilityTester 
}: {
  showAccessibilityTester: boolean;
  setShowAccessibilityTester: (show: boolean) => void;
}) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      <Suspense fallback={<div className="min-h-screen bg-[#222126] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C5B8AB]"></div></div>}>
        <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#2B2B2B] font-['Inter'] text-white">
            <SEOHead 
              title="Highland Outdoor Living | Arctic Spas Hot Tubs, Pools & Saunas Inverness"
              description="Discover premium hot tubs, all-weather pools, and luxury saunas from Arctic Spas at Highland Outdoor Living. Serving Inverness and the Scottish Highlands."
              keywords={['Arctic Spas', 'hot tubs Inverness', 'pools Highlands', 'saunas Inverness']}
              image="/arctic-spas-hero.jpg"
            />
            <main>
              <HeroSection />
              <BrandPositioning />
              <ServicesOverview />
            <ProjectGallery />
            <CustomerReviews />
            <Testimonials />
            <FAQSection />
            <QuoteForm />
            <ContactSection />
            </main>
          </div>
        } />
        <Route path="/hot-tubs" element={<HotTubsPage />} />
        <Route path="/pools" element={<PoolsPage />} />
        <Route path="/saunas" element={<SaunaPage />} />
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
          </Suspense>
          {!isAdminRoute && <Footer onGetEstimate={openCalculator} />}
          {!isAdminRoute && <FloatingSocialButton />}
          {!isAdminRoute && <LiveChat />}
          {process.env.NODE_ENV === 'development' && (
            <AccessibilityTester 
              isVisible={showAccessibilityTester} 
              onToggle={() => setShowAccessibilityTester(!showAccessibilityTester)} 
            />
          )}
    </>
  );
}

export default App;