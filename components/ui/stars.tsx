'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

const generateStars = (number: number) =>
  new Array(number).fill(null).map((_, idx) => ({
    id: idx,
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.6 + 0.2,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }));

export const Stars = ({
  number = 80,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [stars, setStars] = useState<ReturnType<typeof generateStars>>([]);

  useEffect(() => {
    setStars(generateStars(number));
  }, [number]);

  // Render nothing until client has mounted — matches the server's empty output
  if (stars.length === 0) return null;

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
          animate={{ opacity: [star.opacity, 0.1, star.opacity] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
};
