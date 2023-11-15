import React from 'react'

const Contact = () => {
  return (
    <section className='container mx-auto mt-[106px] flex justify-center px-4'>
      <div className='w-full lg:w-[980px] h-[277px] flex-shrink-0 rounded-[12px] bg-[#292C36] flex flex-col justify-center items-center'>
        <p className='text-[#FFF] text-[16px] md:text-[25px] lg:text-[32px] not-italic font-semibold leading-[normal] text-center'>
          Have any project in mind?
        </p>
        <button className='mt-4 inline-flex text-[12px] px-[12px] py-[4px] lg:text[18px] lg:text-[18px] lg:py-[10px] items-start gap-[10px] rounded-[6px] bg-[#558FFF]'>
          Contact Me
        </button>
      </div>
    </section>
  )
}

export default Contact