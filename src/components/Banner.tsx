import React from 'react'
import BannerImg from "@/assets/ph1.png"
import Image from 'next/image';
import Container from './Container';

const Banner = () => {
  return (
    <section id= "#bannr">
      <Container>
      <div className='flex  items-center flex-col sm:flex-row  text-white'>
     <div className=' w-full sm:w-1/2  flex flex-col gap-5  '>
          <h2 className='text-2xl font-semibold'>Pranto Halder</h2>
          <p className='text-lg font-semibold'>Mern Stack Developer</p>
          <p className='text-base tracking-wide'>As a MERN (MongoDB, Express.js, React, Node.js) stack developer, you specialize in building web applications from the ground up. You work with the full stack of technologies, from the database (MongoDB) to the server (Node.js and Express.js) and the client (React). Your expertise lies in creating seamless, dynamic, and interactive web applications that deliver a great user experience. Your daily tasks involve writing server-side and client-side code, designing databases, and ensuring the smooth flow of data between all components of the application. Your skills play a crucial role in shaping the modern web development landscape.</p>
        <a href="/resume.pdf "target="_blank">
          <button className='w-32 h-10 bg-blue-900 text-zinc-200 hover:bg-black hover:text-white cursor-pointer duration-200 rounded-md font-bold'>
            Hire Me 
          </button>
          </a>
     </div>
     
     <div className=' w-full sm:w-1/2 flex items-center justify-center '>
          <Image src={BannerImg} alt='Banner image' className=' h-96 w-96 object-contain shadow-xl shadow-sky-950 '/>
     </div>
     
    </div>
 </Container>
    
    </section>
    
  );
};

export default Banner;