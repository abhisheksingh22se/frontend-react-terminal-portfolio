import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, X } from 'lucide-react';

const Terminal = ({ onCommand, onClose, onExpand, onShrink, isExpanded }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    "Welcome to Abhishek's Operator Console v2.0",
    "System Status: ONLINE | Mode: RESTRICTED_GUEST",
    "Type 'help' to see available commands.",
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isExpanded]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const fullCommand = input.trim();
      if (!fullCommand) return;

      const [cmd, ...args] = fullCommand.toLowerCase().split(' ');
      const newHistory = [...history, `guest@portfolio:~$ ${fullCommand}`];

      switch (cmd) {
        case 'help':
          newHistory.push(
            "Available commands:",
            "  ls              - List available directories (pages)",
            "  cd [dir]        - Navigate to directory (e.g., 'cd projects')",
            "  open [page]     - GUI Navigation alias",
            "  view resume     - Preview PDF Resume (or just type 'resume')",
            "  contact         - Display contact channels",
            "  tech            - List active tech stack",
            "  sre-metrics     - Display latest infrastructure reliability stats",
            "  post-mortem     - View latest blame-free incident report",
            "  whoami          - Current user info",
            "  sudo            - Execute as Administrator",
            "  clear           - Clear terminal history",
            "  exit            - Close terminal session"
          );
          break;

        // ... [ls, cd, view, resume, contact remain exactly the same] ...
        case 'ls':
        case 'll':
          newHistory.push(
            "drwxr-xr-x  root  abhishek   dashboard/",
            "drwxr-xr-x  root  abhishek   projects/",
            "drwxr-xr-x  root  abhishek   awards/",
            "drwxr-xr-x  root  abhishek   about/",
            "-r--r--r--  root  abhishek   resume.pdf"
          );
          break;

        case 'cd':
        case 'open':
          const target = args[0];
          if (!target) {
            newHistory.push("usage: open [page] or cd [directory]");
          } else {
            const validPages = ['dashboard', 'projects', 'awards', 'about', 'resume'];
            if (target === 'resume.pdf' || target === 'resume') {
               newHistory.push(">> Loading Document: resume.pdf...");
               onCommand('resume');
            } else if (validPages.includes(target)) {
              newHistory.push(`>> Navigating to /${target}...`);
              onCommand(target);
            } else {
              newHistory.push(`bash: cd: ${target}: No such file or directory`);
            }
          }
          break;

        case 'view':
          if (args[0] === 'resume' || args[0] === 'cv') {
             newHistory.push(">> Initiating PDF rendering sequence...");
             onCommand('resume');
          } else {
             newHistory.push("bash: view: target missing. Try 'view resume'");
          }
          break;

        case 'resume':
          newHistory.push(">> Opening Resume Viewer...");
          onCommand('resume');
          break;

        case 'contact':
          newHistory.push(
            "--------------------------------------------------",
            "EMAIL:    abhisheksingh22se@gmail.com",
            "GITHUB:   github.com/abhisheksingh22se",
            "LINKEDIN: linkedin.com/in/abhisheksingh22sep",
            "LOCATION: Delhi, India (SGT/GMT Timezone Support)",
            "--------------------------------------------------"
          );
          break;

        case 'tech':
        case 'stack':
          newHistory.push(
            "ACTIVE_MODULES_LOADED:",
            "  [OK] Observability (Prometheus, Grafana, CloudWatch)",
            "  [OK] AWS_Cloud_Core (EKS, VPC, EventBridge)",
            "  [OK] Terraform_IaC_Engine (IRSA Enabled)",
            "  [OK] Automation_Runtime (Python, Boto3, Lambda)",
            "  [OK] Zero-Trust_DevSecOps (Trivy, Snyk, OIDC)"
          );
          break;

        case 'sre-metrics':
          newHistory.push(
            "==================================================",
            "  INFRASTRUCTURE RELIABILITY TELEMETRY (AIOps)",
            "==================================================",
            "  Metric                 | Target  | Achieved | Variance",
            "  -----------------------|---------|----------|----------",
            "  MTTR (Mean Time to Rec)| < 5m    | 48s      | -97%",
            "  Global Availability    | 99.9%   | 99.98%   | +0.08%",
            "  False-Positive Alerts  | < 5%    | 3.2%     | -40%",
            "  Toil Reduction         | > 30%   | 40%      | +10%",
            "  -----------------------|---------|----------|----------",
            "  Status: ALL SLOs MET. System operating nominally."
          );
          break;

        case 'post-mortem':
          newHistory.push(
            "LOADING INCIDENT REPORT: INC-2026-04-AIOps",
            "--------------------------------------------------",
            "DATE:        April 28, 2026",
            "AUTHOR:      Abhishek Singh (SRE)",
            "STATUS:      Resolved (Blame-Free)",
            "",
            "1. IMPACT:",
            "   Simulated CPU spike (>90%) caused API latency to exceed 500ms SLO.",
            "",
            "2. ROOT CAUSE:",
            "   Intentional Chaos Testing simulating a zombie process memory leak.",
            "",
            "3. AUTOMATED REMEDIATION:",
            "   CloudWatch Anomaly Detection fired -> EventBridge routed to Lambda.",
            "   Lambda executed Boto3 script to cordon node and reschedule pods.",
            "   Total downtime: 48 seconds (MTTR).",
            "",
            "4. PREVENTION:",
            "   Tuned Prometheus AlertManager thresholds. No further action needed.",
            "--------------------------------------------------"
          );
          break;

        case 'whoami':
          newHistory.push("guest (limited access)");
          break;
        
        case 'sudo':
          newHistory.push("root@portfolio's password: **********");
          setTimeout(() => {
             setHistory(prev => [...prev, "sudo: Permission denied. Nice try, hacker. 😉"]);
          }, 800);
          break;

        case 'date':
          newHistory.push(new Date().toString());
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;

        case 'exit':
          if(isExpanded) onShrink();
          else onClose();
          return;

        default:
          newHistory.push(`bash: ${cmd}: command not found`);
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  const handleCloseAction = (e) => {
    e.stopPropagation();
    if (isExpanded) {
      onShrink();
    } else {
      onClose();
    }
  };

  return (
    <div 
      className="h-full bg-black/95 p-4 font-mono text-sm overflow-hidden flex flex-col border-t-2 border-green-900/30 shadow-2xl relative"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="absolute top-2 right-2 flex gap-2 z-10">
         <button 
          onClick={handleCloseAction}
          className="p-1 text-gray-500 hover:text-white hover:bg-gray-800 rounded transition-colors"
          title={isExpanded ? "Shrink Terminal" : "Close Terminal"}
        >
          {isExpanded ? <ChevronDown size={16} /> : <X size={16} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto mb-2 space-y-1 scrollbar-thin scrollbar-thumb-gray-800">
        {history.map((line, i) => (
          <div key={i} className={`${
            line.startsWith('>>') ? 'text-green-400' : 
            line.startsWith('root') ? 'text-gray-500' : 
            line.includes('Permission denied') ? 'text-red-500' :
            line.includes('EMAIL:') || line.includes('Target') || line.includes('MTTR') ? 'text-blue-400' :
            line.includes('INCIDENT REPORT') || line.includes('IMPACT:') ? 'text-yellow-400' :
            'text-gray-300'
          }`}>
            {line}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className={`flex items-center text-green-500 bg-gray-900/30 p-2 rounded border transition-colors ${isExpanded ? 'border-green-500/50' : 'border-gray-800/50'}`}>
        <span className="mr-2 font-bold select-none">guest@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={onExpand}
          className="flex-1 bg-transparent outline-none border-none text-gray-100 placeholder-gray-700 focus:ring-0"
          spellCheck="false"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Terminal;