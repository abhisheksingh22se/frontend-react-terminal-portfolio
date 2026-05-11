import React from 'react';
import { Award, ChevronRight } from 'lucide-react';

const AchievementCard = ({ title, subtitle, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="bg-gray-900/40 border border-gray-800 hover:border-green-500/50 p-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-900/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] flex items-center gap-4 group"
    >
      {/* Icon Area */}
      <div className="p-3 bg-gray-800 rounded group-hover:bg-green-500/10 text-yellow-600 group-hover:text-yellow-400 transition-colors shrink-0">
        <Award size={24} />
      </div>
      
      {/* Text Area (Title & Subtitle only) */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-gray-200 group-hover:text-green-400 transition-colors truncate">
          {title}
        </h4>
        <p className="text-xs font-mono text-gray-500 mt-1 truncate">
          {subtitle}
        </p>
      </div>

      {/* Click Indicator */}
      <ChevronRight size={16} className="text-gray-600 group-hover:text-green-500 transition-colors shrink-0 opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default AchievementCard;