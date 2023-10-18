import React from 'react'
import Container from './Container'
import Title from './Title'
import { experiences } from '@/constants/Data'
import Image from 'next/image'

const MyExperience = () => {
  return (
     <section id='/myexperience' >
     <Container className=" rounded-md mt-10"> 
   <Title title='My Experience' className='text-white'/> 
   <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 mt-10  '>
      { experiences.map((item)=>(
           <div key={item?.title}
            className=' p-5 rounded-md shadow-xl hover:shadow-none bg-blue-950'>
                <div className='flex flex-col items-center  justify-between gap-2 '>
                    {<span  className='text-designColor animate-bounce'>{<item.icon/>}</span>}
                  <p className=' text-zinc-400 text-xl font-bold mb-4'> {item?.title}</p> 
                  <p className='text-zinc-400 tracking-wide  text-justify'>{item?.description}</p>
                </div>
           </div>
      ))}
   </div>
   </Container>
   <Container>
    <hr className='mt-5' />
    </Container>
   </section>
  )
}

export default MyExperience