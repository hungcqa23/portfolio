import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Github, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', hash: 'about', label: 'About' },
    { to: '/', hash: 'experience', label: 'Experience' },
    { to: '/', hash: 'projects', label: 'Projects' },
    { to: '/', hash: 'books', label: 'Books' },
    { to: '/', hash: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
          isScrolled ? 'py-4 bg-white/95 backdrop-blur-sm' : 'py-6 bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1100px] mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
            >
              <span className="font-black text-2xl tracking-tighter text-black">
                ANHUNG<span className="text-slate-300">.</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  hash={item.hash}
                  className="text-slate-500 hover:text-black transition-all text-xs font-bold uppercase tracking-widest active:text-black"
                  activeProps={{ className: 'text-black' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-slate-400 hover:border-slate-400 transition-all"
              >
                Connect
              </a>
            </div>

            <button
              className="md:hidden text-black p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="text-4xl font-black text-black uppercase tracking-tighter"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
