'use client';

import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/spotlight';
import Hero from '@/components/sections/hero';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { Profile } from '@/components/sections/profile';
import { Experience } from '@/components/sections/experience';

export default function Home() {
  return (
    <div>
      <div className="relative flex w-full overflow-hidden bg-black/96 antialiased md:items-center md:justify-center">
        <div
          className={cn(
            'pointer-events-none absolute inset-0 bg-size-[80px_80px] select-none',
            'bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]',
          )}
        />

        <Spotlight
          className="-top-40 left-0 md:-top-10 md:left-80 max-lg:top-10! max-lg:left-10!"
          fill="green"
        />

        <Hero />
      </div>
      <div className="bg-black/96 py-24">
        <p className="mx-auto max-w-lg pb-14 text-center text-6xl font-bold max-lg:text-4xl">
          <EncryptedText
            text="About Me"
            encryptedClassName="text-green-400"
            revealedClassName="dark:text-white text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text"
            revealDelayMs={150}
          />
        </p>
        <Profile />
      </div>
      <div className="bg-black/96 pt-10 pb-24">
        <p className="mx-auto max-w-lg pb-14 text-center text-6xl font-bold max-lg:text-4xl">
          <EncryptedText
            text="My Experience"
            encryptedClassName="text-green-400"
            revealedClassName="dark:text-white text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text"
            revealDelayMs={150}
          />
        </p>
        <Experience />
      </div>
    </div>
  );
}
