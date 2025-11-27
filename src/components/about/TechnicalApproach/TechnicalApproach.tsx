import { motion, useReducedMotion } from 'framer-motion'
import './TechnicalApproach.scss'

export default function TechnicalApproach() {
    const shouldReduceMotion = useReducedMotion()

    const containerVariants = {
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
        <section className="technical-approach">
            <h2 className="technical-approach__heading">Technical Approach</h2>

            <motion.div
                className="technical-approach__content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                <p className="technical-approach__text">
                    I prioritize semantic HTML and progressive enhancement over framework-heavy
                    solutions. When a native HTML element does the job, I use it—JavaScript
                    should enhance experiences, not replace basic functionality.
                </p>

                <p className="technical-approach__text">
                    For styling, I choose CSS-in-JS for component libraries where co-location matters,
                    and utility-first CSS for application-level styling where consistency across
                    components is critical.
                </p>

                <p className="technical-approach__text">
                    Performance is non-negotiable. I optimize for Core Web Vitals from the start,
                    not as an afterthought. This means lazy loading, code splitting, and measuring
                    real user metrics—not just synthetic tests.
                </p>
            </motion.div>
        </section>
    )
}