import Link from 'next/link'
import { Sun, Moon,Code,Layout, GraduationCap,Mail} from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Vaibhav Mashal
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          
          <div className="hidden md:flex space-x-10">
            <Link href="#skills" className="hover:text-gray-600  ease-out dark:hover:text-gray-300"><Code className="w-6 h-6" />  {/* "Skills" */}</Link> 
            <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300"><Layout className="w-6 h-6" />{/* "Projects" */}</Link>
            <Link href="#education" className="hover:text-gray-600 dark:hover:text-gray-300"><GraduationCap className="w-6 h-6"/> {/* "Educatoion" */}</Link>
            <Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300"><Mail className="w-6 h-6"/> {/* Contact" */}</Link>
            {/* <Link href="#certifications" className="hover:text-gray-600 dark:hover:text-gray-300">Certifications</Link> */}
          </div>
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300">Skills</Link>
            <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">Projects</Link>
            <Link href="#education" className="hover:text-gray-600 dark:hover:text-gray-300">Education</Link>
            <Link href="#certifications" className="hover:text-gray-600 dark:hover:text-gray-300">Certifications</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

