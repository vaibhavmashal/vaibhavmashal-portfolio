import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Vaibhav Mashal. All rights reserved.
          </p>
          <div className="flex space-x-4">
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
        </div>
      </div>
    </footer>
  )
}

