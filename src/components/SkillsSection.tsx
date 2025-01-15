import { Code, Layout, Server, Database, GitBranch } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="w-6 h-6" />,
    skills: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'PHP'],
  },
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6" />,
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'React.js', 'Next.js'],
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6" />,
    skills: ['MongoDB','Firebase', 'MySQL'],
  },
  {
    title: 'Version Control',
    icon: <GitBranch className="w-6 h-6" />,
    skills: ['Git', 'GitHub'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl  font-bold text-center mb-12"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Skills</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-gray-100 border border-gray-500 dark:bg-gray-800 rounded-lg p-6 transform transition duration-500 ease-in-out hover:scale-105">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 dark:bg-gray-700 px-5 py-1 rounded-md text-sm font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

