import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <>
      <div className='w-full h-[0px] bg-[rgba(255,_255,_255,_0.10)]'></div>
      <div className='container mx-auto py-[50px]'>
        <div className='flex w-[358px] md:w-full flex-col items-start gap-[32px]'>
          <div className='flex flex-col items-start gap-[8px]'>
            <p className='text-[rgba(128, 128, 128, 0.47)] text-[16px] font-semibold uppercase'>Who I am</p>
            <p className='text-[#808080] text-[15px] md:text-[18px] font-normal leading-[158%]'>I’m <span className='text-[#fff]'>Zahid Hasan</span> a multi-disciplinary front-end engineer and Full Stack Engineer based in Dhaka, Bangladesh 🇲🇦.</p>
          </div>
          <div className='flex flex-col items-start gap-[8px]'>
            <p className='text-[rgba(128, 128, 128, 0.47)] text-[16px] font-semibold uppercase'>What I do</p>
            <p className='text-[#808080] text-[15px] md:text-[18px] font-normal leading-[158%]'>With two years of invaluable experience in my role at Harmony Technology –– a tech company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice. It was an incredibly rewarding experience to develop applications that directly impact the lives of Moroccan citizens.</p>
          </div>
          <p className='text-[#808080] text-[15px] md:text-[18px] font-normal leading-[158%]'>Feel free to reach out via <span className='text-white'>e-mail</span>, or follow me on <span className='text-white'>Twitter</span>. Want to see where I’ve worked? Check out my <span className='text-white'>Resume</span>, or Connect with me on <span className='text-white'>LinkedIn</span>.</p>
          <p className='text-[#808080] text-[15px] md:text-[18px] font-normal leading-[158%]'>Let’s build something great</p>
          <Image src={'/signature.png'} width={500} height={200} alt='Zahid Hasan' />
        </div>
      </div>
    </>
  )
}

export default AboutMe