import React from 'react';

interface DividerProps {
  className?: string;
  glyph?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = '', glyph = '❦' }) => {
  return (
    <div className={`divider ${className}`} aria-hidden="true">
      <span />
      <b>{glyph}</b>
      <span />
    </div>
  );
};
