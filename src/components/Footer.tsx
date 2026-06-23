import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Navigation Links Section */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            <Link href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transform transition duration-500 ease-in-out hover:scale-105 font-medium">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transform transition duration-500 ease-in-out hover:scale-105 font-medium">
              Projects
            </Link>
            <Link href="#education" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transform transition duration-500 ease-in-out hover:scale-105 font-medium">
              Education
            </Link>
            <Link href="#achievment" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transform transition duration-500 ease-in-out hover:scale-105 font-medium">
              Achievement
            </Link>
            <Link href="#certifications" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transform transition duration-500 ease-in-out hover:scale-105 font-medium">
              Certifications
            </Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transform transition duration-500 ease-in-out hover:scale-105 font-medium">
              Contact
            </Link>
          </div>

          {/* Social Links Section */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/vaibhavmashal" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transform transition duration-500 ease-in-out hover:scale-105">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vaibhavmashal/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transform transition duration-500 ease-in-out hover:scale-105">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vaibhavmashal098@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transform transition duration-500 ease-in-out hover:scale-105">
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright Section */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Vaibhav Mashal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

