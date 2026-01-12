import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  number: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'Biography', number: '01' },
  { id: 'experience', label: 'Career Path', number: '02' },
  { id: 'projects', label: 'Project Collections', number: '03' },
  { id: 'books', label: 'Books', number: '04' },
];

interface SidebarNavProps {
  activeSection: string;
  onNavigate?: (sectionId: string) => void;
  isVisible?: boolean;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ activeSection, onNavigate, isVisible = true }) => {
  return (
    <aside 
      className={`hidden lg:flex fixed left-0 top-0 h-screen w-80 flex-col justify-center pl-12 z-50 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-full pointer-events-none'
      }`}
    >
      <nav className="space-y-6">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className={`group flex items-center gap-3 text-left transition-all duration-300 cursor-pointer ${
                isActive 
                  ? 'opacity-100' 
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              <span 
                className={`font-mono text-[10px] tracking-wider transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-slate-400'
                }`}
              >
                {item.number}
              </span>
              <span 
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive 
                    ? 'text-black' 
                    : 'text-slate-400'
                }`}
              >
                {item.label}
              </span>
              <span 
                className={`h-px transition-all duration-300 ${
                  isActive 
                    ? 'w-6 bg-black' 
                    : 'w-0 bg-slate-300 group-hover:w-3'
                }`}
              />
            </button>
          );
        })}
      </nav>
      
      {/* Social Links */}
      <div className="mt-12 flex items-center gap-4">
        <a
          href="https://github.com/hungcqa23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-black transition-colors duration-300"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/hungcqa23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-black transition-colors duration-300"
        >
          <Linkedin size={20} />
        </a>
      </div>
      
      {/* Subtle vertical line */}
      <div className="absolute right-0 top-1/4 h-1/2 w-px bg-slate-100" />
    </aside>
  );
};
