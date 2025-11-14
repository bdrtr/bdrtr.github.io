import type { Metadata } from 'next';
import { Inter, Orbitron, Roboto_Mono } from 'next/font/google';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import { ThemeProvider } from '@/src/contexts/ThemeContext';
import Script from 'next/script';
import { generateStructuredData } from './components/StructuredData';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bdrtr.github.io'),
  title: {
    default: 'Bedir Tuğra Karaabalı - Software Engineer',
    template: '%s | Bedir Tuğra Karaabalı',
  },
  description: 'Full-stack web developer and software engineer. Building modern, scalable web applications with React, Next.js, and TypeScript.',
  keywords: ['software engineer', 'web developer', 'full-stack developer', 'React', 'Next.js', 'TypeScript', 'portfolio'],
  authors: [{ name: 'Bedir Tuğra Karaabalı' }],
  creator: 'Bedir Tuğra Karaabalı',
  publisher: 'Bedir Tuğra Karaabalı',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bdrtr.github.io',
    title: 'Bedir Tuğra Karaabalı - Software Engineer',
    description: 'Full-stack web developer and software engineer. Building modern, scalable web applications.',
    siteName: 'Bedir Tuğra Karaabalı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bedir Tuğra Karaabalı - Software Engineer',
    description: 'Full-stack web developer and software engineer.',
    creator: '@bdrtr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} ${robotoMono.variable}`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

