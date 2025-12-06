import { useState } from 'react'
import type ProjectCardData from '@/types/project'
import Badge from '../Badge/Badge'
import TechStack from '../TechStack/TechStack'
import { ArrowRight, ChevronDown } from '@/assets/icons'
import './CaseStudyCard.scss'

export interface CaseStudyCardProps {
    project: ProjectCardData
    index: number
}

export default function CaseStudyCard({ project, index }: CaseStudyCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const imagePosition = index % 2 === 0 ? 'left' : 'right'

    const handleExpandClick = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsExpanded(!isExpanded)
    }

    return (
        <div
            className={`case-study-card ${isExpanded ? 'case-study-card--expanded' : ''}`}
            data-image-position={imagePosition}
        >
            <div className="case-study-card__image-side">
                <div className="case-study-card__image-wrapper">
                    <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        className="case-study-card__image"
                    />
                </div>
            </div>

            <div className="case-study-card__content-side">
                <div className="case-study-card__content">
                    <Badge variant="status" size="sm">
                        {project.status}
                    </Badge>

                    <h3 className="case-study-card__title">{project.title}</h3>

                    <p className="case-study-card__summary">{project.card.summary}</p>

                    {project.tagline && (
                        <p className="case-study-card__tagline">{project.tagline}</p>
                    )}

                    <TechStack
                        technologies={project.technologies}
                        maxVisible={3}
                        className="case-study-card__tech"
                    />

                    <div className="case-study-card__actions">
                        {project.card.challengeTeaser && (
                            <button
                                onClick={handleExpandClick}
                                className="case-study-card__expand-btn"
                                aria-expanded={isExpanded}
                                aria-controls={`case-study-details-${project.id}`}
                                type="button"
                            >
                                <span>{isExpanded ? 'Hide Details' : 'Behind the Scenes'}</span>
                                <div style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', display: 'flex' }}>
                                    <ChevronDown />
                                </div>
                            </button>
                        )}

                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="case-study-card__cta"
                            aria-label={`View ${project.title} live project`}
                        >
                            <span className="case-study-card__cta-text">
                                View Live
                            </span>
                            <ArrowRight />
                        </a>
                    </div>
                </div>
            </div>

            {isExpanded && project.card.challengeTeaser && (
                <div
                    id={`case-study-details-${project.id}`}
                    className="case-study-card__details"
                >
                    <div className="case-study-card__details-content">
                        <h4 className="case-study-card__details-title">
                            <span className="case-study-card__code-comment">// Challenge</span>
                        </h4>
                        <p className="case-study-card__challenge">
                            {project.card.challengeTeaser}
                        </p>

                        {project.card.techHighlights && project.card.techHighlights.length > 0 && (
                            <>
                                <h4 className="case-study-card__details-title">
                                    <span className="case-study-card__code-comment">// Key Technical Aspects</span>
                                </h4>
                                <ul className="case-study-card__highlights">
                                    {project.card.techHighlights.map((highlight, i) => (
                                        <li key={i} className="case-study-card__highlight-item">
                                            <span className="case-study-card__bullet">→</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <a
                            href={`/case-studies/${project.slug}`}
                            className="case-study-card__full-study-link"
                            aria-label={`Read full case study for ${project.title}`}
                        >
                            <span>Read Full Case Study</span>
                            <ArrowRight />
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}
