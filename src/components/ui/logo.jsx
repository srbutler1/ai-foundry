import React from 'react';
import foundryLogo from '../../assets/foundry-logo.png';

const Logo = () => {
  return (
    <img 
      src={foundryLogo} 
      alt="Arkansas AI Foundry Logo" 
      className="logo-animation logo-float hero-content w-48 h-48 object-contain relative z-10"
    />
  );
};

export default Logo;
