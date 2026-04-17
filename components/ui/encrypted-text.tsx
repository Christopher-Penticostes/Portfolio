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

  // All render-needed values live in a single state object
  const [animState, setAnimState] = useState<AnimationState>({
    revealCount: 0,
    scrambleChars: text
      ? generateGibberishPreservingSpaces(text, charset).split('')
      : [],
  });

  // Internal animation refs — never read during render
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const lastFlipTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;

    // Initialise timing refs only — no setState here
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

      // setState inside rAF callback is not "directly in an effect"
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
  }, [isInView, text, revealDelayMs, charset, flipDelayMs]);

  if (!text) return null;

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
            : (animState.scrambleChars[index] ??
              generateRandomCharacter(charset));

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
