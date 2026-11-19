import React, { useState, useEffect, useCallback } from 'react';
import { invitationContent } from '../../content/invitation';
import { SectionHeading } from '../primitives/SectionHeading';
import { ArchCard } from '../primitives/ArchCard';
import { Reveal } from '../primitives/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { gallery } = invitationContent;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! + 1) % gallery.photos.length);
  }, [selectedIdx, gallery.photos.length]);

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! - 1 + gallery.photos.length) % gallery.photos.length);
  }, [selectedIdx, gallery.photos.length]);

  const handleClose = () => {
    setSelectedIdx(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handleNext, handlePrev]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section className="section gallery" id="gallery">
      <SectionHeading
        eyebrow={gallery.eyebrow}
        title={gallery.title}
      />

      <div className="gallery-grid">
        {gallery.photos.map((photo, idx) => (
          <Reveal key={photo.image} delay={idx * 0.1}>
            <ArchCard
              as="button"
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className="gallery-card w-full text-left"
              aria-label={`View photo: ${photo.label}`}
            >
              <img
                src={photo.image}
                alt={photo.alt}
                loading="lazy"
                width={300}
                height={400}
              />
              <small>{photo.label}</small>
            </ArchCard>
          </Reveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={handleClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label="Photo Lightbox"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-6 right-6 text-light-gold hover:text-white p-2 rounded-full border border-gold/40 bg-deep-maroon/70 backdrop-blur-md transition-all z-50"
              aria-label="Close photo view"
            >
              <X size={20} />
            </button>

            {/* Navigation Previous */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-light-gold hover:text-white p-2.5 rounded-full border border-gold/40 bg-deep-maroon/70 backdrop-blur-md transition-all z-50"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Navigation Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-light-gold hover:text-white p-2.5 rounded-full border border-gold/40 bg-deep-maroon/70 backdrop-blur-md transition-all z-50"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Active Image Modal Card */}
            <motion.div
              key={selectedIdx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="lightbox-content"
            >
              <div className="lightbox-image-wrap">
                <img
                  src={gallery.photos[selectedIdx].image}
                  alt={gallery.photos[selectedIdx].alt}
                />
              </div>
              <p className="lightbox-caption">{gallery.photos[selectedIdx].label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
