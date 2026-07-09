import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luxury Barbershop | Where Craft Meets Art',
  description: 'Premium barbershop experience in Berlin. Book your appointment online.',
  keywords: 'barbershop, luxury, haircut, beard, grooming, Berlin',
  authors: [{ name: 'Suliman.H' }],
  openGraph: {
    title: 'Luxury Barbershop | Where Craft Meets Art',
    description: 'Premium barbershop experience in Berlin.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}