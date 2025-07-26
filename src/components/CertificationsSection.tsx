import { Award, Calendar, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'React.js',
    platform: 'LinkedIn Learning',
    date: 'Dec 2024',
    credentialLink: 'https://www.linkedin.com/learning/certificates/dd618747bfaf842e73b3085028b84cc6d375a9ab39879b520f2435c831c2c171?trk=share_certificate',
  },
  {
    title: 'Node.js',
    platform: 'LinkedIn Learning',
    date: 'Sep 2024',
    credentialLink: 'https://www.linkedin.com/learning/certificates/9995063b7f885ad1c51805cf44258dd05ce2195068a80e06383df351f1e588b2?trk=share_certificate',
  },
  {
    title: 'TypeScript',
    platform: 'LinkedIn Learning',
    date: 'Dec 2024',
    credentialLink: 'https://www.linkedin.com/learning/certificates/41dc45fab1571c882076a74da7aab3c616e81d608b8e4326030fba8629becfcd?trk=share_certificate',
  },
  {
    title:'Postman Essential Training',
    platform: 'LinkedIn Learning',
    date: 'Dec 2024',
    credentialLink: 'https://www.linkedin.com/learning/certificates/dff817189e0bc550eff8bfa46c3f2c8d956ae189b27dc9c3c8aaa1cb59234c34?trk=share_certificate',
  },
  {
    title:'Prompt Engineering with ChatGPT',
    platform: 'LinkedIn Learning',
    date: 'Sep 2024',
    credentialLink: 'https://www.linkedin.com/learning/certificates/a7e29c67e739d68fc064e8007adabca7a6ba5363a23ecdb2c2cba57a9d9c5989?trk=share_certificate',
  },
  {
    title:'Python Data Analysis',
    platform: 'LinkedIn Learning',
    date: 'Dec 2024',
    credentialLink: 'https://www.linkedin.com/learning/certificates/e4bce2044df239dc7309b3634f6413f0f2eda1af76e345c544fc59e26bddb5ba?trk=share_certificate',
  },
  {
    title:'Career Essentials in Data Analysis',
    platform: 'MircoSoft',
    date: 'Oct 2024',
    credentialLink: 'https://www.linkedin.com/learning/certificates/f8967ad74a07500773fd603161abc681c29e9bfa0fd3b51a20c9b043a645cfcc?trk=share_certificate',
  },
  {
    title:'Career Essentials in Genrative AI',
    platform: 'MircoSoft',
    date: 'Dec 2024',
    credentialLink: 'https://www.linkedin.com/learning/certificates/0287463758b3d6889b6a14310ec1066ee2002c44fcdefa4a1bcf8c471cc41ca2?trk=share_certificate',
  },
  {
    title:'Career Essentials in GitHub',
    platform: 'Github',
    date: 'Jan 2025',
    credentialLink: 'https://www.linkedin.com/learning/certificates/33a351033009a0d966e1b9a476ac385faffdec7d00dad25b3a56dd9e37717d27?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BhQptztsYQ56yGT0Kr4pTmQ%3D%3D',
  },
  {
    title:'Cloud Computing',
    platform: 'MircoSoft',
    date: 'Dec 2024',
    credentialLink: 'https://www.linkedin.com/learning/certificates/892ca1408cbb98699b9e5c89c923bd625d2d74929ef3dc161e0f3d9128f1f31f?trk=share_certificate',
  },
  {
    title:'Advance Design Patterns',
    platform: 'LinekdIn Learning',
    date: 'Dec 2024',
    credentialLink: 'https://www.linkedin.com/learning/certificates/b3db3b86e82bee82b146f7aee8061f7202d7a6bcf849d5d06ebdd769635bcdb5?trk=share_certificate',
  },
  {
    title:'PostgreSQL Essential Training',
    platform: 'LinekdIn Learning',
    date: 'Jan 2025',
    credentialLink: 'https://www.linkedin.com/learning/certificates/43dcdcdd3d4d9aad8e874af3b0c13031675fd32be3a0a04f992bae75afac9734?trk=share_certificate',
  },
  {
    title:'Data Engineering Foundations',
    platform: 'LinekdIn Learning',
    date: 'Jan 2025',
    credentialLink: 'https://www.linkedin.com/learning/certificates/b40b6d30fdf809019162ff67a89a4c8bae651e7ad2c7ad9cac31e6ad111b9569?trk=share_certificate%20#dataengineering.',
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
              <Award className="w-6 h-6 mr-2 text-emerald-500" />
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

