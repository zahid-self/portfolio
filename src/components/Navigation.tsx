import React from 'react'

const Navigation = () => {
  return (
    <nav className='container mx-auto flex justify-between h-[36px] flex-shrink-0 py-8'>
      <h1 className='text-[#FFF] font-poppins text-[24px] not-italic font-bold leading-[normal]'>Zahid Hasan</h1>
      <ul className='flex gap-[50px] uppercase'>
        <li><a href="#">About</a></li>
        <li><a href="#">What i do</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navigation