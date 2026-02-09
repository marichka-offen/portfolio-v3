import Badge from '../Badge/Badge'
import TechStack from '../TechStack/TechStack'
import { MdFilterFrames } from 'react-icons/md'
import { IoIosJournal } from 'react-icons/io'
import { PiCoffeeFill } from 'react-icons/pi'
import { RiBrushAiFill } from 'react-icons/ri'
import { GiLipstick } from 'react-icons/gi'
import { LuExternalLink } from 'react-icons/lu'
import { ArrowRight, NovaUkraine } from '@/assets/icons'
import type { ComponentType } from 'react'

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
    categories?: string[]
    summary?: string
    imageType?: string
    imagePlaceholder?: string
    highlight?: boolean
}

const iconMap: Record<string, ComponentType<{ className?: string; size?: number }>> = {
    'FB': MdFilterFrames,
    'PS': IoIosJournal,
    'PC': PiCoffeeFill,
    'RB': RiBrushAiFill,
    'HL': GiLipstick,
    'NU': NovaUkraine
}


export default function ProjectCard({
    title,
    tagline,
    technologies,
    url,
    summary,
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
                    {imagePlaceholder && (() => {
                        const IconComponent = iconMap[imagePlaceholder]
                        return IconComponent ? <IconComponent size={48} /> : null
                    })()}
                </div>

                {url && (
                    <a
                        href={url}
                        className="project-card-compact__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${title} live site`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="project-card-compact__link-icon">
                            <LuExternalLink />
                        </div>
                    </a>
                )}
            </div>

            <div className="project-card-compact__content">
                <h3 className="project-card-compact__title">{title}</h3>
                {summary && <p className="project-card-compact__summary">{summary}</p>}
                {tagline && <p className="project-card-compact__tagline">{tagline}</p>}

                <TechStack
                    technologies={technologies}
                    maxVisible={technologies.length}
                    variant="compact"
                    className="project-card-compact__tech"
                />

                <a
                    href="#current-status"
                    className="project-card-compact__cta"
                    aria-label={`Contact me about ${title}`}
                >
                    <span className="project-card-compact__cta-text">Ask Me About This</span>
                    <ArrowRight width={16} height={16} />
                </a>
            </div>
        </article>
    )
}
