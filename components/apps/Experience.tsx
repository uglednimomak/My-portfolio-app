import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="space-y-8 text-cyan-50">
      <div className="border-b border-cyber-pink/50 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-cyber-pink font-retro tracking-widest">WORK_HISTORY_LOG</h2>
        <p className="text-sm text-gray-400 mt-1">{'>'} Accessing restricted HR personnel files...</p>
      </div>

      {/* Storyful */}
      <div className="relative pl-8 border-l-2 border-cyber-neon/30">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-neon shadow-[0_0_10px_#00ff41]"></div>
        <div className="mb-1 flex flex-col sm:flex-row sm:items-center justify-between">
          <h3 className="text-xl font-bold text-cyber-neon">Senior Software Engineer @ Storyful</h3>
          <span className="text-xs bg-cyber-neon/10 text-cyber-neon px-2 py-1 rounded border border-cyber-neon/20">Current Cycle</span>
        </div>
        <p className="text-gray-400 text-sm mb-4 font-mono">Dublin, Ireland (Remote/Hybrid)</p>
        <div className="space-y-3 text-sm">
          <p>
            Architecting high-scale intelligence tools for social media analysis.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 marker:text-cyber-pink">
            <li>Engineered <strong>ANNI</strong>, a clustering engine for semantic pattern mapping.</li>
            <li>Built <strong>Cosmos</strong>, a graph-theory based influence mapping tool.</li>
            <li>Developed <strong>Discover</strong>, a complex boolean search engine across multiple social APIs (Reddit, 4chan, 8chan, etc).</li>
          </ul>
        </div>
      </div>

      {/* PlayOn */}
      <div className="relative pl-8 border-l-2 border-cyber-cyan/30">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-cyan shadow-[0_0_10px_#00ffff]"></div>
        <div className="mb-1 flex flex-col sm:flex-row sm:items-center justify-between">
          <h3 className="text-xl font-bold text-cyber-cyan">Software Engineer @ PlayOn</h3>
          <span className="text-xs bg-cyber-cyan/10 text-cyber-cyan px-2 py-1 rounded border border-cyber-cyan/20">Previous Cycle</span>
        </div>
        <p className="text-gray-400 text-sm mb-4 font-mono">Daily & Season Long Fantasy Sports</p>
        <div className="space-y-3 text-sm">
          <p>
            Core developer for daily fantasy sports platforms involving high-volume real-time data processing.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 marker:text-cyber-yellow">
            <li>Partnered directly to build official games for <strong>NBA</strong> and <strong>Formula 1</strong>.</li>
            <li>Managed real-time scoring engines and user roster management systems.</li>
            <li>Optimized database queries for massive concurrency during live sporting events.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
