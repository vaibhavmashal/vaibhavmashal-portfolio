import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Engineering',
    institution: 'Nagesh Karajagi Orchid College of Engineering & Technology, Solapur',
    location: 'Solapur, Maharashtra',
    period: '2023 - 2026',
  },
  {
    degree: 'Diploma in Computer Technology',
    institution: 'Government Polytechnic, Solapur',
    location: 'Solapur, Maharashtra',
    period: '2021 - 2023',
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Education
          </span>
        </h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-gray-100 border border-gray-500 dark:bg-gray-800  rounded-lg p-6 items-center">
            <div className="flex items-center mb-2">
              <GraduationCap className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
            </div>
            <p className="text-lg mb-2">{edu.institution}</p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{edu.location}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

