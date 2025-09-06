# Analytics Setup Guide for NMG Outdoor Living

## Overview
This guide covers the complete analytics setup for the NMG Outdoor Living website, including Google Analytics 4, Search Console integration, and comprehensive event tracking.

## 🎯 Analytics Features Implemented

### 1. Google Analytics 4 (GA4)
- **Measurement ID**: `G-7K63E6241H`
- **Environment Variable**: `VITE_GOOGLE_ANALYTICS_ID`
- **Features**:
  - Page view tracking
  - User engagement metrics
  - Conversion tracking
  - Custom events
  - Enhanced ecommerce tracking

### 2. Event Tracking
- **Page Views**: Automatic tracking with page titles and content groups
- **User Engagement**: Scroll depth, time on page, video interactions
- **Product Interest**: Product views, gallery interactions
- **Lead Generation**: Form submissions, estimate requests, contact interactions
- **Calculator Tracking**: Open, complete, abandon events
- **Contact Tracking**: Phone clicks, email clicks
- **Social Interactions**: Social media shares and follows

### 3. Conversion Tracking
- **Lead Conversions**: Tracked with source attribution and estimated value
- **Estimate Requests**: Product-specific tracking with location and value
- **Contact Forms**: Source tracking for different form types
- **Phone/Email Clicks**: Contact interaction tracking

### 4. Custom Dimensions & Metrics
- **Product Interest**: Track which products users are interested in
- **Location**: Geographic tracking for lead attribution
- **Lead Source**: Track where leads originate from
- **User Type**: Segment users (new, returning, lead, customer, admin)
- **Conversion Value**: Track estimated lead values

### 5. Search Console Integration
- **SEO Tracking**: Keyword rankings, search performance
- **Core Web Vitals**: LCP, FID, CLS, FCP monitoring
- **Page Indexing**: Track indexing status
- **Search Queries**: Top performing keywords

## 🔧 Configuration

### Environment Variables
Create a `.env` file with:
```env
# Google Analytics 4
VITE_GOOGLE_ANALYTICS_ID=G-7K63E6241H

# Google Search Console
VITE_GOOGLE_SEARCH_CONSOLE_PROPERTY=nmgoutdoorliving.com

# Optional: Google Tag Manager
# VITE_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
```

### Analytics Service
The main analytics service is located at `src/lib/analytics-service.ts` and provides:
- Centralized event tracking
- Custom dimension management
- Conversion value calculation
- User property setting

### React Hook
Use the `useAnalytics` hook in components for easy tracking:
```tsx
import { useAnalytics } from '../hooks/useAnalytics';

const MyComponent = () => {
  const analytics = useAnalytics();
  
  const handleClick = () => {
    analytics.trackProductInterest('Sauna', 'Saunas', 15000);
  };
  
  return <button onClick={handleClick}>View Sauna</button>;
};
```

## 📊 Admin Dashboard

### Analytics Dashboard
Access the analytics dashboard at `/admin/login`:
- **Website Analytics**: Page views, users, sessions, bounce rate
- **Search Performance**: Clicks, impressions, average position, CTR
- **Top Pages**: Most visited pages with performance metrics
- **Traffic Sources**: Where visitors come from
- **Search Queries**: Top performing keywords
- **Device & Country Data**: User demographics
- **Conversions**: Lead tracking and conversion rates

### Real-time vs Demo Data
- **Development**: Uses mock data for testing
- **Production**: Automatically switches to live GA4 data
- **Fallback**: Graceful fallback to mock data if GA4 unavailable

## 🎯 Key Events Tracked

### User Engagement
- `page_view`: Every page visit
- `scroll_depth`: 25%, 50%, 75%, 90% scroll milestones
- `time_on_page`: Time spent on each page
- `video_play`: Video interaction tracking
- `video_complete`: Video completion tracking

### Product Interest
- `product_view`: When users view product pages
- `product_interest`: Product-specific interest tracking
- `gallery_view`: Gallery interaction tracking

### Lead Generation
- `lead_conversion`: Successful lead generation
- `estimate_request`: Estimate calculator completions
- `contact_form_submit`: Contact form submissions
- `phone_click`: Phone number clicks
- `email_click`: Email address clicks

### Calculator Tracking
- `calculator_open`: When estimate calculator opens
- `calculator_complete`: Successful estimate completion
- `calculator_abandon`: When users abandon calculator

### Social & Admin
- `social_share`: Social media sharing
- `admin_action`: Admin dashboard actions

## 🚀 Testing

### Local Development
1. Start the development server: `npm run dev`
2. Open browser dev tools → Network tab
3. Look for GA4 requests to `google-analytics.com`
4. Check console for analytics events

### Production Testing
1. Deploy to staging/production
2. Verify GA4 is receiving data
3. Check admin dashboard for live data
4. Test all conversion events

## 📈 Performance Monitoring

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s

### Page Load Tracking
- Automatic page load time measurement
- Performance timing API integration
- Real user monitoring (RUM)

## 🔍 SEO Integration

### Search Console
- Keyword ranking tracking
- Search performance monitoring
- Indexing status tracking
- Core Web Vitals reporting

### Structured Data
- Local business schema
- Product/service schema
- Review schema integration
- FAQ schema for better search visibility

## 📱 Mobile & Cross-Device

### Device Tracking
- Desktop, mobile, tablet segmentation
- Cross-device user journey tracking
- Mobile-specific conversion tracking

### Responsive Analytics
- Mobile-first tracking
- Touch interaction tracking
- Mobile conversion optimization

## 🎯 Conversion Optimization

### A/B Testing Ready
- Event-based testing framework
- Conversion funnel analysis
- User behavior tracking

### Lead Scoring
- Engagement-based lead scoring
- Value-based lead attribution
- Source quality assessment

## 🔒 Privacy & Compliance

### GDPR Compliance
- Cookie consent integration ready
- Data anonymization options
- User consent tracking

### Data Retention
- Configurable data retention periods
- User data deletion capabilities
- Privacy-focused analytics

## 📊 Reporting

### Automated Reports
- Weekly performance summaries
- Monthly conversion reports
- Quarterly SEO performance

### Custom Dashboards
- Real-time monitoring
- Custom KPI tracking
- Business-specific metrics

## 🛠️ Maintenance

### Regular Tasks
- Monitor analytics data quality
- Update conversion values
- Review and optimize events
- Check for tracking errors

### Performance Optimization
- Minimize tracking impact
- Optimize event batching
- Monitor Core Web Vitals
- Regular performance audits

## 📞 Support

For analytics setup support or questions:
- Check the admin dashboard for data quality
- Review browser console for tracking errors
- Verify environment variables are set correctly
- Test all conversion events manually

---

**Note**: This analytics setup is designed to provide comprehensive insights while maintaining user privacy and website performance. All tracking is GDPR-compliant and optimized for the outdoor living industry.
