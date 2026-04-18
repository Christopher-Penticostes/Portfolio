'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const images = [
  '/images/wordpress.png',
  '/images/real-estate.png',
  '/images/ordering-system.png',
  '/images/guidance-system.png',
  '/images/food-ordering.png',
];

export function Pattern() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <Card className="group/card relative w-full h-82 overflow-hidden border-0 p-0 max-lg:h-88 max-md:h-44">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="scale-100 object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 h-full bg-black/20" />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 py-3">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              'rounded-full h-2 cursor-pointer transition-all duration-500 ease-in-out',
              index === current
                ? 'bg-white w-4 opacity-100'
                : 'bg-white/95 w-2 opacity-30 hover:opacity-50',
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
