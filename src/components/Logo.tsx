import React from 'react';

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
      className={`font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ${sizeClasses[size]} ${className}`}
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        letterSpacing: '-0.02em'
      }}
    >
      efficover
    </span>
  );
};

export default Logo;