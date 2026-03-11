import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import ThemeWrapper from '@/components/ThemeWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaibhav Mashal | Software Engineer',
  description: 'Portfolio of Vaibhav Mashal, a full-stack software engineer specializing in React, Node.js, and cloud technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  )
}

