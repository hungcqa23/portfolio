import React, { useState, useEffect } from 'react';
import { 
  Terminal, Code2, Database, Globe, Cpu, GitCommitHorizontal, 
  Server, Command, FolderGit2, 
  Zap, Layout, Smartphone, Cloud, Wifi, Settings, Lock, Star,
  ArrowRight
} from 'lucide-react';
import InteractiveParticles from './InteractiveParticles';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate, useTransform, type Variants } from 'framer-motion';

const floatingIcons = [
  { icon: <Terminal size={24} />, x: 10, y: 10, delay: 0 },
  { icon: <Globe size={24} />, x: -20, y: -15, delay: 0.2 },
  { icon: <Code2 size={24} />, x: 15, y: 25, delay: 0.4 },
  { icon: <Server size={24} />, x: -30, y: -40, delay: 0.6 },
  { icon: <GitCommitHorizontal size={24} />, x: 25, y: -18, delay: 0.8 },
  { icon: <Zap size={24} />, x: -15, y: -25, delay: 1.0 },
  { icon: <Layout size={24} />, x: 20, y: -23, delay: 1.2 },
  { icon: <Command size={24} />, x: -25, y: -40, delay: 1.4 },
  { icon: <Smartphone size={24} />, x: 30, y: -35, delay: 1.6 },
  { icon: <Database size={24} />, x: -10, y: -10, delay: 1.8 },
  { icon: <FolderGit2 size={24} />, x: 40, y: 12, delay: 2.0 },
  { icon: <Cpu size={24} />, x: -45, y: -45, delay: 2.2 },
  { icon: <Cloud size={24} />, x: 35, y: 15, delay: 2.4 },
  { icon: <Wifi size={24} />, x: -35, y: -30, delay: 2.6 },
  { icon: <Settings size={24} />, x: 15, y: -5, delay: 2.8 },
  { icon: <Lock size={24} />, x: -40, y: -45, delay: 3.0 },
  { icon: <Star size={24} />, x: 25, y: 40, delay: 3.2 },
];

export const Hero: React.FC = () => {
  const roles = ['Fullstack Developer', 'System Architect', 'Software Engineer'];
  const [currentRole, setCurrentRole] = useState(0);
  
  // Mouse position for spotlight and parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse values for spotlight
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  // Template for spotlight gradient
  const background = useMotionTemplate`radial-gradient(
    600px circle at ${smoothX}px ${smoothY}px, 
    rgba(79, 70, 229, 0.04), 
    transparent 80%
  )`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Text reveal animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 10 } 
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      
      {/* Interactive Spotlight Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background }}
      />

      {/* Subtle Static Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-linear-to-br from-indigo-100/60 to-transparent blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-linear-to-bl from-blue-100/60 to-transparent blur-[100px]" />
      </div>

      {/* Interactive Particles Layer */}
      <InteractiveParticles />

      <div className="w-full max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm tracking-widest uppercase text-slate-500 mb-4 block">
            <span className="text-indigo-600 font-bold">&gt;</span> FullStack Software Engineer
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-black leading-[0.9]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Array.from("An Hung . Dev").map((letter, index) => (
            <motion.span key={index} variants={childVariants} className="inline-block hover:text-indigo-600 transition-colors duration-300 cursor-default">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
        
        <div className="flex items-center gap-3 text-2xl md:text-4xl font-medium text-slate-400 mb-10 h-12">
           <span className="text-slate-300">I build</span>
           <div className="relative w-full">
             <AnimatePresence mode="wait">
               <motion.span
                 key={currentRole}
                 className="absolute left-0 text-black font-semibold truncate"
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -20, opacity: 0 }}
                 transition={{ duration: 0.3, ease: "easeInOut" }}
               >
                 {roles[currentRole]}
               </motion.span>
             </AnimatePresence>
           </div>
        </div>
        
        <motion.p 
          className="max-w-xl text-slate-600 text-lg mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Crafting scalable applications and robust APIs with a focus on backend engineering, performance optimization, and distributed architectures.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="group bg-black text-white px-8 py-3.5 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 rounded-full"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
             href="#about"
             className="group bg-white border border-slate-200 text-slate-700 px-8 py-3.5 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 hover:border-black hover:text-black rounded-full"
          >
             About Me
          </a>
        </motion.div>
      </div>

      {/* Floating Animated Icons with Parallax */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden h-64 z-1000 select-none flex items-end pb-8 pointer-events-none">
        <ul className="flex justify-between items-center w-full px-4">
          {floatingIcons.map((item, index) => {
            // Parallax effect based on mouse position (inverse movement for depth)
            const x = useTransform(smoothX, [0, window.innerWidth], [item.x, item.x * -1]);
            const y = useTransform(smoothY, [0, window.innerHeight], [item.y, item.y * -1]);
            
            return (
              <motion.li 
                key={index} 
                className="shrink-0 relative"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, type: "spring", stiffness: 50 }}
                style={{ x, y }}
              >
                <div 
                  className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-indigo-600 hover:scale-110 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer pointer-events-auto"
                >
                  {item.icon}
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

