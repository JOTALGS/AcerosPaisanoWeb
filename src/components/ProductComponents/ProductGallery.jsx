import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Styled components with industrial tech design
const GalleryContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
  maxWidth: '100%',
  margin: '0',
}));

const MainImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 10',
  backgroundColor: '#0a0a0a',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent 30%, rgba(220, 38, 38, 0.02) 50%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 1
  }
}));

const MainImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  '&.visible': {
    opacity: 1,
  }
}));

// Navigation arrows
const NavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  color: 'rgba(255, 255, 255, 0.7)',
  padding: '12px',
  zIndex: 2,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#dc2626',
    borderColor: '#dc2626',
    color: '#ffffff',
    transform: 'translateY(-50%) scale(1.05)',
  },
  '&.prev': {
    left: '20px',
  },
  '&.next': {
    right: '20px',
  }
}));

// Image counter
const ImageCounter = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  padding: '8px 16px',
  fontFamily: '"Geist Mono", "SF Mono", monospace',
  fontSize: '12px',
  color: 'rgba(255, 255, 255, 0.7)',
  letterSpacing: '0.05em',
  zIndex: 2
}));

const ThumbnailsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  overflowX: 'auto',
  padding: '4px 0',
  scrollBehavior: 'smooth',
  '&::-webkit-scrollbar': {
    height: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255, 255, 255, 0.03)',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(255, 255, 255, 0.15)',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.25)',
    }
  },
}));

const Thumbnail = styled(Box)(({ theme, active }) => ({
  flex: '0 0 120px',
  height: '80px',
  backgroundColor: '#0a0a0a',
  overflow: 'hidden',
  cursor: 'pointer',
  border: active ? '2px solid #dc2626' : '2px solid transparent',
  outline: active ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
  opacity: active ? 1 : 0.5,
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    opacity: 1,
    borderColor: active ? '#dc2626' : 'rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-2px)',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: active ? 'transparent' : 'rgba(0, 0, 0, 0.3)',
    pointerEvents: 'none',
    transition: 'background 0.3s ease'
  },
  '&:hover::after': {
    background: 'transparent'
  }
}));

const ThumbnailIndex = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: '4px',
  left: '4px',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: '#dc2626',
  padding: '2px 6px',
  fontFamily: '"Geist Mono", "SF Mono", monospace',
  fontSize: '10px',
  letterSpacing: '0.05em',
  zIndex: 1
}));

const ProductGallery = ({ images = [], productTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainImageRef = useRef(null);
  const containerRef = useRef(null);
  const thumbnailsRef = useRef(null);

  // Default image if none provided
  const galleryImages = images.length > 0 ? images : [
    { src: '/images/placeholder.jpg', alt: productTitle }
  ];

  useEffect(() => {
    // Animate image change with GSAP
    if (mainImageRef.current) {
      gsap.fromTo(mainImageRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [activeIndex]);

  const handleThumbnailClick = (index) => {
    if (index !== activeIndex) {
      // Fade out current image
      gsap.to(mainImageRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          setActiveIndex(index);
        }
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = activeIndex === 0 ? galleryImages.length - 1 : activeIndex - 1;
    handleThumbnailClick(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === galleryImages.length - 1 ? 0 : activeIndex + 1;
    handleThumbnailClick(newIndex);
  };

  // Auto-scroll thumbnails to show active
  useEffect(() => {
    if (thumbnailsRef.current && galleryImages.length > 1) {
      const thumbnails = thumbnailsRef.current.querySelectorAll('.thumbnail-item');
      if (thumbnails[activeIndex]) {
        thumbnails[activeIndex].scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }
  }, [activeIndex, galleryImages.length]);

  return (
    <GalleryContainer ref={containerRef}>
      <MainImageContainer>
        <MainImage
          ref={mainImageRef}
          src={galleryImages[activeIndex].src}
          alt={galleryImages[activeIndex].alt || productTitle}
          className="visible"
          loading="lazy"
        />

        {galleryImages.length > 1 && (
          <>
            <NavButton className="prev" onClick={handlePrevious}>
              <ChevronLeftIcon />
            </NavButton>
            <NavButton className="next" onClick={handleNext}>
              <ChevronRightIcon />
            </NavButton>
            <ImageCounter>
              [{String(activeIndex + 1).padStart(2, '0')}/{String(galleryImages.length).padStart(2, '0')}]
            </ImageCounter>
          </>
        )}
      </MainImageContainer>

      {galleryImages.length > 1 && (
        <ThumbnailsContainer ref={thumbnailsRef}>
          {galleryImages.map((image, index) => (
            <Thumbnail
              key={index}
              active={index === activeIndex}
              onClick={() => handleThumbnailClick(index)}
              className="thumbnail-item"
            >
              <ThumbnailIndex>[{String(index + 1).padStart(2, '0')}]</ThumbnailIndex>
              <img
                src={image.src}
                alt={image.alt || `${productTitle} - Vista ${index + 1}`}
                loading="lazy"
              />
            </Thumbnail>
          ))}
        </ThumbnailsContainer>
      )}
    </GalleryContainer>
  );
};

export default ProductGallery;