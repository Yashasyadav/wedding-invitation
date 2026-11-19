import React from 'react';
import { Divider } from './Divider';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  script?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  script = false,
  className = '',
}) => {
  return (
    <div className={`section-heading text-center ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={script ? 'script-title' : ''}>{title}</h2>
      <Divider />
    </div>
  );
};
