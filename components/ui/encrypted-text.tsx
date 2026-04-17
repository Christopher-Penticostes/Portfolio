'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

type EncryptedTextProps = {
  text: string;
  className?: string;
  revealDelayMs?: number;
  charset?: string;
  flipDelayMs?: number;
  encryptedClassName?: string;
  revealedClassName?: string;
};

const DEFAULT_CHARSET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?';

function generateRandomCharacter(charset: string): string {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

function generateGibberishPreservingSpaces(
  original: string,
  charset: string,
): string {
  if (!original) return '';
  let result = '';
  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    result += ch === ' ' ? ' ' : generateRandomCharacter(charset);
  }
  return result;
}

type AnimationState = {
  revealCount: number;
  scrambleChars: string[];
};

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  // isMounted flips only on client — server always renders plain text
  const isMountedRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  // No Math.random() in initial state — empty array matches server output exactly
  const [animState, setAnimState] = useState<AnimationState>({
    revealCount: 0,
    scrambleChars: [],
  });

  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const lastFlipTimeRef = useRef<number>(0);

  useEffect(() => {
    isMountedRef.current = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Seed scramble chars whenever text/charset change (client only)
  useEffect(() => {
    if (!isMountedRef.current) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimState({
      revealCount: 0,
      scrambleChars: generateGibberishPreservingSpaces(text, charset).split(''),
    });
  }, [text, charset]);

  // Run animation once in view and mounted
  useEffect(() => {
    if (!isInView || !isMounted) return;

    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;

    let isCancelled = false;

    const update = (now: number) => {
      if (isCancelled) return;

      const elapsedMs = now - startTimeRef.current;
      const totalLength = text.length;
      const currentRevealCount = Math.min(
        totalLength,
        Math.floor(elapsedMs / Math.max(1, revealDelayMs)),
      );

      const timeSinceLastFlip = now - lastFlipTimeRef.current;
      const shouldFlip = timeSinceLastFlip >= Math.max(0, flipDelayMs);

      setAnimState((prev) => {
        const nextChars = shouldFlip
          ? prev.scrambleChars.map((ch, index) => {
              if (index < currentRevealCount) return ch;
              return text[index] === ' '
                ? ' '
                : generateRandomCharacter(charset);
            })
          : prev.scrambleChars;

        if (shouldFlip) lastFlipTimeRef.current = now;

        return { revealCount: currentRevealCount, scrambleChars: nextChars };
      });

      if (currentRevealCount < totalLength) {
        animationFrameRef.current = requestAnimationFrame(update);
      }
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      isCancelled = true;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, isMounted, text, revealDelayMs, charset, flipDelayMs]);

  if (!text) return null;

  // Before hydration: render plain text so server and client match exactly
  if (!isMounted) {
    return (
      <motion.span
        ref={ref}
        className={cn(className)}
        aria-label={text}
        role="text"
      >
        {text.split('').map((char, index) => (
          <span key={index} className={cn(revealedClassName)}>
            {char}
          </span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={cn(className)}
      aria-label={text}
      role="text"
    >
      {text.split('').map((char, index) => {
        const isRevealed = index < animState.revealCount;
        const displayChar = isRevealed
          ? char
          : char === ' '
            ? ' '
            : (animState.scrambleChars[index] ?? char);

        return (
          <span
            key={index}
            className={cn(isRevealed ? revealedClassName : encryptedClassName)}
          >
            {displayChar}
          </span>
        );
      })}
    </motion.span>
  );
};
