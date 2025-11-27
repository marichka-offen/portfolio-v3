import { motion, useReducedMotion } from 'framer-motion'
import './CurrentStatus.scss'

export default function CurrentStatus() {
    const shouldReduceMotion = useReducedMotion()

    // Container variants - includes a subtle pulse on first view
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95
        },
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

    // Pulse animation (happens once on scroll into view)
    const pulseVariants = shouldReduceMotion
        ? {}
        : {
            scale: [1, 1.02, 1],
            transition: {
                duration: 0.6,
                times: [0, 0.5, 1],
                delay: 0.3,
            },
        }

    return (
        <section className="current-status" aria-labelledby="current-status-heading">
            <motion.div
                className="current-status__container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                animate={pulseVariants}
            >
                <h2 id="current-status-heading" className="current-status__heading">
                    Currently Available
                </h2>

                <p className="current-status__text">
                    Open to <span className="current-status__highlight">full-time front-end roles</span> focused
                    on React and TypeScript development
                </p>

                <p className="current-status__text">
                    Especially interested in product-focused teams building accessible,
                    user-centered experiences
                </p>
            </motion.div>
        </section>
    )
}