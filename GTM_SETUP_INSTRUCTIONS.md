
# Google Tag Manager GA4 Event Setup Instructions

## Container ID: GTM-PBDNWBWQ
## GA4 Measurement ID: G-7K63E6241H

## Step 1: Create GA4 Configuration Tag

1. Go to your GTM container: https://tagmanager.google.com/#/container/accounts/PBDNWBWQ/containers/undefined/workspaces
2. Click "Tags" → "New"
3. Choose "Google Analytics: GA4 Configuration"
4. Configuration:
   - Measurement ID: G-7K63E6241H
   - Tag Name: "GA4 - NMG Website"
   - Triggering: All Pages
5. Save

## Step 2: Create Event Tags


### 1. Form Submission Event

**Tag Configuration:**
- Tag Type: Google Analytics: GA4 Event
- Configuration Tag: GA4 - NMG Website
- Event Name: form_submission
- Tag Name: GA4 - Form Submission
- Description: Tracks when users submit forms on the website

**Trigger Configuration:**
- Trigger Type: Form Submission
- Trigger Name: Form Submission - All Forms

- Save Trigger
- Save Tag

### 2. Phone Click Event

**Tag Configuration:**
- Tag Type: Google Analytics: GA4 Event
- Configuration Tag: GA4 - NMG Website
- Event Name: tel_click
- Tag Name: GA4 - Phone Click
- Description: Tracks when users click on phone number links

**Trigger Configuration:**
- Trigger Type: Click
- Trigger Name: Phone Click - Tel Links

- Condition: Click URL contains "tel:"

- Save Trigger
- Save Tag

### 3. Email Click Event

**Tag Configuration:**
- Tag Type: Google Analytics: GA4 Event
- Configuration Tag: GA4 - NMG Website
- Event Name: email_click
- Tag Name: GA4 - Email Click
- Description: Tracks when users click on email links

**Trigger Configuration:**
- Trigger Type: Click
- Trigger Name: Email Click - Mailto Links

- Condition: Click URL contains "mailto:"

- Save Trigger
- Save Tag

### 4. Quote Button Click Event

**Tag Configuration:**
- Tag Type: Google Analytics: GA4 Event
- Configuration Tag: GA4 - NMG Website
- Event Name: quote_button_click
- Tag Name: GA4 - Quote Button Click
- Description: Tracks when users click on quote buttons

**Trigger Configuration:**
- Trigger Type: Click
- Trigger Name: Quote Button Click

- Condition: Click Text equals "Get a Quote"

- Condition: Click Element ID equals "quote-btn"

- Save Trigger
- Save Tag


## Step 3: Publish Container

1. Click "Submit" in the top right
2. Add version name: "GA4 Event Tracking Setup"
3. Add description: "Added GA4 event tracking for forms, phone, email, and quote buttons"
4. Click "Publish"

## Step 4: Verify Setup

1. Go to your website
2. Open browser dev tools → Network tab
3. Test each event:
   - Submit a form (should see form_submission event)
   - Click a phone link (should see tel_click event)
   - Click an email link (should see email_click event)
   - Click a quote button (should see quote_button_click event)
4. Check Google Analytics → Events to confirm events are firing

## Troubleshooting

- If events don't fire, check GTM Preview mode
- Verify GA4 Configuration tag is firing on all pages
- Check that triggers are set up correctly
- Ensure the website has the GTM container code installed

## Next Steps

1. Set up conversion goals in GA4 for these events
2. Create custom reports in GA4
3. Set up Google Ads conversion tracking if needed
