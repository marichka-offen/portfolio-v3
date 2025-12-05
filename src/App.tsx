import SkipLink from '@/components/SkipLink/SkipLink'
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress'
import StringNav from '@/components/StringNav/StringNav'
import GradientBackground from '@/components/GradientBackground/GradientBackground'
import BrandMarquee from '@/components/BrandMarquee/BrandMarquee'
import CareerTimeline from '@/components/CareerTimeline/CareerTimeline'
import CurrentStatus from '@/components/CurrentStatus/CurrentStatus'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Hero from '@/components/Hero/Hero'
import HowIWork from '@/components/HowIWork/HowIWork'
import ProjectsGrid from '@/components/ProjectGrid/ProjectsGrid'
import '@/App.scss'

export default function App() {
    return (
        <div className="app">
            {/* <SkipLink /> */}
            <ScrollProgress />
            <StringNav />
            <GradientBackground />
            <main id="main-content">
                <Hero />
                <HowIWork />
                <CareerTimeline />
                <FeaturedProjects />
                <ProjectsGrid />
                <BrandMarquee />
                <CurrentStatus />
            </main>
        </div>
    )
}
