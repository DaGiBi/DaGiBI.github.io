import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers"
import Head from 'next/head'
const inter = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DGB',
  description: 'DaGiBi Portfolio',
  icons: "/profile.jpg",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <Head>
        <link className='rounded-lg' rel='icon' type='image/x-icon' href='/profile.jpg' />
      </Head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}