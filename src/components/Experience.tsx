import React, { useRef, useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { experiences } from '../data/portfolio';

export const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className="py-24 border-t border-slate-100 flex justify-center sticky top-0 z-20 bg-white min-h-screen"
    >
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Numbering */}
          <div className={`hidden lg:block lg:col-span-3 sticky top-24 text-left transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <span className={`text-[12rem] leading-none font-black block -ml-10 select-none transition-colors duration-700 ${
              isVisible ? 'text-slate-200' : 'text-slate-50'
            }`}>
              02
            </span>
            <span className={`text-2xl font-bold tracking-tight block ml-2 transition-colors duration-700 delay-200 ${
              isVisible ? 'text-black' : 'text-slate-200'
            }`}>
              Career Path
            </span>
          </div>

          {/* Right Column: Content */}
          <div className={`lg:col-span-9 relative transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
          }`}>
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100" />
            
            <div className="space-y-16 pl-8">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative group"
                >
                  <div className="absolute -left-8.25 top-2 w-2 h-2 bg-black rounded-full z-10 group-hover:scale-150 transition-transform duration-300" />
                  
                  <div className="max-w-3xl">
                    <span className="font-mono text-slate-400 text-sm font-bold">{exp.period}</span>
                    
                    <h3 className="text-2xl font-black text-black mt-2 mb-1">
                      {exp.title}
                    </h3>
                    
                    <div className="text-black font-bold text-sm uppercase tracking-wider mb-6">
                      {exp.company}
                    </div>
                    
                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-4 py-1 text-xs font-bold uppercase tracking-tighter bg-slate-50 border border-slate-100 rounded-full text-slate-400 hover:text-black hover:border-black transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
