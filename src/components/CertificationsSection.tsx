import { Award, Calendar, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'React.js',
    platform: 'LinkedIn Learning',
    date: 'Dec 2024',
    credentialLink: '#',
  },
  {
    title: 'Node.js',
    platform: 'LinkedIn Learning',
    date: 'Sep 2024',
    credentialLink: '#',
  },
  {
    title: 'TypeScript',
    platform: 'LinkedIn Learning',
    date: 'Dec 2024',
    credentialLink: '#',
  },
  {
    title:'Postman Essential Training',
    platform: 'LinkedIn Learning',
    date: 'Dec 2024',
    credentialLink: '#',
  },
  {
    title:'Prompt Engineering with ChatGPT',
    platform: 'LinkedIn Learning',
    date: 'Sep 2024',
    credentialLink: '#',
  },
  {
    title:'Python Data Analysis',
    platform: 'LinkedIn Learning',
    date: 'Dec 2024',
    credentialLink: '#',
  },
  {
    title:'Career Essentials in Data Analysis',
    platform: 'MircoSoft',
    date: 'Oct 2024',
    credentialLink: '#',
  },
  {
    title:'Career Essentials in Genrative AI',
    platform: 'MircoSoft',
    date: 'Dec 2024',
    credentialLink: '#',
  },
  {
    title:'Career Essentials in GitHub',
    platform: 'Github',
    date: 'Jan 2025',
    credentialLink: '#',
  },
  {
    title:'Cloud Computing',
    platform: 'MircoSoft',
    date: 'Dec 2024',
    credentialLink: '#',
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Courses & Certifications
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-100 border border-gray-500 dark:bg-gray-800 rounded-lg p-6 transform transition duration-500 ease-in-out hover:scale-105">
            <div className="flex items-center mb-2">
              <Award className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-semibold">{cert.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{cert.platform}</p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{cert.date}</span>
            </div>
            <a
              href={cert.credentialLink}
              className="btn btn-sm btn-icon transform transition duration-500 ease-in-out hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>View Credential</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

