import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const OptimizedImage = ({
  src,
  alt,
  webpSrc,
  fallbackSrc,
  loading = 'lazy',
  sx = {},
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Use IntersectionObserver for lazy loading
    if (loading === 'lazy') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.01
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        observer.disconnect();
      };
    } else {
      setIsInView(true);
    }
  }, [loading]);

  useEffect(() => {
    if (!isInView) return;

    // Check WebP support
    const checkWebPSupport = () => {
      return new Promise(resolve => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          resolve(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      });
    };

    const loadImage = async () => {
      let finalSrc = src;

      if (webpSrc) {
        const supportsWebP = await checkWebPSupport();
        if (supportsWebP) {
          finalSrc = webpSrc;
        }
      }

      const img = new Image();
      img.onload = () => {
        setImageSrc(finalSrc);
        requestAnimationFrame(() => {
          setIsLoaded(true);
        });
      };
      img.onerror = () => {
        if (fallbackSrc && finalSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc);
          setIsLoaded(true);
        }
      };
      img.src = finalSrc;
    };

    loadImage();
  }, [isInView, src, webpSrc, fallbackSrc]);

  return (
    <Box
      ref={imgRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        ...sx,
      }}
      {...props}
    >
      {imageSrc && (
        <Box
          component="img"
          src={imageSrc}
          alt={alt}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            ...sx,
          }}
          loading={loading}
          decoding="async"
        />
      )}
    </Box>
  );
};

export default OptimizedImage;