import Image from 'next/image'
import React from 'react'

const KnowMe = () => {
  return (
    <div className="container mx-auto">
      <div className="inline-flex w-full flex-col items-start gap-[32px] py-[100px]">
        <h1 className='text-white font-bold leading-normal text-[48px]'>Get to know me</h1>
        <div className='flex w-full flex-col items-start gap-[16px]'>
          <div className='flex flex-col md:flex-row w-full items-start gap-[16px]'>
            <div className='w-full md:w-[33.33%]  h-[504px] flex-shrink-0 rounded-[32px] bg-[#151515] p-10'>
              <p className='overflow-hidden text-[#FFF] text-center overflow-ellipsis text-[32px] font-extrabold leading-[normal]'>About me</p>
              <p className='overflow-hidden text-[#808080] text-center overflow-ellipsis text-[16px] font-normal leading-[normal]'>Who I am and what I do</p>
              <div className='flex w-full h-[365px] justify-center items-center flex-shrink-0'>
                <Image src={'/avatar.png'} width={223} height={263} alt='Zahid Hasan' />
              </div>
            </div>
            <div className='w-full md:w-[33.33%] h-[504px] flex-shrink-0 rounded-[32px] bg-[#151515] p-10'>
              <p className='overflow-hidden text-[#FFF] text-center overflow-ellipsis text-[32px] font-extrabold leading-[normal]'>Notebook</p>
              <p className='overflow-hidden text-[#808080] text-center overflow-ellipsis text-[16px] font-normal leading-[normal]'>My thoughts, insights, and reflections</p>
              <div className='flex w-full h-[365px] justify-center items-center flex-shrink-0'>
                <Image src={'/Notebook.png'} width={450} height={300} alt='Zahid Hasan' />
              </div>
            </div>
            <div className='w-full md:w-[33.33%] h-[504px] flex-shrink-0 rounded-[32px] bg-[#151515] p-10'>
              <p className='overflow-hidden text-[#FFF] text-center overflow-ellipsis text-[32px] font-extrabold leading-[normal]'>Bookshelf</p>
              <p className='overflow-hidden text-[#808080] text-center overflow-ellipsis text-[16px] font-normal leading-[normal]'>Books and pieces of wisdom I’ve enjoyed reading</p>
              <div className='flex w-full h-[365px] justify-center items-center flex-shrink-0'>
                <Image src={'/Bookshelf.png'} width={450} height={300} alt='Zahid Hasan' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowMe