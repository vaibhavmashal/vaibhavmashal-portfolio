import { Trophy } from 'lucide-react'

const achievements = [
  {
    title: 'Web Devlopment Lead',
    description: 'Web Development Lead at Google Developers Group, NKCOET.',
  },
  {
    title: 'Ideathon Winner',
    description: 'Winner of the Ideathon competition at SSWP.',
  },
  // ...more achievements
]

export default function AchievementSection() {
  return (
    <section id="achievment" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Achievements
        </span>
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="bg-gray-100 border border-gray-500  border-l-4 border-l-emerald-500  dark:bg-gray-800 rounded-lg p-6 transform transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <div className="flex items-center mb-2">
              <Trophy className="w-6 h-6 mr-2 text-emerald-500" />
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
