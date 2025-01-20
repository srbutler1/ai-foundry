import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Brain, MessageCircle, ChevronRight, Briefcase, MenuIcon } from 'lucide-react';
import foundryLogo from '../../assets/foundry-logo.png';

const SidebarLink = ({ to, icon: Icon, children, isOpen }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={`flex items-center px-4 py-2 rounded-md transition-colors ${
        isActive 
          ? 'bg-gradient-to-r from-red-500/20 to-transparent text-red-400' 
          : 'text-zinc-400 hover:text-red-400 hover:bg-black/40'
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </span>
      {isActive && isOpen && <ChevronRight className="w-4 h-4 ml-auto" />}
    </Link>
  );
};

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`fixed h-full w-64 backdrop-blur-md bg-black/5 border-r border-red-900/20 transition-all duration-300 shadow-lg ${
        isOpen ? 'translate-x-0' : '-translate-x-48'
      }`}>
        {/* Visual handle for collapsed state */}
        <div 
          className={`sidebar-handle ${!isOpen ? 'sidebar-handle-pulse' : ''}`} 
          onClick={toggleSidebar}
        />
        
        {/* Toggle button */}
        <button
          onClick={toggleSidebar}
          className={`absolute top-4 right-4 p-2 rounded-md hover:bg-black/40 transition-colors ${
            !isOpen && 'animate-pulse'
          }`}
        >
          <MenuIcon className="w-6 h-6 text-red-400" />
        </button>

        <div className="p-4">
          <div className="mb-8">
            <Link to="/" className="flex items-center px-4 py-2">
              <img 
                src={foundryLogo} 
                alt="AI Foundry Logo" 
                className="w-8 h-8 mr-2"
              />
              <span className={`text-red-500 font-bold transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                AI Foundry
              </span>
            </Link>
          </div>
          
          <nav className="space-y-2">
            <SidebarLink to="/blog" icon={MessageCircle} isOpen={isOpen}>
              Blog
            </SidebarLink>
            <SidebarLink to="/consulting" icon={Briefcase} isOpen={isOpen}>
              Consulting
            </SidebarLink>
          </nav>
          
          {/* Footer section of sidebar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-red-900/20">
            <div className="flex items-center text-sm text-zinc-400">
              <Brain className="w-4 h-4 mr-2" />
              <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                Arkansas AI Foundry
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className={`transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'} flex-1`}>
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
