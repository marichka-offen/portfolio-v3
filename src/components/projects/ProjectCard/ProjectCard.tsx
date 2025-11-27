import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import type { Project } from '@/types/project'
import './ProjectCard.scss'

interface ProjectCardProps {
    project: Project
    index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const shouldReduceMotion = useReducedMotion()

    // Animation variants for scroll reveal
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : {
                    type: 'spring' as const,
                    stiffness: 100,
                    damping: 15,
                    mass: 1,
                    delay: index * 0.08,
                },
        },
    }

    // Rest state (not hovering)
    const restAnimation = {
        y: 0,
        scale: 1,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
    }

    // Hover state
    const hoverAnimation = shouldReduceMotion
        ? restAnimation
        : {
            y: -8,
            scale: 1.02,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
            transition: {
                type: 'spring' as const,
                stiffness: 200,
                damping: 20,
                mass: 0.8,
            },
        }

    return (
        <motion.article
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            animate={restAnimation}
            whileHover={hoverAnimation}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                mass: 0.8,
            }}
        >
            <h3 className="project-card__heading">
                <Link to={`/projects/${project.slug}`} className="project-card__link">
                    {project.name}
                </Link>
            </h3>

            <p className="project-card__description">{project.summary}</p>

            <p className="project-card__tech">
                <strong>Tech:</strong>{' '}
                <span className="project-card__tech-list">
                    {project.technologies.slice(0, 5).join(', ')}
                </span>
            </p>

            {project.outcomes?.metrics && project.outcomes.metrics[0] && (
                <p className="project-card__metric">{project.outcomes.metrics[0]}</p>
            )}

            {project.role && (
                <p className="project-card__role">
                    <strong>Role:</strong> {project.role}
                </p>
            )}
        </motion.article>
    )
}
