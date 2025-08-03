import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  sizes = '100vw',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyMTI2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI0M1QjhBQiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [imageSrc, setImageSrc] = useState(loading === 'eager' ? src : placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before image comes into view
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, loading]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    // Fallback to original image if WebP fails
    if (imageSrc.includes('.webp')) {
      setImageSrc(src.replace('.webp', '.jpg'));
    } else {
      onError?.();
    }
  };

  // Generate responsive srcset for WebP and fallback
  const generateSrcSet = (originalSrc: string) => {
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    const extension = originalSrc.split('.').pop();
    
    // WebP version
    const webpSrcSet = [
      `${baseName}-300.webp 300w`,
      `${baseName}-600.webp 600w`,
      `${baseName}-900.webp 900w`,
      `${baseName}-1200.webp 1200w`,
      `${baseName}-1800.webp 1800w`
    ].join(', ');

    // Fallback version
    const fallbackSrcSet = [
      `${baseName}-300.${extension} 300w`,
      `${baseName}-600.${extension} 600w`,
      `${baseName}-900.${extension} 900w`,
      `${baseName}-1200.${extension} 1200w`,
      `${baseName}-1800.${extension} 1800w`
    ].join(', ');

    return { webpSrcSet, fallbackSrcSet };
  };

  const { webpSrcSet, fallbackSrcSet } = generateSrcSet(src);

  return (
    <picture className={className}>
      {/* WebP format for modern browsers */}
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes}
      />
      
      {/* Fallback image */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        sizes={sizes}
        srcSet={fallbackSrcSet}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          backgroundColor: '#222126',
          minHeight: '200px'
        }}
      />
    </picture>
  );
};

export default OptimizedImage; 