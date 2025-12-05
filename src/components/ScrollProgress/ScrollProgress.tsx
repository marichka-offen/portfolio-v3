import { useEffect, useState } from 'react'
import './ScrollProgress.scss'

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)

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

    const progressScale = scrollProgress / 100

    return (
        <div
            className="scroll-progress"
            style={{
                transform: `scaleX(${progressScale})`,
                transformOrigin: 'left',
            }}
            aria-hidden="true"
        />
    )
}
