import { motion, useReducedMotion } from 'framer-motion'
import './TechnicalApproach.scss'

interface Decision {
    decision: string
    rationale: string
}

interface TechnicalApproachProps {
    decisions?: Decision[]
}

export default function TechnicalApproach({ decisions }: TechnicalApproachProps) {
    const shouldReduceMotion = useReducedMotion()

    if (!decisions || decisions.length === 0) return null

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
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
        <section className="technical-approach">
            <h2 className="technical-approach__heading">Technical Approach</h2>

            <motion.ul
                className="technical-approach__list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {decisions.map((decision, index) => (
                    <motion.li key={index} className="technical-approach__item" variants={itemVariants}>
                        <h3 className="technical-approach__decision">{decision.decision}</h3>
                        <p className="technical-approach__rationale">{decision.rationale}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}