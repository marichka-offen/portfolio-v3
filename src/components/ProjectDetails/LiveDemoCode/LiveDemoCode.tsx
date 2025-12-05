import { motion, useReducedMotion } from 'framer-motion'
import './LiveDemoCode.scss'

interface LiveDemoCodeProps {
    demoUrl?: string
    repoUrl?: string
    isPrivate?: boolean
}

export default function LiveDemoCode({ demoUrl, repoUrl, isPrivate }: LiveDemoCodeProps) {
    const shouldReduceMotion = useReducedMotion()

    if (!demoUrl && !repoUrl) return null

    const buttonHover = shouldReduceMotion
        ? {}
        : {
            scale: 1.05,
            transition: {
                type: 'spring' as const,
                stiffness: 400,
                damping: 25,
            },
        }

    const buttonTap = shouldReduceMotion ? {} : { scale: 0.98 }

    return (
        <section className="live-demo-code">
            <div className="live-demo-code__container">
                <h2 className="live-demo-code__heading">
                    {demoUrl && repoUrl ? 'Demo & Code' : demoUrl ? 'Live Demo' : 'View Code'}
                </h2>

                <div className="live-demo-code__links">
                    {demoUrl && (
                        <motion.a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-demo-code__link live-demo-code__link--demo"
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                        >
                            View Live Demo
                            <span>→</span>
                        </motion.a>
                    )}

                    {repoUrl && !isPrivate && (
                        <motion.a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-demo-code__link live-demo-code__link--code"
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                        >
                            View Code
                            <span>{'<>'}</span>
                        </motion.a>
                    )}
                </div>

                {isPrivate && (
                    <p className="live-demo-code__private-note">
                        Code is proprietary—available upon request for review
                    </p>
                )}
            </div>
        </section>
    )
}