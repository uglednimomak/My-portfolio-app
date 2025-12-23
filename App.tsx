import React, { useState, useEffect } from 'react';
import { User, Briefcase, FolderGit2, GraduationCap, Terminal as TerminalIcon, Mail, Gauge, Music, Tent } from 'lucide-react';
import { AppId, SystemApp, Mood } from './types';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import About from './components/apps/About';
import Experience from './components/apps/Experience';
import Projects from './components/apps/Projects';
import Education from './components/apps/Education';
import Terminal from './components/apps/Terminal';
import Lighthouse from './components/apps/Lighthouse';

const INITIAL_APPS: SystemApp[] = [
  {
    id: AppId.ABOUT,
    title: 'BIO_DATA',
    icon: <User size={24} />,
    isOpen: true,
    isMinimized: false,
    zIndex: 10,
  },
  {
    id: AppId.EXPERIENCE,
    title: 'WORK_LOG',
    icon: <Briefcase size={24} />,
    isOpen: false,
    isMinimized: false,
    zIndex: 9,
  },
  {
    id: AppId.PROJECTS,
    title: 'PROJECTS',
    icon: <FolderGit2 size={24} />,
    isOpen: false,
    isMinimized: false,
    zIndex: 8,
  },
  {
    id: AppId.EDUCATION,
    title: 'EDUCATION',
    icon: <GraduationCap size={24} />,
    isOpen: false,
    isMinimized: false,
    zIndex: 7,
  },
  {
    id: AppId.TERMINAL,
    title: 'TERMINAL',
    icon: <TerminalIcon size={24} />,
    isOpen: false,
    isMinimized: false,
    zIndex: 6,
  },
  {
    id: AppId.CONTACT,
    title: 'CONTACT',
    icon: <Mail size={24} />,
    isOpen: false,
    isMinimized: false,
    zIndex: 5,
  },
  {
    id: AppId.LIGHTHOUSE,
    title: 'LIGHTHOUSE',
    icon: <Gauge size={24} />,
    isOpen: false,
    isMinimized: false,
    zIndex: 4,
  },
];

const App: React.FC = () => {
  const [apps, setApps] = useState<SystemApp[]>(INITIAL_APPS);
  const [nextZIndex, setNextZIndex] = useState(20);
  const [mood, setMood] = useState<Mood>(Mood.HACKER);

  // Apply mood class to body for global CSS variable overrides
  useEffect(() => {
    document.body.className = ''; // clear
    if (mood === Mood.PARTY) document.body.classList.add('mood-party');
    if (mood === Mood.NATURE) document.body.classList.add('mood-nature');
  }, [mood]);

  const handleOpenApp = (id: AppId) => {
    setApps(prevApps => prevApps.map(app => {
      if (app.id === id) {
        return { ...app, isOpen: true, isMinimized: false, zIndex: nextZIndex };
      }
      return app;
    }));
    setNextZIndex(prev => prev + 1);
  };

  const handleCloseApp = (id: AppId) => {
    setApps(prevApps => prevApps.map(app => {
      if (app.id === id) {
        return { ...app, isOpen: false };
      }
      return app;
    }));
  };

  const handleMinimizeApp = (id: AppId) => {
    setApps(prevApps => prevApps.map(app => {
      if (app.id === id) {
        return { ...app, isMinimized: true };
      }
      return app;
    }));
  };

  const handleFocusApp = (id: AppId) => {
    setApps(prevApps => prevApps.map(app => {
      if (app.id === id) {
        return { ...app, isMinimized: false, zIndex: nextZIndex };
      }
      return app;
    }));
    setNextZIndex(prev => prev + 1);
  };

  const renderAppContent = (id: AppId) => {
    switch (id) {
      case AppId.ABOUT:
        return <About mood={mood} />;
      case AppId.EXPERIENCE:
        return <Experience />;
      case AppId.PROJECTS:
        return <Projects />;
      case AppId.EDUCATION:
        return <Education />;
      case AppId.TERMINAL:
        return <Terminal />;
      case AppId.CONTACT:
        return (
          <div className="p-8 text-center">
            <h2 className="text-xl text-cyber-neon">TRANSMISSION LINK:</h2>
            <a href="mailto:ante.penava@example.com" className="text-white hover:underline block mt-4">
              ante93366@gmail.com
            </a>
            <p className="mt-4 text-gray-400">Or use the Terminal...</p>
          </div>
        );
      case AppId.LIGHTHOUSE:
        return <Lighthouse />;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-cyber-black text-white font-mono selection:bg-cyber-neon selection:text-black transition-colors duration-500">
      {/* Background Effect (Scanlines/Grid) - Using CSS Vars for dynamic coloring */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none transition-all duration-500" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at center, var(--c-slate) 0%, var(--c-bg) 100%)',
           }}>
           <div className="absolute inset-0" 
                style={{ 
                  backgroundImage: 'linear-gradient(0deg, transparent 24%, var(--c-primary-dim) 25%, var(--c-primary-dim) 26%, transparent 27%, transparent 74%, var(--c-primary-dim) 75%, var(--c-primary-dim) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, var(--c-primary-dim) 25%, var(--c-primary-dim) 26%, transparent 27%, transparent 74%, var(--c-primary-dim) 75%, var(--c-primary-dim) 76%, transparent 77%, transparent)', 
                  backgroundSize: '50px 50px' 
                }}>
           </div>
      </div>
      
      {/* CRT Overlay Effect */}
      <div className="fixed inset-0 z-[100] crt-overlay pointer-events-none"></div>

      {/* MOOD OVERLAYS - Global */}
      {mood === Mood.PARTY && (
        <div className="fixed inset-x-0 top-0 bottom-12 z-[40] flex items-center justify-center bg-purple-900/80 backdrop-blur-sm border-2 border-pink-500 animate-pulse-fast p-8 text-center pointer-events-none">
            <div className="transform -rotate-6 bg-black/80 p-6 border border-pink-500 shadow-[0_0_30px_#ff00ff]">
                <Music size={48} className="mx-auto text-pink-500 mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold text-pink-500 font-retro tracking-widest uppercase mb-2">⚠ System Status: AWAY</h2>
                <p className="text-white font-mono text-sm">
                    Currently partying somewhere in an abandoned warehouse. <br/>
                    Signal is weak. Please leave a message after the drop.
                </p>
            </div>
        </div>
      )}

      {mood === Mood.NATURE && (
        <div className="fixed inset-x-0 top-0 bottom-12 z-[40] flex items-center justify-center bg-stone-900/90 backdrop-blur-md border-2 border-orange-500 p-8 text-center pointer-events-none">
             <div className="bg-stone-800 p-6 border border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                <Tent size={48} className="mx-auto text-orange-500 mb-4" />
                <h2 className="text-2xl font-bold text-orange-500 font-retro tracking-widest uppercase mb-2">⚠ System Status: OFFLINE</h2>
                <p className="text-gray-300 font-mono text-sm">
                    Gone to the woods. Playing guitar on the rocks near the river.<br/>
                    Rebooting mental operating system...
                </p>
            </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="relative z-10 h-[calc(100vh-48px)]">
        {/* Desktop Area */}
        <div className="p-4 md:p-8 grid grid-flow-col grid-rows-6 content-start gap-4 w-fit">
          {apps.filter(app => app.id !== AppId.LIGHTHOUSE).map(app => (
            <DesktopIcon 
              key={app.id} 
              label={app.title} 
              icon={app.icon} 
              onClick={() => handleOpenApp(app.id)} 
            />
          ))}
        </div>

        {/* Lighthouse Icon - Top Right Corner */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8">
          {apps.filter(app => app.id === AppId.LIGHTHOUSE).map(app => (
            <DesktopIcon 
              key={app.id} 
              label={app.title} 
              icon={app.icon} 
              onClick={() => handleOpenApp(app.id)} 
            />
          ))}
        </div>

        {/* Windows Layer */}
        {apps.map(app => (
          <Window 
            key={app.id} 
            app={app} 
            onClose={handleCloseApp} 
            onMinimize={handleMinimizeApp}
            onFocus={handleFocusApp}
          >
            {renderAppContent(app.id)}
          </Window>
        ))}
      </main>

      {/* Taskbar */}
      <Taskbar 
        openApps={apps} 
        onAppClick={handleFocusApp} 
        currentMood={mood}
        onMoodChange={setMood}
      />
    </div>
  );
};

export default App;
