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
      className="min-h-screen flex flex-col justify-center bg-white"
    >
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className={`relative transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
        }`}>
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100" />
          
          <div className="space-y-12 pl-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative group"
              >
                <div className="absolute -left-8.25 top-1.5 w-2 h-2 bg-black rounded-full z-10 group-hover:scale-150 transition-transform duration-300" />
                
                <div className="max-w-3xl">
                  <span className="font-mono text-slate-400 text-xs font-bold">{exp.period}</span>
                  
                  <h3 className="text-xl font-black text-black mt-1 mb-1">
                    {exp.title}
                  </h3>
                  
                  <div className="text-black font-bold text-xs uppercase tracking-wider mb-4">
                    {exp.company}
                  </div>
                  
                  <p className="text-slate-500 text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="list-disc list-outside ml-4 mb-4 space-y-1.5">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index} className="text-slate-500 text-sm leading-relaxed">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-0.5 text-[10px] font-bold uppercase tracking-tighter bg-slate-50 border border-slate-100 rounded-full text-slate-400 hover:text-black hover:border-black transition-all"
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
    </section>
  );
};
