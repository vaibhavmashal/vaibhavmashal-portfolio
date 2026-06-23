'use client'

import { motion } from 'framer-motion'

interface ExperienceData {
  id: number
  type: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  status: string
  description: string[]
  technologies: string[]
  badge?: string
}

const experienceData: ExperienceData[] = [
  {
    id: 1,
    type: 'INTERNSHIP',
    title: 'Full Stack Developer Intern',
    company: 'Webtech Developers Pvt Ltd',
    location: 'Pune, India',
    startDate: 'Nov 2025',
    endDate: 'Present',
    status: 'Current',
    description: [
  "Engineered secure REST APIs for e-commerce and desktop integrations, enabling reliable data exchange between Python services and Windows applications.",
  "Integrated Stripe payment gateway, automating checkout, payment verification, and order management workflows.",
  "Developed license activation and deactivation services using Quick License Manager (QLM), streamlining software licensing and compliance management.",
  "Built real-time Socket.IO communication channels between Python backend and Windows C++ applications, improving operational efficiency and reducing manual intervention.",
  "Optimized application performance through API tuning, database optimization, and asynchronous processing techniques.",
  "Implemented secure authentication and authorization mechanisms to protect sensitive business and customer data.",
  "Troubleshot and resolved production issues across payment systems, licensing services, and real-time communication infrastructure.",
  "Delivered scalable backend solutions supporting high-volume transactions, real-time updates, and desktop-to-server integrations."
    ],
    technologies: ['React','TypeScript', 'Tailwind' ,'Python', 'Django', 'Django Channels','PostgreSQL', 'Redis','CI/CD'],
  },
]

export default function Experience() {
  return (
    <section className="py-20" id="experience" >
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-emerald-500/20 transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    {exp.type}
                  </span>
                  {exp.badge && (
                    <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  {exp.company}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                  {exp.status}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span>📍 {exp.location}</span>
              <span>📅 {exp.startDate} – {exp.endDate}</span>
            </div>

            <div className="mb-4">
              <ul className="space-y-2">
                {exp.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-700 dark:text-gray-300 flex gap-3"
                  >
                    <span className="text-emerald-500 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
