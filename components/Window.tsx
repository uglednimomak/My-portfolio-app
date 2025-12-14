import React from 'react';
import { X, Minus, Terminal } from 'lucide-react';
import { WindowProps } from '../types';

const Window: React.FC<WindowProps> = ({ app, onClose, onMinimize, onFocus, children }) => {
  if (!app.isOpen || app.isMinimized) return null;

  return (
    <div 
      className={`absolute top-4 left-4 right-4 bottom-20 md:top-10 md:left-[15%] md:right-auto md:w-[70%] md:h-[80%] flex flex-col bg-cyber-dark border-2 border-cyber-slate shadow-[0_0_20px_rgba(0,255,65,0.15)] transition-all duration-200`}
      style={{ zIndex: app.zIndex }}
      onClick={() => onFocus(app.id)}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between bg-cyber-slate px-2 py-1 select-none border-b border-cyber-neon/30">
        <div className="flex items-center gap-2 text-cyber-neon font-mono text-sm uppercase tracking-widest">
          <Terminal size={14} />
          <span>{app.title}.exe</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(app.id); }}
            className="p-1 hover:bg-cyber-neon/20 hover:text-cyber-neon text-gray-400 transition-colors"
          >
            <Minus size={14} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(app.id); }}
            className="p-1 hover:bg-red-500/80 hover:text-white text-gray-400 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto p-4 md:p-6 font-mono bg-cyber-black/90 relative">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-5" 
             style={{ backgroundImage: 'linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="relative z-10 h-full">
           {children}
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="bg-cyber-slate/50 px-2 py-1 text-[10px] text-gray-400 font-mono border-t border-cyber-slate flex justify-between">
        <span>MEM: {Math.floor(Math.random() * 500) + 100}MB</span>
        <span>UID: ANTE-PENAVA</span>
      </div>
    </div>
  );
};

export default Window;
