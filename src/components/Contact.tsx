import React from 'react'

const Contact = () => {
  return (
    <section className='container mx-auto mt-[106px] flex justify-center'>
      <div className='w-[980px] h-[277px] flex-shrink-0 rounded-[12px] bg-[#292C36] flex flex-col justify-center items-center'>
        <p className='text-[#FFF] text-[32px] not-italic font-semibold leading-[normal] text-center'>
          Have any project in mind?
        </p>
        <button className='mt-4 inline-flex px-[18px] py-[10px] items-start gap-[10px] rounded-[6px] bg-[#558FFF]'>
          Contact Me
        </button>
      </div>
    </section>
  )
}

export default Contact