import { motion, useReducedMotion } from 'framer-motion'
import './Connect.scss'

export default function Connect() {
    const shouldReduceMotion = useReducedMotion()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
                delayChildren: shouldReduceMotion ? 0 : 0.1,
            },
        },
    }

    const itemVariants = {
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

    const hoverAnimation = shouldReduceMotion
        ? {}
        : {
            y: -4,
            transition: {
                type: 'spring' as const,
                stiffness: 400,
                damping: 25,
            },
        }

    return (
        <section className="connect">
            <h2 className="connect__heading">Let's Connect</h2>

            <p className="connect__intro">
                I'm always interested in hearing about new opportunities, interesting projects,
                or just connecting with fellow developers. Feel free to reach out!
            </p>

            <motion.ul
                className="connect__links"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                <motion.li className="connect__link-item" variants={itemVariants}>
                    <motion.a
                        href="mailto:marichka.offen@gmail.com"
                        className="connect__link"
                        whileHover={hoverAnimation}
                    >
                        <span className="connect__link-icon">✉️</span>
                        <div className="connect__link-content">
                            <span className="connect__link-label">Email</span>
                            <span className="connect__link-value">marichka.offen@gmail.com</span>
                        </div>
                    </motion.a>
                </motion.li>

                <motion.li className="connect__link-item" variants={itemVariants}>
                    <motion.a
                        href="https://github.com/marichka-offen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect__link"
                        whileHover={hoverAnimation}
                    >
                        <span className="connect__link-icon">💻</span>
                        <div className="connect__link-content">
                            <span className="connect__link-label">GitHub</span>
                            <span className="connect__link-value">@marichka-offen</span>
                        </div>
                    </motion.a>
                </motion.li>

                <motion.li className="connect__link-item" variants={itemVariants}>
                    <motion.a
                        href="https://www.linkedin.com/in/marichka-offen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect__link"
                        whileHover={hoverAnimation}
                    >
                        <span className="connect__link-icon">💼</span>
                        <div className="connect__link-content">
                            <span className="connect__link-label">LinkedIn</span>
                            <span className="connect__link-value">/in/marichka-offen</span>
                        </div>
                    </motion.a>
                </motion.li>
            </motion.ul>

            <motion.div
                className="connect__resume"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <a href="/resume.pdf" download className="connect__resume-button">
                    Download Resume
                    <span>↓</span>
                </a>
            </motion.div>
        </section>
    )
}