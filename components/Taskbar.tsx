import React, { useState, useEffect } from 'react';
import { AppId, SystemApp, Mood } from '../types';
import { Power, Wifi, WifiOff, Cpu, GlassWater, TreePine } from 'lucide-react';

interface TaskbarProps {
  openApps: SystemApp[];
  onAppClick: (id: AppId) => void;
  currentMood: Mood;
  onMoodChange: (mood: Mood) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ openApps, onAppClick, currentMood, onMoodChange }) => {
  const [time, setTime] = useState(new Date());
  const [showStartModal, setShowStartModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine Wifi Status Icon
  const getWifiIcon = () => {
    switch (currentMood) {
      case Mood.PARTY:
        return <Wifi size={16} className="text-yellow-500 animate-pulse opacity-50" />;
      case Mood.NATURE:
        return <WifiOff size={16} className="text-red-500" />;
      case Mood.HACKER:
      default:
        return <Wifi size={16} className="text-cyber-neon animate-pulse-fast" />;
    }
  };

  const getWifiStatusText = () => {
    switch (currentMood) {
      case Mood.PARTY: return "WEAK SIGNAL";
      case Mood.NATURE: return "OFFLINE";
      default: return "CONNECTED";
    }
  };

  return (
    <>
      {/* Start Menu Modal */}
      {showStartModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
          onClick={() => setShowStartModal(false)}
        >
          <div 
            className="bg-cyber-slate border-2 border-cyber-neon p-8 max-w-md w-full mx-4 shadow-[0_0_50px_rgba(var(--c-primary),0.5)] animate-pulse-slow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-4">
              <div className="text-6xl">🦄</div>
              <h2 className="text-2xl font-bold text-cyber-neon font-retro">ACCESS DENIED</h2>
              <p className="text-gray-300 font-mono">Oops! You found the secret Start Menu. But it's still in the oven 🍕</p>
              <p className="text-cyber-cyan font-mono text-sm italic">[HACKER VOICE] I'm in... but there's only memes here.</p>
              <p className="text-cyber-pink font-mono text-xs">✨ Fun Fact: 73% of Start Menus are just portals to procrastination.</p>
              <p className="text-cyber-yellow font-mono text-xs">🚀 Stay tuned for more features! Or go touch some grass 🌱</p>
              <button
                onClick={() => setShowStartModal(false)}
                className="mt-4 px-6 py-2 bg-cyber-neon text-cyber-black font-bold hover:bg-cyber-cyan transition-all shadow-[0_0_20px_rgba(var(--c-primary),0.3)]"
              >
                CLOSE THE PORTAL
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-cyber-slate border-t-2 border-cyber-neon/30 flex items-center justify-between px-2 shadow-[0_-5px_20px_rgba(0,0,0,0.8)] z-50 transition-colors duration-500">
        
        {/* Left Section: Start & Apps */}
      <div className="flex items-center gap-4 flex-1 overflow-hidden">
        <button 
          onClick={() => setShowStartModal(true)}
          aria-label="Start menu" 
          className="shrink-0 flex items-center gap-2 bg-cyber-neon/10 hover:bg-cyber-neon/20 border border-cyber-neon px-3 py-1 text-cyber-neon font-bold font-retro text-xl transition-all shadow-[0_0_10px_rgba(var(--c-primary),0.2)]"
        >
          <Power size={18} />
          <span className="hidden sm:inline">START</span>
        </button>

        {/* Active Apps */}
        <div className="flex gap-1 ml-2 overflow-x-auto no-scrollbar mask-gradient">
          {openApps.filter(app => app.isOpen).map((app) => (
            <button
              key={app.id}
              onClick={() => onAppClick(app.id)}
              aria-label={`${app.isMinimized ? 'Restore' : 'Focus on'} ${app.title} window`}
              className={`
                flex items-center gap-2 px-3 py-1 font-mono text-xs border-b-2 transition-all w-32 shrink-0 truncate
                ${app.isMinimized 
                  ? 'bg-cyber-dark/50 text-gray-400 border-gray-600' 
                  : 'bg-cyber-dark text-cyber-cyan border-cyber-cyan shadow-[inset_0_0_10px_rgba(var(--c-accent-2),0.1)]'}
              `}
            >
              <span className="scale-75">{app.icon}</span>
              <span className="truncate">{app.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Section: Mood & SysTray */}
      <div className="flex items-center gap-4 pl-2 shrink-0">
        
        {/* Mood Switcher */}
        <div className="hidden md:flex items-center gap-1 bg-cyber-dark/30 p-1 rounded border border-cyber-slate/50">
          <button 
            onClick={() => onMoodChange(Mood.HACKER)}
            aria-label="Switch to Hacker mode"
            title="Mode: Hacker (Default)"
            className={`p-1.5 rounded transition-all ${currentMood === Mood.HACKER ? 'bg-cyber-neon text-cyber-black shadow-[0_0_8px_var(--c-primary)]' : 'text-gray-500 hover:text-cyber-neon'}`}
          >
            <Cpu size={16} />
          </button>
          <button 
            onClick={() => onMoodChange(Mood.PARTY)}
            aria-label="Switch to Party mode"
            title="Mode: Party / Social"
            className={`p-1.5 rounded transition-all ${currentMood === Mood.PARTY ? 'bg-cyber-neon text-cyber-black shadow-[0_0_8px_var(--c-primary)]' : 'text-gray-500 hover:text-cyber-neon'}`}
          >
            <GlassWater size={16} />
          </button>
          <button 
            onClick={() => onMoodChange(Mood.NATURE)}
            aria-label="Switch to Nature mode"
            title="Mode: Burned Out / Nature"
            className={`p-1.5 rounded transition-all ${currentMood === Mood.NATURE ? 'bg-cyber-neon text-cyber-black shadow-[0_0_8px_var(--c-primary)]' : 'text-gray-500 hover:text-cyber-neon'}`}
          >
            <TreePine size={16} />
          </button>
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-4 px-3 bg-cyber-dark/50 h-full border-l border-cyber-slate">
          {getWifiIcon()}
          <div className="flex flex-col items-end leading-none">
            <span className="text-cyber-cyan font-mono text-xs">{time.toLocaleTimeString()}</span>
            <span className="text-gray-300 font-mono text-[10px] hidden sm:inline">{getWifiStatusText()}</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Taskbar;
