import React from 'react';
import { Mood } from '../../types';
import { AlertTriangle, Music, Tent } from 'lucide-react';

interface AboutProps {
  mood: Mood;
}

const About: React.FC<AboutProps> = ({ mood }) => {
  return (
    <div className="relative flex flex-col md:flex-row gap-8 items-start text-cyan-50 h-full">
      
      {/* MOOD OVERLAYS */}
      {mood === Mood.PARTY && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-purple-900/80 backdrop-blur-sm border-2 border-pink-500 animate-pulse-fast p-8 text-center">
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
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-stone-900/90 backdrop-blur-md border-2 border-orange-500 p-8 text-center">
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

      {/* Standard Bio Content */}
      <div className="w-full md:w-1/3 flex flex-col items-center relative z-0">
        <div className="w-48 h-48 bg-cyber-slate border-4 border-cyber-neon rounded-full overflow-hidden relative shadow-[0_0_20px_rgba(0,255,65,0.3)]">
           {/* Placeholder for Profile Image */}
           <img 
            src="https://picsum.photos/400/400?grayscale" 
            alt="Ante Penava"
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 to-transparent"></div>
        </div>
        <h2 className="mt-4 text-2xl font-bold font-retro text-cyber-neon tracking-wider">ANTE PENAVA</h2>
        <span className="text-xs bg-cyber-pink/20 text-cyber-pink px-2 py-1 rounded border border-cyber-pink/50 mt-2">SENIOR_ENGINEER_LVL_99</span>
      </div>

      <div className="flex-1 space-y-6 relative z-0">
        <div>
            <h3 className="text-xl text-cyber-cyan font-bold border-b border-cyber-cyan/30 pb-2 mb-2">:: BIO_DATA</h3>
            <p className="text-sm leading-relaxed text-gray-300 font-mono">
                Senior Frontend React Engineer with a passion for building complex, data-heavy applications. 
                Specialized in transforming raw data into actionable visual insights. 
                Experienced in high-stakes environments ranging from fantasy sports engines (NBA/F1) to social intelligence platforms (Storyful).
            </p>
        </div>

        <div>
            <h3 className="text-xl text-cyber-cyan font-bold border-b border-cyber-cyan/30 pb-2 mb-2">:: SKILL_MATRIX</h3>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-2">
                    <div className="flex justify-between"><span>React / TypeScript</span><span className="text-cyber-neon">100%</span></div>
                    <div className="w-full bg-gray-800 h-1"><div className="bg-cyber-neon h-full w-full shadow-[0_0_5px_#00ff41]"></div></div>
                    
                    <div className="flex justify-between"><span>Data Visualization (D3/Recharts)</span><span className="text-cyber-neon">90%</span></div>
                    <div className="w-full bg-gray-800 h-1"><div className="bg-cyber-neon h-full w-[90%] shadow-[0_0_5px_#00ff41]"></div></div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between"><span>Backend Integration</span><span className="text-cyber-pink">85%</span></div>
                    <div className="w-full bg-gray-800 h-1"><div className="bg-cyber-pink h-full w-[85%] shadow-[0_0_5px_#ff00ff]"></div></div>

                    <div className="flex justify-between"><span>UI/UX Design</span><span className="text-cyber-cyan">80%</span></div>
                    <div className="w-full bg-gray-800 h-1"><div className="bg-cyber-cyan h-full w-[80%] shadow-[0_0_5px_#00ffff]"></div></div>
                </div>
            </div>
        </div>

        <div className="pt-4">
             <a 
                href="https://ie.linkedin.com/in/ante-penava-27568b116" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors text-sm shadow-[0_0_10px_rgba(37,99,235,0.5)]"
             >
                Connect on LinkedIn
             </a>
        </div>
      </div>
    </div>
  );
};

export default About;