import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './ScrollProgress.scss'

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        const updateScrollProgress = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollTop = window.scrollY

            const totalScrollableHeight = documentHeight - windowHeight
            const progress = (scrollTop / totalScrollableHeight) * 100

            setScrollProgress(Math.min(progress, 100))
        }

        // Update on scroll
        window.addEventListener('scroll', updateScrollProgress, { passive: true })

        // Update on resize
        window.addEventListener('resize', updateScrollProgress, { passive: true })

        // Initial update
        updateScrollProgress()

        return () => {
            window.removeEventListener('scroll', updateScrollProgress)
            window.removeEventListener('resize', updateScrollProgress)
        }
    }, [])

    return (
        <motion.div
            className="scroll-progress"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress / 100 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.1, ease: 'linear' }}
            style={{ transformOrigin: 'left' }}
            aria-hidden="true"
        />
    )
}
