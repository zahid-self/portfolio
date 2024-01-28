import Image from 'next/image'
import React from 'react'

const Tabbar = () => {
  return (
    <nav className='flex container mx-auto md:hidden'>
      <div className='flex w-full h-[60px] p-[16px] justify-between items-center flex-shrink-0 rounded-[12px] border-[1px] border-[rgba(39,38,44,0.38)] bg-[rgba(24,_24,_29,_0.60)] backdrop-filter backdrop-blur-[2px]'>
        <div className='flex justify-between items-end flex-[1_0_0]'>
          <div className='flex h-[40px] justify-center items-center flex-[1_0_0] hover:rounded-[12px] hover:bg-[rgba(255,_255,_255,_0.10)]'>
            <Image src={'/home.svg'} width={24} height={24} alt='Home' />
          </div>
          <div className='flex h-[40px] justify-center items-center flex-[1_0_0] hover:rounded-[12px] hover:bg-[rgba(255,_255,_255,_0.10)]'>
            <Image src={'/user.svg'} width={24} height={24} alt='Home' />
          </div>
          <div className='flex h-[40px] justify-center items-center flex-[1_0_0] hover:rounded-[12px] hover:bg-[rgba(255,_255,_255,_0.10)]'>
            <Image src={'/bag.svg'} width={24} height={24} alt='Home' />
          </div>
          <div className='flex h-[40px] justify-center items-center flex-[1_0_0] hover:rounded-[12px] hover:bg-[rgba(255,_255,_255,_0.10)]'>
            <Image src={'/pen.svg'} width={24} height={24} alt='Home' />
          </div>
          <div className='flex h-[40px] justify-center items-center flex-[1_0_0] hover:rounded-[12px] hover:bg-[rgba(255,_255,_255,_0.10)]'>
            <Image src={'/message.svg'} width={24} height={24} alt='Home' />
          </div>
          <div className='flex h-[40px] justify-center items-center flex-[1_0_0] hover:rounded-[12px] hover:bg-[rgba(255,_255,_255,_0.10)]'>
            <Image src={'/more.svg'} width={24} height={24} alt='Home' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Tabbar