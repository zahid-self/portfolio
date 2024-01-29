import React from 'react'

interface Props {
  title: string,
  subTitle: string
}

const BreadCrumb: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div className='container mx-auto py-[50px]'>
      <div className='inline-flex flex-col items-start gap-[8px]'>
        <h1 className='text-[#FFF] text-[48px] md:text-[80px] font-bold leading-normal w-[358px] md:w-full'>{title}</h1>
        <p className='text-[rgba(128,_128,_128,_0.47)] text-[16px] md:text-[24px] font-normal leading-[normal] w-[358px] md:w-full md:tracking-[-0.456px]'>{subTitle}</p>
      </div>
    </div>
  )
}

export default BreadCrumb