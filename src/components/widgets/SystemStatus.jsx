import React from 'react';
import { Activity, CheckCircle, Clock, Loader2, Award, GitCommit } from 'lucide-react';

const SystemStatus = () => {
  // 1. PROJECTS (Active Pipelines)
  const pipelines = [
    // --- Active Development ---
    { 
      name: "Self-Healing EKS Engine", 
      stage: "Integration Test", 
      status: "Build #45", 
      progress: 90, 
      color: "bg-blue-500"
    },
    { 
      name: "DevSecOps Pipeline", 
      stage: "Implementation", 
      status: "In Progress",
      progress: 40, 
      color: "bg-yellow-500"
    },
    
    // --- Completed Infrastructure (Stable) ---
    { 
      name: "Infra EKS Provisioner", 
      stage: "Production", 
      status: "Operational",
      progress: 100, 
      color: "bg-green-500"
    },
    { 
      name: "Scalable Data API", 
      stage: "Production", 
      status: "Operational",
      progress: 100, 
      color: "bg-green-500"
    },
    { 
      name: "Portfolio Console", 
      stage: "Production", 
      status: "Deployed",
      progress: 100, 
      color: "bg-green-500"
    },
  ];

  // 2. CERTIFICATIONS (Scheduled Upgrades)
  const roadmap = [
    { name: "Terraform Associate (004)", date: "ETA: Feb 15, 2026", status: "In Progress" },
    { name: "AWS SysOps Administrator", date: "ETA: Apr 20, 2026", status: "Planned" },
    { name: "Certified K8s Admin (CKA)", date: "ETA: Jun 10, 2026", status: "Planned" },
  ];

  return (
    <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg h-full flex flex-col relative overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-3 shrink-0">
        <div className="flex items-center gap-2">
          <Activity className="text-green-500" size={18} />
          <h3 className="font-bold text-gray-200 tracking-wide text-sm uppercase">CI/CD Pipeline Status</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-green-400">System Healthy</span>
        </div>
      </div>

      {/* ACTIVE DEPLOYMENTS (Scrollable if list gets too long) */}
      <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-800 space-y-4 mb-4">
        <h4 className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2 sticky top-0 bg-[#151b23] py-1 z-10">
           <GitCommit size={12} /> Workloads
        </h4>
        
        {pipelines.map((item) => (
          <div key={item.name} className="group">
            <div className="flex justify-between items-end mb-1">
              <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors truncate max-w-[180px]">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1 shrink-0">
                 {item.progress === 100 ? <CheckCircle size={10} className="text-green-500"/> : <Loader2 size={10} className="animate-spin"/>}
                 {item.status}
              </span>
            </div>
            
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
              <div 
                className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out relative`}
                style={{ width: `${item.progress}%` }}
              >
                {/* Add shimmer only if active (not 100%) or keep it for all for "live" feel */}
                <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SCHEDULED UPGRADES */}
      <div className="mt-auto bg-black/40 rounded border border-gray-800 p-3 shrink-0">
        <h4 className="text-[10px] font-mono text-gray-500 uppercase mb-2 flex items-center gap-2">
           <Award size={12} className="text-yellow-500" /> Scheduled Upgrades (Certs)
        </h4>
        
        <div className="space-y-2">
          {roadmap.map((cert) => (
            <div key={cert.name} className="flex items-center justify-between text-[11px] group">
              <div className="flex items-center gap-2 truncate">
                 <Clock size={12} className={`shrink-0 transition-colors ${cert.status === 'In Progress' ? 'text-green-400' : 'text-gray-600'}`} />
                 <span className="text-gray-400 group-hover:text-gray-200 transition-colors truncate">
                   {cert.name}
                 </span>
              </div>
              <span className="font-mono text-gray-600 bg-gray-900 px-1.5 py-0.5 rounded border border-gray-800 group-hover:border-gray-600 transition-colors shrink-0">
                {cert.date.replace('Target:', '').replace('ETA:', '').trim()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;