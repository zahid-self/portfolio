import React from 'react'

const Navigation = () => {
  return (
    <nav className='container mx-auto md:flex justify-between items-center h-[36px] flex-shrink-0 py-8 px-4'>
      <h1 className='text-[#FFF] font-poppins not-italic font-bold text-[20px] md:text-[30px] md:leading-[normal] mb-[10px] md:mb-[0px]'>Zahid Hasan</h1>
      <ul className='flex gap-[20px] md:gap-[50px] text-[12px] md:text-[15px] lg:text-[20px] uppercase'>
        <li><a href="#">About</a></li>
        <li><a href="#">What i do</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navigation