import React, { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Brain, MessageCircle, ChevronRight, Briefcase, MenuIcon, Calendar } from 'lucide-react';
import foundryLogo from '../../assets/foundry-logo.png';

const SidebarLink = ({ to, icon: Icon, children, isOpen, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const Component = onClick ? 'button' : Link;
  const componentProps = onClick ? { onClick } : { to };
  
  return (
    <Component 
      {...componentProps}
      className={`flex items-center px-4 py-2 rounded-md transition-colors w-full text-left ${
        isActive 
          ? 'bg-gradient-to-r from-red-500/20 to-transparent text-red-400' 
          : 'text-zinc-400 hover:text-red-400 hover:bg-black/40'
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span 
        className={`transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        style={{ willChange: 'opacity' }}
      >
        {children}
      </span>
      {isActive && isOpen && <ChevronRight className="w-4 h-4 ml-auto" />}
    </Component>
  );
};

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-200 ${
          isOpen ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full w-64 bg-black/90 border-r border-red-900/20 transform transition-transform duration-200 shadow-lg z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div className="p-4">
          <div className="mb-8">
            <div className="flex items-center justify-between px-4 py-2">
              <Link to="/" className="flex items-center">
                <img 
                  src={foundryLogo} 
                  alt="AI Foundry Logo" 
                  className="w-8 h-8 mr-2"
                />
                <span 
                className={`text-red-500 font-bold transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{ willChange: 'opacity' }}
              >
                  AI Foundry
                </span>
              </Link>
              {isOpen && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-md hover:bg-black/40 transition-colors"
                  aria-label="Close menu"
                >
                  <MenuIcon className="w-6 h-6 text-red-400" />
                </button>
              )}
            </div>
          </div>
          
          <nav className="space-y-2">
            <SidebarLink to="/blog" icon={MessageCircle} isOpen={isOpen}>
              Blog
            </SidebarLink>
            <SidebarLink to="/consulting" icon={Briefcase} isOpen={isOpen}>
              Consulting
            </SidebarLink>
            <SidebarLink 
              icon={Calendar} 
              isOpen={isOpen}
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('upcoming-events').scrollIntoView({ behavior: 'smooth' });
                }, 100);
                setIsOpen(false);
              }}
            >
              Upcoming Events
            </SidebarLink>
          </nav>
          
          {/* Footer section of sidebar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-red-900/20">
            <div className="flex items-center text-sm text-zinc-400">
              <Brain className="w-4 h-4 mr-2" />
              <span 
                className={`transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{ willChange: 'opacity' }}
              >
                Arkansas AI Foundry
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu Button (only shown when sidebar is closed) */}
      {!isOpen && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-black/40 transition-colors bg-black/20"
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6 text-red-400" />
          </button>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
