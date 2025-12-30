import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20 border border-green-500/20",
    secondary: "bg-[#0b1624] hover:bg-[#132235] text-white border border-white/10",
    outline: "bg-transparent border border-white/20 text-slate-300 hover:border-white/40 hover:text-white",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5",
  };

  const sizes = "px-6 py-3 text-sm md:text-base";
  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;