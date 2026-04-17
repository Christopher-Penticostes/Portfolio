'use client';

import { FlipWords } from '@/components/ui/flip-words';
import { IconArrowUpDashed } from '@tabler/icons-react';

export function Footer() {
  const words = [
    'modern?',
    'functional?',
    'user-friendly?',
    'reliable?',
    'better?',
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 100% at 50% 100%, black 0%, black 40%, transparent 75%)',
          maskImage:
            'radial-gradient(ellipse 70% 100% at 50% 100%, black 0%, black 40%, transparent 75%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 max-lg:pt-0">
        <div className="relative z-10 text-white w-full flex items-center justify-between max-md:flex-col">
          <p className="text-xs">
            © 2026 Christopher Penticostes. All rights reserved.
          </p>
          <div
            className="max-md:hidden flex items-center gap-4 hover:-translate-y-1 transition duration-400 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <p className="text-sm">Back to top</p>
            <button className="cursor-pointer p-2 text-black uppercase bg-white rounded-full transform  max-md:px-4 max-md:py-3">
              <IconArrowUpDashed size={20} />
            </button>
          </div>
        </div>
        <div className="relative z-10 my-20 max-md:my-10">
          <div className="text-2xl mx-auto font-medium text-gray-300 max-md:text-center max-md:text-lg">
            Want to build something
            <FlipWords words={words} />
          </div>
          <p className="text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text font-medium text-[120px]/34 max-lg:text-8xl max-md:text-[45px] max-md:text-center max-md:ml-0 -ml-1 uppercase">
            Let's Connect
          </p>
        </div>
        <div className="relative z-10 mt-10 flex items-center justify-between max-md:flex-col max-md:gap-4">
          <div className="flex gap-4">
            <button className="cursor-pointer px-8 py-3 text-xs text-white uppercase border-2 border-white bg-transparent rounded-full transform hover:-translate-y-1 transition duration-400 max-md:px-4 max-md:py-3">
              Facebook
            </button>
            <button className="cursor-pointer px-8 py-3 text-xs text-white uppercase border-2 border-white bg-transparent rounded-full transform hover:-translate-y-1 transition duration-400 max-md:px-4 max-md:py-3">
              LinkedIn
            </button>
            <button className="cursor-pointer px-8 py-3 text-xs text-white uppercase border-2 border-white bg-transparent rounded-full transform hover:-translate-y-1 transition duration-400 max-md:px-4 max-md:py-3">
              Github
            </button>
          </div>
          <p className="text-white text-sm">
            Built with Next.js & Aceternity UI
          </p>
        </div>
      </div>
    </div>
  );
}
