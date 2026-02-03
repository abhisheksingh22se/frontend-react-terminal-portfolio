import React from 'react';
import { CheckCircle, Circle, GitCommit, Terminal, Cpu, Zap, Trophy, Shield } from 'lucide-react';

const KernelHistory = () => {
  const timeline = [
    {
      year: "2025",
      title: "MS in Computer Science Completed",
      org: "Troy University",
      details: "Successfully defended thesis on Smart Contract Security. Graduated with 3.5 GPA.",
      status: "SUCCESS",
      icon: Shield,
      color: "text-green-400",
      borderColor: "border-green-500"
    },
    {
      year: "2024",
      title: "Winner: TroyHack 2024",
      org: "Hackathon Event",
      details: "First major victory. Led team to build a 3D Unity Simulation in 24 hours.",
      status: "ACHIEVEMENT",
      icon: Trophy,
      color: "text-yellow-400",
      borderColor: "border-yellow-500"
    },
    {
      year: "2024",
      title: "Specialization: Cybersecurity",
      org: "System Upgrade",
      details: "Shifted focus to DevSecOps. Integrated formal verification tools (Certora) into workflow.",
      status: "PATCH_APPLIED",
      icon: GitCommit,
      color: "text-blue-400",
      borderColor: "border-blue-500"
    },
    {
      year: "2023",
      title: "Adv. Certification in Data Science",
      org: "IIIT Bangalore",
      details: "Mastered the mathematics of ML/AI. Built predictive models using Python.",
      status: "INSTALLED",
      icon: Cpu,
      color: "text-purple-400",
      borderColor: "border-purple-500"
    },
    {
      year: "2022",
      title: "The Pivot: Hardware -> Software",
      org: "PGDCA | CV Raman University",
      details: "Realized code scales better than circuits. Bridged electronics background with CS fundamentals.",
      status: "MIGRATION",
      icon: Zap,
      color: "text-orange-400",
      borderColor: "border-orange-500"
    },
    {
      year: "2021",
      title: "Bachelor of Science (Electronics)",
      org: "Guru Ghasidas Central University",
      details: "Built Automated Greenhouse IoT system. Learned embedded C and microcontrollers.",
      status: "COMPLETED",
      icon: CheckCircle,
      color: "text-gray-400",
      borderColor: "border-gray-500"
    }
  ];

  return (
    // FIX: Used 'flex flex-col' and 'overflow-hidden' on parent to contain scrolling
    <div className="bg-black/80 border border-gray-800 rounded-lg font-mono text-sm text-gray-300 shadow-2xl h-full flex flex-col overflow-hidden">
      
      {/* 1. HEADER (Fixed, Non-scrolling) */}
      <div className="p-6 pb-2 shrink-0 border-b border-gray-800 bg-black/90 z-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-green-500" />
            <span>// kernel_history.log (Origin Story)</span>
          </div>
          <span className="text-[10px] bg-green-900/20 text-green-400 px-2 py-1 rounded border border-green-900/50 animate-pulse">
            ● SYSTEM_READY
          </span>
        </div>
      </div>
      
      {/* 2. BODY (Scrollable Area) */}
      <div className="flex-1 overflow-y-auto p-6 pt-4 scrollbar-thin scrollbar-thumb-gray-800 relative">
        
        {/* The Vertical Line */}
        <div className="absolute left-[43px] top-4 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-gray-800 to-transparent pointer-events-none" />

        {timeline.map((item, index) => (
          <div key={index} className="relative flex gap-6 mb-8 group animate-in slide-in-from-left-2 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
            
            {/* The Node Icon */}
            <div className={`relative z-10 w-10 h-10 shrink-0 bg-black border ${item.borderColor} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all duration-300`}>
               <item.icon size={18} className={item.color} />
            </div>

            {/* The Content Card */}
            <div className="flex-1 -mt-1 group-hover:bg-gray-900/30 p-3 rounded-lg transition-colors border border-transparent group-hover:border-gray-800/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                <span className={`font-bold text-base ${item.color} group-hover:translate-x-1 transition-transform`}>
                  {item.title}
                </span>
                <span className="text-[10px] font-bold font-mono text-gray-500 bg-gray-900 border border-gray-700 px-1.5 py-0.5 rounded">
                  {item.year}
                </span>
              </div>
              
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                 <span>{item.org}</span>
                 <span className="w-1 h-1 rounded-full bg-gray-600" />
                 <span className={`${item.color === 'text-green-400' ? 'text-green-500' : 'text-gray-500'}`}>
                   [{item.status}]
                 </span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed pl-1 border-l-2 border-gray-800 group-hover:border-gray-600 transition-colors">
                {item.details}
              </p>
            </div>
          </div>
        ))}

        {/* The Origin Node */}
        <div className="relative flex gap-6 pb-4">
           <div className="relative z-10 w-10 h-10 shrink-0 bg-black border border-gray-800 rounded-full flex items-center justify-center">
             <Circle size={14} className="text-gray-600" />
           </div>
           <div className="pt-2 text-gray-600 text-xs uppercase tracking-widest font-mono">
             [2018] Initial Boot Sequence (Hello World)
           </div>
        </div>
      </div>
    </div>
  );
};

export default KernelHistory;