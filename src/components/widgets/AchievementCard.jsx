import React from 'react';
import { Award } from 'lucide-react';

const AchievementCard = ({ title, subtitle, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="bg-green-900/10 border border-green-500/20 p-4 rounded hover:bg-green-900/20 cursor-pointer transition-colors flex items-center gap-4 group"
    >
      <div className="p-3 bg-green-900/30 rounded text-yellow-500 group-hover:scale-110 transition-transform">
        <Award size={24} />
      </div>
      <div>
        <h4 className="font-bold text-gray-200">{title}</h4>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default AchievementCard;