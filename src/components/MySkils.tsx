'use client'
import React from 'react'
import Container from './Container'
import Title from './Title'
import { myskils } from '@/constants/Data'
import Link from 'next/link'

const MySkils = () => {
  return (
    <section id='/myskils' >
    <Container className=" rounded-md mt-10"> 
  <Title title='My Skils' className='text-white'/> 
  <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mt-10  '>
     { myskils.map((item)=>(
          <div key={item?.title}
           className=' p-5 rounded-md shadow-xl hover:shadow-none bg-blue-950'>
               <div className='flex flex-col items-center  justify-between gap-2 '>
                   
               <Link href={item.href} target={item.terget} >
               <p className=' text-zinc-400 text-xl font-bold mb-4 cursor-pointer'> {item?.title}</p> 
               </Link>
                 
               </div>
          </div>
     ))}
  </div>
  </Container>
  </section>
  )
}

export default MySkils