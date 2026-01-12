import React, { useRef, useEffect, useState } from 'react';
import { skills } from '../data/portfolio';

export const About: React.FC = () => {
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

  const categories = [
    { name: 'Backend', skills: skills.filter(s => s.category === 'backend') },
    { name: 'Frontend', skills: skills.filter(s => s.category === 'frontend') },
    { name: 'Database', skills: skills.filter(s => s.category === 'database') },
    { name: 'Tools', skills: skills.filter(s => s.category === 'tools' || s.category === 'other') },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center bg-white border-t border-slate-100"
    >
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div 
          className={`space-y-16 transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
        }`}>
          {/* Intro Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6 leading-tight">
              Crafting robust <br />
              <span className="text-slate-400">digital systems.</span>
            </h2>
            
            <div className="space-y-4 text-slate-600 text-base mb-8 leading-relaxed">
              <p>
                I'm a developer passionate about crafting scalable, high-performance backend systems that blend robust engineering with clean architecture. My favorite work lies at the intersection of system design and optimization, creating architectures that not only perform well but are meticulously built for scalability and maintainability.
              </p>
              <p>
                Currently, I'm a FullStack Software Engineer at TuTiMi Corporation, where I contribute to the creation and maintenance of scalable web applications, ensuring our platform meets high standards of performance and user experience.
              </p>
              <p>
                In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios.
              </p>
              <p>
                In my spare time, I'm usually swimming, playing badminton, or exploring new technologies.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-100 rounded-xl overflow-x-auto font-mono shadow-sm">
              <div className="text-[10px] text-slate-300 mb-3 tracking-widest uppercase font-bold">// approach.ts</div>
              <div className="text-xs space-y-1.5">
                <div><span className="text-black font-bold">const</span> approach = {'{'}</div>
                <div className="pl-6 text-slate-500">
                  <span className="text-black font-semibold">reliability</span>: "guaranteed",<br />
                  <span className="text-black font-semibold">performance</span>: "optimized",<br />
                  <span className="text-black font-semibold">clarity</span>: "maximum"<br />
                </div>
                <div>{'}'};</div>
              </div>
            </div>
          </div>

          {/* Skills Section - Stacked below Intro */}
          <div>
            <h3 className="text-[10px] uppercase font-black tracking-widest text-black mb-6 border-b border-slate-100 pb-2">
              Technical Expertise
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((category) => (
                <div key={category.name} className="group">
                  <h4 className="text-black font-bold mb-3 text-xs uppercase tracking-wider">{category.name}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill.name} 
                        className="px-2.5 py-0.5 bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-500 rounded hover:bg-black hover:text-white transition-colors cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
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
