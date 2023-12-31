import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section className='container mx-auto mt-[106px]'>
      <h5 className='text-[#4C70EF] font-Poppins text-[24px] not-italic font-semibold leading-[normal] tracking-[2.4px] text-center uppercase mb-[12x]'>portfolio</h5>
      <h3 className='text-[#FFF] font-Poppins text-[36px] not-italic font-semibold text-center leading-[normal] mb-[50px] uppercase'>latest projects</h3>
      <div className='flex justify-between gap-[20px]'>
        <div className='rounded-tl-none rounded-br-[12px] rounded-tr-none rounded-bl-[12px] bg-[#292C36]'>
          <Image src={'/portfolio1.png'} width={380} height={283} alt='' />
          <div className='p-[15px]'>
            <p className='text-[#FFF] text-[20px] not-italic font-semibold leading-[normal] mb-[10px]'>Need Food App Design</p>
            <button className='inline-flex px-[18px] py-[10px] items-start gap-[10px] rounded-[6px] bg-[#558FFF]'>View Live</button>
          </div>
        </div>
        <div className='rounded-tl-none rounded-br-[12px] rounded-tr-none rounded-bl-[12px] bg-[#292C36]'>
          <Image src={'/portfolio1.png'} width={380} height={283} alt='' />
          <div className='p-[15px]'>
            <p className='text-[#FFF] text-[20px] not-italic font-semibold leading-[normal] mb-[10px]'>Need Food App Design</p>
            <button className='inline-flex px-[18px] py-[10px] items-start gap-[10px] rounded-[6px] bg-[#558FFF]'>View Live</button>
          </div>
        </div>
        <div className='rounded-tl-none rounded-br-[12px] rounded-tr-none rounded-bl-[12px] bg-[#292C36]'>
          <Image src={'/portfolio1.png'} width={380} height={283} alt='' />
          <div className='p-[15px]'>
            <p className='text-[#FFF] text-[20px] not-italic font-semibold leading-[normal] mb-[10px]'>Need Food App Design</p>
            <button className='inline-flex px-[18px] py-[10px] items-start gap-[10px] rounded-[6px] bg-[#558FFF]'>View Live</button>
          </div>
        </div>
        <div className='rounded-tl-none rounded-br-[12px] rounded-tr-none rounded-bl-[12px] bg-[#292C36]'>
          <Image src={'/portfolio1.png'} width={380} height={283} alt='' />
          <div className='p-[15px]'>
            <p className='text-[#FFF] text-[20px] not-italic font-semibold leading-[normal] mb-[10px]'>Need Food App Design</p>
            <button className='inline-flex px-[18px] py-[10px] items-start gap-[10px] rounded-[6px] bg-[#558FFF]'>View Live</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects