import { projectData } from '@/data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectGrid.scss'

export default function ProjectGrid() {
    return (
        <section aria-labelledby="projects-title" className="project-grid">
            <h2 id="projects-title" className="project-grid__title">Projects</h2>

            <div className="project-grid__container">
                {projectData.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    )
}