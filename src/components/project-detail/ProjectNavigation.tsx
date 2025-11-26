import { Link } from 'react-router-dom'

interface ProjectNavigationProps {
    previousProject?: {
        slug: string
        name: string
    }
    nextProject?: {
        slug: string
        name: string
    }
}

export default function ProjectNavigation({
    previousProject,
    nextProject
}: ProjectNavigationProps) {
    return (
        <nav aria-label="Project navigation">
            <Link to="/projects">[BACK_TO_ALL_PROJECTS_TEXT]</Link>

            {(previousProject || nextProject) && (
                <ul>
                    {previousProject && (
                        <li>
                            <Link to={`/projects/${previousProject.slug}`}>
                                ← {previousProject.name}
                            </Link>
                        </li>
                    )}
                    {nextProject && (
                        <li>
                            <Link to={`/projects/${nextProject.slug}`}>
                                {nextProject.name} →
                            </Link>
                        </li>
                    )}
                </ul>
            )}
        </nav>
    )
}