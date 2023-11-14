import About from '@/components/About'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Skills from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-full h-[694px] flex-shrink-0' style={{ backgroundImage: 'linear-gradient(rgba(7, 0, 12, 0.5), rgba(7, 0, 12, 0.8)), url(./hero_bg.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <Navigation />
        <Hero />
      </div>
      <About />
      <Skills />
    </>
  )
}
