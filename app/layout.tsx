import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'GoCat - Modern Netcat Alternative',
  description: 'A modern, feature-rich netcat alternative written in Go. Fast, secure, and cross-platform network communication tool.',
  keywords: ['netcat', 'networking', 'go', 'tcp', 'udp', 'security', 'cli'],
  authors: [{ name: 'ibrahimsql' }],
  openGraph: {
    title: 'GoCat - Modern Netcat Alternative',
    description: 'A modern, feature-rich netcat alternative written in Go',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoCat - Modern Netcat Alternative',
    description: 'A modern, feature-rich netcat alternative written in Go',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}