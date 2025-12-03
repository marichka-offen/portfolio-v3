import { motion, useReducedMotion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './QuickContact.scss'

export default function QuickContact() {
    const shouldReduceMotion = useReducedMotion()

    // Container for stagger
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

    // Individual link animation
    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
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

    // Hover animation for each link - removed vertical movement for consistency
    const hoverAnimation = shouldReduceMotion ? {} : {}

    // Icon bounce animation
    const iconHoverAnimation = shouldReduceMotion
        ? {}
        : {
            scale: 1.1,
            transition: {
                type: 'spring' as const,
                stiffness: 400,
                damping: 15,
            },
        }

    return (
        <section className="quick-contact" aria-labelledby="quick-contact-heading">
            <h2 id="quick-contact-heading" className="quick-contact__heading">
                Let's Connect
            </h2>

            <motion.ul
                className="quick-contact__links"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                <motion.li className="quick-contact__item" variants={linkVariants}>
                    <motion.a
                        href="mailto:your.email@example.com"
                        className="quick-contact__link"
                        whileHover={hoverAnimation}
                    >
                        <motion.div
                            className="quick-contact__icon"
                            whileHover={iconHoverAnimation}
                        >
                            <HiMail />
                        </motion.div>
                        <span className="quick-contact__label">Email</span>
                    </motion.a>
                </motion.li>

                <motion.li className="quick-contact__item" variants={linkVariants}>
                    <motion.a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-contact__link"
                        whileHover={hoverAnimation}
                    >
                        <motion.div
                            className="quick-contact__icon"
                            whileHover={iconHoverAnimation}
                        >
                            <FaGithub />
                        </motion.div>
                        <span className="quick-contact__label">GitHub</span>
                    </motion.a>
                </motion.li>

                <motion.li className="quick-contact__item" variants={linkVariants}>
                    <motion.a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-contact__link"
                        whileHover={hoverAnimation}
                    >
                        <motion.div
                            className="quick-contact__icon"
                            whileHover={iconHoverAnimation}
                        >
                            <FaLinkedin />
                        </motion.div>
                        <span className="quick-contact__label">LinkedIn</span>
                    </motion.a>
                </motion.li>
            </motion.ul>
        </section>
    )
}