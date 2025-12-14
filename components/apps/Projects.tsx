import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="border-b border-cyber-yellow/50 pb-4">
        <h2 className="text-2xl font-bold text-cyber-yellow font-retro tracking-widest">PROJECT_ARCHIVE</h2>
        <p className="text-sm text-gray-400 mt-1">> Decrypting classified project files...</p>
      </div>

      {/* ANNI */}
      <div className="bg-cyber-slate/30 p-4 border border-cyber-slate hover:border-cyber-pink transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-cyber-pink group-hover:drop-shadow-[0_0_5px_#ff00ff]">ANNI</h3>
            <span className="text-[10px] border border-cyber-pink text-cyber-pink px-1">CLUSTERING_ENGINE</span>
        </div>
        <p className="text-sm text-gray-300 mb-4">
            A scalable system transforming social media data into actionable intelligence using embeddings, ML models, and NLP.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="bg-black/40 p-3 rounded border-l-2 border-cyber-pink">
                <h4 className="text-cyber-pink font-bold mb-2">Capabilities</h4>
                <ul className="space-y-1 text-gray-400">
                    <li>> Entity-based enrichments</li>
                    <li>> Semantic pattern mapping</li>
                    <li>> Emergent narrative detection</li>
                    <li>> Sentiment & Toxicity analysis</li>
                </ul>
            </div>
            <div className="bg-black/40 p-3 rounded border-l-2 border-cyber-pink">
                 <h4 className="text-cyber-pink font-bold mb-2">Visualization</h4>
                 <ul className="space-y-1 text-gray-400">
                    <li>> Nodes: Unique posts clustered by theme</li>
                    <li>> Impact: Cluster size = narrative strength</li>
                    <li>> Over Time: Growth/Decline analysis</li>
                 </ul>
            </div>
        </div>
      </div>

      {/* COSMOS */}
      <div className="bg-cyber-slate/30 p-4 border border-cyber-slate hover:border-cyber-cyan transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-cyber-cyan group-hover:drop-shadow-[0_0_5px_#00ffff]">COSMOS</h3>
            <span className="text-[10px] border border-cyber-cyan text-cyber-cyan px-1">GRAPH_THEORY</span>
        </div>
        <p className="text-sm text-gray-300 mb-4">
            Proprietary network mapping and influential identification tool. "A Bird's-eye view of conversation."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="bg-black/40 p-3 rounded border-l-2 border-cyber-cyan">
                <h4 className="text-cyber-cyan font-bold mb-2">Network Topology</h4>
                <ul className="space-y-1 text-gray-400">
                    <li>> <span className="text-white">Nodes (Dots):</span> Twitter accounts. Size = Mentions.</li>
                    <li>> <span className="text-white">Edges (Lines):</span> Mentions. Thickness = Frequency.</li>
                    <li>> <span className="text-white">Centrality:</span> Indicates account importance.</li>
                    <li>> <span className="text-white">Clusters:</span> Groups mentioning similar accounts.</li>
                </ul>
            </div>
            <div className="bg-black/40 p-3 rounded border-l-2 border-cyber-cyan">
                 <h4 className="text-cyber-cyan font-bold mb-2">Client Benefits</h4>
                 <ul className="space-y-1 text-gray-400">
                    <li>> Identify Influential Voices (Journalists/Brands)</li>
                    <li>> Map Issue Networks (Crisis spread)</li>
                    <li>> Uncover White Space (Trends)</li>
                    <li>> Understand Key Risks (Damaging narratives)</li>
                 </ul>
            </div>
        </div>
      </div>

      {/* DISCOVER */}
      <div className="bg-cyber-slate/30 p-4 border border-cyber-slate hover:border-cyber-neon transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-cyber-neon group-hover:drop-shadow-[0_0_5px_#00ff41]">DISCOVER</h3>
            <span className="text-[10px] border border-cyber-neon text-cyber-neon px-1">SEARCH_INTEL</span>
        </div>
        <p className="text-sm text-gray-300 mb-4">
            Cross-platform search engine for discovering content across the web (Reddit, 4chan, 8chan, etc.) owned by the Perseus Team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="bg-black/40 p-3 rounded border-l-2 border-cyber-neon">
                <h4 className="text-cyber-neon font-bold mb-2">Features</h4>
                <ul className="space-y-1 text-gray-400">
                    <li>> Complex Boolean Searches (AND, OR, NOT)</li>
                    <li>> Contextual Conversation View</li>
                    <li>> CSV Data Export (for Data Studio)</li>
                    <li>> Real-time content matching</li>
                </ul>
            </div>
            <div className="bg-black/40 p-3 rounded border-l-2 border-cyber-neon">
                 <h4 className="text-cyber-neon font-bold mb-2">Data Sources</h4>
                 <div className="grid grid-cols-2 gap-2">
                     <span className="bg-cyber-slate/50 px-1">4chan (Boards, IDs)</span>
                     <span className="bg-cyber-slate/50 px-1">Reddit (Subreddits, Profiles)</span>
                     <span className="bg-cyber-slate/50 px-1">8chan (Thumbnails)</span>
                     <span className="bg-cyber-slate/50 px-1">Web Sources</span>
                 </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;