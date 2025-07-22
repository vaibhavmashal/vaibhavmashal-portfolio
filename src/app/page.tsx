import HeroSection from '../components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '../components/ProjectsSenction'
import EducationSection from '../components/EducationSection'
import CertificationsSection from '../components/CertificationsSection'
import AchievementSection from '../components/AchievementSection'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <HeroSection  />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <AchievementSection />
      <CertificationsSection />
      <Contact />
    </main>
  )
}

