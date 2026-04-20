import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'group/badge inline-flex h-7 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-4 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        secondary:
          'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
        destructive:
          'bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20',
        outline:
          'border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground',
        ghost:
          'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',
        link: 'text-primary underline-offset-4 hover:underline',
        html: 'text-primary text-orange-400 bg-orange-400/20 border border-orange-400',
        css: 'text-primary text-purple-400 bg-purple-400/20 border border-purple-400',
        javascript:
          'text-primary text-yellow-400 bg-yellow-400/20 border border-yellow-400',
        php: 'text-primary text-indigo-400 bg-indigo-400/20 border border-indigo-400',
        mysql:
          'text-primary text-cyan-500 bg-cyan-500/20 border border-cyan-500',
        sse: 'text-primary text-lime-400 bg-lime-400/20 border border-lime-400',
        leaftlet:
          'text-primary text-emerald-400 bg-emerald-400/20 border border-emerald-400',
        wordpress:
          'text-primary text-sky-500 bg-sky-500/20 border border-sky-500',
        woocommerce:
          'text-primary text-violet-400 bg-violet-400/20 border border-violet-400',
        elementor:
          'text-primary text-rose-400 bg-rose-400/20 border border-rose-400',
        next: 'text-primary text-indigo-300 bg-indigo-300/20 border border-indigo-300',
        react: 'text-primary text-sky-300 bg-sky-300/20 border border-sky-300',
        prisma:
          'text-primary text-teal-400 bg-teal-400/20 border border-teal-400',
        postgresql:
          'text-primary text-blue-400 bg-blue-400/20 border border-blue-400',
        auth: 'text-primary text-purple-300 bg-purple-300/20 border border-purple-300',
        zod: 'text-primary text-sky-400 bg-sky-400/20 border border-sky-400',
        shadcn:
          'text-primary text-cyan-300 bg-cyan-300/20 border border-cyan-300',
        docker: 'text-primary text-sky-500 bg-sky-500/20 border border-sky-500',
        vercel:
          'text-primary text-slate-300 bg-slate-300/20 border border-slate-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
