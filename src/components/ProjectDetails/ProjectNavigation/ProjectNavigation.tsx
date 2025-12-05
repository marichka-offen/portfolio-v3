import { Link } from 'react-router-dom'
import './ProjectNavigation.scss'

interface Project {
    slug: string
    name: string
    summary: string
}

interface ProjectNavigationProps {
    previousProject?: Project
    nextProject?: Project
}

export default function ProjectNavigation({
    previousProject,
    nextProject,
}: ProjectNavigationProps) {
    if (!previousProject && !nextProject) return null

    return (
        <nav className="project-navigation" aria-label="Project navigation">
            <h2 className="project-navigation__heading">More Projects</h2>

            <div className="project-navigation__links">
                {previousProject && (
                    <div>
                        <Link
                            to={`/projects/${previousProject.slug}`}
                            className="project-navigation__link"
                        >
                            <span className="project-navigation__direction">← Previous</span>
                            <span className="project-navigation__name">{previousProject.name}</span>
                            <p className="project-navigation__summary">{previousProject.summary}</p>
                        </Link>
                    </div>
                )}

                {nextProject && (
                    <div>
                        <Link
                            to={`/projects/${nextProject.slug}`}
                            className="project-navigation__link"
                        >
                            <span className="project-navigation__direction">Next →</span>
                            <span className="project-navigation__name">{nextProject.name}</span>
                            <p className="project-navigation__summary">{nextProject.summary}</p>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
