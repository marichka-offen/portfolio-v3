import Badge from '../Badge/Badge'
import TechStack from '../TechStack/TechStack'
import './ProjectCard.scss'

interface ProjectCardProps {
    id: string
    title: string
    slug: string
    tagline: string
    role: string
    timeline: string
    technologies: string[]
    status: string
    url?: string
    categories: string[]
    summary: string
    imageType?: string
    imagePlaceholder?: string
    highlight?: boolean
}

const ExternalIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
            d="M10.5 7.5v3.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75H6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M8.25 1.75h4.5v4.5M12 2.5L7 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default function ProjectCard({
    title,
    tagline,
    technologies,
    url,
    imagePlaceholder,
    highlight
}: ProjectCardProps) {
    return (
        <article className="project-card-compact">
            {highlight && (
                <Badge variant="highlight" size="sm" className="project-card-compact__badge">
                    Volunteer
                </Badge>
            )}

            <div className="project-card-compact__icon-area">
                <div className="project-card-compact__icon" aria-hidden="true">
                    {imagePlaceholder}
                </div>

                {url && (
                    <a
                        href={url}
                        className="project-card-compact__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${title} live site`}
                    >
                        <div className="project-card-compact__link-icon">
                            <ExternalIcon />
                        </div>
                    </a>
                )}
            </div>

            <div className="project-card-compact__content">
                <h3 className="project-card-compact__title">{title}</h3>
                <p className="project-card-compact__tagline">{tagline}</p>

                <TechStack
                    technologies={technologies}
                    maxVisible={2}
                    variant="compact"
                    className="project-card-compact__tech"
                />
            </div>
        </article>
    )
}
