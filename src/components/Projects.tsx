import Image from 'next/image'
import React from 'react'
import SingleProject from './SingleProject'

const Projects = () => {
  return (
    <section className='container mx-auto mt-[60px] md:mt-[80px] mt-[106px] px-4'>
      <h5 className='text-[#4C70EF] font-Poppins text-[15px] md:text-[20px] text-[24px] not-italic font-semibold leading-[normal] tracking-[2.4px] text-center uppercase mb-[12x]'>portfolio</h5>
      <h3 className='text-[#FFF] font-Poppins text-[22px] md:text-[26px] text-[36px] not-italic font-semibold text-center leading-[normal] mb-[50px] uppercase'>latest projects</h3>
      <div className='md:flex lg:flex-wrap lg:justify-between 2xl:flex-nowrap 2xl:flex-nowrap gap-[20px]'>
        <SingleProject imageURL='/portfolio1.png' title='TutorBd' link='https://tutorbd.net/' />
        <SingleProject imageURL='/portfolio1.png' title='Buddy Backend(API)' link='#' />
        <SingleProject imageURL='/portfolio1.png' title='Bangladrama' link='http://web.bangladrama.mobi/' />
        <SingleProject imageURL='/portfolio1.png' title='Dugdugi' link='https://dugdugi.mobi/' />
      </div>
    </section>
  )
}

export default Projects