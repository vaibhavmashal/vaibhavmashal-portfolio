'use client'

import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <html lang="en" className={`scroll-smooth ${darkMode ? 'dark' : ''}`}>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
        <Footer />
        <Chatbot/>
      </body>
    </html>
  )
}

