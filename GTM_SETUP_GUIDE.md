# Google Tag Manager Setup Guide for NMG Outdoor Living

## 🎯 **GTM Migration Complete!**

Your website has been successfully migrated from direct Google Analytics 4 to Google Tag Manager (GTM). This gives you much more flexibility and control over your tracking.

## 📊 **What's Changed**

### **Before (Direct GA4):**
- Direct Google Analytics script in HTML
- Limited customization options
- Required code changes for new tracking

### **After (GTM):**
- Single GTM container script (`GT-T5MFT2Z9`)
- All tracking managed through GTM interface
- Easy to add new tags without code changes
- Better testing and debugging capabilities

## 🔧 **GTM Container Details**

- **Container ID**: `GT-T5MFT2Z9`
- **Container Name**: NMG Website
- **Environment**: Production

## 📋 **Next Steps in GTM**

### 1. **Configure Google Analytics 4 Tag**
In your GTM container, you need to set up a GA4 Configuration tag:

1. Go to your GTM container: `https://tagmanager.google.com`
2. Click on "Tags" → "New"
3. Choose "Google Analytics: GA4 Configuration"
4. Set Measurement ID: `G-7K63E6241H`
5. Name it: "GA4 - NMG Website"
6. Set Trigger: "All Pages"
7. Save and Publish

### 2. **Set Up Custom Event Tags**
Create tags for the custom events your website sends:

#### **Lead Conversion Tag**
- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: `lead_conversion`
- **Parameters**: 
  - `lead_source` (Data Layer Variable)
  - `product_category` (Data Layer Variable)
  - `value` (Data Layer Variable)
- **Trigger**: Custom Event = `lead_conversion`

#### **Estimate Request Tag**
- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: `estimate_request`
- **Parameters**:
  - `product_category` (Data Layer Variable)
  - `location` (Data Layer Variable)
  - `value` (Data Layer Variable)
- **Trigger**: Custom Event = `estimate_request`

#### **Contact Form Submit Tag**
- **Tag Type**: Google Analytics: GA4 Event
- **Event Name**: `contact_form_submit`
- **Parameters**:
  - `lead_source` (Data Layer Variable)
  - `product_category` (Data Layer Variable)
- **Trigger**: Custom Event = `contact_form_submit`

### 3. **Set Up Data Layer Variables**
Create these variables in GTM to capture the data your website sends:

- `lead_source` (Data Layer Variable)
- `product_category` (Data Layer Variable)
- `product_interest` (Data Layer Variable)
- `location` (Data Layer Variable)
- `conversion_value` (Data Layer Variable)
- `estimate_value` (Data Layer Variable)

### 4. **Enhanced Ecommerce Setup**
For better conversion tracking, set up Enhanced Ecommerce:

1. Enable Enhanced Ecommerce in your GA4 Configuration tag
2. Create conversion events for:
   - Lead generation
   - Estimate requests
   - Contact form submissions

## 🎯 **Events Your Website Sends**

Your website automatically sends these events to GTM's dataLayer:

### **Page Tracking**
- `page_view` - Every page visit with enhanced data

### **User Engagement**
- `scroll_depth` - 25%, 50%, 75%, 90% scroll milestones
- `time_on_page` - Time spent on each page
- `video_play` - Video interaction tracking
- `video_complete` - Video completion tracking

### **Product Interest**
- `product_view` - When users view product pages
- `product_interest` - Product-specific interest tracking
- `gallery_view` - Gallery interaction tracking

### **Lead Generation**
- `lead_conversion` - Successful lead generation
- `estimate_request` - Estimate calculator completions
- `contact_form_submit` - Contact form submissions
- `phone_click` - Phone number clicks
- `email_click` - Email address clicks

### **Calculator Tracking**
- `calculator_open` - When estimate calculator opens
- `calculator_complete` - Successful estimate completion
- `calculator_abandon` - When users abandon calculator

### **Social & Admin**
- `social_share` - Social media sharing
- `admin_action` - Admin dashboard actions

## 🔍 **Testing Your GTM Setup**

### **1. Preview Mode**
1. Go to your GTM container
2. Click "Preview" button
3. Enter your website URL
4. Test all the events and interactions

### **2. Browser Dev Tools**
1. Open your website
2. Press F12 to open Dev Tools
3. Go to Console tab
4. Type: `dataLayer` and press Enter
5. You should see all the events being pushed

### **3. Google Analytics Real-Time**
1. Go to Google Analytics
2. Navigate to Real-time reports
3. Interact with your website
4. You should see events appearing in real-time

## 📊 **Benefits of GTM**

### **Easy Management**
- Add new tracking codes without developer help
- Update conversion tracking, pixels, and analytics easily
- Manage multiple marketing campaigns from one place

### **Advanced Tracking**
- Enhanced Ecommerce tracking
- Custom event tracking
- Cross-domain tracking
- Remarketing pixel management

### **Marketing Integration**
- Facebook Pixel
- Google Ads conversion tracking
- LinkedIn Insight Tag
- Email marketing integration

## 🚀 **Future Enhancements**

### **Marketing Pixels**
You can easily add these through GTM:
- Facebook Pixel for remarketing
- Google Ads conversion tracking
- LinkedIn Insight Tag for B2B leads
- Twitter Pixel for social media tracking

### **A/B Testing**
- Google Optimize integration
- Custom experiment tracking
- Conversion rate optimization

### **Advanced Analytics**
- Custom dimensions and metrics
- Enhanced ecommerce tracking
- User journey analysis
- Funnel analysis

## 🔧 **Environment Variables**

Make sure your `.env` file includes:
```env
VITE_GOOGLE_TAG_MANAGER_ID=GT-T5MFT2Z9
VITE_GOOGLE_ANALYTICS_ID=G-7K63E6241H
VITE_GOOGLE_SEARCH_CONSOLE_PROPERTY=nmgoutdoorliving.com
```

## 📞 **Support**

If you need help with GTM configuration:
1. Check the GTM Preview mode for debugging
2. Use browser dev tools to inspect dataLayer
3. Test events in Google Analytics Real-time reports
4. Refer to Google Tag Manager documentation

---

**🎉 Congratulations!** Your website is now using Google Tag Manager for comprehensive, flexible analytics tracking. You can now easily manage all your tracking through the GTM interface without needing code changes.
