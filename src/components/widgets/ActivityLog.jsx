import React, { useEffect, useRef } from 'react';
import { ScrollText, Activity } from 'lucide-react';

const logs = [
  { time: "2026-02-03", type: "INFO", msg: "LISTENING on port 443... (Open to Work)" },
  { time: "2026-01-20", type: "UPDATE", msg: "Self-Healing-EKS: Optimization complete. MTTR < 60s." },
  { time: "2025-06-01", type: "SUCCESS", msg: "Install Complete: Master_of_Science.pkg (Troy Univ)" },
  { time: "2025-04-15", type: "INFO", msg: "Running process: Thesis_Defense.sh --verbose" },
  { time: "2025-01-10", type: "WARN", msg: "High CPU usage detected: Developing DevSecOps Pipeline..." },
  { time: "2024-08-20", type: "DEBUG", msg: "Auditing Smart Contracts with Slither & Mythril." },
  { time: "2024-05-01", type: "INFO", msg: "Role assigned: Graduate_Admin_Assistant [Sudo Access Granted]" },
  { time: "2024-02-15", type: "CRITICAL", msg: "TroyHack_Event detected -> Outcome: VICTORY (1st Place)" },
  { time: "2023-11-20", type: "SUCCESS", msg: "Patch applied: Data_Science_Advanced (IIIT Bangalore)" },
  { time: "2023-06-12", type: "WARN", msg: "Caffeine_Level critical. Refilling..." },
  { time: "2022-12-01", type: "UPDATE", msg: "Hardware_Mode disabled. Software_Mode enabled (PGDCA)." },
  { time: "2022-01-15", type: "INFO", msg: "Bridging Legacy Systems: Electronics -> Computer Science" },
  { time: "2021-09-01", type: "LEGACY", msg: "Archived module: Bachelor_Science (Electronics)" },
  { time: "2018-07-01", type: "INIT", msg: "System Boot sequence initiated. Hello World." }
];

const ActivityLog = () => {
  // Auto-scroll to top (most recent) on load
  const scrollRef = useRef(null);

  return (
    <div className="bg-black/40 border border-gray-800 p-4 rounded-lg font-mono text-xs h-full flex flex-col relative overflow-hidden">
      
      {/* Header with Live Pulse */}
      <div className="flex items-center justify-between mb-3 border-b border-gray-800 pb-2 shrink-0 z-10">
        <div className="flex items-center gap-2 text-gray-400">
           <ScrollText size={14} />
           <span>/var/log/career_events.log</span>
        </div>
        <div className="flex items-center gap-1.5 bg-green-900/20 px-2 py-0.5 rounded border border-green-900/30">
           <Activity size={10} className="text-green-500 animate-pulse" />
           <span className="text-[10px] text-green-400">LIVE</span>
        </div>
      </div>
      
      {/* Scrollable Logs */}
      <div className="space-y-3 overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-gray-800 relative" ref={scrollRef}>
        {/* Scan Line Effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent h-[10px] w-full animate-scan" />

        {logs.map((log, i) => (
          <div key={i} className="flex gap-3 hover:bg-gray-900/50 p-1 rounded transition-colors group">
            <span className="text-gray-600 shrink-0 font-mono text-[10px] pt-0.5">[{log.time}]</span>
            
            <span className={`font-bold shrink-0 w-16 ${
              log.type === 'SUCCESS' ? 'text-green-500' : 
              log.type === 'WARN' ? 'text-yellow-500' : 
              log.type === 'CRITICAL' ? 'text-red-500 animate-pulse' :
              log.type === 'LEGACY' ? 'text-purple-400' :
              log.type === 'DEBUG' ? 'text-pink-400' :
              'text-blue-400'
            }`}>
              {log.type}
            </span>
            
            <span className="text-gray-400 group-hover:text-gray-200 transition-colors leading-tight">
              {log.msg}
            </span>
          </div>
        ))}
        
        {/* Terminal Cursor at the end */}
        <div className="flex items-center gap-2 mt-4 text-green-500 opacity-50">
           <span>root@portfolio:~$</span>
           <span className="w-2 h-4 bg-green-500 animate-pulse"/>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;