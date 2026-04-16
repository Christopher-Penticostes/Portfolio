'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React, { useMemo } from 'react';

export const Stars = ({
  number = 80,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const stars = useMemo(
    () =>
      new Array(number).fill(true).map((_, idx) => ({
        id: idx,
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        size: Math.random() * 2 + 1, // between 1px and 3px
        opacity: Math.random() * 0.6 + 0.2, // between 0.2 and 0.8
        delay: Math.random() * 4 + 's',
        duration: Math.random() * 3 + 2 + 's',
      })),
    [number],
  );

  return (
    <>
      {stars.map((star) => (
        <motion.span
          key={'star' + star.id}
          className={cn('absolute rounded-full bg-white', className)}
          style={{
            top: star.top,
            left: star.left,
            width: star.size + 'px',
            height: star.size + 'px',
          }}
          animate={{ opacity: [star.opacity, 0.1, star.opacity] }} // twinkle effect
          transition={{
            duration: parseFloat(star.duration),
            delay: parseFloat(star.delay),
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
};
