import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import './Hero.scss'

export default function Hero() {
    const shouldReduceMotion = useReducedMotion()

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1] as any,
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1] as any,
                },
        },
    }

    return (
        <section className="hero">
            <div className="hero__grid">
                <motion.div
                    className="hero__content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero__label" variants={itemVariants}>
                        Frontend Developer
                    </motion.div>

                    <motion.h1 className="hero__name" variants={itemVariants}>
                        Marichka Offen
                    </motion.h1>

                    <motion.p className="hero__description" variants={itemVariants}>
                        I build accessible, performant web experiences with React, TypeScript, and modern design systems. Focused on creating interfaces that are both beautiful and inclusive.
                    </motion.p>

                    <motion.div className="hero__cta-wrapper" variants={itemVariants}>
                        <Link to="/projects" className="hero__cta">
                            View My Work
                            <svg
                                className="hero__cta-icon"
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
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Code snippet showcase */}
                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={
                        shouldReduceMotion
                            ? { duration: 0 }
                            : {
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1] as any,
                                delay: 0.5,
                            }
                    }
                >
                    <div className="hero__code-window">
                        <div className="hero__code-header">
                            <div className="hero__code-dots">
                                <span className="hero__code-dot hero__code-dot--close"></span>
                                <span className="hero__code-dot hero__code-dot--minimize"></span>
                                <span className="hero__code-dot hero__code-dot--maximize"></span>
                            </div>
                            <div className="hero__code-title">Portfolio.tsx</div>
                        </div>
                        <div className="hero__code-content">
                            <code className="hero__code">
                                <span className="hero__code-line">
                                    <span className="hero__code-keyword">const</span>{' '}
                                    <span className="hero__code-variable">marichka</span> = {'{'}<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">experienceYears</span>:{' '}
                                    <span className="hero__code-number">6</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">empathy</span>:{' '}
                                    <span className="hero__code-boolean">true</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">communication</span>:{' '}
                                    <span className="hero__code-string">["clear", "warm", "human"]</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">designApproach</span>:{' '}
                                    <span className="hero__code-string">'sharp sense for detail, aesthetics, and user comfort'</span><br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">strength</span>:{' '}
                                    <span className="hero__code-string">'keeps going even when the ground disappears'</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">weakness</span>:{' '}
                                    <span className="hero__code-string">'peppermint mochas'</span>,<br />
                                </span>
                                <span className="hero__code-line">{'}'}</span>
                            </code>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}