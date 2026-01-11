import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
import { BooksSection } from '../components/BooksSection'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <BooksSection />
    </main>
  )
}
