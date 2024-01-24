import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  projectIconPath: string,
  projectThumbPath: string,
  projectTitle: string,
  projectDescription: string,
  liveLink: string
}

const SingleProject: React.FC = () => {
  return (
    <div className='flex w-[358px] lg:w-full lg:pl-[40px] lg:justify-between items-start lg:items-center lg:gap-[4px] rounded-[32px] border-[1px] border-[solid] border-[#383737] bg-[rgba(21,_21,_21,_0.50)] backdrop-filter backdrop-blur-[10.5px]'>
      <div className='flex w-full flex-col gap-[20px] px-[24px] py-[32px]'>
        <div className='flex w-[70px] h-[70px] justify-center items-center'>
          <Image src={'/project-logo-1.svg'} width={70} height={70} alt='Project Title' />
        </div>
        <div className='w-[309px] xl:w-full flex flex-col gap-2'>
          <p className='text-[#FFF] font-[Inter] text-[20px] not-italic font-extrabold leading-[normal]'>
            Subbi –– The free subscriptions manager
          </p>
          <p className='text-[#808080] text-[15px] font-normal leading-[normal] tracking-[-0.135px]'>
            Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.
          </p>
        </div>
        <div className='flex justify-start items-center gap-[8px]'>
          <Link href={'#'} className='text-white text-[18px] font-medium leading-normal'>
            Live Link</Link>
          <Image src={'/arrow-right.svg'} width={24} height={24} alt='Project Title' />
        </div>
      </div>
      <div className='hidden 2xl:flex h-auto pl-[4.342px] pr-[52.083px] py-0 flex-col justify-end items-center flex-shrink-0'>
        <Image src={'/iPhone14.png'} width={300} height={638} alt='Project 1' />
      </div>
    </div>
  )
}

export default SingleProject