'use client';

import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/spotlight';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export default function Home() {
  const words = [
    {
      text: 'Build',
      className: 'text-white',
    },
    {
      text: 'awesome',
      className: 'text-white',
    },
    {
      text: 'apps',
      className: 'text-white',
    },
    {
      text: 'with',
      className: 'text-white',
    },
    {
      text: 'Aceternity.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <div>
      <div className="relative flex h-screen w-full overflow-hidden bg-black/96 antialiased md:items-center md:justify-center">
        <div
          className={cn(
            'pointer-events-none absolute inset-0 bg-size-[80px_80px] select-none',
            'bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]',
          )}
        />

        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Spotlight <br /> is the new trend.
          </h1>
          <TypewriterEffect words={words} />
          <p className="mx-auto mt-4 max-w-lg text-center font-normal text-neutral-300">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
        </div>
      </div>

      <div className="h-100">
        <p>Hello</p>
      </div>
    </div>
  );
}
