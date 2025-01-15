import Image from 'next/image'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import MyImage from '@/assets/vaibhavProfile.jpeg'
import Link from 'next/link'

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
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
        <Link href="https://github.com/vaibhavmashal" className="btn btn-icon transform transition duration-500 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer">
          <Github size={20} />
          <span>GitHub</span>
        </Link>
        <Link href="https://www.linkedin.com/in/vaibhav-mashal" className="btn btn-icon transform transition duration-500 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </Link>
        <Link href="mailto:vaibhavmashal098@gmail.com" className="btn btn-icon transform transition duration-500 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer">
          <Mail size={20} />
          <span>Email</span>
        </Link>
        <Link href="#" className="btn btn-icon transform transition duration-500 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer">
          <FileText size={20} />
          <span>Resume</span>
        </Link>
      </div>
    </section>
  )
}

