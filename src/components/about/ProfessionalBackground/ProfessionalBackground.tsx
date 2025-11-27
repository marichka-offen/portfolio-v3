import { motion, useReducedMotion } from 'framer-motion'
import './ProfessionalBackground.scss'

interface Role {
    company: string
    role: string
    period: string
    technologies: string[]
    achievements: string[]
}

interface ProfessionalBackgroundProps {
    roles: Role[]
}

export default function ProfessionalBackground({ roles }: ProfessionalBackgroundProps) {
    const shouldReduceMotion = useReducedMotion()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
                delayChildren: shouldReduceMotion ? 0 : 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : {
                    type: 'spring' as const,
                    stiffness: 100,
                    damping: 15,
                    mass: 1,
                },
        },
    }

    return (
        <section className="professional-background">
            <h2 className="professional-background__heading">Professional Background</h2>

            <motion.div
                className="timeline"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {roles.map((role, index) => (
                    <motion.article key={index} className="timeline-item" variants={itemVariants}>
                        <h3 className="timeline-item__company">{role.company}</h3>

                        <div className="timeline-item__meta">
                            <p className="timeline-item__role">{role.role}</p>
                            <p className="timeline-item__period">{role.period}</p>
                        </div>

                        <p className="timeline-item__technologies">
                            <strong>Technologies:</strong>{' '}
                            <span className="timeline-item__tech-list">
                                {role.technologies.join(', ')}
                            </span>
                        </p>

                        <ul className="timeline-item__achievements">
                            {role.achievements.map((achievement, idx) => (
                                <li key={idx} className="timeline-item__achievement">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    )
}