import React from 'react';
import { LayoutDashboard, Server, Clock, Award, FileText, Download } from 'lucide-react';

const Sidebar = ({ activeView, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
    { id: 'projects', icon: Server, label: 'Deployments' },
    { id: 'about', icon: Clock, label: 'Kernel History' },
    { id: 'awards', icon: Award, label: 'Awards' },
    { id: 'resume', icon: FileText, label: 'Resume' }, 
  ];

  return (
    <div className="w-16 md:w-20 bg-gray-900/50 border-r border-gray-800 flex flex-col items-center py-6 gap-6 h-full shrink-0 backdrop-blur-sm z-20">
      
      {/* Brand Icon (Optional, kept minimal to match your style) */}
      <div className="mb-2"></div>

      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`group relative p-3 rounded-xl transition-all duration-300 ${
            activeView === item.id 
              ? 'bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.1)]' 
              : 'text-gray-500 hover:bg-gray-800 hover:text-gray-300'
          }`}
        >
          <item.icon size={24} strokeWidth={1.5} />
          
          {/* Tooltip on Hover */}
          <span className="absolute left-14 bg-gray-900 text-green-400 text-xs px-2 py-1 rounded border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
            {item.label}
          </span>

          {/* Active Indicator Line */}
          {activeView === item.id && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-green-500 rounded-r-full" />
          )}
        </button>
      ))}

      {/* Download Resume Button at Bottom */}
      <div className="mt-auto mb-4">
        <a 
          href="/assets/Abhishek_Resume.pdf" 
          download="Abhishek_Singh_Resume.pdf"
          className="text-gray-600 hover:text-green-500 transition-colors"
          title="Download PDF"
        >
          <Download size={20} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;