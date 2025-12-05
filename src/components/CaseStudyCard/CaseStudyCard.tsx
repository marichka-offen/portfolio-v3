import type ProjectCardData from '@/types/project'
import Badge from '../Badge/Badge'
import TechStack from '../TechStack/TechStack'
import './CaseStudyCard.scss'

export interface CaseStudyCardProps {
    project: ProjectCardData
    index: number
}

const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
            d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default function CaseStudyCard({ project, index }: CaseStudyCardProps) {
    // Alternate image position: even (0) = left, odd (1) = right
    const imagePosition = index % 2 === 0 ? 'left' : 'right'

    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="case-study-card"
            data-image-position={imagePosition}
            aria-label={`View ${project.title} project details`}
        >
            {/* Image side */}
            <div className="case-study-card__image-side">
                <div className="case-study-card__image-wrapper">
                    <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        className="case-study-card__image"
                    />
                </div>
            </div>

            {/* Content side */}
            <div className="case-study-card__content-side">
                <div className="case-study-card__content">
                    <Badge variant="status" size="sm">
                        {project.status}
                    </Badge>

                    <h3 className="case-study-card__title">{project.title}</h3>

                    {/* Summary before tagline - users care more about what you built */}
                    <p className="case-study-card__summary">{project.card.summary}</p>

                    {project.tagline && (
                        <p className="case-study-card__tagline">{project.tagline}</p>
                    )}

                    <TechStack
                        technologies={project.technologies}
                        maxVisible={3}
                        className="case-study-card__tech"
                    />

                    <div className="case-study-card__cta">
                        <span className="case-study-card__cta-text">
                            View Project
                        </span>
                        <ArrowIcon />
                    </div>
                </div>
            </div>
        </a>
    )
}
