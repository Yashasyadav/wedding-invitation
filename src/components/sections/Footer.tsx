import React from 'react';
import { invitationContent } from '../../content/invitation';
import { Reveal } from '../primitives/Reveal';

export const Footer: React.FC = () => {
  const { footer } = invitationContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <Reveal>
        <p>{footer.signOff}</p>
        <span>{footer.metaLine}</span>
        <button
          type="button"
          onClick={scrollToTop}
          className="mt-6 inline-block text-[8px] uppercase tracking-[0.25em] text-light-gold/60 hover:text-light-gold transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          ↑ Back to Top
        </button>
      </Reveal>
    </footer>
  );
};
