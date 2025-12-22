import React, { useState, useEffect } from 'react';
import { User, Briefcase, FolderGit2, GraduationCap, Terminal as TerminalIcon, Mail } from 'lucide-react';
import { AppId, SystemApp, Mood } from './types';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import About from './components/apps/About';
import Experience from './components/apps/Experience';
import Projects from './components/apps/Projects';
import Education from './components/apps/Education';
import Terminal from './components/apps/Terminal';

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

      {/* Desktop Area */}
      <div className="relative z-10 h-[calc(100vh-48px)] p-4 md:p-8 grid grid-flow-col grid-rows-6 content-start gap-4 w-fit">
        {apps.map(app => (
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
