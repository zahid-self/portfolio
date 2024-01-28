import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <section className='container mx-auto flex flex-shrink-0 py-[50px]'>
      <div className='inline-flex flex-col justify-center items-start gap-[40px]'>
        <h1 className='text-[#fff] text-[80px] font-extrabold leading-normal hidden lg:block intro'><span className='text-[#808080]'>I&apos;m</span> Zahid Hasan</h1>
        <h1 className='md:hidden text-[#fff] text-[45px] font-extrabold leading-normal intro-2'><span className='text-[#808080]'>Hi👋 <br /> I&apos;m</span> Zahid Hasan</h1>
        <div className='w-[358px] lg:w-[900px]'>
          <p className='text-[rgb(128,128,128)] text-[15px] lg:text-[24px] font-medium leading-[20px] lg:leading-[36px] about'>A front-end engineer and UI/UX designer helping startups turn their visions into a digital reality. I specialize in designing and building modern mobile and web-based apps.</p>
        </div>
        <div className='flex w-full flex-col lg:flex-row items-start gap-[17px]'>
          <button className='flex h-[60px] px-[32px] py-[16px] justify-center items-center gap-[8px] self-stretch rounded-[9px] bg-[linear-gradient(180deg,_#1A1A1A_0%,_#131313_100%)] [box-shadow:0px_7px_4px_0px_rgba(0,_0,_0,_0.15),_0px_2px_4px_0px_rgba(255,_255,_255,_0.08)_inset,_0px_1px_2px_0px_rgba(255,_255,_255,_0.02)_inset hover:text-white'>See my resume</button>
          <button className='flex h-[60px] px-[32px] py-[16px] justify-center items-center gap-[8px] self-stretch rounded-[9px] bg-[linear-gradient(180deg,_#1A1A1A_0%,_#131313_100%)] [box-shadow:0px_7px_4px_0px_rgba(0,_0,_0,_0.15),_0px_2px_4px_0px_rgba(255,_255,_255,_0.08)_inset,_0px_1px_2px_0px_rgba(255,_255,_255,_0.02)_inset'>Get in touch</button>
        </div>
      </div>
      <div className='w-[540px] h-[540px] flex-shrink-0'>
        <Image src={'/Circle-Portrait.png'} width={540} height={540} alt='Image' />
      </div>
    </section>
  )
}

export default Intro