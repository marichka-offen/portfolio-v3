import { motion, useReducedMotion } from 'framer-motion'
import './BeyondTheCode.scss'

interface Activity {
    type: string
    title: string
    url: string
}

interface BeyondTheCodeProps {
    activities: Activity[]
}

export default function BeyondTheCode({ activities }: BeyondTheCodeProps) {
    const shouldReduceMotion = useReducedMotion()

    if (activities.length === 0) return null

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
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
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
        <section className="beyond-the-code">
            <h2 className="beyond-the-code__heading">Beyond the Code</h2>

            <motion.ul
                className="beyond-the-code__list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {activities.map((activity, index) => (
                    <motion.li key={index} className="beyond-the-code__item" variants={itemVariants}>
                        <span className="beyond-the-code__type">{activity.type}</span>
                        <a
                            href={activity.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="beyond-the-code__link"
                        >
                            {activity.title}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </section >
    )
}