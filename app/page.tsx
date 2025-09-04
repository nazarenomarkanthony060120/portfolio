import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientWrapper>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ClientWrapper>
    </main>
  )
}
