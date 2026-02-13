import type { Metadata } from 'next';
import { Dela_Gothic_One, Inter } from 'next/font/google';
import './globals.css';

const dela = Dela_Gothic_One({
  subsets: ['latin'],
  variable: '--font-dela',
  weight: '400',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Just for You',
  description: 'A little digital hug.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dela.variable} ${inter.variable} antialiased bg-purple-50 text-slate-800 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
