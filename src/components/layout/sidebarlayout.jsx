import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Brain, MessageCircle, ChevronRight, Briefcase } from 'lucide-react';

const SidebarLink = ({ to, icon: Icon, children }) => {
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
      <span>{children}</span>
      {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
    </Link>
  );
};

const SidebarLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r border-red-900/20 backdrop-blur-md p-4 fixed h-full">
        <div className="mb-8">
          <Link to="/" className="flex items-center px-4 py-2">
            <img 
              src="/src/assets/foundry-logo.png" 
              alt="AI Foundry Logo" 
              className="w-8 h-8 mr-2"
            />
            <span className="text-red-500 font-bold">AI Foundry</span>
          </Link>
        </div>
        
        <nav className="space-y-2">
          <SidebarLink to="/blog" icon={MessageCircle}>
            Blog
          </SidebarLink>
          <SidebarLink to="/consulting" icon={Briefcase}>
            Consulting
          </SidebarLink>
        </nav>
        
        {/* Footer section of sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-red-900/20">
          <div className="flex items-center text-sm text-zinc-400">
            <Brain className="w-4 h-4 mr-2" />
            <span>Arkansas AI Foundry</span>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="ml-64 flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
