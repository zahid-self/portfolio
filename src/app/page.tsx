import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'


export default function Home() {
  return (
    <>
      <div className='w-full h-[694px] flex-shrink-0' style={{ backgroundImage: 'linear-gradient(rgba(7, 0, 12, 0.5), rgba(7, 0, 12, 0.8)), url(./hero_bg.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <Navigation />
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
