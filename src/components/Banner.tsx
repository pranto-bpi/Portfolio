"use client";
import React from "react";
import BannerImg from "@/assets/ph1.png";
import Image from "next/image";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section id="#bannr">
      <Container>
        <div className="flex  items-center flex-col sm:flex-row  text-white">
          <div className=" w-full sm:w-1/2  flex flex-col gap-5  ">
             
             {/* Typewriter start */}
            <div className="text-4xl font-bold">
              <p className="font-semibold text-2xl capitalize ">Welcome to my world</p>
              <p className=" text-fuchsia-500 mt-2">
                Hi, Im <span className="text-violet-500">Pranto Halder</span>
              </p>
              <div className=" text-violet-500 flex  gap-2">
                <p>a</p>
              <Typewriter
                words={[
                  "Professional Coder.",
                  "Web Design.",
                  "Web Devlopment.",
                  "Mern Stack Devlopment.",
                  "Creating Article.",
                  "UI Design.",
                  "E-commerce Project.",
                ]}
                loop={9999}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              </div>
              
            </div>
              <div>
              <p>I am a Full stack web Developer working at arogga.com. I specialized in Reactjs, React Native, Nextjs, Nodejs, Sanity.io, MongoDB, Tailwindcss, Expo and many more.</p>
              </div>
            <a href="/resume.pdf " target="_blank" className="p-5" >
              <button className="w-32 h-10 bg-blue-900 text-zinc-200 hover:bg-violet-500 hover:text-white cursor-pointer duration-200 rounded-md font-bold ">
                Hire Me
              </button>
            </a>
          </div>

          <div className=" w-full sm:w-1/2 flex items-center justify-center ">
            <Image
              src={BannerImg}
              alt="Banner image"
              className=" h-96 w-96 object-contain shadow-xl shadow-sky-950 "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
