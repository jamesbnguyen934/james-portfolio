import type { Metadata } from 'next'
import Script from 'next/script'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import ScrollProgress from '@/components/scroll-progress'
import CursorGlow from '@/components/cursor-glow'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jamesbnguyen.dev'),
  title: {
    default: 'James B. Nguyen — Staff Frontend Engineer | AI & Infrastructure',
    template: '%s | James B. Nguyen',
  },
  description:
    'Staff Frontend Engineer with 10+ years building production systems at Google, Meta, and beyond. Specializing in GenAI, LLM integration, and frontend infrastructure at hyperscale.',
  keywords: [
    'James Nguyen',
    'Staff Frontend Engineer',
    'Frontend Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'GenAI',
    'LLM',
    'AI integration',
    'frontend architecture',
    'performance engineering',
    'Google',
    'Meta',
    'Blue Ocean Technology',
    'portfolio',
  ],
  authors: [{ name: 'James B. Nguyen' }],
  creator: 'James B. Nguyen',
  publisher: 'James B. Nguyen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jamesbnguyen.dev',
    siteName: 'James B. Nguyen',
    title: 'James B. Nguyen — Staff Frontend Engineer',
    description:
      'Staff Frontend Engineer with 10+ years at Google, Meta, and Blue Ocean Technology. Specializing in GenAI, LLM streaming interfaces, and frontend infrastructure at scale.',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'James B. Nguyen - Staff Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'James B. Nguyen — Staff Frontend Engineer',
    description:
      'Staff Frontend Engineer with 10+ years at Google, Meta, and Blue Ocean Technology. Specializing in GenAI, LLM streaming, and frontend infrastructure.',
    images: ['/favicon.svg'],
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
  alternates: {
    canonical: 'https://jamesbnguyen.dev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPXQ3WNG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPXQ3WNG');`,
          }}
        />
        <ScrollProgress />
        <CursorGlow />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  )
}
