'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [darkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
