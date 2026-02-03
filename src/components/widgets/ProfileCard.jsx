import React from 'react';
import { MapPin, Github, Linkedin, Mail, ExternalLink, Terminal } from 'lucide-react';

const ProfileCard = ({ onClick }) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg h-full flex flex-col justify-between relative overflow-hidden group">
      
      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        {/* Profile Image */}
        <div className="relative shrink-0 mx-auto md:mx-0">
          <div className="w-24 h-24 rounded-full border-2 border-gray-700 overflow-hidden group-hover:border-green-500 transition-colors shadow-xl">
             <img src="/assets/grad-photo.jpeg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700">
             <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Text Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white mb-1 tracking-tight">Abhishek Singh</h1>
          <p className="text-green-400 font-mono text-sm mb-4">Cloud & AIOps Engineer | DevSecOps Specialist</p>
          
          {/* MOVED SUMMARY HERE */}
          <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-green-500/30 pl-3">
            Cloud & AIOps Engineer with a Master of Science in Computer Science (Cybersecurity) and a background in Data Science. Specializing in Self-Healing Infrastructure, I combine “Shift-Left” security with event-driven automation to build resilient cloud platforms. Expert in architecting production-grade clusters using Terraform, AWS EKS, and Kubernetes, with a focus on reducing MTTR through automated remediation workflows. Available for contract or remote engagements to architect secure, self-healing cloud ecosystems.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 text-xs font-mono mb-6">
            <span className="flex items-center gap-1 hover:text-gray-300"><MapPin size={12} /> Delhi, India</span>
            <span className="flex items-center gap-1 hover:text-gray-300"><Mail size={12} /> abhisheksingh22se@gmail.com</span>
          </div>

          <div className="flex justify-center md:justify-start gap-3">
            <a href="https://github.com/abhisheksingh22se" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-black border border-gray-700 hover:border-green-500/50 transition-all text-xs font-mono group/btn">
              <Github size={14} /> GitHub
            </a>
            <a href="https://linkedin.com/in/abhisheksingh22sep" className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-blue-900/20 border border-gray-700 hover:border-blue-500/50 transition-all text-xs font-mono group/btn">
              <Linkedin size={14} /> LinkedIn
            </a>
            <button onClick={onClick} className="flex items-center gap-2 px-4 py-2 bg-green-900/20 text-green-400 border border-green-900 rounded hover:bg-green-500 hover:text-black transition-all text-xs font-mono">
              <ExternalLink size={14} /> view_kernel.sh
            </button>
          </div>
        </div>
      </div>

      {/* NEW: Hacker Tip (Engagement Booster) */}
      <div className="mt-4 pt-4 border-t border-gray-800/50 flex items-center justify-center md:justify-start gap-3 text-xs font-mono text-gray-500 animate-in fade-in duration-1000 delay-500">
        <Terminal size={12} className="text-green-500" />
        <span>
          <span className="text-green-500 font-bold">&gt;_ tip: </span> 
          Don't like clicking? Try typing <span className="text-gray-300 bg-gray-800 px-1 rounded mx-1">'help'</span> in the terminal below.
        </span>
      </div>
      
      {/* Background Decor */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-green-500/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default ProfileCard;