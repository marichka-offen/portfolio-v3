import Hero from '../components/home/Hero/Hero'
import { featuredProjects } from '../data/projects'
import PageTransition from '@/components/layout/PageTransition/PageTransition'
import FeaturedProjects from '@/components/home/FeaturedProjects/FeaturedProjects'
import ProjectsGrid from '@/components/ProjectsGrid'
import BrandMarquee from '@/components/home/BrandMarquee'
import CurrentStatus from '@/components/home/CurrentStatus/CurrentStatus'
import QuickContact from '@/components/home/QuickContact/QuickContact'

export default function HomePage() {
    return (
        <PageTransition>
            <Hero />
            <FeaturedProjects projects={featuredProjects} />
            {/* section to display skills. Use the most used approach instead of mastery level. One of the suggestions, constellation style */}
            <ProjectsGrid />
            <BrandMarquee />
            <CurrentStatus />
            <QuickContact />
        </PageTransition>
    )
}