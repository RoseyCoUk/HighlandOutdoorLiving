#!/usr/bin/env node

/**
 * Google Tag Manager GA4 Event Setup Script
 * This script sets up GA4 event tracking in GTM
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GTM Configuration
const GTM_CONTAINER_ID = 'GTM-PBDNWBWQ';
const GA4_MEASUREMENT_ID = 'G-7K63E6241H';

// Event configurations
const GA4_EVENTS = [
  {
    name: 'form_submission',
    displayName: 'Form Submission',
    description: 'Tracks when users submit forms on the website',
    trigger: {
      type: 'form_submission',
      name: 'Form Submission - All Forms',
      conditions: []
    }
  },
  {
    name: 'tel_click',
    displayName: 'Phone Click',
    description: 'Tracks when users click on phone number links',
    trigger: {
      type: 'click',
      name: 'Phone Click - Tel Links',
      conditions: [
        {
          type: 'contains',
          parameter: 'Click URL',
          value: 'tel:'
        }
      ]
    }
  },
  {
    name: 'email_click',
    displayName: 'Email Click',
    description: 'Tracks when users click on email links',
    trigger: {
      type: 'click',
      name: 'Email Click - Mailto Links',
      conditions: [
        {
          type: 'contains',
          parameter: 'Click URL',
          value: 'mailto:'
        }
      ]
    }
  },
  {
    name: 'quote_button_click',
    displayName: 'Quote Button Click',
    description: 'Tracks when users click on quote buttons',
    trigger: {
      type: 'click',
      name: 'Quote Button Click',
      conditions: [
        {
          type: 'equals',
          parameter: 'Click Text',
          value: 'Get a Quote'
        },
        {
          type: 'equals',
          parameter: 'Click Element ID',
          value: 'quote-btn'
        }
      ]
    }
  }
];

// Generate GTM setup instructions
function generateGTMSetupInstructions() {
  const instructions = `
# Google Tag Manager GA4 Event Setup Instructions

## Container ID: ${GTM_CONTAINER_ID}
## GA4 Measurement ID: ${GA4_MEASUREMENT_ID}

## Step 1: Create GA4 Configuration Tag

1. Go to your GTM container: https://tagmanager.google.com/#/container/accounts/${GTM_CONTAINER_ID.split('-')[1]}/containers/${GTM_CONTAINER_ID.split('-')[2]}/workspaces
2. Click "Tags" → "New"
3. Choose "Google Analytics: GA4 Configuration"
4. Configuration:
   - Measurement ID: ${GA4_MEASUREMENT_ID}
   - Tag Name: "GA4 - NMG Website"
   - Triggering: All Pages
5. Save

## Step 2: Create Event Tags

${GA4_EVENTS.map((event, index) => `
### ${index + 1}. ${event.displayName} Event

**Tag Configuration:**
- Tag Type: Google Analytics: GA4 Event
- Configuration Tag: GA4 - NMG Website
- Event Name: ${event.name}
- Tag Name: GA4 - ${event.displayName}
- Description: ${event.description}

**Trigger Configuration:**
- Trigger Type: ${event.trigger.type === 'form_submission' ? 'Form Submission' : 'Click'}
- Trigger Name: ${event.trigger.name}
${event.trigger.conditions.map(condition => `
- Condition: ${condition.parameter} ${condition.type} "${condition.value}"
`).join('')}
- Save Trigger
- Save Tag
`).join('')}

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
`;

  return instructions;
}

// Generate JavaScript code for manual implementation
function generateJavaScriptImplementation() {
  const jsCode = `
// GA4 Event Tracking Implementation
// Add this to your website if you want to track events directly

// Initialize GA4
gtag('config', '${GA4_MEASUREMENT_ID}');

// Form submission tracking
document.addEventListener('submit', function(event) {
  const form = event.target;
  if (form.tagName === 'FORM') {
    gtag('event', 'form_submission', {
      'event_category': 'Engagement',
      'event_label': form.id || form.className || 'Unknown Form',
      'form_id': form.id,
      'form_class': form.className
    });
  }
});

// Phone click tracking
document.addEventListener('click', function(event) {
  const link = event.target.closest('a');
  if (link && link.href && link.href.startsWith('tel:')) {
    gtag('event', 'tel_click', {
      'event_category': 'Contact',
      'event_label': 'Phone Number Clicked',
      'phone_number': link.href.replace('tel:', ''),
      'link_url': link.href
    });
  }
});

// Email click tracking
document.addEventListener('click', function(event) {
  const link = event.target.closest('a');
  if (link && link.href && link.href.startsWith('mailto:')) {
    gtag('event', 'email_click', {
      'event_category': 'Contact',
      'event_label': 'Email Address Clicked',
      'email_address': link.href.replace('mailto:', ''),
      'link_url': link.href
    });
  }
});

// Quote button click tracking
document.addEventListener('click', function(event) {
  const button = event.target.closest('button, a');
  if (button) {
    const buttonText = button.textContent?.trim();
    const buttonId = button.id;
    
    if (buttonText === 'Get a Quote' || buttonId === 'quote-btn') {
      gtag('event', 'quote_button_click', {
        'event_category': 'Conversion',
        'event_label': 'Quote Button Clicked',
        'button_text': buttonText,
        'button_id': buttonId,
        'button_class': button.className
      });
    }
  }
});
`;

  return jsCode;
}

// Generate GTM API setup code (for future use)
function generateGTMAPICode() {
  const apiCode = `
// Google Tag Manager API Setup
// This code can be used when you have GTM API access

const GTM_API_BASE = 'https://tagmanager.googleapis.com/tagmanager/v2';
const GTM_CONTAINER_ID = '${GTM_CONTAINER_ID}';
const GA4_MEASUREMENT_ID = '${GA4_MEASUREMENT_ID}';

// You'll need to set up OAuth2 authentication
// See: https://developers.google.com/tag-manager/api/v2/authorization

async function createGA4EventTags() {
  const containerPath = \`accounts/\${ACCOUNT_ID}/containers/\${CONTAINER_ID}\`;
  
  // Create GA4 Configuration Tag
  const configTag = {
    name: 'GA4 - NMG Website',
    type: 'gtag',
    parameter: [
      {
        type: 'template',
        key: 'gtagId',
        value: GA4_MEASUREMENT_ID
      }
    ],
    firingTriggerId: ['All Pages']
  };
  
  // Create event tags
  const eventTags = ${JSON.stringify(GA4_EVENTS, null, 2)};
  
  // Implementation would go here...
  console.log('GTM API setup code - requires OAuth2 authentication');
}

// To use this:
// 1. Set up Google Cloud Project
// 2. Enable Tag Manager API
// 3. Create OAuth2 credentials
// 4. Implement authentication flow
// 5. Use the API to create tags programmatically
`;

  return apiCode;
}

// Main execution
function main() {
  console.log('🚀 Setting up GA4 Event Tracking for GTM...\n');
  
  // Generate setup instructions
  const instructions = generateGTMSetupInstructions();
  const instructionsPath = path.join(__dirname, '..', 'GTM_SETUP_INSTRUCTIONS.md');
  fs.writeFileSync(instructionsPath, instructions);
  console.log(`✅ GTM Setup Instructions created: ${instructionsPath}`);
  
  // Generate JavaScript implementation
  const jsCode = generateJavaScriptImplementation();
  const jsPath = path.join(__dirname, '..', 'src/lib/gtm-events.js');
  fs.writeFileSync(jsPath, jsCode);
  console.log(`✅ JavaScript implementation created: ${jsPath}`);
  
  // Generate API code
  const apiCode = generateGTMAPICode();
  const apiPath = path.join(__dirname, '..', 'scripts/gtm-api-setup.js');
  fs.writeFileSync(apiPath, apiCode);
  console.log(`✅ GTM API setup code created: ${apiPath}`);
  
  console.log('\n📋 Next Steps:');
  console.log('1. Follow the instructions in GTM_SETUP_INSTRUCTIONS.md');
  console.log('2. Set up the tags manually in GTM (recommended)');
  console.log('3. Test the events on your website');
  console.log('4. Verify in Google Analytics');
  
  console.log('\n🎯 Events to be tracked:');
  GA4_EVENTS.forEach((event, index) => {
    console.log(`${index + 1}. ${event.name} - ${event.description}`);
  });
}

// Run the script
main();
