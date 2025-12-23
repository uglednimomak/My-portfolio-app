import React, { useState, useEffect } from 'react';
import { Gauge, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';

interface LighthouseScore {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

const Lighthouse: React.FC = () => {
  const [scores, setScores] = useState<LighthouseScore | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const [funnyMessage, setFunnyMessage] = useState<string>('');

  // Get the current URL (will use the deployed URL)
  const currentUrl = window.location.origin;
  
  const funnyMessages = [
    "Hacking the mainframe...",
    "Compiling courage...",
    "Downloading more RAM...",
    "Asking the internet gods...",
    "Bribing Google's algorithms...",
    "Counting pixels manually...",
    "Summoning the DevOps spirits...",
    "Consulting the oracle of speed...",
    "Measuring internet vibes...",
    "Checking if servers are napping...",
    "Casting performance spells...",
    "Negotiating with packets...",
    "Teaching robots to count faster...",
  ];

  const getRandomMessage = () => {
    return funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  };
  
  const fetchLighthouseScores = async () => {
    setLoading(true);
    setError(null);
    setFunnyMessage(getRandomMessage());

    try {
      // Using Google PageSpeed Insights API
      const apiKey = import.meta.env.VITE_LIGHTHOUSE_API_KEY;
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.mrno.tech/&category=performance&category=accessibility&category=best-practices&category=seo&strategy=mobile&key=${apiKey}`;
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch Lighthouse scores');
      }

      const data = await response.json();
      const categories = data.lighthouseResult.categories;

      setScores({
        performance: Math.round(categories.performance.score * 100),
        accessibility: Math.round(categories.accessibility.score * 100),
        bestPractices: Math.round(categories['best-practices'].score * 100),
        seo: Math.round(categories.seo.score * 100),
      });
      
      setLastChecked(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch scores');
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch on component mount
  useEffect(() => {
    fetchLighthouseScores();
  }, []);

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 90) return 'bg-green-500/20 border-green-500/50';
    if (score >= 50) return 'bg-orange-500/20 border-orange-500/50';
    return 'bg-red-500/20 border-red-500/50';
  };

  const ScoreCard: React.FC<{ label: string; score: number }> = ({ label, score }) => (
    <div className={`flex flex-col items-center p-4 rounded-lg border ${getScoreBgColor(score)} backdrop-blur-sm`}>
      <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2">
        {label}
      </div>
      <div className={`text-4xl font-bold ${getScoreColor(score)} font-mono`}>
        {score}
      </div>
      <div className="w-full bg-cyber-slate h-2 rounded-full mt-2 overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ${
            score >= 90 ? 'bg-green-500' : score >= 50 ? 'bg-orange-500' : 'bg-red-500'
          }`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="text-cyan-50 h-full flex flex-col p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Gauge className="text-cyber-neon" size={28} />
          <div>
            <h2 className="text-xl font-bold font-retro text-cyber-neon tracking-wider">
              LIGHTHOUSE METRICS
            </h2>
            <p className="text-xs text-gray-400 font-mono">
              {currentUrl}
            </p>
          </div>
        </div>
        
        <button
          onClick={fetchLighthouseScores}
          disabled={loading}
          className="px-4 py-2 bg-cyber-slate border border-cyber-neon text-cyber-neon hover:bg-cyber-neon hover:text-cyber-black transition-all font-mono text-sm rounded flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          {loading ? 'SCANNING...' : 'REFRESH'}
        </button>
      </div>

      {/* Last Checked */}
      {lastChecked && !loading && (
        <div className="text-xs text-gray-400 font-mono mb-4 flex items-center gap-2">
          <CheckCircle size={14} className="text-green-400" />
          Last checked: {lastChecked.toLocaleString()}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-4 flex items-start gap-3">
          <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
          <div>
            <p className="text-red-400 font-mono text-sm mb-2">Error: {error}</p>
            <p className="text-gray-400 text-xs font-mono">
              Note: You need to add your Google PageSpeed Insights API key to use this feature.
              <br />
              Get one at: <a href="https://developers.google.com/speed/docs/insights/v5/get-started" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-cyan-400 hover:underline">
                developers.google.com
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && !scores && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <RefreshCw size={48} className="text-cyber-neon animate-spin mx-auto mb-4" />
            <p className="text-cyan-300 font-mono text-lg mb-2">{funnyMessage}</p>
            <p className="text-xs text-gray-500 font-mono mt-2">This may take 30-60 seconds</p>
            <p className="text-xs text-gray-400 font-mono mt-4 italic">
              (Actually analyzing performance, not just pretending)
            </p>
          </div>
        </div>
      )}

      {/* Scores Grid */}
      {scores && !loading && (
        <>
          <div className="bg-cyber-slate/30 border border-cyber-neon/30 rounded-lg p-3 mb-4 text-center">
            <p className="text-cyan-300 font-mono text-sm">
              🚀 <span className="text-cyber-neon font-bold">SCAN COMPLETE</span> 🚀
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Your site has been judged by the algorithm overlords
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            <ScoreCard label="Performance" score={scores.performance} />
            <ScoreCard label="Accessibility" score={scores.accessibility} />
            <ScoreCard label="Best Practices" score={scores.bestPractices} />
            <ScoreCard label="SEO" score={scores.seo} />
          </div>
        </>
      )}

      {/* Info Footer */}
      <div className="mt-6 pt-4 border-t border-cyber-slate">
        <div className="text-xs text-gray-500 font-mono space-y-1">
          <p>🟢 90-100: Good</p>
          <p>🟠 50-89: Needs Improvement</p>
          <p>🔴 0-49: Poor</p>
        </div>
      </div>
    </div>
  );
};

export default Lighthouse;
