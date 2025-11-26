import type { Project } from '@/types/project'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article>
            <h3>
                <Link to={`/projects/${project.slug}`}>
                    {project.name}
                </Link>
            </h3>

            <p>{project.summary}</p>

            <p>
                <strong>Tech:</strong> {project.technologies.slice(0, 5).join(', ')}
            </p>

            {project.outcomes.metrics && project.outcomes.metrics[0] && (
                <p>{project.outcomes.metrics[0]}</p>
            )}

            {project.role && (
                <p>
                    <strong>Role:</strong> {project.role}
                </p>
            )}
        </article>
    )
}