import React, { useEffect } from 'react';
import { invitationContent } from '../../content/invitation';

interface CoverSplashProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const CoverSplash: React.FC<CoverSplashProps> = ({ isOpen, onOpen }) => {
  const { cover } = invitationContent;

  const handleOpen = () => {
    onOpen();
  };

  useEffect(() => {
    // Prevent scrolling when splash is active
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`splash ${isOpen ? 'is-open' : ''}`}
      aria-hidden={isOpen}
      role="dialog"
      aria-modal="true"
      aria-label={cover.ariaLabel}
    >
      {/* Background Doors */}
      <div className="door door-left" aria-hidden="true">
        <span className="door-panel" />
      </div>
      <div className="door door-right" aria-hidden="true">
        <span className="door-panel" />
      </div>

      {/* Skip Button for quick accessibility */}
      {!isOpen && (
        <button
          type="button"
          onClick={handleOpen}
          className="splash-skip-button"
          aria-label={cover.skipButtonText}
        >
          {cover.skipButtonText} <span>→</span>
        </button>
      )}

      {/* Main Cover Click Target */}
      <button
        type="button"
        className="seal-wrap"
        onClick={handleOpen}
        aria-label={cover.ariaLabel}
      >
        <span className="seal">
          <span className="seal-ring">
            <img src={cover.image} alt={cover.ariaLabel} />
          </span>
        </span>
        <span className="splash-open-label">{cover.openButtonText}</span>
      </button>
    </div>
  );
};
