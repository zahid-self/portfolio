import Footer from '@/components/v2/Footer'
import Cta from '@/components/v2/Cta'
import Intro from '@/components/v2/Intro'
import KnowMe from '@/components/v2/KnowMe'
import Navbar from '@/components/v2/Navbar'
import Works from '@/components/v2/Works'
import Tabbar from '@/components/v2/Tabbar'


export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Works />
      <KnowMe />
      <Cta />
      <Footer />
      <Tabbar />
    </>
  )
}
