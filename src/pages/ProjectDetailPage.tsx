import { useParams } from 'react-router-dom'
import ProjectHeader from '../components/project-detail/ProjectHeader'
import ProblemContext from '../components/project-detail/ProblemContext'
import TechnicalApproach from '../components/project-detail/TechnicalApproach'
import TechnicalImplementation from '../components/project-detail/TechnicalImplementation'
import OutcomesImpact from '../components/project-detail/OutcomesImpact'
import LiveDemoCode from '../components/project-detail/LiveDemoCode'
import TechnologiesUsed from '../components/project-detail/TechnologiesUsed'
import ProjectNavigation from '../components/project-detail/ProjectNavigation'
import { projects } from '../data/projects'
import PageTransition from '@/components/layout/PageTransition/PageTransition'

export default function ProjectDetailPage() {
    const { slug } = useParams<{ slug: string }>()

    // Find project by slug (placeholder logic)
    const project = projects.find(p => p.slug === slug)

    if (!project) {
        return (
            <div>
                <h1>Project Not Found</h1>
                <p>[PROJECT_NOT_FOUND_MESSAGE]</p>
            </div>
        )
    }

    // Placeholder for prev/next project logic
    const currentIndex = projects.findIndex(p => p.id === project.id)
    const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined

    return (
        <PageTransition>
            <article>
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

                <ProjectNavigation
                    previousProject={previousProject}
                    nextProject={nextProject}
                />
            </article>
        </PageTransition>
    )
}