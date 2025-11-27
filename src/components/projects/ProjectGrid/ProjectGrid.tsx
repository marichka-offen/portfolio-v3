import type { Project } from '@/types/project'
import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectGrid.scss'

interface ProjectGridProps {
    projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <ul className="project-grid">
            {projects.map((project, index) => (
                <li key={project.id} className="project-grid__item">
                    <ProjectCard project={project} index={index} />
                </li>
            ))}
        </ul>
    )
}