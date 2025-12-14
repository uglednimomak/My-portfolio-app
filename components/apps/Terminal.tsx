import React, { useState, useRef, useEffect } from 'react';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>(['> SYSTEM_READY', '> Type "help" for commands...']);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = '';

    switch (trimmed) {
      case 'help':
        response = 'AVAILABLE COMMANDS: help, clear, whoami, stack, contact, matrix';
        break;
      case 'whoami':
        response = 'USER: Ante Penava | ROLE: Senior Frontend Engineer | ORIGIN: Croatia';
        break;
      case 'stack':
        response = 'STACK: React, TypeScript, Tailwind, Node.js, GraphQL, D3.js, WebGL';
        break;
      case 'contact':
        response = 'LINKEDIN: linkedin.com/in/ante-penava-27568b116';
        break;
      case 'matrix':
        response = 'The Matrix is everywhere. It is all around us...';
        break;
      case 'clear':
        setHistory(['> CONSOLE_CLEARED']);
        return;
      default:
        response = `ERROR: Command '${trimmed}' not found.`;
    }

    setHistory(prev => [...prev, `> ${cmd}`, response]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="h-full flex flex-col font-mono text-sm text-green-500 bg-black p-2">
      <div className="flex-1 overflow-y-auto space-y-1">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('ERROR') ? 'text-red-500' : ''}>{line}</div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex items-center gap-2 mt-2 border-t border-green-900 pt-2">
        <span className="text-green-500 animate-pulse">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-green-400 focus:ring-0"
          autoFocus
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default Terminal;