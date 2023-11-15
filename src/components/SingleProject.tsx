import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SingleProjectPrps {
  imageURL: string,
  title: string,
  link: string
}

const SingleProject = ({ imageURL, title, link }: SingleProjectPrps) => {
  return (
    <div className='rounded-tl-none rounded-br-[12px] rounded-tr-none rounded-bl-[12px] bg-[#292C36] mb-[20px] md:mb-[0px]'>
      <div className='w-full h-auto lg:w-[300px] lg:h-[203px] xl:w-[380px] xl:h-[283px]'>
        <Image src={imageURL} width={380} height={283} alt='' />
      </div>
      <div className='p-[10px] md:p-[12px] lg:p-[15px]'>
        <p className='text-[#FFF] text-[16px] md:text-[17px] lg:text-[20px] not-italic font-semibold leading-[normal] mb-[10px]'>{title}</p>
        <Link href={link} className='inline-flex text-[13px] px-[15px] py-[7px] lg:px-[18px] lg:py-[10px] items-start gap-[10px] rounded-[6px] bg-[#558FFF]'>View Live</Link>
      </div>
    </div>
  )
}

export default SingleProject