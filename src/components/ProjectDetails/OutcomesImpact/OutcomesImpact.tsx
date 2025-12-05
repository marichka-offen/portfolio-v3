import { motion, useReducedMotion } from 'framer-motion'
import './OutcomesImpact.scss'

interface OutcomesImpactProps {
    outcomes?: {
        metrics?: string[]
        learnings?: string[]
    }
}

export default function OutcomesImpact({ outcomes }: OutcomesImpactProps) {
    const shouldReduceMotion = useReducedMotion()

    if (!outcomes) return null

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
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
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
        <section className="outcomes-impact">
            <h2 className="outcomes-impact__heading">Outcomes & Impact</h2>

            {outcomes.metrics && outcomes.metrics.length > 0 && (
                <motion.div
                    className="outcomes-impact__metrics"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {outcomes.metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            className="outcomes-impact__metric"
                            variants={itemVariants}
                        >
                            <p className="outcomes-impact__metric-value">{metric}</p>
                        </motion.div>
                    ))}
                </motion.div>
            )}

            {outcomes.learnings && outcomes.learnings.length > 0 && (
                <motion.div
                    className="outcomes-impact__learnings"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="outcomes-impact__learnings-title">Key Learnings</h3>
                    <ul className="outcomes-impact__learnings-list">
                        {outcomes.learnings.map((learning, index) => (
                            <li key={index} className="outcomes-impact__learning">
                                {learning}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </section>
    )
}