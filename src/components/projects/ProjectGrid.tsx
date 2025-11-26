import type { Project } from '@/types/project'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
    projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <ul>
            {projects.map((project) => (
                <li key={project.id}>
                    <ProjectCard project={project} />
                </li>
            ))}
        </ul>
    )
}