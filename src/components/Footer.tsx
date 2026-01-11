import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 border-t border-slate-100 bg-slate-50 flex justify-center">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 leading-tight">
            Let's <span className="text-slate-400">Collaborate.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-12">
            I'm currently looking for new opportunities and interesting projects. 
            Whether you have a question or just want to connect, my inbox is always open.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-black text-white px-6 py-3 font-medium transition-all duration-200 inline-flex items-center gap-2 hover:bg-[#333]"
            >
              Email Me
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black px-6 py-3 font-medium transition-all duration-200 inline-flex items-center gap-2 hover:bg-slate-50"
            >
              Follow on GitHub
            </a>
          </div>

          <div className="flex flex-col items-center gap-6 pt-12 border-t border-slate-200">
            <div className="flex items-center gap-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
            
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-300">
              © 2026 anhung.dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
