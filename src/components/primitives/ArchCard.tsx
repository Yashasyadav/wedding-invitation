import React from 'react';

interface ArchCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const ArchCard: React.FC<ArchCardProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  return <Component className={`arch-card ${className}`}>{children}</Component>;
};
