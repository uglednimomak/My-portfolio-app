import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="space-y-6 text-cyan-50">
       <div className="border-b border-blue-500/50 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-blue-400 font-retro tracking-widest">EDUCATION_DB</h2>
      </div>

      <div className="bg-cyber-dark/80 p-6 border border-blue-500/30 rounded relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-0 right-0 p-2 text-6xl text-blue-900/20 font-retro rotate-12 select-none">
            UNIVERSE
        </div>

        <h3 className="text-xl font-bold text-blue-400">University of Technology</h3>
        <p className="text-gray-400 font-mono text-sm mb-4">Master of Computer Science (M.Sc.)</p>
        <p className="text-xs text-gray-500 mb-2">2014 - 2016</p>
        <ul className="text-sm list-disc list-inside text-gray-300">
            <li>Specialization in Distributed Systems</li>
            <li>Thesis: "Optimizing High-Frequency Data Streams"</li>
            <li>Graduated with Honors</li>
        </ul>
      </div>

      <div className="bg-cyber-dark/80 p-6 border border-blue-500/30 rounded">
        <h3 className="text-xl font-bold text-blue-400">Institute of Information Systems</h3>
        <p className="text-gray-400 font-mono text-sm mb-4">Bachelor of Science in Software Engineering</p>
        <p className="text-xs text-gray-500 mb-2">2010 - 2014</p>
         <ul className="text-sm list-disc list-inside text-gray-300">
            <li>Focus on Algorithms and Data Structures</li>
            <li>Dean's List 2012, 2013</li>
        </ul>
      </div>

      <div className="mt-8 p-4 border border-dashed border-gray-700 text-center">
        <p className="text-gray-500 text-xs font-mono blink">
            [ EDITABLE_RECORD: UPDATE_REQUIRED_BY_USER ]
        </p>
      </div>
    </div>
  );
};

export default Education;