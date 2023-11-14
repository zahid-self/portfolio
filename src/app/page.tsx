import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-full h-[694px] flex-shrink-0' style={{ backgroundImage: 'linear-gradient(rgba(7, 0, 12, 0.5), rgba(7, 0, 12, 0.8)), url(./hero_bg.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <Navigation />
        <Hero />
      </div>
      <div className="container mx-auto py-[106px]">
        <div className="flex justify-between">
          <div className='w-[525px] h-auto relative'>
            <Image className='z-50' src='/image_left.png' width={525} height={380} alt='' />
            <span className='absolute top-[30px] left-[30px] w-full h-full rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-[2px] border-[solid] border-[#FFF]] z-0'></span>
          </div>

          <div className='w-[580px]'>
            <p className='text-[#4C70EF] font-Poppins text-[24px] not-italic font-semibold leading-[normal] tracking-[2.4px] uppercase mb-[12px]'>about me</p>
            <h5 className='text-[#FFF] font-Poppins text-[36px] not-italic font-semibold leading-[normal] mb-[32px]'>I’m Zahid Hasan</h5>
            <p className='text-[#B0ADAD] font-Poppins text-[18px] not-italic font-normal leading-[normal] mb-[16px]'>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p className='text-[#B0ADAD] font-Poppins text-[18px] not-italic font-normal leading-[normal]'>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
