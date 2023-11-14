import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className='flex justify-center items-center h-[630px]'>
        <div>
          <h1 className='text-[#FFF] text-[64px] not-italic font-semibold leading-normal'>I’m Zahid Hasan</h1>
          <p className='text-[#FFF] font-Poppins text-[24px] not-italic font-normal leading-normal'>Front-End Development - UI/UX Designer</p>
          <div className='w-full flex gap-[24px] justify-center mt-[24px]'>
            <div className='rounded-full h-10 w-10 bg-[#FFF] inline-flex justify-center items-center'>
              <Image src={'/facebook.svg'} width={10} height={10} alt='' />
            </div>
            <div className='rounded-full h-10 w-10 bg-[#FFF] inline-flex justify-center items-center'>
              <Image src={'/git.svg'} width={15} height={15} alt='' />
            </div>
            <div className='rounded-full h-10 w-10 bg-[#FFF] inline-flex justify-center items-center'>
              <Image src={'/insta.svg'} width={15} height={15} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero