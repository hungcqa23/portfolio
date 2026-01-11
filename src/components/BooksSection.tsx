import { Link } from '@tanstack/react-router';
import { Badge } from './ui/badge';
import { books } from '../data/portfolio';
import React, { useRef, useEffect, useState } from 'react';

const featuredBooks = books.slice(0, 4);

export const BooksSection: React.FC = () => {
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
      id="books" 
      ref={sectionRef} 
      className="py-24 border-t border-slate-100 bg-white"
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
              04
            </span>
            <span className={`text-2xl font-bold tracking-tight block ml-2 transition-colors duration-700 delay-200 ${
              isVisible ? 'text-black' : 'text-slate-200'
            }`}>
              My Bookshelf
            </span>
          </div>

          {/* Right Column: Content */}
          <div className={`lg:col-span-9 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
          }`}>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-6">
              My Go-To Books
            </h2>
            <p className="text-slate-500 text-xl mb-16 leading-relaxed max-w-2xl">
              A curated collection of technical books that have profoundly influenced my engineering approach and architectural decisions.
            </p>
            
            <div className="space-y-0 border-t border-slate-200">
              {featuredBooks.map((book) => (
                <article
                  key={book.id}
                  className="group py-8 border-b border-slate-200 flex flex-col md:flex-row gap-8 md:gap-12 transition-colors hover:bg-slate-50/50 -mx-6 px-6 md:-mx-0 md:px-0"
                >
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-black">
                        {book.title}
                      </h3>
                      <span className="font-mono text-xs text-slate-400 font-bold tabular-nums">
                        {book.year}
                      </span>
                    </div>
                    
                    <p className="text-slate-500 mb-2">
                      By {book.author}
                    </p>
                  </div>

                  <div className="md:w-1/3 flex flex-wrap content-center justify-end">
                     <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        {book.category}
                      </Badge>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/books"
                className="border border-black text-black px-6 py-3 font-medium transition-all duration-200 inline-flex items-center gap-2 hover:bg-slate-50 px-12"
              >
                Explore Full Bookshelf
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
