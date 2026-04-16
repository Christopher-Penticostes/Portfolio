'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { IconCopy, IconSchool, IconCheck } from '@tabler/icons-react';
import { NoiseBackground } from '@/components/ui/noise-background';
import { Stars } from '../ui/stars';
import Skills from './skills';

export function BentoGridSecondDemo() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('christopherpenticostes890@gmail.com');
    setCopied(true);
  };

  return (
    <BentoGrid className="max-w-7xl px-4 mx-auto md:auto-rows-[20rem]">
      {items({ copied, handleCopyEmail }).map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = ({
  copied,
  handleCopyEmail,
}: {
  copied: boolean;
  handleCopyEmail: () => void;
}) => [
  {
    title: (
      <>
        Developer building clean,
        <br /> reliable web apps,
        <br /> from collaborative development
        <br /> to seamless deployment.
      </>
    ),
    className:
      'md:col-span-2 text-3xl/10 flex justify-end bg-[url("/images/bg1.jpg")] bg-size-[auto_450px] bg-position-[center_left_12rem]',
  },
  {
    title: (
      <>
        <span className="font-medium text-gray-400">My Primary Tech Stack</span>
        <br />
        <span className="font-bold text-3xl/11">
          PHP, NEXT
          <br /> MySQL, PostgreSQL
        </span>
      </>
    ),
    className: 'md:col-start-3 bg-[url("/images/bg2.jpg")] bg-cover bg-top',
  },
  {
    title: (
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl mb-8 text-center">Do you want to hire me?</p>
        <div className="flex justify-center">
          <NoiseBackground
            containerClassName="w-fit p-[5px] rounded-md mx-auto"
            gradientColors={['#196485', '#57C785', '#EDDD53']}
            speed={0.3}
            animating={true}
          >
            <button
              className="flex items-center gap-2 h-full w-full cursor-pointer rounded-md bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-6 py-3 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
              onClick={handleCopyEmail}
              disabled={copied}
            >
              {copied ? <IconCheck size={20} /> : <IconCopy size={20} />}
              {copied ? 'Email is copied!' : 'Copy my email'}
            </button>
          </NoiseBackground>
        </div>
      </div>
    ),
    className:
      'md:col-start-1 md:row-start-2 bg-[url("/images/bg3.jpg")] bg-cover bg-top flex justify-center',
  },
  {
    title: (
      <>
        <p className="font-medium text-gray-400">College</p>
        <div className="text-3xl/10">
          <p>Cavite State University - Imus Campus</p>
        </div>
        <p className="mt-5 mb-5 text-lg/6 font-semibold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          Bachelor of Science in Information Technology
        </p>
        <p className="mb-5 text-lg/6 font-semibold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          Graduated with Cum Laude
        </p>
        <p className=" text-lg/6 font-semibold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          Sep 2021 - Aug 2025
        </p>

        <p className="font-medium text-gray-400 mt-10">Senior High School</p>
        <div className="text-3xl/10">
          <p>STI College Bacoor</p>
        </div>
        <p className="mt-5 mb-5 text-lg/6 font-semibold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          ICT in Mobile App and Web Development
        </p>
        <p className="mb-5 text-lg/6 font-semibold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          Graduated with Honors
        </p>
        <p className=" text-lg/6 font-semibold text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          Jun 2019 - Apr 2021
        </p>
      </>
    ),
    className:
      'md:row-span-2 md:col-start-1 md:row-start-3 bg-[url("/images/bg2.jpg")] bg-cover bg-top',
    icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: <p className="text-3xl text-center">Skills</p>,
    description: <Skills />,
    header: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Stars number={80} />
      </div>
    ),
    className:
      'md:col-span-2 md:row-span-3 md:col-start-2 md:row-start-2 relative overflow-hidden',
  },
];
