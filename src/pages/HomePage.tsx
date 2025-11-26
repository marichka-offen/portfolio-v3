import Hero from '../components/home/Hero'
import FeaturedProjects from '../components/home/FeaturedProjects'
import TechnicalExpertise from '../components/home/TechnicalExpertise'
import CurrentStatus from '../components/home/CurrentStatus'
import QuickContact from '../components/home/QuickContact'
import { projects } from '../data/projects'

export default function HomePage() {
    const techCategories = [
        {
            category: '[CATEGORY_1]',
            technologies: ['[TECH_1]', '[TECH_2]', '[TECH_3]']
        },
        {
            category: '[CATEGORY_2]',
            technologies: ['[TECH_4]', '[TECH_5]', '[TECH_6]']
        },
        {
            category: '[CATEGORY_3]',
            technologies: ['[TECH_7]', '[TECH_8]', '[TECH_9]']
        }
    ]

    return (
        <>
            <Hero />
            <FeaturedProjects projects={projects} />
            <TechnicalExpertise categories={techCategories} />
            <CurrentStatus />
            <QuickContact />
        </>
    )
}