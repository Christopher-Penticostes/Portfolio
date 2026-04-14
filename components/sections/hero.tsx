'use client';

import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { CometCard } from '@/components/ui/comet-card';
import MyPic from '@/public/images/MyPic.png';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { BiLogoGmail } from 'react-icons/bi';

export default function Hero() {
  const words = [
    {
      text: 'Passionate',
      className: 'text-white',
    },
    {
      text: 'Full',
      className: 'text-white',
    },
    {
      text: 'Stack',
      className: 'text-white',
    },
    {
      text: 'Developer',
      className: 'text-green-400 dark:text-green-400',
    },
  ];

  return (
    <div className="w-full flex items-center max-w-7xl">
      <div className="relative z-10 mx-auto w-full  p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 text-left bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-8xl font-bold text-transparent md:text-10xl">
          <span className="text-[30px] font-medium">Hello! I'm</span> <br />
          Christopher <br /> Penticostes
        </h1>
        <TypewriterEffect words={words} className="mt-5 text-left" />
        <div className="mt-15 flex gap-4">
          <button className="cursor-pointer px-8 py-3 bg-white text-black text-xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            View CV
          </button>
          <button className="cursor-pointer px-4 py-3 border-2 border-white bg-transparent text-white text-xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            <FaFacebookF size={20} />
          </button>
          <button className="cursor-pointer px-4 py-3 border border-white bg-transparent text-white text-xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            <FaLinkedinIn size={20} />
          </button>
          <button className="cursor-pointer px-4 py-3 border border-white bg-transparent text-white text-xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            <FaGithub size={20} />
          </button>
          <button className="cursor-pointer px-4 py-3 border border-white bg-transparent text-white text-xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            <BiLogoGmail size={20} />
          </button>
        </div>
      </div>
      <CometCard>
        <button
          type="button"
          className="my-10 flex w-90 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
        >
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-[3/4] w-full">
              <Image
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-80"
                alt="My Picture"
                src={MyPic}
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 6px 0px',
                  opacity: 1,
                }}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
            <div className="text-xs">My Picture...</div>
          </div>
        </button>
      </CometCard>
    </div>
  );
}
