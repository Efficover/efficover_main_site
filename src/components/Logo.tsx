import React from 'react';
import '@fontsource/comfortaa/700.css';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-3xl md:text-4xl'
  };

  return (
    <span
      className={`font-bold bg-clip-text text-transparent ${sizeClasses[size]} ${className}`}
      style={{
        fontFamily: 'Comfortaa, sans-serif',
        backgroundImage: 'linear-gradient(to right, #6ee2f5, #6454f0)'
      }}
    >
      efficover
    </span>
  );
};

export default Logo;