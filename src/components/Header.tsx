'use client'
import logo from "@/assets/pranto.png";
import { navigation } from "@/constants/Data";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu,X } from "lucide-react"
import { useStyleRegistry } from "styled-jsx";
import { usePathname, useRouter } from "next/navigation";


const Header = () => {
  const [show,setShow] = useState(false);
  const pathname =usePathname();
  //6 no video start 
  const router = useRouter();
  console.log(router);
  
  
  return (
    <div className=" w-full h-20 bg-blue-950 sticky top-0 z-50 ">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0 relative">
          <Link href={"/"}>
        <Image src={logo} alt="Logo Image " className="w-72 cursor-pointer" />
          </Link>

        <ul className="hidden md:flex items-center text-sm font-semibold uppercase gap-5 text-zinc-300">

          {
              navigation.map((item)=> (
               <Link key={item.title} href={item.href} target={item?.target}>
               <li className={`hover:text-green-300 cursor-pointer duration-300  relative group overflow-hidden ${pathname===item.href && "text-green-300"}`}>
                 {item.title}
                 <span
                   className={ `h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 
                   -translate-x-[100%]  group-hover:translate-x-0 transition-transform duration-300 ${pathname === item.href && "translate-x-0" } `}
                 />
               </li>
               </Link>
              ))
          }
        
        </ul>
        <div onClick={()=> setShow(!show)} className="inline-flex md:hidden cursor-pointer text-600 hover:text-black duration-200">
          {
            show ? <X/>:<Menu/>
          }
        </div>
        {show && (
          <ul className="absolute right-0 px-10 py-6 top-20 z-10  inline-flex md:hidden flex-col bg-black items-start text-sm uppercase gap-5 font-semibold text-zinc-200">
            {navigation.map((item) => (
              <Link key={item.title} href={item.href} className="relative group overflow-hidden">
                <li className="hover:text-white cursor-pointer duration-300 ">
                  {item.title}
                  <span className="h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300" />
                </li>
              </Link>
            ))}
          </ul>
        )}
      {/* <p className="bg-black text-gray-500 hover:text-white duration-200 px-4 py-1">test</p> */}
      </div>
    </div>
  );
};

export default Header;
