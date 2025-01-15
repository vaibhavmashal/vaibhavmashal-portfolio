import Link from 'next/link'
import { Code, Layout, GraduationCap, Mail } from 'lucide-react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function Navbar({  }: NavbarProps) { // added darkMode, setDarkMode to props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold transform transition duration-500 ease-in-out hover:scale-105">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Vaibhav Mashal
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-10">
            <Link href="#skills" className="hover:text-gray-600 ease-out dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105"><Code className="w-6 h-6" /></Link>
            <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105"><Layout className="w-6 h-6" /></Link>
            <Link href="#education" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105"><GraduationCap className="w-6 h-6" /></Link>
            <Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105"><Mail className="w-6 h-6" /></Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 transform transition duration-500 ease-in-out hover:scale-105"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden bg-white dark:bg-gray-900 shadow-md transition-transform duration-500 ease-in-out transform origin-top ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105">Skills</Link>
            <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105">Projects</Link>
            <Link href="#education" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105">Education</Link>
            <Link href="#certifications" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105">Certifications</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

