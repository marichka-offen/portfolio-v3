
import BeyondTheCode from '@/components/about/BeyondTheCode/BeyondTheCode'
import CurrentlyExploring from '@/components/about/CurrentlyExploring/CurrentlyExploring'
import ProfessionalBackground from '@/components/about/ProfessionalBackground/ProfessionalBackground'
import ProfessionalSummary from '@/components/about/ProfessionalSummary/ProfessionalSummary'
import WhatIDoBest from '@/components/about/WhatIDoBest/WhatIDoBest'
import PageTransition from '@/components/layout/PageTransition/PageTransition'
import TechnicalApproach from '@/components/about/TechnicalApproach/TechnicalApproach'
import './AboutPage.scss'
import Connect from '@/components/about/Connect/Connect'

export default function AboutPage() {
    const competencies = [
        {
            skill: 'Performance Optimization',
            context: 'Reducing bundle sizes, implementing code splitting, and achieving 90+ Lighthouse scores on production applications.'
        },
        {
            skill: 'Accessible Component Libraries',
            context: 'Building WCAG 2.1 AA-compliant React components with full keyboard navigation and screen reader support.'
        },
        {
            skill: 'Complex State Management',
            context: 'Architecting scalable state solutions using Redux, Zustand, and React Query for applications with 50+ components.'
        },
        {
            skill: 'API Integration',
            context: 'Connecting front-end applications to REST and GraphQL APIs with proper error handling and loading states.'
        },
        {
            skill: 'Design System Implementation',
            context: 'Translating Figma designs into production-ready component libraries used across multiple teams.'
        }
    ]

    const roles = [
        {
            company: 'Tech Company Inc.',
            role: 'Senior Front-End Engineer',
            period: '2022 - Present',
            technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
            achievements: [
                'Led front-end architecture for redesigned dashboard serving 100K+ users',
                'Reduced initial page load time by 60% through code splitting and lazy loading',
                'Mentored 3 junior engineers on React best practices and testing strategies',
                'Implemented comprehensive accessibility audit improving WCAG compliance from 70% to 98%'
            ]
        },
        {
            company: 'Startup XYZ',
            role: 'Front-End Engineer',
            period: '2020 - 2022',
            technologies: ['React', 'JavaScript', 'Redux', 'Sass', 'REST APIs'],
            achievements: [
                'Built responsive web application from scratch used by 50K active users',
                'Established component library and design system adopted company-wide',
                'Improved Core Web Vitals scores from red to green across all pages',
                'Collaborated with design team to implement pixel-perfect UI implementations'
            ]
        }
    ]

    const activities = [
        {
            type: 'Writing',
            title: 'Technical blog on web performance optimization',
            url: 'https://yourblog.com'
        },
        {
            type: 'Open Source',
            title: 'Contributor to React accessibility tools',
            url: 'https://github.com/marichka-offen'
        },
        {
            type: 'Speaking',
            title: 'Conference talk: "Building Accessible React Applications"',
            url: 'https://youtube.com/watch?v=example'
        }
    ]

    const explorations = [
        {
            technology: 'Three.js',
            purpose: 'Exploring 3D web experiences and interactive data visualizations'
        },
        {
            technology: 'Rust + WebAssembly',
            purpose: 'Learning performance-critical computation for browser applications'
        }
    ]

    return (
        <PageTransition>
            <div className="about-page">
                <header className="about-page__header">
                    <h1 className="about-page__title">About Me</h1>
                </header>

                <ProfessionalSummary />
                <WhatIDoBest competencies={competencies} />
                <TechnicalApproach />
                <ProfessionalBackground roles={roles} />
                <BeyondTheCode activities={activities} />
                <CurrentlyExploring explorations={explorations} />
                <Connect />
            </div>
        </PageTransition>
    )
}