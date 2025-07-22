import Image from 'next/image'
import MyImage from '@/assets/v1.jpeg'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

import 'tailwindcss/tailwind.css'

export default function HeroSection() {
  return (
    <section className="text-center py-20">
      <div className="mb-8 transform transition duration-500 ease-in-out hover:scale-105">
        <Image
          src={MyImage}
          alt="Vaibhav Mashal"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2 transform transition duration-500 ease-in-out hover:translate-y-1">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Vaibhav Mashal
        </span>
      </h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-4 transform transition duration-500 ease-in-out hover:translate-y-1">
        Software Engineer
      </h2>
      <p className="max-w-2xl mx-auto mb-8 font-bold transform transition duration-500 ease-in-out hover:translate-y-1">
        Passionate about creating elegant solutions to complex problems. With expertise in
        React, Node.js, and cloud technologies, I build scalable and efficient web applications
        that make a difference.
      </p>
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 border border-gray-500 rounded-lg sm:border-0 p-4">
        <div className="grid grid-cols-2 gap-4 sm:flex sm:space-x-4">
          <Link
            href="https://github.com/vaibhavmashal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-icon w-full sm:w-auto group hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center"
          >
            <FaGithub className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/vaibhav-mashal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-icon w-full sm:w-auto group hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center"
          >
            <FaLinkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            LinkedIn
          </Link>
          <Link
            href="mailto:vaibhavmashal098@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-icon w-full sm:w-auto group hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Email
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-icon w-full sm:w-auto group hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center"
          >
            <FaDownload className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Resume
          </Link>
        </div>
      </div>
    </section>
  )
}

