import Link from 'next/link'
import { Code, Layout, GraduationCap, Mail,Trophy } from 'lucide-react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function Navbar({ }: NavbarProps) { // added darkMode, setDarkMode to props 
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null) // added state for hovered index

  return (
    <nav className={`top-0 z-10 bg-white dark:bg-gray-900 shadow-md ${isOpen ? 'sticky' : ''} md:sticky`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold transform transition duration-500 ease-in-out hover:scale-105">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Vaibhav Mashal
        </span>
      </Link>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-10">
          {['skills', 'projects', 'education', 'contact', 'achievment'].map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={`#${item}`}
                className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.2 : 1,
                    y: hoveredIndex === index ? -2 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  {item === 'skills' && <Code className="w-6 h-6 text-emerald-500 hover:text-white" />}
                  {item === 'projects' && <Layout className="w-6 h-6 text-emerald-500 hover:text-white" />}
                  {item === 'education' && <GraduationCap className="w-6 h-6 text-emerald-500 hover:text-white" />}
                  {item === 'contact' && <Mail className="w-6 h-6 text-emerald-500 hover:text-white" />}
                  {item === 'achievment' && <Trophy className="w-6 h-6 text-emerald-500 hover:text-white" />}
                </motion.div>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-1 text-xs whitespace-nowrap bg-white text-emerald-500 px-2 py-1 rounded-full"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </div>
          ))}
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
        <div className="px-4 py-4 flex flex-col space-y-4">
        <Link href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105">Skills</Link>
        <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105">Projects</Link>
        <Link href="#education" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105">Education</Link>
        <Link href="#certifications" className="hover:text-gray-600 dark:hover:text-gray-300 transform transition duration-500 ease-in-out hover:scale-105">Certifications</Link>
        </div>
      </div>
      )}
    </nav>
      )}


