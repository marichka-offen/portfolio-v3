import { motion, useReducedMotion } from 'framer-motion'
import { FaCode, FaRocket, FaUsers } from 'react-icons/fa'
import { MdSpeed, MdArchitecture } from 'react-icons/md'
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
                    Let's Build Something Great Together
                </h2>

                <p className="current-status__text">
                    I'm actively seeking my next role where I can contribute to creating exceptional digital experiences. 
                    If you're looking for a developer who's passionate about clean code, user experience, and continuous learning, 
                    let's connect.
                </p>

                <div className="current-status__tags">
                    <span className="current-status__tag">
                        <FaCode className="current-status__tag-icon" />
                        React & TypeScript
                    </span>
                    <span className="current-status__tag">
                        <FaRocket className="current-status__tag-icon" />
                        Product-Focused
                    </span>
                    <span className="current-status__tag">
                        <MdSpeed className="current-status__tag-icon" />
                        Optimization
                    </span>
                    <span className="current-status__tag">
                        <MdArchitecture className="current-status__tag-icon" />
                        System Design
                    </span>
                    <span className="current-status__tag">
                        <FaUsers className="current-status__tag-icon" />
                        Team Player
                    </span>
                </div>

                <a 
                    href="mailto:your.email@example.com" 
                    className="current-status__cta"
                >
                    Get in Touch
                    <svg
                        className="current-status__cta-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </motion.div>
        </section>
    )
}