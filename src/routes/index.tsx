import { createFileRoute } from '@tanstack/react-router'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
import { BooksSection } from '../components/BooksSection'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Parallax pages={5}>
      <ParallaxLayer offset={0} speed={0.5}>
        <Hero />
      </ParallaxLayer>
      
      <ParallaxLayer offset={1} speed={1}>
        <About />
      </ParallaxLayer>
      
      <ParallaxLayer offset={2} speed={1}>
        <Experience />
      </ParallaxLayer>
      
      <ParallaxLayer offset={3} speed={1}>
        <Projects />
      </ParallaxLayer>
      
      <ParallaxLayer offset={4} speed={1}>
        <BooksSection />
      </ParallaxLayer>
    </Parallax>
  )
}
