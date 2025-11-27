import { useParams, Navigate } from 'react-router-dom'
import PageTransition from '@/components/layout/PageTransition/PageTransition'
import ProjectHeader from '@/components/project-detail/ProjectHeader/ProjectHeader'
import ProblemContext from '@/components/project-detail/ProblemContext/ProblemContext'
import TechnicalApproach from '@/components/project-detail/TechnicalApproach/TechnicalApproach'
import TechnicalImplementation from '@/components/project-detail/TechnicalImplementation/TechnicalImplementation'
import OutcomesImpact from '@/components/project-detail/OutcomesImpact/OutcomesImpact'
import LiveDemoCode from '@/components/project-detail/LiveDemoCode/LiveDemoCode'
import TechnologiesUsed from '@/components/project-detail/TechnologiesUsed/TechnologiesUsed'
import ProjectNavigation from '@/components/project-detail/ProjectNavigation/ProjectNavigation'
import { projects } from '../data/projects'

export default function ProjectDetailPage() {
    const { slug } = useParams<{ slug: string }>()

    // Find project by slug
    const project = projects.find((p) => p.slug === slug)

    // If project not found, redirect to projects page
    if (!project) {
        return <Navigate to="/projects" replace />
    }

    // Find prev/next projects
    const currentIndex = projects.findIndex((p) => p.id === project.id)
    const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined
    const nextProject =
        currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined

    return (
        <PageTransition>
            <article key={project.id}>
                <ProjectHeader
                    name={project.name}
                    summary={project.summary}
                    role={project.role}
                    timeline={project.timeline}
                    status={project.status}
                />

                <ProblemContext problem={project.problem} />

                <TechnicalApproach decisions={project.approach} />

                <TechnicalImplementation achievements={project.implementation} />

                <OutcomesImpact outcomes={project.outcomes} />

                <LiveDemoCode
                    demoUrl={project.demoUrl}
                    repoUrl={project.repoUrl}
                    isPrivate={project.isPrivate}
                />

                <TechnologiesUsed categories={project.technologiesByCategory} />

                <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
            </article>
        </PageTransition>
    )
}