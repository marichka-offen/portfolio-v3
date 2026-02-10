import Badge from '../Badge/Badge'
import './TechStack.scss'

export interface TechStackProps {
    technologies: string[]
    maxVisible?: number
    variant?: 'default' | 'compact'
    className?: string
    rainbowColors?: boolean
}

// Pastel rainbow color cycle
const rainbowColors = ['rose', 'coral', 'sunny', 'mint', 'sky', 'lavender', 'violet'] as const

export default function TechStack({
    technologies,
    maxVisible = 4,
    variant = 'default',
    className = '',
    rainbowColors: useRainbow = true
}: TechStackProps) {
    const visibleTechs = technologies.slice(0, maxVisible)
    const remainingCount = technologies.length - maxVisible
    const hasMore = remainingCount > 0

    const getBadgeVariant = (index: number) => {
        if (!useRainbow) return 'tech'
        return rainbowColors[index % rainbowColors.length]
    }

    return (
        <ul
            className={`tech-stack tech-stack--${variant} ${className}`}
            role="list"
            aria-label="Technologies used"
        >
            {visibleTechs.map((tech, index) => (
                <li key={tech}>
                    <Badge variant={getBadgeVariant(index)} size="sm">
                        {tech}
                    </Badge>
                </li>
            ))}
            {hasMore && (
                <li>
                    <Badge variant={getBadgeVariant(visibleTechs.length)} size="sm">
                        <span className="tech-stack__more">+{remainingCount}</span>
                    </Badge>
                </li>
            )}
        </ul>
    )
}
