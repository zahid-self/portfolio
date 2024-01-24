import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

const Navbar = () => {
  return (
    <div className='container mx-auto justify-between h-[181px]'>
      <div className='flex w-full h-[60px] p-[16px] justify-between items-center flex-shrink-0 rounded-[12px] bg-[rgba(24,_24,_29,_0.30)] backdrop-filter backdrop-blur-[2px]'>
        <div className='flex items-center gap-[40px]'>
          <h1 className='w-[46px] h-[30px] flex-shrink-0'>Z</h1>
          <div className='hidden lg:flex items-center gap-[40px]'>
            <Link className='text-[#C5C5C5] text-[16px] not-italic font-medium leading-[normal]' href={'#'}>About</Link>
            <Link className='text-[#C5C5C5] text-[16px] not-italic font-medium leading-[normal]' href={'#'}>Work</Link>
            <Link className='text-[#C5C5C5] text-[16px] not-italic font-medium leading-[normal]' href={'#'}>Notebook</Link>
            <Link className='text-[#C5C5C5] text-[16px] not-italic font-medium leading-[normal]' href={'#'}>Contact</Link>
            <Link className='text-[#C5C5C5] text-[16px] not-italic font-medium leading-[normal]' href={'#'}>More</Link>
          </div>
        </div>
        <div className='hidden lg:flex items-center justify-center gap-[24px]'>
          <div className='flex w-[24px] h-[24px] flex-col justify-center items-center gap-[12px]'>
            <Image src={'./linkedin.svg'} width={22} height={22} alt='Linkedin' />
          </div>
          <div className='flex w-[24px] h-[24px] flex-col justify-center items-center gap-[12px]'>
            <Image src={'./x.svg'} width={22} height={22} alt='Linkedin' />
          </div>
          <div className='flex w-[24px] h-[24px] flex-col justify-center items-center gap-[12px]'>
            <Image src={'./github.svg'} width={22} height={22} alt='Linkedin' />
          </div>
          <div className='flex w-[24px] h-[24px] flex-col justify-center items-center gap-[12px]'>
            <Image src={'./linkedin.svg'} width={22} height={22} alt='Linkedin' />
          </div>
          <div className='w-[1px] h-[24px] bg-[rgba(255,_255,_255,_0.25)]'></div>
          <div className='flex w-[24px] h-[24px] flex-col justify-center items-center gap-[12px]'>
            <Image src={'./sun.svg'} width={22} height={22} alt='Linkedin' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar