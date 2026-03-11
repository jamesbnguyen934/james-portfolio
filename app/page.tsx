import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import GitHubStats from '@/components/github-stats'
import Portfolio from '@/components/portfolio'
import Education from '@/components/education'
import Certifications from '@/components/certifications'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <GitHubStats />
        <Portfolio />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
