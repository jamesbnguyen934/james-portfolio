import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Blue Ocean',
  description: 'Learn about how Blue Ocean uses cookies and similar technologies to enhance your browsing experience.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://blueoceanwebs.com/cookies',
  },
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}