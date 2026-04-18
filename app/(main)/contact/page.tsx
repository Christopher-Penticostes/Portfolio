'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Send } from 'lucide-react';
import { Pattern } from '@/components/sections/contact-carousel';

const formSchema = z.object({
  name: z
    .string()
    .min(1, 'Name must be at least 1 characters.')
    .max(50, 'Name must be at most 50 characters.'),
  email: z.email('Invalid email address format.'),
  subject: z
    .string()
    .min(1, 'Subject must be at least 1 characters.')
    .max(50, 'Subject must be at most 50 characters.'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters.')
    .max(200, 'Message must be at most 200 characters.'),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast.success('Message sent successfully!');
      form.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 100% at 50% 0%, black 0%, black 40%, transparent 75%)',
          maskImage:
            'radial-gradient(ellipse 70% 100% at 50% 0%, black 0%, black 40%, transparent 75%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-35 pb-20 max-lg:pt-0">
        <div className="mb-8 text-white">
          <div className="flex gap-4 items-center">
            <p className="font-semibold text-4xl/14">Connect With Me</p>
            <Badge variant="outline" className="text-white h-5 px-2 ">
              Get in Touch
            </Badge>
          </div>
          <p className="text-lg max-w-5xl text-gray-300">
            I'm always open to new opportunities where I can contribute, grow,
            and build meaningful things. Whether you have a role in mind or just
            want to connect, feel free to drop me a message — I'd love to hear
            from you!
          </p>
        </div>
        <div className="flex gap-8">
          <Card className="dark w-4xl py-6 px-2 border border-input/30">
            <CardContent>
              <form id="contact" onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                        <Input
                          {...field}
                          id="contact-name"
                          aria-invalid={fieldState.invalid}
                          placeholder="John Doe"
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="contact-title">Email</FieldLabel>
                        <Input
                          {...field}
                          id="contact-email"
                          aria-invalid={fieldState.invalid}
                          placeholder="username@example.com"
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="subject"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="contact-title">Subject</FieldLabel>
                        <Input
                          {...field}
                          id="contact-subject"
                          aria-invalid={fieldState.invalid}
                          placeholder="Your subject here."
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="message"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="contact-message">
                          Message
                        </FieldLabel>
                        <InputGroup>
                          <InputGroupTextarea
                            {...field}
                            id="contact-message"
                            placeholder="Your message here."
                            rows={6}
                            className="min-h-30  resize-none"
                            aria-invalid={fieldState.invalid}
                          />
                          <InputGroupAddon align="block-end">
                            <InputGroupText className="tabular-nums">
                              {field.value.length}/200 characters
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Field>
                    <Button type="submit" className="py-5">
                      Send Message
                      <Send />
                    </Button>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
          <div className="w-full">
            <Pattern />
            <Badge
              variant="outline"
              className="text-green-300 border-green-300 bg-green-300/20"
            >
              <span className="relative flex size-2 mr-1">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-300" />
              </span>
              Available for Hire
            </Badge>
            <p className="mt-2 text-white font-semibold text-3xl">
              Christopher Penticostes
            </p>
            <p className="font-medium text-lg text-gray-300">
              Full Stack Developer
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://www.facebook.com/christopher.penticostes"
                target="_blank"
                className="flex items-center justify-center cursor-pointer px-3 py-3 border border-white bg-transparent text-white text-xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 max-md:px-3 max-md:py-0"
              >
                <FaFacebookF size={15} className="max-md:h-4 max-md:w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/christopher-penticostes-6ba49634a/"
                target="_blank"
                className="flex items-center justify-center cursor-pointer px-3 py-3 border border-white bg-transparent text-white text-xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 max-md:px-3 max-md:py-0"
              >
                <FaLinkedinIn size={15} className="max-md:h-4 max-md:w-4" />
              </Link>
              <Link
                href="https://github.com/Christopher-Penticostes"
                target="_blank"
                className="flex items-center justify-center cursor-pointer px-3 py-3 border border-white bg-transparent text-white text-xl rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 max-md:px-3 max-md:py-0"
              >
                <FaGithub size={15} className="max-md:h-4 max-md:w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
