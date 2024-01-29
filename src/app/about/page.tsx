import Footer from '@/components/v2/Footer'
import AboutMe from '@/components/v2/AboutMe'
import BreadCrumb from '@/components/v2/BreadCrumb'
import Navbar from '@/components/v2/Navbar'
import React from 'react'

const About = () => {
  return (
    <>
      <Navbar />
      <BreadCrumb title='A little bit about me' subTitle='Who I am and what I do.' />
      <AboutMe />
      <Footer />
    </>
  )
}

export default About