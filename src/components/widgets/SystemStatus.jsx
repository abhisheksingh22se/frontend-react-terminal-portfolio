import React from 'react';
import { Activity, CheckCircle, Clock, Loader2, ShieldCheck, GitCommit } from 'lucide-react';

const SystemStatus = () => {
  const workloads = [
    // --- Active AIOps ---
    { 
      name: "Self-Healing EKS Engine", 
      stage: "AIOps", 
      status: "MTTR: < 60s", 
      progress: 97, // Representing the 97% reduction
      color: "bg-purple-500"
    },
    // --- Active Development ---
    { 
      name: "DevSecOps Pipeline", 
      stage: "Security", 
      status: "Finalizing",
      progress: 90, // In finishing stage
      color: "bg-yellow-500"
    },
    // --- Stable Deployments ---
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

  // Security & Compliance Audits
  const audits = [
    { name: "Zero-Trust Network Isolation", status: "Verified", detail: "Passed" },
    { name: "Automated Incident Response", status: "Verified", detail: "Passed" },
    { name: "Shift-Left Vulnerability Gating", status: "In Progress", detail: "Pending" },
  ];

  return (
    <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg h-full flex flex-col relative overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-3 shrink-0">
        <div className="flex items-center gap-2">
          <Activity className="text-green-500" size={18} />
          <h3 className="font-bold text-gray-200 tracking-wide text-sm uppercase">System Reliability</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-green-400">SLOs Met</span>
        </div>
      </div>

      {/* ACTIVE DEPLOYMENTS & SLOs */}
      <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-800 space-y-4 mb-4">
        <h4 className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2 sticky top-0 bg-[#151b23] py-1 z-10">
           <GitCommit size={12} /> Workloads & Metrics
        </h4>
        
        {workloads.map((item) => (
          <div key={item.name} className="group">
            <div className="flex justify-between items-end mb-1">
              <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors truncate max-w-[180px]">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1 shrink-0">
                 {item.progress === 100 ? (
                   <CheckCircle size={10} className="text-green-500"/>
                 ) : item.progress === 97 ? (
                   <CheckCircle size={10} className="text-purple-500"/>
                 ) : (
                   <Loader2 size={10} className="animate-spin text-yellow-500"/>
                 )}
                 {item.status}
              </span>
            </div>
            
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
              <div 
                className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out relative`}
                style={{ width: `${item.progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Audits */}
      <div className="mt-auto bg-black/40 rounded border border-gray-800 p-3 shrink-0">
        <h4 className="text-[10px] font-mono text-gray-500 uppercase mb-2 flex items-center gap-2">
           <ShieldCheck size={12} className="text-blue-400" /> Security & Compliance Audits
        </h4>
        
        <div className="space-y-2">
          {audits.map((audit) => (
            <div key={audit.name} className="flex items-center justify-between text-[11px] group">
              <div className="flex items-center gap-2 truncate">
                 {audit.status === 'Verified' ? (
                   <ShieldCheck size={12} className="shrink-0 text-green-500" />
                 ) : (
                   <Loader2 size={12} className="shrink-0 text-yellow-500 animate-spin" />
                 )}
                 <span className={`transition-colors truncate ${audit.status === 'Verified' ? 'text-gray-300 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                   {audit.name}
                 </span>
              </div>
              <span className={`font-mono px-1.5 py-0.5 rounded border transition-colors shrink-0 ${audit.status === 'Verified' ? 'bg-green-900/20 border-green-900/50 text-green-400' : 'bg-yellow-900/20 border-yellow-900/50 text-yellow-500'}`}>
                {audit.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;