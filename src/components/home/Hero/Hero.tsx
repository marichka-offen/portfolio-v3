import { Link } from 'react-router-dom'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import './Hero.scss'
import { useRef } from 'react'

export default function Hero() {
    const shouldReduceMotion = useReducedMotion()

    // Animation variants
    const nameVariants = {
        hidden: { opacity: 0, y: 40 },
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

    const titleVariants = {
        hidden: { opacity: 0, y: 40 },
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
                    delay: 0.1,
                },
        },
    }

    const ctaVariants = {
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
                    delay: 0.2,
                },
        },
    }

    // Hover/tap animations for CTA
    const ctaHoverAnimation = shouldReduceMotion
        ? {}
        : {
            scale: 1.05,
            transition: {
                type: 'spring' as const,
                stiffness: 400,
                damping: 25,
            },
        }

    const ctaTapAnimation = shouldReduceMotion
        ? {}
        : {
            scale: 0.98,
        }

    const ctaRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { stiffness: 100, damping: 15 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ctaRef.current) return

        const rect = ctaRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const distanceX = e.clientX - centerX
        const distanceY = e.clientY - centerY
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

        const maxDistance = 100
        const maxMovement = 12

        if (distance < maxDistance) {
            const strength = 1 - distance / maxDistance
            mouseX.set(distanceX * strength * (maxMovement / maxDistance))
            mouseY.set(distanceY * strength * (maxMovement / maxDistance))
        } else {
            mouseX.set(0)
            mouseY.set(0)
        }
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <section className="hero">
            {/* Floating background shapes */}
            <div className="hero__background">
                <div className="hero__shape hero__shape--1" />
                <div className="hero__shape hero__shape--2" />
                <div className="hero__shape hero__shape--3" />
            </div>

            {/* Main content */}
            <div className="hero__content">
                <motion.h1
                    className="hero__name"
                    variants={nameVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Marichka Offen
                </motion.h1>

                <motion.p
                    className="hero__title"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Front-End Engineer specializing in React, TypeScript, and building accessible user experiences
                </motion.p>

                <motion.div
                    ref={ctaRef}
                    variants={ctaVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ x, y, display: 'inline-block' }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/projects" className="hero__cta">
                        <motion.span
                            whileHover={ctaHoverAnimation}
                            whileTap={ctaTapAnimation}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
                        >
                            View Projects
                            <span className="hero__cta-arrow">→</span>
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}