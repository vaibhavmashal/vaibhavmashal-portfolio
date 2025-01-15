import { Trophy } from 'lucide-react'

const achievements = [
  {
    title: 'First Place in Hackathon',
    description: 'Won first place in a national level hackathon for developing an innovative solution for waste management.',
    date: 'March 2023',
  },
  {
    title: 'Best Student Award',
    description: 'Received the best student award for outstanding academic performance and extracurricular activities.',
    date: 'December 2022',
  },
  // ...more achievements
]

export default function AchievementSection() {
  return (
    <section id="achievements" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Achievements
        </span>
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="bg-gray-100 border border-gray-500 dark:bg-gray-800 rounded-lg p-6 transform transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <div className="flex items-center mb-2">
              <Trophy className="w-6 h-6 mr-2 text-emerald-500" />
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{achievement.description}</p>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <span>{achievement.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
