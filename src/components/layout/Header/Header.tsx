import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import './Header.scss'

export default function Header() {
    const shouldHideHeader = useScrollDirection()
    const shouldReduceMotion = useReducedMotion()

    // Define animation variants
    const headerVariants = {
        visible: {
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
        hidden: {
            y: '-130%',
            transition: shouldReduceMotion
                ? { duration: 0 }
                : {
                    type: 'spring' as const,
                    stiffness: 120,
                    damping: 14,
                    mass: 1,
                },
        },
    }

    return (
        <motion.header
            className="header glass-container glass-container--rounded"
            variants={headerVariants}
            animate={shouldHideHeader ? 'hidden' : 'visible'}
            initial="visible"
        >
            <nav aria-label="Main navigation" className="header__container">
                <ul className="header__nav">
                    <li>
                        <Link to="/" className="header__nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="header__nav-link">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="header__nav-link">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </motion.header>
    )
}