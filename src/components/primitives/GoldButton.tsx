import React from 'react';

interface GoldButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  children,
  outline = false,
  className = '',
  href,
  onClick,
  ...props
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`gold-button ${outline ? 'outline' : ''} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
