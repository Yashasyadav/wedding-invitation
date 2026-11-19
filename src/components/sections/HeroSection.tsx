import React from 'react';
import { invitationContent } from '../../content/invitation';
import { Divider } from '../primitives/Divider';

export const HeroSection: React.FC = () => {
  const { hero } = invitationContent;

  return (
    <header className="hero" id="hero">
      {/* Top Strung Floral Garland */}
      <div className="garland" aria-hidden="true">
        <div className="garland-string" />
        {Array.from({ length: 20 }).map((_, i) => (
          <i
            key={i}
            style={
              {
                '--i': i,
                '--drop': `${25 + (i % 5) * 8}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Rotating Ambient Mandala SVG */}
      <svg
        className="mandala"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="200" cy="200" r="54" />
          <circle cx="200" cy="200" r="104" />
          <circle cx="200" cy="200" r="151" />
          {Array.from({ length: 24 }).map((_, i) => (
            <ellipse
              key={i}
              cx="200"
              cy="87"
              rx="22"
              ry="85"
              transform={`rotate(${i * 15} 200 200)`}
            />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <path
              key={i}
              d="M200 29 215 83 200 105 185 83Z"
              transform={`rotate(${i * 22.5} 200 200)`}
            />
          ))}
        </g>
      </svg>

      {/* Falling Rose Petals */}
      <div className="petals" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <i
            key={i}
            style={{ '--p': i } as React.CSSProperties}
          />
        ))}
      </div>

      {/* The Central Royal Arch */}
      <div className="hero-arch">
        <div className="hero-arch-inner">
          <div className="hero-ornament">{hero.ornament}</div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>
            <span>{hero.groomFirstName}</span>
            <em>&amp;</em>
            <span>{hero.brideFirstName}</span>
          </h1>
          <p className="hero-date">{hero.displayDate}</p>
          <Divider />
          <p className="hero-copy">{hero.copy}</p>
        </div>
      </div>

      {/* Animated Scroll Hint */}
      <a className="scroll-hint" href="#countdown">
        {hero.scrollHintText} <span>⌄</span>
      </a>
    </header>
  );
};
