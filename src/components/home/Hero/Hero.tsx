import { motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/shared/Button/Button'
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
                        <Button
                            href="#featured-projects"
                            variant="primary"
                            size="lg"
                            onClick={(e) => {
                                e?.preventDefault()
                                document.querySelector('#featured-projects')?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }}
                            icon={
                                <svg
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
                            }
                        >
                            View My Work
                        </Button>
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
                                    {'  '}<span className="hero__code-property">role</span>:{' '}
                                    <span className="hero__code-string">"Frontend Developer"</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">experience</span>:{' '}
                                    <span className="hero__code-number">6</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">specialties</span>:{' '}
                                    <span className="hero__code-string">["React", "TypeScript", "Accessibility"]</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">focus</span>:{' '}
                                    <span className="hero__code-string">"User experience and performance"</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">values</span>:{' '}
                                    <span className="hero__code-string">"Clean code, collaboration, continuous learning"</span>,<br />
                                </span>
                                <span className="hero__code-line">
                                    {'  '}<span className="hero__code-property">currentlyExploring</span>:{' '}
                                    <span className="hero__code-string">"Advanced animation and design systems"</span>,<br />
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