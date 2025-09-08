import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  product?: {
    name?: string;
    price?: string;
    availability?: string;
    brand?: string;
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'NMG Outdoor Living - Premium Saunas, Grill Pods & Steel Sheds in Northern Ireland',
  description = 'Transform your outdoor space with premium saunas, all-weather grill pods, and galvanized steel sheds in Northern Ireland. Expert installation in Maghera, Belfast, Derry, and across NI.',
  keywords = ['garden sheds Northern Ireland', 'steel sheds Belfast', 'outdoor sauna UK', 'garden sauna Ireland', 'grill pods UK', 'galvanized sheds NI', 'weatherproof sauna', 'outdoor kitchen pod', 'custom sheds Maghera', 'saunas Derry', 'heavy duty garden sheds', 'energy efficient sauna'],
  image = '/landing pages/Sauna1.JPG',
  url = 'https://nmgpvcsupplies.co.uk',
  type = 'website',
  author = 'NMG Outdoor Living',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  product
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://nmgpvcsupplies.co.uk${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://nmgpvcsupplies.co.uk${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="NMG Outdoor Living" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@nmgoutdoorliving" />

      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.length > 0 && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Product Specific Meta Tags */}
      {type === 'product' && product && (
        <>
          <meta property="product:price:amount" content={product.price} />
          <meta property="product:price:currency" content="GBP" />
          <meta property="product:availability" content={product.availability || 'in stock'} />
          <meta property="product:brand" content={product.brand || 'NMG Outdoor Living'} />
        </>
      )}

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "NMG Outdoor Living",
          "description": "Premium outdoor living solutions including steel-framed saunas, weatherproof grill pods, and custom sheds in Northern Ireland",
          "url": "https://nmgpvcsupplies.co.uk",
          "telephone": "+447730510368",
          "email": "nigelmcg@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "9 Ballyknock Road",
            "addressLocality": "Maghera",
            "addressRegion": "County Londonderry",
            "postalCode": "BT46 5AB",
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 54.8439,
            "longitude": -6.6744
          },
          "openingHours": [
            "Mo-Fr 08:00-18:00",
            "Sa 09:00-16:00"
          ],
          "priceRange": "££",
          "serviceArea": [
            {
              "@type": "City",
              "name": "Belfast"
            },
            {
              "@type": "City", 
              "name": "Derry"
            },
            {
              "@type": "City",
              "name": "Maghera"
            },
            {
              "@type": "Country",
              "name": "Northern Ireland"
            },
            {
              "@type": "Country",
              "name": "United Kingdom"
            },
            {
              "@type": "Country",
              "name": "Ireland"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/profile.php?id=100065453470878",
            "https://www.instagram.com/nmg_outdoorliving"
          ],
          "image": [
            "https://nmgpvcsupplies.co.uk/landing pages/Sauna1.JPG",
            "https://nmgpvcsupplies.co.uk/landing pages/GrillPod1.JPG",
            "https://nmgpvcsupplies.co.uk/Shed1.png"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Outdoor Living Solutions",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Garden Saunas",
                  "description": "Galvanized steel-framed saunas that heat up in 15-20 minutes. Weatherproof composite cladding, maintenance-free, built for UK weather conditions."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Grill Pods",
                  "description": "Luxury outdoor kitchen pods with composite cladding. All-weather cooking areas with built-in appliances, perfect for UK climate."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Steel Garden Sheds",
                  "description": "Heavy-duty galvanized steel sheds requiring only one concrete base. More affordable and less hassle than competitors requiring double bases."
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NMG Outdoor Living",
          "url": "https://nmgpvcsupplies.co.uk",
          "logo": "https://nmgpvcsupplies.co.uk/ngmlogo.jpg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+447730510368",
            "contactType": "customer service",
            "areaServed": "GB",
            "availableLanguage": "English",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            }
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "9 Ballyknock Road",
            "addressLocality": "Maghera",
            "addressRegion": "County Londonderry",
            "postalCode": "BT46 5AB",
            "addressCountry": "GB"
          }
        })}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://nmgpvcsupplies.co.uk"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": section || "Services",
              "item": fullUrl
            }
          ]
        })}
      </script>

      {/* FAQ Schema (if applicable) */}
      {type === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you deliver throughout Northern Ireland?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we deliver and install throughout Northern Ireland and Ireland. Our team handles everything from delivery to final setup."
                }
              },
              {
                "@type": "Question",
                "name": "What warranty do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All our products come with a 5-year warranty. We use premium materials and expert craftsmanship to ensure long-lasting quality."
                }
              },
              {
                "@type": "Question",
                "name": "How long does installation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Installation time varies by product. Saunas typically take 1-2 days, grill pods 2-3 days, and custom sheds 1-3 days depending on size and complexity."
                }
              }
            ]
          })}
        </script>
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#C5B8AB" />
      <meta name="msapplication-TileColor" content="#C5B8AB" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    </Helmet>
  );
};

export default SEOHead; 