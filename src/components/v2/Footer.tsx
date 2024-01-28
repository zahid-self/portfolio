import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-[50px]'>
      <div className='w-full h-[1px] bg-[rgba(255,_255,_255,_0.10)]'></div>
      <div className="container mx-auto flex-shrink-0">
        <div className='flex flex-col-reverse md:flex-row w-full gap-[40px] md:gap-0 px-0 py-[32px] md:py-[42px] justify-between items-start md:items-center flex-shrink-0'>
          <div className='flex flex-col items-start gap-[16px] md:gap-[93px]'>
            <div className='w-[178px] h-[100px]'>
              <div className='w-[92px] h-[60px] flex-shrink-0'>
                <Image src={'/footer-logo.svg'} width={92} height={60} alt='Logo' />
              </div>
            </div>
            <p className='text-[rgba(128,_128,_128,_0.50)] text-[14px] font-normal leading-[normal] tracking-[-0.084px]'>© 2024 Zahid Hasan. All Rights Reserved.</p>
          </div>
          <div className='flex flex-col md:flex-row items-start gap-[40px] md:gap-[120px]'>
            <div className='flex flex-col items-start gap-[32px]'>
              <p className='text-[#FFF] text-[16px] font-bold leading-[normal]'>Links</p>
              <div className='flex flex-col items-start gap-[16px]'>
                <p className='text-[#C5C5C5] text-[16px] font-normal leading-normal'>About</p>
                <p className='text-[#C5C5C5] text-[16px] font-normal leading-normal'>Work</p>
                <p className='text-[#C5C5C5] text-[16px] font-normal leading-normal'>Tech Stack</p>
                <p className='text-[#C5C5C5] text-[16px] font-normal leading-normal'>Contact</p>
              </div>
            </div>
            <div className='flex flex-col items-start gap-[32px]'>
              <p className='text-[#FFF] text-[16px] font-bold leading-[normal]'>Elsewhere</p>
              <div className='flex flex-col items-start gap-[16px]'>
                <p className='text-[#C5C5C5] text-[16px] font-normal leading-normal'>Linkedin</p>
                <p className='text-[#C5C5C5] text-[16px] font-normal leading-normal'>Email</p>
                <p className='text-[#C5C5C5] text-[16px] font-normal leading-normal'>Github</p>
                <p className='text-[#C5C5C5] text-[16px] font-normal leading-normal'>Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer