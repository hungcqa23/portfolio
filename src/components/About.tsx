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
      className="py-24 bg-slate-50 border-t border-slate-100 flex justify-center sticky top-0 z-10 min-h-screen"
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
              01
            </span>
            <span className={`text-2xl font-bold tracking-tight block ml-2 transition-colors duration-700 delay-200 ${
              isVisible ? 'text-black' : 'text-slate-200'
            }`}>
              Biography
            </span>
          </div>

          {/* Right Column: Content */}
          <div className={`lg:col-span-9 space-y-24 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
          }`}>
            {/* Intro Section */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight">
                Crafting robust <br />
                <span className="text-slate-400">digital systems.</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg mb-10 leading-relaxed">
                <p>
                  I’m a developer passionate about crafting scalable, high-performance backend systems that blend robust engineering with clean architecture. My favorite work lies at the intersection of system design and optimization, creating architectures that not only perform well but are meticulously built for scalability and maintainability.
                </p>
                <p>
                  Currently, I'm a FullStack Software Engineer at TuTiMi Corporation, where I contribute to the creation and maintenance of scalable web applications, ensuring our platform meets high standards of performance and user experience.
                </p>
                <p>
                  In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios.
                </p>
                <p>
                  In my spare time, I’m usually swimming, playing badminton, or exploring new technologies.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-100 rounded-xl overflow-x-auto font-mono shadow-sm">
                <div className="text-xs text-slate-300 mb-4 tracking-widest uppercase font-bold">// approach.ts</div>
                <div className="text-sm space-y-2">
                  <div><span className="text-black font-bold">const</span> approach = {'{' }</div>
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
              <h3 className="text-xs uppercase font-black tracking-widest text-black mb-8 border-b border-slate-100 pb-2">
                Technical Expertise
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {categories.map((category) => (
                  <div key={category.name} className="group">
                    <h4 className="text-black font-bold mb-4 text-sm uppercase tracking-wider">{category.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill.name} 
                          className="px-3 py-1 bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500 rounded hover:bg-black hover:text-white transition-colors cursor-default"
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
      </div>
    </section>
  );
};
