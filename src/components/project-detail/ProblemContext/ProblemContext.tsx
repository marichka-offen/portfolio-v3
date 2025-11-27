import { motion, useReducedMotion } from 'framer-motion'
import './ProblemContext.scss'

interface ProblemContextProps {
    problem?: {
        context?: string
        challenge?: string
        constraints?: string[]
    }
}

export default function ProblemContext({ problem }: ProblemContextProps) {
    const shouldReduceMotion = useReducedMotion()

    if (!problem) return null

    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
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
                },
        },
    }

    return (
        <motion.section
            className="problem-context"
            variants={containerVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 'some' }}
        >
            <div className="problem-context__container">
                <h2 className="problem-context__heading">The Problem</h2>

                {problem.context && (
                    <p className="problem-context__text">{problem.context}</p>
                )}

                {problem.challenge && (
                    <p className="problem-context__text">
                        <strong>Key Challenge:</strong> {problem.challenge}
                    </p>
                )}

                {problem.constraints && problem.constraints.length > 0 && (
                    <p className="problem-context__text">
                        <strong>Constraints:</strong> {problem.constraints.join(', ')}
                    </p>
                )}
            </div>
        </motion.section>
    )
}