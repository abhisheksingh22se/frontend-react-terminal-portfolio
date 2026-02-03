import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects'; 
import { FolderOpen, Award, Terminal, FileText, Download } from 'lucide-react';
import Modal from './Modal';

// Components & Widgets
import Sidebar from './widgets/Sidebar';
import ProfileCard from './widgets/ProfileCard';
import SystemStatus from './widgets/SystemStatus';
import AchievementCard from './widgets/AchievementCard';
import KernelHistory from './widgets/KernelHistory';
import ActivityLog from './widgets/ActivityLog';
import TechStack from './widgets/TechStack';

const Dashboard = ({ activeView, onNavigate, onModalChange }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null);

  // --- EFFECT: Notify App.jsx when a Modal is open (to hide Terminal) ---
  useEffect(() => {
    if (onModalChange) {
      onModalChange(!!selectedItem);
    }
  }, [selectedItem, onModalChange]);

  // --- ACTIONS ---
  const openProject = (project) => {
    setSelectedItem(project);
    setModalType('project');
  };

  const openAchievement = (data) => {
    setSelectedItem(data);
    setModalType('achievement');
  }

  const closeModal = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  // --- SUB-HEADER COMPONENT ---
  const NavHeader = ({ title, icon: Icon }) => (
    <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4 animate-in slide-in-from-top-2">
      <div className="flex items-center text-xl font-mono text-gray-500">
        <span className="text-green-500 font-bold flex items-center gap-2">
          <Icon size={20} /> ~/{title}
        </span>
      </div>
      {/* Download button appears in header if viewing resume */}
      {title.includes('resume') && (
        <a href="/assets/Abhishek_Resume.pdf" download className="flex items-center gap-2 text-xs text-gray-500 hover:text-green-400 transition-colors">
          <Download size={14} /> Download Raw
        </a>
      )}
    </div>
  );

  // --- HELPER: Awards Grid (Used in Dashboard & Awards View) ---
  const renderAwardsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
      
      {/* 1. Master's Degree */}
      <AchievementCard 
          title="Master of Science"
          subtitle="Troy University | Cybersecurity"
          description="GPA: 3.5. Thesis on Smart Contract Formal Verification."
          onClick={() => openAchievement({
              id: "ms-grad",
              title: "Master of Science in Computer Science",
              description: "Specialization in Cybersecurity.\n\nResearch Thesis: 'Smart Contract Measurement Methodology'.\n• Developed a structured taxonomy for evaluating smart contract robustness.\n• Integrated Static Analysis (Slither) and Formal Verification (Certora) to quantify security vs. efficiency trade-offs.\n\nServed as Graduate Administrative Assistant, managing university portals and leading AI workshops.",
              images: ["ms-degree.png", "grad-photo.jpeg"], 
              date: "Jan 2024 – Jun 2025",
              tech: ["Formal Verification", "Smart Contracts", "Research"]
          })} 
      />

      {/* 2. TroyHack Winner */}
      <AchievementCard 
          title="Winner: TroyHack 2024"
          subtitle="1st Position - 3D Simulation"
          description="Led a team to victory in a 24-hour hackathon against 20+ teams."
          onClick={() => openAchievement({
              id: "troyhack",
              title: "Winner: TroyHack 2024",
              description: "Secured 1st Position in a high-intensity 24-hour hackathon against 20+ teams.\n\nLed the development of a 3D simulation game using Unity and C# designed to gamify complex educational concepts. Delivered a glitch-free playable demo under extreme time constraints.",
              images: ["troy-award.jpeg", "troy-team.jpeg", "troy-group.jpeg"], 
              date: "Oct 2024",
              tech: ["Unity", "C#", "Team Leadership"]
          })} 
      />

      {/* 3. IIIT Bangalore */}
      <AchievementCard 
          title="Adv. Cert. Data Science"
          subtitle="IIIT Bangalore | GPA: 3.7/4.0"
          description="Focus on Machine Learning, Predictive Analytics, and Python."
          onClick={() => openAchievement({
              id: "iiit-ds",
              title: "Advanced Certification in Data Science",
              description: "Rigorous 9-month program focused on the mathematics of Machine Learning and Data Engineering.\n• Mastered Predictive Analytics and Python data stack (Pandas, NumPy, Scikit-Learn).\n• Capstone: Analyzed large-scale datasets to predict financial market trends.",
              images: ["iiit-cert.png"], 
              date: "Mar 2023 – Nov 2023",
              tech: ["Python", "Machine Learning", "Data Analytics"]
          })} 
      />

      {/* 4. PGDCA */}
      <AchievementCard 
          title="PGDCA"
          subtitle="CV Raman University"
          description="Post Graduate Diploma. Bridged gap between Electronics & CS."
          onClick={() => openAchievement({
              id: "pgdca",
              title: "Post Graduate Diploma in Computer Applications",
              description: "A one-year intensive program that transitioned my focus from hardware electronics to software engineering.\n• Covered core CS fundamentals: Data Structures, Database Management, and Object-Oriented Programming.",
              images: ["pgdca-cert.png"], 
              date: "Jan 2022 – Dec 2022",
              tech: ["Computer Fundamentals", "DBMS", "OOPs"]
          })} 
      />

      {/* 5. Bachelors */}
      <AchievementCard 
          title="Bachelor of Science"
          subtitle="Guru Ghasidas Central University"
          description="Major in Electronics. Built Automated Greenhouse Control IoT System."
          onClick={() => openAchievement({
              id: "bsc-elec",
              title: "Bachelor of Science (Electronics)",
              description: "Graduated with a focus on Embedded Systems and IoT.\n\nCapstone Project: Greenhouse Control & Management System.\n• Engineered an automated environmental control system using PIC Microcontrollers and a sensor network to optimize temperature and humidity in real-time.",
              images: ["bsc-degree.png"], 
              date: "Jun 2018 – Sep 2021",
              tech: ["IoT", "Embedded Systems", "Microcontrollers"]
          })} 
      />

      {/* 6. Math Olympiad (Text Only Strategy) */}
      <AchievementCard 
          title="Math Olympiad Winner"
          subtitle="State Rank: 5th | National Rank: 362"
          description="Secured 1st Position in School (2016) & 5th Rank in State (2017)."
          onClick={() => openAchievement({
              id: "math-olympiad",
              title: "International Olympiad of Mathematics",
              description: "Demonstrated exceptional problem-solving and logical reasoning skills early in academic career.\n\n• Achieved State Rank 5 (Chhattisgarh) in 2017.\n• Secured All India Rank 362 out of thousands of participants.\n• Awarded School Topper (Rank 1) in 2016.",
              
              date: "2016 - 2017",
              tech: ["Mathematics", "Logic", "Problem Solving"]
          })} 
      />
    </div>
  );

  return (
    // MAIN LAYOUT: Uses h-full to respect the App.jsx flex layout
    <div className="flex h-full overflow-hidden bg-[#0d1117] text-gray-300 font-sans selection:bg-green-500/30">
      
      {/* 1. Navigation Rail */}
      <Sidebar activeView={activeView} onNavigate={onNavigate} />

      {/* 2. Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 scrollbar-thin scrollbar-thumb-gray-800">
        
        {/* Modal Overlay */}
        <Modal isOpen={!!selectedItem} onClose={closeModal} data={selectedItem} type={modalType} />

        {/* --- VIEW: DASHBOARD (OVERVIEW) --- */}
        {activeView === 'dashboard' && (
          <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
            {/* Top Row: Profile + Status */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ProfileCard onClick={() => onNavigate('about')} />
              </div>
              <div className="h-full">
                <SystemStatus />
              </div>
            </div>

            {/* Middle Row: Tech Stack + Activity Log */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 h-96 md:h-auto">
                 <TechStack />
              </div>
              <div className="md:col-span-2 h-96 md:h-auto">
                 <ActivityLog />
              </div>
            </div>

            {/* Bottom Section: Education & Honors */}
            <h3 className="text-gray-500 font-mono text-sm uppercase tracking-wider mt-8 mb-4 border-b border-gray-800 pb-2 flex items-center gap-2">
              <Award size={16} /> Education & Honors (Verified Records)
            </h3>
            {renderAwardsGrid()}
          </div>
        )}

        {/* --- VIEW: PROJECTS --- */}
        {activeView === 'projects' && (
          <div className="max-w-6xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
            <NavHeader title="active_deployments" icon={FolderOpen} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => openProject(project)}
                  className="group bg-gray-900/40 border border-gray-800 hover:border-green-500/50 rounded-lg p-6 cursor-pointer transition-all hover:bg-gray-900/60 hover:shadow-[0_0_20px_rgba(74,222,128,0.1)] flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gray-800 rounded group-hover:bg-green-500/10 group-hover:text-green-400 transition-colors">
                      <project.icon size={24} />
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-1 rounded border ${
                      project.status === 'Production' || project.status === 'Deployed' 
                      ? 'bg-green-900/20 text-green-400 border-green-900' 
                      : 'bg-yellow-900/20 text-yellow-400 border-yellow-900'
                    }`}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-800 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-xs font-mono text-gray-500">#{t}</span>
                    ))}
                    {project.tech.length > 3 && <span className="text-xs text-gray-600">+{project.tech.length - 3}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW: AWARDS --- */}
        {activeView === 'awards' && (
          <div className="max-w-7xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
            <NavHeader title="awards_and_certs" icon={Award} />
            {renderAwardsGrid()}
          </div>
        )}

        {/* --- VIEW: RESUME (PDF PREVIEW) --- */}
        {activeView === 'resume' && (
          <div className="h-full flex flex-col animate-in slide-in-from-bottom-4 duration-500">
             <NavHeader title="resume.pdf" icon={FileText} />
             <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden relative">
                <object 
                  data="/assets/Abhishek_Resume.pdf" 
                  type="application/pdf" 
                  className="w-full h-full"
                >
                  {/* Fallback if browser doesn't support PDF preview */}
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <p className="mb-4">Browser unable to preview PDF.</p>
                    <a href="/assets/Abhishek_Resume.pdf" download className="px-4 py-2 bg-green-500 text-black rounded font-bold hover:bg-green-400 transition-colors">
                      Download Resume Instead
                    </a>
                  </div>
                </object>
             </div>
          </div>
        )}

        {/* --- VIEW: KERNEL HISTORY (ABOUT) --- */}
        {activeView === 'about' && (
          <div className="max-w-4xl mx-auto h-full animate-in slide-in-from-bottom-4 duration-500 flex flex-col">
             <NavHeader title="kernel_history_log" icon={Terminal} />
             <div className="flex-1 min-h-0">
                <KernelHistory />
             </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;