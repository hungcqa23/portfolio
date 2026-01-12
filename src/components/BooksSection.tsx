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
      className="min-h-screen flex flex-col justify-center bg-white"
    >
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className={`transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
        }`}>
          <h2 className="text-3xl md:text-5xl font-black text-black leading-tight mb-4">
            My Go-To Books
          </h2>
          <p className="text-slate-500 text-base mb-12 leading-relaxed max-w-2xl">
            A curated collection of technical books that have profoundly influenced my engineering approach and architectural decisions.
          </p>
          
          <div className="space-y-0">
            {featuredBooks.map((book) => (
              <article
                key={book.id}
                className="group py-6 flex flex-col md:flex-row gap-6 md:gap-10 transition-colors hover:bg-slate-50/50 -mx-6 px-6 md:-mx-0 md:px-0"
              >
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h3 className="text-lg font-bold text-black">
                      {book.title}
                    </h3>
                    <span className="font-mono text-[10px] text-slate-400 font-bold tabular-nums">
                      {book.year}
                    </span>
                  </div>
                  
                  <p className="text-slate-500 text-sm mb-1">
                    By {book.author}
                  </p>
                </div>

                <div className="md:w-1/3 flex flex-wrap content-center justify-end">
                    <Badge
                      variant="secondary"
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      {book.category}
                    </Badge>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/books"
              className="border border-black text-black px-10 py-2.5 text-sm font-medium transition-all duration-200 inline-flex items-center gap-2 hover:bg-slate-50"
            >
              Explore Full Bookshelf
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
