import Hero from '../components/home/Hero/Hero'
import { featuredProjects } from '../data/projects'
import PageTransition from '@/components/layout/PageTransition/PageTransition'
import FeaturedProjects from '@/components/home/FeaturedProjects/FeaturedProjects'
import ProjectsGrid from '@/components/ProjectsGrid'
import BrandMarquee from '@/components/home/BrandMarquee'
import CurrentStatus from '@/components/home/CurrentStatus/CurrentStatus'
import QuickContact from '@/components/home/QuickContact/QuickContact'
import TechnicalExpertise from '@/components/home/TechnicalExpertise/TechnicalExpertise'

// Skills data for Technology Radar
// Rings: adopt (currently using) → trial (exploring) → assess (past projects)
const skillsData = [
    {
        category: "Engineering",
        skills: [
            { name: "React", ring: "adopt" as const },
            { name: "TypeScript", ring: "adopt" as const },
            { name: "JavaScript", ring: "adopt" as const },
            { name: "CSS/SCSS", ring: "adopt" as const },
            { name: "Tailwind", ring: "adopt" as const },
            { name: "Liquid", ring: "trial" as const },
            { name: "Remix", ring: "trial" as const },
            { name: "Vue", ring: "assess" as const },
            { name: "Node.js", ring: "assess" as const },
        ]
    },
    {
        category: "UX & Design",
        skills: [
            { name: "A11y", ring: "adopt" as const },
            { name: "Figma", ring: "adopt" as const },
            { name: "Miro", ring: "adopt" as const },
            { name: "Sketch", ring: "assess" as const },
        ]
    },
    {
        category: "Shopify",
        skills: [
            { name: "Shopify Liquid", ring: "trial" as const },
            { name: "Shopify CLI", ring: "trial" as const },
            { name: "Algolia", ring: "trial" as const },
            { name: "Metafields API", ring: "trial" as const },
            { name: "Lighthouse", ring: "adopt" as const },
        ]
    },
    {
        category: "Systems",
        skills: [
            { name: "REST APIs", ring: "adopt" as const },
            { name: "Vite", ring: "adopt" as const },
            { name: "Redux", ring: "assess" as const },
            { name: "GraphQL", ring: "assess" as const },
            { name: "Webpack", ring: "assess" as const },
        ]
    },
    {
        category: "Collaboration",
        skills: [
            { name: "GitHub", ring: "adopt" as const },
            { name: "Asana", ring: "adopt" as const },
            { name: "Slack", ring: "adopt" as const },
            { name: "Confluence", ring: "assess" as const },
            { name: "Notion", ring: "assess" as const },
        ]
    },
    {
        category: "Tooling",
        skills: [
            { name: "Git", ring: "adopt" as const },
            { name: "VS Code", ring: "adopt" as const },
            { name: "DevTools", ring: "adopt" as const },
            { name: "ESLint", ring: "trial" as const },
            { name: "Visual Studio", ring: "assess" as const },
            { name: "C#", ring: "assess" as const },
            { name: "MSSQL", ring: "assess" as const },
            { name: "PostgreSQL", ring: "assess" as const },
            { name: ".NET", ring: "assess" as const },
            { name: "Blazor", ring: "assess" as const },
        ]
    },
]

export default function HomePage() {
    return (
        <PageTransition>
            <Hero />
            <FeaturedProjects projects={featuredProjects} />
            <TechnicalExpertise categories={skillsData} />
            <ProjectsGrid />
            <BrandMarquee />
            <CurrentStatus />
            <QuickContact />
        </PageTransition>
    )
}