import { motion, useReducedMotion } from 'framer-motion'
import './ProfessionalSummary.scss'

export default function ProfessionalSummary() {
    const shouldReduceMotion = useReducedMotion()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
                delayChildren: shouldReduceMotion ? 0 : 0.2,
            },
        },
    }

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
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
            className="professional-summary"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
        >
            <motion.p className="professional-summary__text" variants={paragraphVariants}>
                I'm a front-end engineer with 4 years of experience building user-facing applications
                for SaaS companies. I specialize in React, TypeScript, and creating accessible,
                performant web experiences.
            </motion.p>

            <motion.p className="professional-summary__text" variants={paragraphVariants}>
                My work focuses on translating complex design systems into production-ready code,
                optimizing application performance, and ensuring accessibility standards are met
                across all user touchpoints.
            </motion.p>

            <motion.p className="professional-summary__text" variants={paragraphVariants}>
                I believe the best interfaces are invisible—users shouldn't have to think about
                how to use them. This philosophy drives my approach to front-end development.
            </motion.p>
        </motion.section>
    )
}