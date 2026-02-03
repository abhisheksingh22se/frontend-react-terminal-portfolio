import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const BootSequence = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  
  const bootText = [
    "INITIALIZING KERNEL...",
    "LOADING MODULES: [ OK ] AWS_SDK",
    "LOADING MODULES: [ OK ] TERRAFORM_CLI",
    "LOADING MODULES: [ OK ] KUBERNETES_CLIENT",
    "MOUNTING FILE SYSTEM... /dev/sda1 mounted",
    "STARTING NETWORK INTERFACE... eth0 UP 192.168.1.42",
    "CHECKING SECURITY POLICIES... IAM Roles Applied",
    "ESTABLISHING SECURE CONNECTION...",
    "ACCESS GRANTED: USER 'ABHISHEK' RECOGNIZED",
    "LAUNCHING DASHBOARD UI v2.0..."
  ];

  useEffect(() => {
    let delay = 0;
    bootText.forEach((text, index) => {
      // Randomize delay for realistic typing effect
      delay += Math.random() * 300 + 100;
      
      setTimeout(() => {
        setLines(prev => [...prev, text]);
        
        // If it's the last line, trigger the completion callback
        if (index === bootText.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
    });
  }, []);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center p-4 font-mono text-green-500 overflow-hidden">
      <div className="max-w-2xl w-full">
        <div className="mb-4 flex items-center gap-2 border-b border-green-900 pb-2">
          <Terminal size={20} />
          <span className="text-sm">BOOT_LOADER.sh</span>
        </div>
        
        <div className="space-y-2">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-3 text-sm md:text-base animate-in fade-in slide-in-from-left-2 duration-300">
              <span className="text-gray-600">[{new Date().toLocaleTimeString()}]</span>
              <span className={i === lines.length - 1 ? "animate-pulse" : ""}>
                {line}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BootSequence;