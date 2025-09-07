
// GA4 Event Tracking Implementation
// Add this to your website if you want to track events directly

// Initialize GA4
gtag('config', 'G-7K63E6241H');

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
