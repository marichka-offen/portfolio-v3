import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Footer.scss'

export default function Footer() {
    const shouldReduceMotion = useReducedMotion()
    const currentYear = new Date().getFullYear()

    // Container stagger for footer sections
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

    // Section fade-up animation
    const sectionVariants = {
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

    // Link hover animation (subtle lift)
    const linkHoverAnimation = shouldReduceMotion
        ? {}
        : {
            y: -2,
            transition: {
                type: 'spring' as const,
                stiffness: 400,
                damping: 25,
            },
        }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className="footer">
            <motion.div
                className="footer__container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {/* Brand Section */}
                <motion.div className="footer__section footer__brand" variants={sectionVariants}>
                    <Link to="/" className="footer__logo">
                        Your Name
                    </Link>
                    <p className="footer__tagline">
                        Front-end engineer crafting accessible, performant web experiences with React and TypeScript.
                    </p>
                </motion.div>

                {/* Navigation Section */}
                <motion.div className="footer__section" variants={sectionVariants}>
                    <h3 className="footer__heading">Navigate</h3>
                    <nav aria-label="Footer navigation">
                        <ul className="footer__nav">
                            <li>
                                <Link to="/" className="footer__link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="footer__link">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="footer__link">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </motion.div>

                {/* Social/Contact Section */}
                <motion.div className="footer__section" variants={sectionVariants}>
                    <h3 className="footer__heading">Connect</h3>
                    <ul className="footer__social">
                        <li>
                            <motion.a
                                href="mailto:your.email@example.com"
                                className="footer__social-link"
                                whileHover={linkHoverAnimation}
                            >
                                <span className="footer__social-icon"><HiMail /></span>
                                Email
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-link"
                                whileHover={linkHoverAnimation}
                            >
                                <span className="footer__social-icon"><FaGithub /></span>
                                GitHub
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-link"
                                whileHover={linkHoverAnimation}
                            >
                                <span className="footer__social-icon"><FaLinkedin /></span>
                                LinkedIn
                            </motion.a>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>

            <motion.button
                onClick={scrollToTop}
                className="footer__back-to-top"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
            >
                ↑ Back to Top
            </motion.button>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <p className="footer__copyright">
                    © {currentYear} Your Name. All rights reserved.
                </p>
                <p className="footer__credit">
                    Built with React & Framer Motion
                </p>
            </div>
        </footer>
    )
}