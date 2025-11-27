import { motion, useReducedMotion } from 'framer-motion'
import './WhatIDoBest.scss'

interface Competency {
    skill: string
    context?: string
}

interface WhatIDoBestProps {
    competencies: Competency[]
}

export default function WhatIDoBest({ competencies }: WhatIDoBestProps) {
    const shouldReduceMotion = useReducedMotion()

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
        hidden: { opacity: 0, x: -20 },
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
        <section className="what-i-do-best">
            <h2 className="what-i-do-best__heading">What I Do Best</h2>

            <motion.ul
                className="what-i-do-best__list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {competencies.map((competency, index) => (
                    <motion.li
                        key={index}
                        className="what-i-do-best__item"
                        variants={itemVariants}
                    >
                        <h3 className="what-i-do-best__skill">{competency.skill}</h3>
                        {competency.context && (
                            <p className="what-i-do-best__context">{competency.context}</p>
                        )}
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}