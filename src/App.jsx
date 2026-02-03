import React, { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import Dashboard from './components/Dashboard';
import BootSequence from './components/BootSequence';
import Terminal from './components/Terminal';

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  
  // TERMINAL STATE
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isTerminalExpanded, setIsTerminalExpanded] = useState(false); // Default: Shrink
  const [isModalOpen, setIsModalOpen] = useState(false);

  // LOGIC: Hide terminal if full page or modal is open
  const isFullPageView = ['about', 'resume'].includes(activeView);
  const showTerminal = isTerminalOpen && !isFullPageView && !isModalOpen;
  const showMinimizedBar = (!isTerminalOpen || isModalOpen) && !isFullPageView;

  const handleTerminalCommand = (cmd) => {
    if (cmd === 'open projects') setActiveView('projects');
    if (cmd === 'open dashboard') setActiveView('dashboard');
    if (cmd === 'about') setActiveView('about');
    if (cmd === 'resume') setActiveView('resume');
    
    if (['dashboard', 'projects', 'about', 'awards', 'resume'].includes(cmd)) {
        setActiveView(cmd);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#0d1117] text-white overflow-hidden flex flex-col">
      {!bootComplete ? (
        <BootSequence onComplete={() => setBootComplete(true)} />
      ) : (
        <>
          {/* TOP SECTION: Dashboard (The GUI) */}
          {/* ACTION: Clicking anywhere here shrinks the terminal */}
          <div 
            className="flex-1 overflow-hidden relative z-10"
            onClick={() => setIsTerminalExpanded(false)} 
          >
            <Dashboard 
              activeView={activeView} 
              onNavigate={(view) => {
                setActiveView(view);
                if (!['about', 'resume'].includes(view)) {
                  setIsTerminalOpen(true);
                }
              }}
              onModalChange={setIsModalOpen}
            />
          </div>

          {/* BOTTOM SECTION: The Terminal */}
          {showTerminal && (
            <div 
              className={`shrink-0 border-t border-gray-800 w-full z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-[height] duration-500 ease-in-out ${
                isTerminalExpanded ? 'h-[50vh]' : 'h-48'
              }`}
            >
               <Terminal 
                 onCommand={handleTerminalCommand} 
                 onClose={() => setIsTerminalOpen(false)}
                 onExpand={() => setIsTerminalExpanded(true)} // Typing triggers this
                 onShrink={() => setIsTerminalExpanded(false)} 
                 isExpanded={isTerminalExpanded}
               />
            </div>
          )}

          {/* MINIMIZED BAR */}
          {showMinimizedBar && (
            <div 
              onClick={(e) => {
                // Prevent click from propagating to Dashboard logic if needed, 
                // though usually fine here.
                e.stopPropagation(); 
                if (!isModalOpen) setIsTerminalOpen(true);
              }} 
              className={`h-8 bg-black border-t border-green-900/30 w-full z-20 flex items-center justify-between px-4 transition-colors ${isModalOpen ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-900'}`}
            >
               <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                 <TerminalIcon size={12} className={isModalOpen ? "text-gray-600" : "text-green-500"} />
                 <span>{isModalOpen ? "TERMINAL_LOCKED // MODAL_ACTIVE" : "ROOT_TERMINAL // SESSION_ACTIVE"}</span>
               </div>
               {!isModalOpen && <span className="text-[10px] text-gray-600 uppercase tracking-widest">Click to Expand</span>}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;