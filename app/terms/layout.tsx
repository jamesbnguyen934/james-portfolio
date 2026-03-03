import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Blue Ocean',
  description: 'Read our terms of service to understand the terms and conditions for using Blue Ocean services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://blueoceanwebs.com/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}