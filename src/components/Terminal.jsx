import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, X } from 'lucide-react';

const Terminal = ({ onCommand, onClose, onExpand, onShrink, isExpanded }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    "Welcome to Abhishek's Operator Console v1.5",
    "System Status: ONLINE | Mode: RESTRICTED_GUEST",
    "Type 'help' to see available commands.",
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom whenever history updates or terminal expands
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
      
      // Add user input to history
      const newHistory = [...history, `guest@abhishek-portfolio:~$ ${fullCommand}`];

      // Process Commands
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
            "  whoami          - Current user info",
            "  sudo            - Execute as Administrator",
            "  date            - Show system time",
            "  clear           - Clear terminal history",
            "  exit            - Close terminal session"
          );
          break;

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
            
            // Handle Resume specially
            if (target === 'resume.pdf' || target === 'resume') {
               newHistory.push(">> Loading Document: resume.pdf...");
               onCommand('resume');
            } 
            // Handle Pages
            else if (validPages.includes(target)) {
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
            "LOCATION: Delhi, India (Open to Relocate)",
            "--------------------------------------------------"
          );
          break;

        case 'tech':
        case 'stack':
          newHistory.push(
            "ACTIVE_MODULES_LOADED:",
            "  [OK] AWS_Cloud_Core (EKS, VPC, Lambda)",
            "  [OK] Terraform_IaC_Engine",
            "  [OK] Python_Scripting_Runtime",
            "  [OK] Kubernetes_Orchestrator",
            "  [OK] Docker_Containerization",
            "  [OK] CI/CD_Pipeline (GitHub Actions, Jenkins)"
          );
          break;

        case 'whoami':
          newHistory.push("guest (limited access)");
          break;
        
        case 'sudo':
          newHistory.push("root@abhishek-portfolio's password: **********");
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
          // If expanded, shrink first; if shrunk, close.
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

  // Logic: If terminal is big, 'Close' button shrinks it. If small, it closes it.
  const handleCloseAction = (e) => {
    e.stopPropagation(); // Prevent focusing input when clicking close
    if (isExpanded) {
      onShrink();
    } else {
      onClose();
    }
  };

  return (
    <div 
      className="h-full bg-black/95 p-4 font-mono text-sm overflow-hidden flex flex-col border-t-2 border-green-900/30 shadow-2xl relative"
      onClick={() => inputRef.current?.focus()} // Clicking anywhere focuses the input
    >
      
      {/* Controls (Top Right) */}
      <div className="absolute top-2 right-2 flex gap-2 z-10">
         <button 
          onClick={handleCloseAction}
          className="p-1 text-gray-500 hover:text-white hover:bg-gray-800 rounded transition-colors"
          title={isExpanded ? "Shrink Terminal" : "Close Terminal"}
        >
          {isExpanded ? <ChevronDown size={16} /> : <X size={16} />}
        </button>
      </div>

      {/* Terminal Output History */}
      <div className="flex-1 overflow-y-auto mb-2 space-y-1 scrollbar-thin scrollbar-thumb-gray-800">
        {history.map((line, i) => (
          <div key={i} className={`${
            line.startsWith('>>') ? 'text-green-400' : 
            line.startsWith('root') ? 'text-gray-500' : 
            line.includes('Permission denied') ? 'text-red-500' :
            line.includes('EMAIL:') ? 'text-blue-400' :
            'text-gray-300'
          }`}>
            {line}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Line */}
      <div className={`flex items-center text-green-500 bg-gray-900/30 p-2 rounded border transition-colors ${isExpanded ? 'border-green-500/50' : 'border-gray-800/50'}`}>
        <span className="mr-2 font-bold select-none">guest@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={onExpand} // KEY FEATURE: Auto-expand when user clicks to type
          className="flex-1 bg-transparent outline-none border-none text-gray-100 placeholder-gray-700 focus:ring-0"
          spellCheck="false"
          autoComplete="off"
          // REMOVED 'autoFocus' HERE to prevent auto-expansion on load
        />
      </div>
    </div>
  );
};

export default Terminal;