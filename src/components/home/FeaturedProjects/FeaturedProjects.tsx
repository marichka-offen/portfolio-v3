import ProjectCard from '@/components/projects/ProjectCard/ProjectCard'
import type { Project } from '@/types/project'
import './FeaturedProjects.scss'

interface FeaturedProjectsProps {
    projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

    return (
        <section className="featured-projects" aria-labelledby="featured-projects-heading">
            <h2 id="featured-projects-heading" className="featured-projects__heading">
                Featured Projects
            </h2>

            <ul className="featured-projects__grid">
                {featuredProjects.map((project, index) => (
                    <li key={project.id} className="featured-projects__item">
                        <ProjectCard project={project} index={index} />
                    </li>
                ))}
            </ul>
        </section>
    )
}