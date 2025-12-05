import { motion, useReducedMotion } from 'framer-motion'
import './TechnicalImplementation.scss'

interface TechnicalImplementationProps {
    achievements?: string[]
}

export default function TechnicalImplementation({ achievements }: TechnicalImplementationProps) {
    const shouldReduceMotion = useReducedMotion()

    if (!achievements || achievements.length === 0) return null

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.08,
                delayChildren: shouldReduceMotion ? 0 : 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : {
                    type: 'spring' as const,
                    stiffness: 200,
                    damping: 20,
                    mass: 0.8,
                },
        },
    }

    return (
        <section className="technical-implementation">
            <div className="technical-implementation__container">
                <h2 className="technical-implementation__heading">Implementation Highlights</h2>

                <motion.ul
                    className="technical-implementation__list"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {achievements.map((achievement, index) => (
                        <motion.li
                            key={index}
                            className="technical-implementation__item"
                            variants={itemVariants}
                        >
                            {achievement}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    )
}