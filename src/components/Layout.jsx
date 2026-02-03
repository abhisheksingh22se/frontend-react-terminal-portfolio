import React, { useState } from 'react';
import Terminal from './Terminal';
import Dashboard from './Dashboard';
import { Terminal as TerminalIcon, ChevronUp, ChevronDown } from 'lucide-react';

const Layout = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  // Define which views trigger "Full Screen" mode (Autohide terminal)
  const fullScreenViews = ['view resume', 'about', 'whoami'];
  const shouldAutohide = fullScreenViews.includes(activeView);

  // Handle commands coming from the Terminal component
  const handleCommand = (command) => {
    // Normal Navigation
    if (command === 'open projects') setActiveView('projects');
    if (command === 'open dashboard') setActiveView('dashboard');
    if (command === 'whoami' || command === 'about') setActiveView('about');
    
    // Resume Navigation
    if (command === 'view resume') setActiveView('view resume');
    if (command === 'open resume') setActiveView('view resume');
  };

  return (
    <div className="flex flex-col h-screen bg-[#0d1117] text-gray-300 font-mono overflow-hidden relative">
      
      {/* TOP: The Visual Dashboard */}
      {/* If terminal is hidden, this takes up 100% height (flex-1) */}
      <div className="flex-1 overflow-auto p-4 border-b border-gray-800 relative scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
         <Dashboard activeView={activeView} onNavigate={setActiveView} />
      </div>

      {/* BOTTOM: The Terminal */}
      {/* We use CSS transition to animate the collapse instead of unmounting the component */}
      <div 
        className={`bg-black border-t-2 border-green-900/50 shadow-[0_-5px_20px_rgba(0,255,0,0.05)] transition-all duration-500 ease-in-out flex flex-col
          ${shouldAutohide && !isTerminalOpen ? 'h-0 border-0' : 'h-1/3 min-h-[250px]'}
        `}
      >
        {/* Only render content if it has height, but keep component alive in React tree */}
        <div className={`h-full ${shouldAutohide && !isTerminalOpen ? 'hidden' : 'block'}`}>
          <Terminal onCommand={handleCommand} />
        </div>
      </div>

      {/* OPTIONAL: Toggle Button (Only appears when terminal is autohidden) */}
      {shouldAutohide && (
        <button 
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className="absolute bottom-4 right-6 z-50 bg-gray-900 border border-green-500/30 text-green-500 p-2 rounded-full shadow-lg hover:bg-green-900/20 transition-all flex items-center gap-2 text-xs font-bold"
        >
          {isTerminalOpen ? (
             <>
               <ChevronDown size={16} /> Hide Terminal
             </>
          ) : (
             <>
               <TerminalIcon size={16} /> Open Terminal
             </>
          )}
        </button>
      )}
    </div>
  );
};

export default Layout;