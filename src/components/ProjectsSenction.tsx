import { ExternalLink,  Github , Syringe, Camera,TrophyIcon,User} from 'lucide-react'

const projects = [
  {
    title: 'SCORE-GO',
    icon:<TrophyIcon size={24} className='  text-emerald-500' />,
    description: 'SCORE-GO is a personalized cricket scoring website where users can signup, signin, create teams for local and global cricket tournament...',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    demoLink: 'https://score-go.onrender.com/',
    githubLink: 'https://github.com/SCORE-GO/SCORE-GO',
  },
  {
    title: 'Vaccine Management System',
    icon:<Syringe className='w-6 h-6 mt-1 text-emerald-500' />,  
    description: 'A vaccine management system that allows users to signup, signin, search for vaccines, book appointments, view appointments, cancel...',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
    demoLink: null,
    githubLink: 'https://github.com/vaibhavmashal/vaccination-System',
  },
  {
    title: 'Photography Shop Billing System',
    icon:<Camera className='w-6 h-6 mt-1 text-emerald-500' />,
    description: 'A billing system for a photography shop that allows users to add customers, add products, generate bills, view bills, and generate...',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
    demoLink: null,
    githubLink: '#',
  },

  {
    title: 'Portfolio Website',
    icon:<User className='w-6 h-6 mt-1 text-emerald-500' />,  
    description: 'A simple portfolio website template built using React.js and Tailwind CSS. It is responsive and dark mode compatible...',
    technologies: ['React.js', 'Tailwind CSS',"next.js"],
    demoLink: 'https://vaibhavmashal-portfolio.vercel.app/',
    githubLink: "#",
  },
  {
    title: `Health Bites: AI-Driven Health & Nutrition Management`,
    icon:<Syringe className='w-6 h-6 mt-1 text-emerald-500' />,  
    description: 'AI wellness app using GenAI, Gemini Vision, React.js for meal/workout analysis and smart planning,   Integrated fitness, nutrition, coaching, and social features for improved results',
    technologies: ['Gemini Vision', 'React.Js', 'GenAI', 'LLM','Tailwind CSS'],
    demoLink: `https://`,
    githubLink: "",
  },
]


const getColorForTechnology = (tech: string) => {
  const colors = [
    'bg-red-500/20 text-red-500 dark:bg-red-500/30 dark:text-red-300',
    'bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/30 dark:text-yellow-300',
    'bg-green-500/20 text-green-700 dark:bg-green-500/30 dark:text-green-300',
    'bg-blue-500/20 text-blue-700 dark:bg-blue-500/30 dark:text-blue-300',
    'bg-indigo-500/20 text-indigo-700 dark:bg-indigo-500/30 dark:text-indigo-300',
    'bg-purple-500/20 text-purple-700 dark:bg-purple-500/30 dark:text-purple-300',
    'bg-pink-500/20 text-pink-700 dark:bg-pink-500/30 dark:text-pink-300',
    'bg-orange-500/20 text-orange-700 dark:bg-orange-500/30 dark:text-orange-300',
    'bg-teal-500/20 text-teal-700 dark:bg-teal-500/30 dark:text-teal-300',
    'bg-cyan-500/20 text-cyan-700 dark:bg-cyan-500/30 dark:text-cyan-300',
  ]

  const index = tech.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  return colors[index]
}

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
          <div key={project.title} className="bg-gray-100 border border-gray-500 dark:bg-gray-800 rounded-lg p-6 transform transition duration-500 ease-in-out hover:scale-105">
            <div className='flex flex-row gap-3 items-centern'> 
            <div className="mb-3">{project.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-1 rounded-md text-xs font-bold ${getColorForTechnology(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              {project.demoLink ? (
                <a href={project.demoLink} className="btn btn-sm btn-icon transform transition duration-500 ease-in-out hover:scale-110" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </a>
              ) : (
                <span className=" dark:text-white text-sm">Not Available</span>
              )}
              <a href={project.githubLink} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transform transition duration-500 ease-in-out hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Github size={20} className='text-black ' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

