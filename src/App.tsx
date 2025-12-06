import { Routes, Route } from 'react-router-dom'
import SkipLink from '@/components/SkipLink/SkipLink'
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress'
import StringNav from '@/components/StringNav/StringNav'
import BrandMarquee from '@/components/BrandMarquee/BrandMarquee'
import CareerTimeline from '@/components/CareerTimeline/CareerTimeline'
import CurrentStatus from '@/components/CurrentStatus/CurrentStatus'
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import Hero from '@/components/Hero/Hero'
import HowIWork from '@/components/HowIWork/HowIWork'
import ProjectsGrid from '@/components/ProjectGrid/ProjectsGrid'
import SectionDivider from '@/components/SectionDivider/SectionDivider'
import CaseStudy from '@/pages/CaseStudy/CaseStudy'
import '@/App.scss'
import GradientBackground from './components/GradientBackground/GradientBackgroundWebGL'

function HomePage() {
    return (
        <>
            <Hero />
            <SectionDivider label="Process" />
            <HowIWork />
            <SectionDivider label="Journey" />
            <CareerTimeline />
            <SectionDivider label="Work" />
            <FeaturedProjects />
            <ProjectsGrid />
            <BrandMarquee />
            <SectionDivider label="Connect" />
            <CurrentStatus />
        </>
    )
}

export default function App() {
    return (
        <div className="app">
            <SkipLink />
            <ScrollProgress />
            <StringNav />
            <GradientBackground />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/case-studies/:slug" element={<CaseStudy />} />
                </Routes>
            </main>
        </div>
    )
}
