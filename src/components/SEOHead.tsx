import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'NMG Outdoor Living - Premium Saunas, Grill Pods & Custom Sheds in Northern Ireland',
  description = 'Transform your outdoor space with premium saunas, all-weather grill pods, and custom sheds in Northern Ireland. Expert installation in Maghera, Belfast, and beyond.',
  keywords = ['outdoor living', 'saunas', 'grill pods', 'custom sheds', 'Northern Ireland', 'Maghera', 'Belfast', 'garden offices', 'outdoor kitchens'],
  image = '/landing pages/Sauna1.JPG',
  url = 'https://nmgoutdoorliving.com',
  type = 'website',
  author = 'NMG Outdoor Living',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://nmgoutdoorliving.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://nmgoutdoorliving.com${image}`;

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

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "NMG Outdoor Living",
          "description": "Premium outdoor living solutions including saunas, grill pods, and custom sheds in Northern Ireland",
          "url": "https://nmgoutdoorliving.com",
          "telephone": "+44-28-7963-1234",
          "email": "info@nmgoutdoorliving.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street",
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
          "openingHours": "Mo-Fr 09:00-17:00, Sa 09:00-15:00",
          "priceRange": "££",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 54.8439,
              "longitude": -6.6744
            },
            "geoRadius": "50000"
          },
          "sameAs": [
            "https://www.facebook.com/profile.php?id=100065453470878",
            "https://www.instagram.com/nmg_outdoorliving"
          ],
          "image": [
            "https://nmgoutdoorliving.com/landing pages/Sauna1.JPG",
            "https://nmgoutdoorliving.com/landing pages/GrillPod1.JPG",
            "https://nmgoutdoorliving.com/landing pages/outdoor glass room.JPG"
          ]
        })}
      </script>

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NMG Outdoor Living",
          "url": "https://nmgoutdoorliving.com",
          "logo": "https://nmgoutdoorliving.com/ngmlogo.jpg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44-28-7963-1234",
            "contactType": "customer service",
            "areaServed": "GB",
            "availableLanguage": "English"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead; 