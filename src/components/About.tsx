import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto mt-[60px] md:mt-[80px] lg:mt-[106px] px-4">
      <div className="md:flex justify-between gap-[50px]">
        <div className='w-full md:w-1/2 lg:w-[525px] h-auto relative mb-[50px] lg:gap-[50px]'>
          <Image className='z-50' src='/image_left.png' width={525} height={380} alt='' />
          <span className='absolute top-[30px] left-[30px] w-full h-full rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none border-[2px] border-[solid] border-[#FFF]] z-0'></span>
        </div>

        <div className='w-full md:w-1/2 lg:w-[580px]'>
          <p className='text-[#4C70EF] font-Poppins text-[16px] lg:text-[24px] not-italic font-semibold leading-[normal] tracking-[2.4px] uppercase mb-[12px]'>about me</p>
          <h5 className='text-[#FFF] font-Poppins text-[26px] lg:text-[36px] not-italic font-semibold leading-[normal] mb-[32px]'>I’m Zahid Hasan</h5>
          <p className='text-[#B0ADAD] font-Poppins text-[14px] lg:text-[18px] not-italic font-normal leading-[normal] mb-[16px]'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <p className='text-[#B0ADAD] font-Poppins text-[14px] lg:text-[18px] not-italic font-normal leading-[normal]'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About