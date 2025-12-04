import { motion, useReducedMotion } from 'framer-motion'
import { FaCode, FaRocket } from 'react-icons/fa'
import { MdSpeed } from 'react-icons/md'
import './CurrentStatus.scss'

export default function CurrentStatus() {
    const shouldReduceMotion = useReducedMotion()

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: shouldReduceMotion ? 0 : 0.6,
            },
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
            >
                <motion.div 
                    className="current-status__badge"
                    animate={shouldReduceMotion ? {} : {
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse' as const,
                        ease: 'easeInOut',
                    }}
                >
                    <span className="current-status__badge-dot"></span>
                    Open to Opportunities
                </motion.div>

                <h2 id="current-status-heading" className="current-status__heading">
                    Let's Work Together
                </h2>

                <p className="current-status__text">
                    I'm looking for a team that values accessibility, performance, and thoughtful UX.
                    If you need a developer who brings technical expertise and design sensibility to every project,
                    let's connect.
                </p>

                <div className="current-status__tags">
                    <span className="current-status__tag">
                        <FaCode className="current-status__tag-icon" />
                        React & TypeScript
                    </span>
                    <span className="current-status__tag">
                        <FaRocket className="current-status__tag-icon" />
                        Accessibility-Focused
                    </span>
                    <span className="current-status__tag">
                        <MdSpeed className="current-status__tag-icon" />
                        Performance Optimization
                    </span>
                </div>
            </motion.div>
        </section>
    )
}