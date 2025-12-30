import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', active = false }) => {
  const activeStyles = active 
    ? "border-green-500/50 bg-green-500/5 ring-1 ring-green-500/20" 
    : "border-white/10 bg-white/5 hover:border-white/20";

  return (
    <div className={`backdrop-blur-md rounded-2xl border transition-all duration-300 ${activeStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;