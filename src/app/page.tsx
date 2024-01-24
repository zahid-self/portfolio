import Intro from '@/components/v2/Intro'
import Navbar from '@/components/v2/Navbar'
import Works from '@/components/v2/Works'


export default function Home() {
  return (
    <>
      <main className='px-[15px] lg:px-[30px] xl:px-[45px]'>
        <Navbar />
        <Intro />
        <Works />
      </main>
    </>
  )
}
