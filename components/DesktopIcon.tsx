import React from 'react';

interface DesktopIconProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex flex-col items-center justify-center gap-2 p-4 w-24 hover:bg-cyber-neon/10 border border-transparent hover:border-cyber-neon/30 rounded transition-all duration-200 focus:outline-none focus:bg-cyber-neon/20"
    >
      <div className="text-cyber-cyan group-hover:text-cyber-neon group-hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all duration-300">
        {icon}
      </div>
      <span className="text-xs font-mono text-cyan-100 group-hover:text-white bg-black/50 px-1 rounded shadow-sm text-center break-words w-full">
        {label}
      </span>
    </button>
  );
};

export default DesktopIcon;