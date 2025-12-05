import SkipLink from '@/components/SkipLink/SkipLink'
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress'
import StringNav from '@/components/StringNav/StringNav'
import GradientBackground from '@/components/GradientBackground/GradientBackground'
import BrandMarquee from '@/components/BrandMarquee/BrandMarquee'
import CurrentStatus from '@/components/CurrentStatus/CurrentStatus'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Hero from '@/components/Hero/Hero'
import ProjectsGrid from '@/components/ProjectGrid/ProjectsGrid'
import '@/App.scss'

export default function App() {
    return (
        <div className="app">
            <SkipLink />
            <ScrollProgress />
            <StringNav />
            <GradientBackground />
            <main id="main-content">
                <section id="hero">
                    <Hero />
                </section>
                <section id="featured-projects">
                    <FeaturedProjects />
                </section>
                <section id="projects-grid">
                    <ProjectsGrid />
                </section>
                <section id="brand-marquee">
                    <BrandMarquee />
                </section>
                <section id="contact">
                    <CurrentStatus />
                </section>
            </main>
        </div>
    )
}
