import { projects } from '@/data/index';
import React from 'react';
import { PinContainer } from './ui/Pin';
import { FaLocationArrow } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';



const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A small selection of{' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-5 gap-x-24 gap-y-1 mt-5'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] h-[30vh] overflow-hidden lg:h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#3947b5]' />
                <img 
                  src={img}
                  alt={title}
                  className='z-10 absolute bottom-0 rounded-2xl h-full w-full'
                />
              </div>
              <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h2>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
                  <Link href={link} passHref>
                    <p className='flex items-center lg:text-xl md:text-xs text-sm text-purple'>
                      Check Live Site
                      <FaLocationArrow className='ml-3' color='#CBACF9' />
                    </p>
                  </Link>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
