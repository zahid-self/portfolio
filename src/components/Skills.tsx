import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <section className='container mx-auto mt-[60px] md:mt-[80px] lg:mt-[106px] px-4'>
      <h5 className='text-[#4C70EF] font-Poppins text-[24px] not-italic font-semibold leading-[normal] tracking-[2.4px] text-center uppercase mb-[12x]'>what i do</h5>
      <h3 className='text-[#FFF] font-Poppins text-[26px] lg:text-[36px] not-italic font-semibold text-center leading-[normal] mb-[50px]'>SPECIALIZING IN</h3>
      <div className='md:flex md:justify-center gap-[20px] flex-col md:flex-row'>
        <div className='w-full md:w-[350px] lg:w-[480px] lg:w-[480px] h-full flex-shrink-0 rounded-[12px] bg-[#292C36] p-[30px] lg:p-[50px] mb-4 md:mb-0'>
          <div className="flex gap-[10px] mb-[20px]">
            <div className='flex rounded-[8px] bg-[#38405A] w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] justify-center items-center p-[5px] lg:p-[0px]'>
              <Image width={42} height={42} src={'/ui_ux.svg'} alt='' />
            </div>
            <p className='text-[#FFF] font-Poppins text-[16px] lg:text-[24px] not-italic font-semibold leading-[normal] flex items-center'>
              UI/UX Designer
            </p>
          </div>
          <p className='text-[#B0ADAD] text-[12px] lg:text-[18px] not-italic font-normal leading-[normal]'>
            Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis
          </p>
        </div>
        <div className='w-full md:w-[350px] lg:w-[480px] h-full flex-shrink-0 rounded-[12px] bg-[#292C36] p-[30px] lg:p-[50px]'>
          <div className="flex gap-[10px] mb-[20px]">
            <div className='flex rounded-[8px] bg-[#38405A] w-[35px] h-[35px] lg:w-[60px] lg:h-[60px] justify-center items-center p-[5px] lg:p-[0px]'>
              <Image width={42} height={42} src={'/development.svg'} alt='' />
            </div>
            <p className='text-[#FFF] font-Poppins text-[16px] lg:text-[24px] not-italic font-semibold leading-[normal] flex items-center'>
              Front-end Development
            </p>
          </div>
          <p className='text-[#B0ADAD] text-[12px] lg:text-[18px] not-italic font-normal leading-[normal]'>
            Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas sed blanditiis
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills