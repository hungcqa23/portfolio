import React, { useState, useEffect } from 'react';
import { 
  Terminal, Code2, Database, Globe, Cpu, GitCommitHorizontal, 
  Server, Command, FolderGit2, 
  Zap, Layout, Smartphone, Cloud, Wifi, Settings, Lock, Star
} from 'lucide-react';

// Icons with approximate Y offsets to create the wave/scatter effect
const floatingIcons = [
  { icon: <Terminal size={24} />, y: 10 },
  { icon: <Globe size={24} />, y: -15 },
  { icon: <Code2 size={24} />, y: 25 },
  { icon: <Server size={24} />, y: -40 },
  { icon: <GitCommitHorizontal size={24} />, y: -18 },
  { icon: <Zap size={24} />, y: -25 },
  { icon: <Layout size={24} />, y: -23 },
  { icon: <Command size={24} />, y: -40 },
  { icon: <Smartphone size={24} />, y: -35 },
  { icon: <Database size={24} />, y: -10 },
  { icon: <FolderGit2 size={24} />, y: 12 },
  { icon: <Cpu size={24} />, y: -45 },
  { icon: <Cloud size={24} />, y: 15 },
  { icon: <Wifi size={24} />, y: -30 },
  { icon: <Settings size={24} />, y: -5 },
  { icon: <Lock size={24} />, y: -45 },
  { icon: <Star size={24} />, y: 40 },
];

export const Hero: React.FC = () => {
  const roles = ['Fullstack Developer', 'System Architect', 'Software Engineer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);



  useEffect(() => {
    const currentText = roles[currentRole];
    
    if (isWaiting) {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setIsWaiting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (displayText === currentText) {
      setIsWaiting(true);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentText.slice(0, displayText.length + 1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [displayText, isWaiting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-275 mx-auto px-6 pb-40">
        <span className="font-mono text-lg tracking-widest uppercase text-slate-500 mb-4 block">FullStack Software Engineer</span>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-black">
          An Hung . Dev
        </h1>
        
        <div className="flex items-center gap-3 text-2xl md:text-5xl font-medium text-slate-400 mb-10">
          <span>{displayText}</span>
          <span className="inline-block w-2 h-[1.2em] bg-black ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
        </div>
        
        <p className="max-w-2xl text-slate-500 text-xl mb-12 leading-relaxed h-15">
          Building scalable applications and robust APIs, with a heavy focus on backend engineering, performance optimization, and distributed architectures.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-black text-white px-6 py-3 font-medium transition-all duration-200 inline-flex items-center gap-2 hover:bg-[#333]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-black text-black px-6 py-3 font-medium transition-all duration-200 inline-flex items-center gap-2 hover:bg-slate-50"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-x-hidden px-4 h-48 z-1000 select-none flex items-end pb-16 pointer-events-none">
        <ul className="flex justify-between items-center w-full">
          {floatingIcons.map((item, index) => (
            <li 
              key={index} 
              className="shrink-0"
            >
              <div 
                className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-300 hover:text-black hover:scale-110 cursor-pointer animate-float pointer-events-auto"
                style={{  
                  animationDelay: `-${(index * 0.7) % 5}s`,
                  animationDuration: `${3 + (index % 4)}s` 
                }}
              >
                {item.icon}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
