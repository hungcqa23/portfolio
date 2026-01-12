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
      className="min-h-screen flex flex-col justify-center bg-white"
    >
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className={`transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
        }`}>

          
          
          <div className="space-y-0">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group py-10 flex flex-col md:flex-row gap-6 md:gap-10 transition-colors hover:bg-slate-50/50 -mx-6 px-6 md:-mx-0 md:px-0"
              >
                <div className="flex-1 space-y-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-black text-black group-hover:underline decoration-2 underline-offset-4">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] text-slate-400 font-bold tabular-nums">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-slate-500 text-base leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-5 pt-1">
                      {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-xs font-bold border-b-2 border-transparent hover:border-black transition-all flex items-center gap-1"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Repository
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-xs font-bold border-b-2 border-transparent hover:border-black transition-all flex items-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live View
                      </a>
                    )}
                  </div>
                </div>

                <div className="md:w-1/3 flex flex-wrap content-start gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="border border-black text-black px-10 py-2.5 text-sm font-medium transition-all duration-200 inline-flex items-center gap-2 hover:bg-slate-50"
            >
              Explore Full Archive
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
