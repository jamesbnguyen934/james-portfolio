import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Blue Ocean',
  description: 'Read our privacy policy to understand how Blue Ocean collects, uses, and protects your personal information.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://blueoceanwebs.com/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}