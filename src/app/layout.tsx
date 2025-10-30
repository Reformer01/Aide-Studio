import type {Metadata} from 'next';
import './globals.css';
import { Header1 } from '@/components/ui/header';
import { Footerdemo } from '@/components/ui/footer-section';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Aide - Your AI Assistant',
  description: 'Sign up to use Aide, your personal AI chatbot.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Header1 />
        <main className="pt-20">{children}</main>
        <Footerdemo />
        <Toaster />
      </body>
    </html>
  );
}
