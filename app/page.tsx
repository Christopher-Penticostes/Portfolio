'use client';

import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/spotlight';
import Hero from '@/components/sections/hero';
import { Skills } from '@/components/sections/skillsCard';

export default function Home() {
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

        <Hero />
      </div>
      <div className="bg-black/96">
        <Skills />
      </div>
    </div>
  );
}
