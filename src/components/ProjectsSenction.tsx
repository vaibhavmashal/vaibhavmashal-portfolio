import { ExternalLink, GitlabIcon as GitHub } from 'lucide-react'

const projects = [
  {
    title: 'SCORE-GO',
    description: 'SCORE-GO is a personalized cricket scoring website where users can signup, signin, create teams for local and global cricket tournament...',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Vaccine Management System',
    description: 'A vaccine management system that allows users to signup, signin, search for vaccines, book appointments, view appointments, cancel...',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
    demoLink: null,
    githubLink: '#',
  },
  {
    title: 'Photography Shop Billing System',
    description: 'A billing system for a photography shop that allows users to add customers, add products, generate bills, view bills, and generate...',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
    demoLink: null,
    githubLink: '#',
  },

  {
    title: 'Portfolio Website',
    description: 'A simple portfolio website template built using React.js and Tailwind CSS. It is responsive and dark mode compatible...',
    technologies: ['React.js', 'Tailwind CSS',"next.js"],
    demoLink: '#',
    githubLink: "#",
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Projects
          </span>
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-100 border border-gray-500 dark:bg-gray-800 rounded-lg p-6 ">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4 ">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center  ">
              {project.demoLink ? (
                <a href={project.demoLink} className="btn btn-sm btn-icon" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </a>
              ) : (
                <span className="text-gray-500 dark:text-gray-400 text-sm">Not Available</span>
              )}
              <a href={project.githubLink} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                <GitHub size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

