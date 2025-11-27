import { motion, useReducedMotion } from 'framer-motion'
import './CurrentlyExploring.scss'

interface Exploration {
    technology: string
    purpose: string
}

interface CurrentlyExploringProps {
    explorations: Exploration[]
}

export default function CurrentlyExploring({ explorations }: CurrentlyExploringProps) {
    const shouldReduceMotion = useReducedMotion()

    if (explorations.length === 0) return null

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
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
        <section className="currently-exploring">
            <h2 className="currently-exploring__heading">Currently Exploring</h2>

            <motion.ul
                className="currently-exploring__list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {explorations.map((exploration, index) => (
                    <motion.li key={index} className="currently-exploring__item" variants={itemVariants}>
                        <h3 className="currently-exploring__technology">{exploration.technology}</h3>
                        <p className="currently-exploring__purpose">{exploration.purpose}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}