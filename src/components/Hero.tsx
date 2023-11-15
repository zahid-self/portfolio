import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <main className="container mx-auto px-4">
      <div className='flex justify-center items-center h-[630px]'>
        <div>
          <h1 className='text-[#FFF] not-italic font-semibold leading-[44px] md:leading-normal text-[40px] md:text-[54px] lg:text-[64px]'>I’m Zahid Hasan</h1>
          <p className='text-[#FFF] font-Poppins text-[18px] md:text-[20px] lg:text-[24px] not-italic font-normal leading-normal sub-heading'>Front-End Development - UI/UX Designer</p>
          <div className='w-full flex gap-[10px] md:gap-[24px] md:justify-center mt-[24px]'>
            <Link href={'#'} className='facebook_link'>
              <div className='rounded-full w-8 h-8 md:h-10 md:w-10 bg-[#FFF] inline-flex justify-center items-center'>
                <Image src={'/facebook.svg'} width={10} height={10} alt='' />
              </div>
            </Link>
            <Link href={'#'} className='git_link'>
              <div className='rounded-full w-8 h-8 md:h-10 md:w-10 bg-[#FFF] inline-flex justify-center items-center'>
                <Image src={'/git.svg'} width={15} height={15} alt='' />
              </div>
            </Link>
            <Link href={'#'} className='insta_link'>
              <div className='rounded-full w-8 h-8 md:h-10 md:w-10 bg-[#FFF] inline-flex justify-center items-center'>
                <Image src={'/insta.svg'} width={15} height={15} alt='' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero