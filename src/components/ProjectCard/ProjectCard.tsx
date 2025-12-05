import Badge from '../Badge/Badge'
import TechStack from '../TechStack/TechStack'
import { MdFilterFrames } from "react-icons/md"
import { IoIosJournal } from "react-icons/io"
import { PiCoffee } from "react-icons/pi"
import { RiBrushAiFill } from "react-icons/ri"
import { GiLipstick } from "react-icons/gi"
import { LuExternalLink } from "react-icons/lu"
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
    categories: string[]
    summary: string
    imageType?: string
    imagePlaceholder?: string
    highlight?: boolean
}

function NUIcon() {
    return (
        <svg data-bbox="0 0 244 269" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 269" height="269" width="244"
            data-type="color">
            <g>
                <path fill="#2655A0"
                    d="M129.764 50.353C122.801 28.768 126.239 0 126.239 0s-23.225 10.574-39.275 36.254c-20.141 32.226-13.092 77.208-7.05 95.671l63.949 29.708 33.233-33.233s-37.261-46.828-47.332-78.047"
                    data-color="2" />
                <path fill="#FCD302"
                    d="M197.741 178.753c20.644-49.346 45.821-66.969 45.821-66.969s-57.563-10.063-86.607 9.063c-41.29 27.191-44.311 72.005-66.97 102.217-21.148 28.198-47.332 40.786-47.332 40.786s60.281 11.587 92.146 0c44.311-16.113 51.024-56.609 62.942-85.097"
                    data-color="3" />
                <path fill="#0177BD"
                    d="M5.895 119.84c-19.342-37.765 15.106-90.635 15.106-90.635s8.56 32.73 39.78 56.899c27.595 21.365 56.526 27.19 82.578 62.437 34.612 46.829-6.546 106.749-6.546 106.749s0-30.419-41.793-59.92c-41.923-29.593-67.976-34.24-89.125-75.53"
                    data-color="4" />
            </g>
        </svg>
    )
}

const iconMap: Record<string, ComponentType<{ className?: string; size?: number }>> = {
    'FB': MdFilterFrames,
    'PS': IoIosJournal,
    'PC': PiCoffee,
    'RB': RiBrushAiFill,
    'HL': GiLipstick,
    'NU': NUIcon
}


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
                    >
                        <div className="project-card-compact__link-icon">
                            <LuExternalLink />
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
