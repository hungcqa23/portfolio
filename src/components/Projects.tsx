import { Link } from '@tanstack/react-router';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { projects } from '../data/portfolio';
import React, { useRef, useEffect, useState } from 'react';

const featuredProjects = projects.slice(0, 3);

export const Projects: React.FC = () => {
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
      id="projects" 
      ref={sectionRef} 
      className="py-24 border-t border-slate-100 flex justify-center bg-white min-h-screen"
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
              03
            </span>
            <span className={`text-2xl font-bold tracking-tight block ml-2 transition-colors duration-700 delay-200 ${
              isVisible ? 'text-black' : 'text-slate-200'
            }`}>
              Project Collection
            </span>
          </div>

          {/* Right Column: Content */}
          <div className={`lg:col-span-9 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
          }`}>

            
            <div className="space-y-0 border-t border-slate-200">
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group py-12 border-b border-slate-200 flex flex-col md:flex-row gap-8 md:gap-12 transition-colors hover:bg-slate-50/50 -mx-6 px-6 md:-mx-0 md:px-0"
                >
                  <div className="flex-1 space-y-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-2xl font-black text-black group-hover:underline decoration-2 underline-offset-4">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-slate-400 font-bold tabular-nums">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-6 pt-2">
                       {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black text-sm font-bold border-b-2 border-transparent hover:border-black transition-all flex items-center gap-1"
                        >
                          <Github className="w-4 h-4" />
                          Repository
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black text-sm font-bold border-b-2 border-transparent hover:border-black transition-all flex items-center gap-1"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live View
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="md:w-1/3 flex flex-wrap content-start gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="border border-black text-black px-6 py-3 font-medium transition-all duration-200 inline-flex items-center gap-2 hover:bg-slate-50 px-12"
              >
                Explore Full Archive
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
