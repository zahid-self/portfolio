import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import SingleProject from './SingleProject';

const Works: React.FC = () => {
  return (
    <div className="container mx-auto py-[50px]">
      <div className='flex flex-col items-start gap-[16px]'>
        <p className='text-white text-[32px] font-bold leading-normal'>Selected Works</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-4'>
          <SingleProject />
          <SingleProject />
          <SingleProject />
        </div>
      </div>
    </div>
  )
}

export default Works;