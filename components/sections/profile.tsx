import { cn } from '@/lib/utils';
import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-7xl px-4 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
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
    title: 'Get in touch',
    className: 'md:row-start-2 bg-[url("/images/bg3.jpg")] bg-cover bg-top',
  },
  {
    title: 'Education',
    className: 'md:row-start-3 bg-[url("/images/bg2.jpg")] bg-cover bg-top',
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    className: 'md:col-span-2 md:row-span-2 md:row-start-2 ',
  },
];
