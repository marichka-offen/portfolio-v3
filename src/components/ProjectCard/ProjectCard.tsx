import type { ProjectData } from "@/types"
import './ProjectCard.scss'

export default function ProjectCard({ project }: { project: ProjectData }) {
    return (
        <article className="project-card">
            <h3 className="project-card__title">{project.title}</h3>
        </article>
    )
}