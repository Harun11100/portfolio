import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { ImGift } from 'react-icons/im'
import Image from 'next/image'

const Footer = () => {
  return (
   <footer className='w-full mb-[100px] pb-10 md:mb-5' id="contact">
     {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
      <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
     </div> */}
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
            Ready to take <span className='text-purple'> your </span> digital presence to the next level ?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
           Looking forward to new opportunities and collaborations.
         </p>
     
        <a href="Mailto: harun20011112@gmail.com">
         <MagicButton
         title="Let's get in touch"
         icon={<FaLocationArrow/>}
         position="right"
         />
         

        </a>
      </div>
      <div className='flex items-center justify-center md:gap-3 gap-7'>
      {
            socialMedia.map((profile)=><div key={profile.id} className='w-10 h-10 mt-20 rounded-lg cursor-pointer flex justify-center items-center backdrop:filter backdrop-blur-lg saturate-150 bg-opacity-55 bg-black-200'>
                  <a href={profile.link}>
                        <Image
                        src={profile.img}
                        alt={profile.img} width={20} height={20}/></a>
                  
            </div>)
      }

      </div>
      <div className='flex mt-5  md:flex-row flex-col justify-center items-center'>
            <p className='md:text-base text-sm md:font-normal font-light text-center'>
                  Copyright &copy; 2024 Md Harun Or Rashid
            </p>
      </div>
   </footer>
  )
}

export default Footer