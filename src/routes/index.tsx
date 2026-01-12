import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useCallback } from 'react'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
import { BooksSection } from '../components/BooksSection'
import { SidebarNav } from '../components/SidebarNav'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [activeSection, setActiveSection] = useState('home')

  // Handle navigation click
  const handleNavigate = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Offset for sticky header/sidebar accounting
      const scrollPosition = window.scrollY + window.innerHeight / 3

      const sections = ['home', 'about', 'experience', 'projects', 'books']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen">
      {/* Left: Sticky Sidebar Navigation - hidden on Hero */}
      <SidebarNav 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        isVisible={activeSection !== 'home'}
      />
      
      {/* Right: Content - full width on Hero, margin on other sections if needed */}
      <main className={`flex-1 transition-all duration-500`}>
        <Hero />
        
        <div className={activeSection !== 'home' ? 'lg:ml-80' : ''}>
          <About />
          <Experience />
          <Projects />
          <BooksSection />
        </div>
      </main>
    </div>
  )
}
