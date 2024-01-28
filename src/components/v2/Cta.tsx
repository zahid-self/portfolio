import Image from 'next/image'
import React from 'react'

const Cta = () => {
  return (
    <div className="container mx-auto py-[50px]">
      <div className='w-full flex flex-col md:flex-row gap-[34px] justify-between items-center'>
        <div className='flex flex-col items-start gap-[8px]'>
          <p className='text-[#FFF] text-[32px] md:text-[48px] font-bold leading-[normal]'>Let’s work together</p>
          <p className='text-[rgba(128,_128,_128,_0.50)] text-[15px] md:text-[20px] font-normal leading-[normal] tracking-[-0.34px]'>Want to discuss an opportunity to create something great? I’m ready when you are.</p>
        </div>
        <button className='flex w-full md:w-[auto] h-[60px] px-[16px] md:px-[32px] py-[16px] md:py-[16px] justify-center items-center gap-[8px] rounded-[9px] bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A] to-[#131313] md:bg-gradient-to-r md:from-[#1A1A1A] md:via-[#1A1A1A] md:to-[#131313] shadow-md md:shadow-none md:hover:shadow-md md:hover:bg-gradient-to-r md:hover:from-[#131313] md:hover:via-[#1A1A1A] md:hover:to-[#1A1A1A] inset-md:hover:box-shadow-none md:inset:box-shadow-none md:inset:hover:box-shadow-md'>
          <Image src={'/send.svg'} width={24} height={24} alt='Send' />
          Get in touch
        </button>

      </div>
    </div>
  )
}

export default Cta