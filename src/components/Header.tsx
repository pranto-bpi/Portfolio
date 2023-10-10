'use client'
import logo from "@/assets/logo2.png";
import { navigation } from "@/constants/Data";

import Image from "next/image";
import Link from "next/link";



const Header = () => {
  return (
    <div className=" w-full h-20 bg-designColor/60">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between">
          <Link href={"/"}>
        <Image src={logo} alt="Logo Image " className="w-24 cursor-pointer" />
          </Link>

        <ul className=" flex items-center text-sm font-semibold uppercase gap-5 text-zinc-600">

          {
              navigation.map((item)=> (
               <Link key={item.title} href={item.href}>
               <li className="hover:text-black cursor-pointer duration-300  relative group overflow-hidden  ">
                 {item.title}
                 <span
                   className=" h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 
                         -translate-x-[100%]  group-hover:translate-x-0 transition-transform duration-300"
                 />
               </li>
               </Link>
              ))
          }
        
        </ul>
      </div>
    </div>
  );
};

export default Header;
