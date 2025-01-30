import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Tails & Paws - Your Guide to Dogs and Cats',
    template: '%s | Tails & Paws'
  },
  description: 'Comprehensive guide for pet parents about dog and cat breeds, care tips, and expert advice.',
  keywords: ['dogs', 'cats', 'pets', 'pet care', 'dog breeds', 'cat breeds'],
  authors: [{ name: 'Tails & Paws' }],
  creator: 'Tails & Paws',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tailsandpaws.in',
    title: 'Tails & Paws - Your Guide to Dogs and Cats',
    description: 'Comprehensive guide for pet parents about dog and cat breeds, care tips, and expert advice.',
    siteName: 'Tails & Paws'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tails & Paws - Your Guide to Dogs and Cats',
    description: 'Comprehensive guide for pet parents about dog and cat breeds, care tips, and expert advice.',
    creator: '@tailsandpaws'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}