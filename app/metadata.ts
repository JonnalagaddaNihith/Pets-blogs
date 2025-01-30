import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://tailsandpaws.info'),
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
    url: 'https://tailsandpaws.info',
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