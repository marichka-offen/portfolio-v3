import Badge from '../Badge/Badge'
import './TechStack.scss'

export interface TechStackProps {
    technologies: string[]
    maxVisible?: number
    variant?: 'default' | 'compact'
    className?: string
}

export default function TechStack({
    technologies,
    maxVisible = 4,
    variant = 'default',
    className = ''
}: TechStackProps) {
    const visibleTechs = technologies.slice(0, maxVisible)
    const remainingCount = technologies.length - maxVisible
    const hasMore = remainingCount > 0

    return (
        <ul
            className={`tech-stack tech-stack--${variant} ${className}`}
            role="list"
            aria-label="Technologies used"
        >
            {visibleTechs.map((tech) => (
                <li key={tech}>
                    <Badge variant="tech" size="sm">
                        {tech}
                    </Badge>
                </li>
            ))}
            {hasMore && (
                <li>
                    <Badge variant="tech" size="sm">
                        <span className="tech-stack__more">+{remainingCount}</span>
                    </Badge>
                </li>
            )}
        </ul>
    )
}
