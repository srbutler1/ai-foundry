import React from 'react';
import { clsx } from 'clsx';

export const Button = ({ 
  children, 
  className, 
  variant = 'default', 
  ...props 
}) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors',
        {
          'bg-gradient-to-r from-foundry-red to-foundry-dark text-white hover:from-red-500 hover:to-red-800': variant === 'default',
          'bg-black/40 border border-foundry-red/50 text-foundry-red hover:bg-black/60': variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};