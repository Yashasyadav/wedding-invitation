import React from 'react';

interface ArchCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  type?: 'button' | 'submit' | 'reset';
}

export const ArchCard: React.FC<ArchCardProps> = ({
  children,
  className = '',
  as: Component = 'div',
  type,
  ...props
}) => {
  const componentProps = Component === 'button' ? { type: type || 'button', ...props } : props;
  return (
    <Component className={`arch-card ${className}`} {...componentProps}>
      {children}
    </Component>
  );
};
