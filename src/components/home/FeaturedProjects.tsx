import type { Project } from '@/types/project'
import { Link } from 'react-router-dom'

interface FeaturedProjectsProps {
    projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

    return (
        <section aria-labelledby="featured-projects-heading">
            <h2 id="featured-projects-heading">[SECTION_HEADING]</h2>

            <ul>
                {featuredProjects.map((project) => (
                    <li key={project.id}>
                        <article>
                            <h3>
                                <Link to={`/projects/${project.slug}`}>
                                    {project.name}
                                </Link>
                            </h3>

                            <p>{project.summary}</p>

                            <p>
                                <strong>Tech:</strong> {project.technologies.join(', ')}
                            </p>

                            {project.outcomes.metrics && project.outcomes.metrics[0] && (
                                <p>{project.outcomes.metrics[0]}</p>
                            )}
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    )
}