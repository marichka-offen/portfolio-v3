import { useState, useEffect } from 'react'

export function useScrollDirection() {
    const [shouldHideHeader, setShouldHideHeader] = useState(false)
    const threshold = 100

    useEffect(() => {
        let lastScrollY = window.scrollY
        let ticking = false

        const updateScrollDirection = () => {
            const scrollY = window.scrollY

            // Show header at the top of the page
            if (scrollY < threshold) {
                setShouldHideHeader(false)
            } else {
                // Scrolling down
                if (scrollY > lastScrollY && scrollY > threshold) {
                    setShouldHideHeader(true)
                }
                // Scrolling up
                else if (scrollY < lastScrollY) {
                    setShouldHideHeader(false)
                }
            }

            lastScrollY = scrollY > 0 ? scrollY : 0
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDirection)
                ticking = true
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return shouldHideHeader
}