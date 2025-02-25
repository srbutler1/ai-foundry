import React from 'react';
import foundryLogo from '../../assets/foundry-logo.png';

const Logo = () => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
      <img 
        src={foundryLogo} 
        alt="Arkansas AI Foundry Logo" 
        className="logo-animation logo-float hero-content w-48 h-48 object-contain relative z-10 drop-shadow-lg"
      />
    </div>
  );
};

export default Logo;
