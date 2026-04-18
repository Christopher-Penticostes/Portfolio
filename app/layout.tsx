import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NavbarMain } from '@/components/shared/Navbar';
import './globals.css';
import { Footer } from '@/components/shared/Footer';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Porfolio | Christopher Penticostes',
  description: 'Built with Next.js & Aceternity UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-transparent`}
    >
      <body className="min-h-full flex flex-col bg-black ">
        <NavbarMain />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
