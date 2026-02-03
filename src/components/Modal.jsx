import React, { useState, useEffect } from 'react';
import { X, Cpu, Layers, Terminal, Award, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, data, type }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when opening a new modal
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [data]);

  if (!isOpen || !data) return null;

  // Helper for Carousel Navigation
  const nextImage = () => {
    if (data.images && data.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
    }
  };

  const prevImage = () => {
    if (data.images && data.images.length > 1) {
      setCurrentImageIndex((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#0d1117] border border-green-500/30 w-full max-w-6xl h-[85vh] overflow-hidden rounded-lg shadow-[0_0_50px_rgba(0,255,0,0.1)] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50 shrink-0">
            <div className="flex items-center gap-2">
              <Terminal size={18} className="text-green-500" />
              <span className="font-mono text-green-400 text-sm">
                root@abhishek:~/view-{type}/{data.id}
              </span>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Content Area - Uses Flex to fill height */}
          <div className="flex-1 overflow-hidden p-6">
            <div className="flex flex-col md:flex-row gap-6 h-full">
              
              {/* --- LEFT COLUMN: DETAILS & TEXT (Scrollable) --- */}
              <div className="md:w-1/3 flex flex-col h-full overflow-hidden">
                
                {/* Scrollable Container for Text */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                  
                  {/* Title Section */}
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                       {type === 'achievement' && <Award className="text-yellow-500 shrink-0 mt-1" size={28} />}
                       <h2 className="text-2xl font-bold text-white leading-tight">{data.title}</h2>
                    </div>
                    {data.tech && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {data.tech.map(t => (
                          <span key={t} className="px-2 py-1 text-xs font-mono bg-green-900/20 text-green-400 border border-green-900/50 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* --- ACHIEVEMENT DESCRIPTION (Full Text) --- */}
                  {type === 'achievement' && (
                    <div className="animate-in fade-in slide-in-from-left-4">
                       
                       {/* Evidence Counter Badge */}
                       {data.images && (
                        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-900/10 border border-yellow-700/30 rounded text-xs text-yellow-500/80 font-mono">
                            <ImageIcon size={14} /> 
                            <span>Gallery: {currentImageIndex + 1} of {data.images.length}</span>
                        </div>
                       )}

                       {/* The Description Text - No Truncation */}
                       <div className="bg-gray-900/30 rounded border border-gray-800 p-4">
                          <h3 className="text-gray-500 font-mono text-xs uppercase mb-3 border-b border-gray-800 pb-2">/// RECOGNITION BRIEF</h3>
                          <p className="text-gray-300 text-sm leading-7 whitespace-pre-wrap">
                            {data.description}
                          </p>
                       </div>

                       {/* Metadata Footer */}
                       <div className="mt-6 text-xs font-mono text-gray-500 space-y-1">
                          <div className="flex justify-between border-b border-gray-800 pb-1">
                            <span>TIMESTAMP:</span>
                            <span className="text-green-500">{data.date}</span>
                          </div>
                          <div className="flex justify-between pt-1">
                            <span>STATUS:</span>
                            <span className="text-green-500">VERIFIED RECORD</span>
                          </div>
                       </div>
                    </div>
                  )}
                  
                  {/* Project Tabs (Only shows for projects) */}
                  {type === 'project' && (
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => setActiveTab('overview')}
                        className={`text-left px-4 py-3 rounded border ${activeTab === 'overview' ? 'bg-green-500/10 border-green-500 text-green-400' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                      >
                        <Cpu size={16} className="inline mr-2" /> Mission Brief
                      </button>
                      <button 
                        onClick={() => setActiveTab('architecture')}
                        className={`text-left px-4 py-3 rounded border ${activeTab === 'architecture' ? 'bg-green-500/10 border-green-500 text-green-400' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                      >
                        <Layers size={16} className="inline mr-2" /> System Architecture
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* --- RIGHT COLUMN: VISUALS ONLY (Clean Image) --- */}
              <div className="md:w-2/3 bg-black/40 rounded-lg border border-gray-800 flex flex-col relative overflow-hidden h-full">
                
                {/* ACHIEVEMENT VIEW: CLEAN PHOTO */}
                {type === 'achievement' && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black group">
                      
                      {/* The Image (Clean) */}
                      <img 
                        src={`/assets/${data.images[currentImageIndex]}`} 
                        alt={`Evidence ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                      
                      {/* Navigation Arrows (Only overlay) */}
                      {data.images.length > 1 && (
                        <>
                          <button 
                             onClick={prevImage}
                             className="absolute left-4 p-3 bg-black/50 text-white hover:bg-green-500 hover:text-black rounded-full transition-all backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button 
                             onClick={nextImage}
                             className="absolute right-4 p-3 bg-black/50 text-white hover:bg-green-500 hover:text-black rounded-full transition-all backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100"
                          >
                            <ChevronRight size={24} />
                          </button>
                        </>
                      )}
                      
                      {/* NO WATERMARK HERE ANYMORE */}
                   </div>
                )}

                {/* PROJECT VIEW (Remains text/diagram mix) */}
                {type === 'project' && activeTab === 'overview' && (
                  <div className="p-8 space-y-6 animate-in fade-in h-full overflow-y-auto">
                    <h3 className="text-green-500 font-mono text-sm uppercase">/// PROJECT DESCRIPTION</h3>
                    <p className="text-gray-200 text-lg leading-relaxed">{data.description}</p>
                    
                    <div className="bg-gray-900/50 p-6 rounded border border-gray-700">
                      <h3 className="text-gray-400 font-mono text-xs uppercase mb-3">/// TECHNICAL OUTCOMES</h3>
                      <p className="text-gray-300 italic border-l-2 border-green-500 pl-4">{data.details}</p>
                    </div>

                    {data.github && (
                      <div className="pt-4">
                        <a href={data.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-green-400 hover:text-white transition-colors border border-green-500/30 px-4 py-2 rounded bg-green-500/10 hover:bg-green-500/20">
                          <Terminal size={16} /> View Source Code
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {type === 'project' && activeTab === 'architecture' && (
                  <div className="h-full w-full flex flex-col items-center justify-center bg-gray-900 p-4">
                    <img 
                       src={`/assets/arch-${data.id}.png`} 
                       alt="Architecture" 
                       className="max-w-full max-h-full object-contain shadow-2xl"
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.parentNode.innerText = '[ ERROR: Diagram arch-' + data.id + '.png not found ]';
                         e.target.parentNode.className = "text-red-500 font-mono p-4 border border-red-500 rounded";
                       }} 
                    />
                  </div>
                )}

              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;