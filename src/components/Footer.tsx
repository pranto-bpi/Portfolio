"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/footerWhite.png";
import { navigation, services } from "@/constants/Data";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <div className="bg-blue-950 text-zinc-200 mt-10">
      <Container className="grid grid-cols-1 md:cols-2 xl:grid-cols-4 gap-10 xl:place-items-center ">
       <div className="text-white border border-white px-4">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo Image "
              className="w-56 cursor-pointer "
            />
          </Link>
          <p className="text-sm mt-5 text-justify " >I'm a Full stack web Developer I specialized in Reactjs, React Native, Nextjs, Nodejs, Sanity.io, MongoDB, Tailwindcss, Expo and many more.</p>
          </div>
          <ul className=" flex flex-col items-center text-sm font-semibold uppercase gap-5 text-white">
          <p className="text-bold text-red-600">Q-uick Touch </p>
            {navigation.map((item)=> (
           <Link key={item.title} href={item.href}>
            <li className="hover:text-black cursor-pointer duration-300  relative group overflow-hidden  ">
                 {item.title}
                 <span
                   className=" h-[1px] w-full bg-green-400 inline-flex absolute left-0 bottom-0 
                         -translate-x-[100%]  group-hover:translate-x-0 transition-transform duration-300"
                 />
               </li>
               </Link>
              ))}
        
          </ul>
          <ul className=" flex flex-col items-center text-sm font-semibold uppercase gap-5 text-white   ">
              <p className="text-bold text-red-600">Our Services</p>
            {services.map((item)=> (
           
            <li key={item.title} className="hover:text-black cursor-pointer duration-300  relative group overflow-hidden  ">
                 {item.title}
                 <span
                   className=" h-[1px] w-full bg-green-400 inline-flex absolute left-0 bottom-0 
                         -translate-x-[100%]  group-hover:translate-x-0 transition-transform duration-300"
                 />
               </li>
               
              ))}
        
          </ul>
        
        
        <div>
          <p className="mb-2">Reach Me With</p>
          <ul className="grid grid-cols-2 gap-4">
           <a href="https://www.facebook.com/prantohalder772686" target="_blank">
           <li className="w-8 h-8 bg-zinc-300 text-zinc-700 rounded-full flex items-center justify-center hover:white hover:text-black cursor-pointer duration-300 ">
            <Facebook/>
            </li>
           </a>
           <a href="https://www.instagram.com/_its.pranto" target="_blank">
           <li className="w-8 h-8 bg-zinc-300 text-zinc-700 rounded-full flex items-center justify-center hover:white hover:text-black cursor-pointer duration-300 ">
            <Instagram/>
            </li>
           </a>
          </ul>

        </div>
      
      </Container>
    </div>
  );
}

