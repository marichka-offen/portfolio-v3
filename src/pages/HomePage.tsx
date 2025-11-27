import Hero from '../components/home/Hero/Hero'
import FeaturedProjects from '../components/home/FeaturedProjects/FeaturedProjects'
import TechnicalExpertise from '../components/home/TechnicalExpertise/TechnicalExpertise'
import CurrentStatus from '../components/home/CurrentStatus/CurrentStatus'
import QuickContact from '../components/home/QuickContact/QuickContact'
import { FaCode, FaReact, FaTools } from 'react-icons/fa'
import { projects } from '../data/projects'
import PageTransition from '@/components/layout/PageTransition/PageTransition'

export default function HomePage() {
    const techCategories = [
        {
            category: 'Languages',
            icon: <FaCode />,
            technologies: ['JavaScript', 'TypeScript', 'HTML', 'CSS']
        },
        {
            category: 'Frameworks & Libraries',
            icon: <FaReact />,
            technologies: ['React', 'Next.js', 'Node.js', 'Express']
        },
        {
            category: 'Tools & Platforms',
            icon: <FaTools />,
            technologies: ['Git', 'Figma', 'Vite', 'PostgreSQL']
        }
    ]

    return (
        <PageTransition>
            <Hero />
            <FeaturedProjects projects={projects} />
            <TechnicalExpertise categories={techCategories} />
            <CurrentStatus />
            <QuickContact />
        </PageTransition>
    )
}